interface Person {
    age: number;
    firstName: string;
    lastName: string;
    address: Address;
}

interface Address {
    country: string;
    houseNo: string;
    street?: string;
}

export const ObjectLiterals = () => {



    const person: Person = {
        age: 38,
        firstName: 'Willy',
        lastName: 'Rivera',
        address: {
            country: 'Mexico',
            houseNo: '175',
        }
    }

    return (
        <>    <h3>Objeto literal</h3>

            <pre>
                {JSON.stringify(person, null, 2)}
            </pre>
        </>

    )
}
