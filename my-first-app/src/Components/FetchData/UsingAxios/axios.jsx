import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Axios1() {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(typeof (res));
        console.log(res);
        setItems(res.data);
        setDataIsLoaded(true);
      }).catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }, []);

  if (!dataIsLoaded) {
    return (
      <div>
        <h1>Please wait. Data is loading</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h3>Fetch data from an API using Axios in React</h3>
      <div className="container">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <ol>
              <div>
                <strong>User_Name: </strong>
                {item.username},
              </div>
              <div>Full_Name: {item.name},</div>
              <div>User_Email: {item.email}</div>
              <br />
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Axios1;