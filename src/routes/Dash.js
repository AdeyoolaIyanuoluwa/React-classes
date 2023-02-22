import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { increase } from '../slices/counterSlice'
import { increaseByAmount } from '../slices/counterSlice'

const Dash = () => {
  const state = useSelector((state)=> state.counter)
  // console.log(state)
  const dispatch = useDispatch()
  const click = ()=>{
    // dispatch(increase())
    // dispatch(increaseByAmount({firstname: iy}))
    dispatch(increaseByAmount(100))
  }
  return (
    <div>Dash {state.count} <button onClick={click}>inc</button></div>
  )
}

export default Dash