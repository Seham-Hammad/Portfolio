import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

import Pages from './pages'


function App() {
  const [user, setUser] = useState(null);
  const url = 'https://gitconnected.com/v1/portfolio/seham-hammad';

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(user => {
        setUser(user);
      });
  }, []);
  console.log(user)

  if (!user) {
    return <div />;
  }
  return (


    <div>
      <Pages user={user} />
    </div>



  );
}

export default App;
