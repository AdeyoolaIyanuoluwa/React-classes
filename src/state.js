import React, {useState} from 'react'

function State() {
    const [currentState, setCurrentState] = useState("");
    const [count, setCount] = useState(0);
    
    const logSomething = (something) =>{
        console.log(something)
        console.log(currentState)
    }
    const inputChanging = (e)=>{
            // console.log(e)
            setCurrentState(e.target.value)
            // console.log(e.target.value)
    }
    const increase = ()=>{
        setCount(count+1)
    }
    const decrease = ()=>{
        count > 0 && setCount(count -1)
    }
  return (
    <div className='text-center'>
        <input className='rounded-pill p-2'/>
        {/* <input className='rounded-pill p-2' onChange={(e)=> inputChanging(e.target.value)} value={currentState} name='username'/> */}
        <input className='rounded-pill p-2' onChange={inputChanging} value={currentState} name='username'/>
        <button onClick={()=> logSomething('kljkjdfj')}>I'm a button</button>

        <h1>{count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        {/* <button onClick={ inputChanging(currentState)}>I'm a button</button> */}
    </div>
  )
}

export default State