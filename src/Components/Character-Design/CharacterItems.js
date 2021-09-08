import React,  { useState, useEffect } from 'react';
import axios from 'axios';


const CharacterItems = ({item}) => {
    const [quote, setQuote] = useState();
    

    const fetchItems = async () => {
      const result = await axios(
      `https://www.breakingbadapi.com/api/quote?author=${item.name}`
    )

    setQuote(result.data);
    }

    useEffect(() => {
        
    fetchItems(); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect (() => {
    console.log(quote)
  }, [quote] 
  )

  

    return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <img src={item.img} alt='' />
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Date of Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            </ul>
        </div>
        <div className='card-back'>
       
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Date of Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Portrays Actor:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Seasons:</strong> {item.appearance}
            </li>
            <li>
              <strong>Quotes:</strong> {quote && quote.map((val) => {
                return (
                  <p>{val.quote}</p>
                );
              } )}
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
  
    

   
}

export default CharacterItems;
