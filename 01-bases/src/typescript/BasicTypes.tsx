
export const BasicTypes = () => {


    const name: string = 'willy';
    const age: number = 38;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Express'];

    return (
        <>
            <h3>Tipos basicos</h3>

            {name} - {age} - {isActive ? 'Activo' : 'No activo'}

            <p>{powers.join(', ')}</p>
        </>
    )
}
