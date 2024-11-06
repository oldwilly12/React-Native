
export const BasicTypes = () => {

    const name: string = 'Willy';
    const age: number = 24;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Angular'];

  return (
    <>
        <h3>Tipos basicos</h3>

        {name}{ age }{isActive ? 'true' : 'false '}
        <br />

        {powers.join(', ')}
    </>
  )
}
