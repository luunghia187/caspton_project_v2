import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FetchA from '../../Components/FetchData/UsingAxios/axios';
import FetchF from '../../Components/FetchData/UsingFetch/fetch';
import './Aboute.css'

function About() {
  const [fetch, setFetch] = useState('FetchA');

  const handleChange = (event) => {
    setFetch(event.target.value);
  };

  let fetchComponent;

  if (fetch === 'FetchA') {
    fetchComponent = <FetchA />;
  } else {
    fetchComponent = <FetchF />;
  }

  return (
    <div>
      <h1>This is the about page</h1>
      <div className="selected-box">
        <div>
          <label>
            Using Axios:
            <input
              type="checkbox"
              value="FetchA"
              checked={fetch === 'FetchA'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Using Fetch:
            <input
              type="checkbox"
              value="FetchF"
              checked={fetch === 'FetchF'}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      {fetchComponent}
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default About;