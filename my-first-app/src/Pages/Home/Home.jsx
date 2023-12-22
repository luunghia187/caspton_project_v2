import { Link } from "react-router-dom";
import './Home.css';
import { useState } from "react";
import Count from "../../Components/Count/count";

function Home() {

  const [count, setCount] = useState(0)

  const handleClick = () => setCount((preCount) => (preCount + 1));

  const [peopleList, setPeoples] = useState([{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }]);

  return (
    <div>
      <h1>This is the home page</h1>
      <div>
        <Count count={count} handleClick={handleClick} />
        <div>
          {/* <button onClick={handleClick}>Increment Count!</button> */}
        </div>
      </div>
      <div className="output-data-list">
        {peopleList.map((people) => (
          <ul className="list-people" key={people.id}>
            <h2> {people.name}</h2>
            <p>He's profession is {people.profession}</p>
          </ul>
        ))}
      </div>
      <h1>List of people with id is evan number</h1>
      <ul>
        <li><Link to='about'>Click to view our page</Link><br /></li>
        <li><Link to='contact'>Click to contact</Link></li>
      </ul>
    </div>
  );
}

export default Home;