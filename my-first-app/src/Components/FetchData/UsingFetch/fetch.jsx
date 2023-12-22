import React, { useState, useEffect } from "react";

function Fetch() {
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        const rs = res.json();
        console.log(rs);
        return rs;
      })
      .then((json) => {
        console.log(json);
        setItems(json);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) {
    return (
      <div>
        <h1>Please wait. Data is loading</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h3>Fetch data from an api using fetch in react</h3>
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

export default Fetch;