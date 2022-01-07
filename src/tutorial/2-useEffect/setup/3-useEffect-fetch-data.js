import React, { useState, useEffect } from 'react';
import UseStateCounter from '../../1-useState/setup/5-useState-counter';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {


const[users,setUssers]=useState([]);

const getUsers=async()=>{
  const response=await fetch(url);
  const users=await response.json();
  setUssers(users);
}

getUsers(()=>{
  getUsers();
})

  return( 
    <>
   <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
  </>
  )
};

export default UseEffectFetchData;
