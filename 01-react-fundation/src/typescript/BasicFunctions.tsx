

export const BasicFunctions = () => {

    const AddTwoNumber = ( a:number, b:number ): number => {
        return a + b;
    }

  return (
    <>
        <h3>Function</h3>
        <span>El resultado de sumar: { AddTwoNumber(2,8)  }</span>
    </> 
  )
}
