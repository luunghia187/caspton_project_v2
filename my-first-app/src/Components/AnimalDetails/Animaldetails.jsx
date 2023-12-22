import './Animaldetails.css';

function convertFood(food) {
    switch (food) {
        case 'insects':
            return '🦗';
        case 'meat':
            return '🍗';
        case 'plants':
        default:
            return '🌳';
    }
}

function AnimalDetails({ diet, scientificName }) {
    return (
        <div className="details">
            <h4>Details:</h4>
            <div>
                Scientific Name: {scientificName}.
            </div>
            <div>
                Diet: {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

export default AnimalDetails