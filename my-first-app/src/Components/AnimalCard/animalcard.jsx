import AnimalDetails from "../AnimalDetails/Animaldetails"
import Card from "../Card/Card";

function AnimalCard({ name, size, ...props }) {
    return (
        <Card title='Animal'
            details={
                <em>Mammal</em>
            }
        >
            <h3>{name}</h3>
            <div>{size}kg</div>
            <AnimalDetails
                {...props}
            />
        </Card>
    )
}

export default AnimalCard
