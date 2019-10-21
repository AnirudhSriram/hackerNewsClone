import React  from 'react';
import axios from 'axios';
import './topics.css';
import Topic from './topic';
class Topics extends React.Component {
    constructor(props){
            super(props);
            this.state = {
                topics : []
            }
    }

    componentDidMount(){
        let ids = []
        axios
            .get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(result => {
                ids = result.data;
                ids.splice(10,ids.length-1);
            })
            .then(()=>{
                ids.forEach((item)=> {
                    axios.get(`https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`)
                    .then(result => {
                        const temp = this.state.topics;
                        temp.push(result.data);
                        this.setState({
                            topics:temp
                        })
                    })
                })
            })
            .catch(err => {
                this.setState({
                    err : err})
            }).finally(()=>{
                
            });
    }
    
    // useEffect(()=> {
    //     
            
    // },[])

    render(){
        var render = []
        this.state.topics.forEach(item => {
            render.push(<li key={item.id}><Topic  details={item} /></li>)
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