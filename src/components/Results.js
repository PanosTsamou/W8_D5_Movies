import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import ResultItems from "./ResultItems";

const Results = ({searchForResults, results, addItToYourBasket }) => {

    const [query,setQuery] = useState("");
    const urlQuery = useParams();
   
    useEffect (() => {

        setQuery(urlQuery.query);
    },[])
    let navigate = useNavigate();


    const handleQueryChange = (event) => {
        setQuery(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (query) {
            searchForResults(query)
            navigate(`/results/q=/${query}`)
            console.log("ok")
        }
    };


    const listComponents = results.map((movie, index) => {

        return (
            <ResultItems key= {movie.id} movie= { movie } addItToYourBasket= {addItToYourBasket} />
        );
    });

    return (
        <div>
            <div className="search">
                <form onSubmit={handleSubmit} className= "search-form">
                    <div>
                        <label htmlFor="searching-for-text">
                            Enter a subject:
                        </label>
                        <input type="text" value={query} id="searching-for-text" onChange={handleQueryChange} required/>
                    </div>

                    <input type="submit" value="Search" />
                </form>
            </div>
            <div>
                <ul>
                    {listComponents}
                </ul>
            </div>
            
        </div>
    );

};

export default Results