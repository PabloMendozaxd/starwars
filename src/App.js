import React from 'react';
import './App.css';
import { getPeople } from "./api/people";
import { useState,useEffect } from 'react';

function App() {

  const [people, setPeople] = useState([]);
  const [error, setError] = useState({hasError:false})

  useEffect(() => {
    getPeople().then(data=>setPeople(data.results)).catch(handleError);
  }, [])
  
  const handleError=err=>{
    setError({hasError:true,message:err.message})
  }

  return (
   <>
     <ul>
       {error.hasError &&<>{error.message}</>}
       {people.map(character =>(
         <li key={character.name}>{character.name}</li>
       ))}
     </ul>
   </>
  );
}

export default App;
