import { useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(10)

    const increaseBy = (value: number) => {
        setCount(count + value);
    }

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
