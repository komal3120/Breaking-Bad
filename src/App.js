import React, { useState, useEffect } from 'react';
import Header from "./Components/UI-Design/Header";
import axios from 'axios';
import CharacterLayout from './Components/Character-Design/CharacterLayout';
import Search from './Components/UI-Design/Search-Bar';
import ReactPaginate from 'react-paginate';

function App () {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 8;
  const pageVisited = pageNumber*userPerPage;

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  }, [query])
  const c=items.slice(pageVisited, pageVisited + userPerPage);  

  const pageCount = Math.ceil(items.length / userPerPage);
    const changePage = ({ selected }) => 
    {
        setPageNumber(selected);
    }


  return (
    <div className="App">
      
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ReactPaginate 
        previousLabel = {"Prevoius"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      <CharacterLayout isLoading={isLoading} items={c} />

      

    </div>
  
);


}
export default App;
