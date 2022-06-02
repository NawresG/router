import { React ,useState } from 'react';

import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import { movieList } from './data';

import AddMovie  from './Component/AddMovie/AddMovie';
import Filter from './Component/Filter/Filter';
import Home from './Component/MovieList/Home';
import MovieDetail from './Component/MovieList/MovieDetail';
import  MovieList from './Component/MovieList/MovieList';
function App() {
  const [moviesM,setMoviesM] = useState(movieList)

const getNewMovie =(newM) =>{setMoviesM([...moviesM,{...newM,id:moviesM.length}])}
const [filterByName,setFilterByName]=useState("")
const [filterByRate ,setFilterByRate] = useState(0)

return (
    <div  className="App" >
      <Routes>
        <Route path="/" element ={<Home /> }  />
        <Route path="/movieList" element={<div className='nav' style={{background:"white"}}><Link to="/addMovie"><button>add movie</button> </Link><MovieList  movieList={moviesM.filter((el)=>el.title.toLowerCase().includes(filterByName.trim().toLowerCase())&&el.rating>=filterByRate)}/> 
        <Filter  setFilterByName={setFilterByName}  setFilterByRate={setFilterByRate}/></div> }/>
      
        <Route path="/addMovie" element={ <AddMovie getNewMovie={getNewMovie}/>}/>
        <Route path="/movieDetail/:id" element={<MovieDetail  movieList={moviesM}/>}/>
      </Routes>
     </div>
  );
}

export default App;
