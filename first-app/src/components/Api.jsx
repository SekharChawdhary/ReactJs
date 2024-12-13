import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((response) => setData(response.data))
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}> 
          <li>{item.title}</li>
         
        </div>
      ))}
    </div>
  );
};

export default Api;
