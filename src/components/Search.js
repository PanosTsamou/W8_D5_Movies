import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const Search = ({searchForResults}) =>{
    const [query, setQuery] = useState("")
    let navigate = useNavigate()

    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (query) {
            searchForResults(query)
            navigate(`/results/q=/${query}`)
        }
    };

    return(
    <div className="search">
        <form onSubmit={handleSubmit} className= "search-form">
  
            <div>
                <label htmlFor="searching-for-text">
                    Film:
                </label>
                <input type="text" value={query} id="searching-for-text" onChange={handleQueryChange} required/>
            </div>

            <input type="submit" value="Search" />
        </form>
        

    </div>
    );
};

export default Search