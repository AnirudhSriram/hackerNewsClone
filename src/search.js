import React  from 'react';
import MyContext from './context';
// const Search = () => {
//     const [query,search] = useState('');
//     const filter = (event)=> {
//         search(event.target.value)
//     }
//     useEffect(()=> {
//         console.log(query);
//     })
    
//     return   <input className="searchBar" value={query} placeholder="search" onChange={(event)=>filter(event)}/>
// }

class Search extends React.Component{
    render(){
        
        return (
            <div>
                <MyContext.Consumer>
                    {(context)=> (
                        <React.Fragment>
                            <input className="searchBar" value={context.state.searchQuery} placeholder="search" onChange={(event) => context.setSearchQuery(event.target.value)}/>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Search;