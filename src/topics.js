import React from 'react';
import axios from 'axios';
import './topics.css';
import Topic from './topic';
import MyContext from './context';
class Topics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            random: true
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!Object.is(this.context.state.topics, prevState.topics)) {
            this.setState({
                topics: this.context.state.topics
            })
        }

    }
    componentWillMount() {

        Topics.contextType = MyContext;
        let ids = []

        axios
            .get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(result => {
                ids = result.data;
                ids.splice(10, ids.length - 1);
            })
            .then(() => {
                ids.forEach((item) => {
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                        .then(result => {
                            let temp = this.context.state.topics;
                            temp.push(result.data)
                            this.setState({
                                topics: temp
                            })

                            this.context.setTopics(temp)

                            //  this.context.setTopics(temp)
                            // this.context.setTopics(temp)
                        })
                })
            })
            .catch(err => {
                this.setState({
                    err: err
                })
            }).finally(() => {
                this.setState({
                    random: !this.state.random
                })
            });
    }





    render() {

        var render = []
        this.state.topics.forEach(item => {
            render.push(<li key={item.id}><Topic details={item} /></li>)
        });
        return (<div>
            <h1 className="title">Topics</h1>
            <ul className="ul">
                {render}
            </ul>
        </div>)
    }

}

export default Topics;