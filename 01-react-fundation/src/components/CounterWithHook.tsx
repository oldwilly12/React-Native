import { useCounter } from "../hooks/useCounter"


export const CounterWithHook = () => {

  //Desestructuracion 
  const {count, increaseBy} = useCounter({
    initialValue: 5,
 });

  return (
    <>
        <h3> Counter: <small>{ count }</small></h3>
    
        <div>
            <button onClick={ () => increaseBy (1) }>+1</button>

            &nbsp; //caracter invisible para hacer una separacion entre botones
            <button onClick={ () => increaseBy (-1) }>-1</button>


        </div>

    
    </>
  )
}
