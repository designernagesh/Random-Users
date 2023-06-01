import { useEffect, useState } from 'react';
import './App.css';
let URL = "https://randomuser.me/api/?results=10";

function App() {
  const [ users, setUsers ] = useState([]);

  // Using only fetch function;
  // const fetchData = () => {
  //   fetch(URL) 
  //     .then( response => response.json())
  //     .then( data => setUsers(data.results))
  //     .catch(error => console.log(error))
  // }

  // Using Async Await Method;
  const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data.results);
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <h1>Random Users</h1>
      <ul>
        {
          users.map( user => {
            return (
              <li key={user.name.first}>
                <img src={user.picture.thumbnail} alt={user.name.first} />
                <p>
                  { user.email } 
                </p>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;
