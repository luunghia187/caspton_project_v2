import animals from '../../Data/animalData';
import AnimalCard from '../../Components/AnimalCard/animalcard';
import "./Wrapper.css"

function Wrapper() {
  return (
    <div className="wrapper">
      {animals.map(animal =>
        <AnimalCard
          diet={animal.diet}
          key={animal.name}
          name={animal.name}
          size={animal.size}
          scientificName={animal.scientificName}
        />
      )}
    </div>
  );
}

export default Wrapper;