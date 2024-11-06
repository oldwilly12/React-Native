interface Person {
    firstName: string;
    lastName: string;
    age: number;

    address: Address
}

interface Address {
    country:string;
    houseNo: number;
}

export const ObjectsLiterals = () => {

    const person: Person = {
        age: 24,
        firstName: "Willy",
        lastName: "Rivera",
        address: {
            country: "Mexico",
            houseNo: 179
        }
    }

  return (
    <>
    <h3>Objetos Literales</h3>
        <pre>
            {JSON.stringify(person, null, 2)}
        </pre>
    </>
  )
}
