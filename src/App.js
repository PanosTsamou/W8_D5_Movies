import {WBK} from  'wikibase-sdk';
import './App.css';
import axios from 'axios';
import $ from 'jquery';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';
import Display from './components/Display';
import Basket from './components/Basket';
import Results from './components/Results';
import NavigationBar  from './components/NavigationBar.js' ; 
import Error from './components/Error';
import { useState } from 'react';
// const axios = require('axios')
// const WBK = require('wikibase-sdk')


function App() {

  const [movies,setMovies] = useState([
    {
      id: 111,
      title: 'Hulk',
      price: 12
    },
    {
      id: 115,
      title: 'Hulk2',
      price: 15
    },
    {
      id: 112,
      title: 'Ironman',
      price: 12
    },
    {
      id: 113,
      title: 'Captain America',
      price: 12
    },
    {
      id: 114,
      title: 'Blue Roses',
      price: 10
    }
  ])

  const [results, setResults] = useState([])
  const [basketItems, setBasketItems] = useState([])


  const searchForResults = (query) => {

    if (query === "ALL"){
      console.log(query)
      setResults(movies)
    }else{

      const queryResults = movies.filter((movie) =>{
        return movie.title.toLowerCase() === query.toLowerCase()
      })
      if(queryResults){
  
        setResults(queryResults)
      }
    }

  }

  const addItToYourBasket = (mov) =>{
    if(!basketItems.includes(mov)){

      setBasketItems([...basketItems, mov])
    }
  }

  const removeItFromYourBasket = (mov) =>{
    console.log(mov)
    console.log(basketItems)
    const newBasketList  = basketItems.filter((movie) => !(movie.id === mov))
    console.log(newBasketList)
    setBasketItems(newBasketList)
  }
 
  // const wbk = WBK({
  //   instance: 'https://wikidata.org',
  //   sparqlEndpoint: 'https://query.wikidata.org/sparql' // Required to use `sparqlQuery` and `getReverseClaims` functions, optional otherwise
  // })

  // const url = wbk.searchEntities({ search: 'Hulk' })
  // console.log(url)

  // const url = wbk.searchEntities({
  //   search: 'Ingmar Bergman',
  //   format: 'json', // Defaut: json
  //   language: 'en', // Default: en
  //   limit: 30, // Default: 20
  // })
  // axios.get(url).then((response) =>{
  //   console.log(response.data)
  // })
  // function makeSPARQLQuery( endpointUrl, sparqlQuery, doneCallback ) {
  //   var settings = {
  //     headers: { Accept: 'application/sparql-results+json' },
  //     data: { query: sparqlQuery }
  //   };
  //   return $.ajax( endpointUrl, settings ).then( doneCallback );
  // }
  
  // var endpointUrl = 'https://query.wikidata.org/sparql',
  //   sparqlQuery = "#Movies released in 2017\n" +
  //         "SELECT  ?film ?filmLabel \n" +
  //         "WHERE {\n" +
  //         "  ?film wdt:P31 wd:Q11424 .\n" +
  //         "  ?film wdt:P364 wd:Q1860 .\n" +
  //         "  ?film wdt:P495 wd:Q30\n" +
  //         "  \n" +
  //         "  SERVICE wikibase:label { bd:serviceParam wikibase:language \"[AUTO_LANGUAGE],en\". }\n" +
  //         "}\n" +
  //         "Limit 10";
  
  // makeSPARQLQuery( endpointUrl, sparqlQuery, function( data ) {
  //     $( 'body' ).append( $( '<pre>' ).text( JSON.stringify( data ) ) );
  //     console.log( data );
  //   }
  // ); 

  return (
    <Router>

      <NavigationBar items= { basketItems.length }/>
      <Routes>
        <Route path='/' element = {<Home/>}/> 
        <Route path='/search'  element= {<Search searchForResults = {searchForResults}/>}/> 
        <Route path='/results/q=/:query' element = {<Results searchForResults = {searchForResults} results = {results} addItToYourBasket= {addItToYourBasket}/>}/>
        <Route path='/display/id=/:id' element = {<Display movies = {movies}/>}/>
        <Route path='/basket' element = {<Basket basketItems= { basketItems } removeItFromYourBasket= {removeItFromYourBasket}/>}/>
        <Route path='/*' element = {<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
