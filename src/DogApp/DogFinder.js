import {Redirect, useParams } from 'react-router-dom';

const DogFinder = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase())
    if (dog) {
        return (
            <div>
                <h3>This is {dog.name}</h3>
                <div>
                    <div>age: {dog.age}</div>
                    <div>Facts:</div>
                    {dog.facts.map(fact => <div key={fact}>{fact}</div>)}
                </div>
                <img src={dog.src} alt={dog.name} />

            </div>
        )
    } else {
        return <Redirect to="/dogs" />
    }
}

export default DogFinder