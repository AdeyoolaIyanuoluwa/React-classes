import React from 'react'
// import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { correctfunc } from '../slices/correctSlice';
import { wrongfunc } from '../slices/wrongSlice';
import examination from './examination';
// const allquestions = questions

const  Assign =(ex)=> {
    // const {id} = useParams()
    const [checked, setChecked] = useState("")
    const [clickedobj, setClickedobj] = useState({})
    const [newQuestion, setnewQuestion] = useState(0)
    const [key, setkey] = useState("")
    const [value, setvalue] = useState("")
    
    const dispatch = useDispatch()
    // const correctstate = useSelector(state=>state.correct)
    // const state2 = useSelector(state=>state.wrong)
    // console.log(correctstate);
    // console.log(state2);
    
    
    const nextQuestion=()=>{
        // console.log(examination.splice(0, 100));
        setnewQuestion(newQuestion + 1)
        if(key == value.answer){
            dispatch(correctfunc(1))
            console.log("correct");
        }
        else{
            dispatch(wrongfunc(1))
            console.log("wrong");
        }
    }
    const prevQuestion=()=>{
        setnewQuestion(newQuestion - 1)
    }

    const handleChange = (e,index,key,value)=>{
        setkey(key)
        setvalue(value)
        // let keyOfObj = Object.keys(value);
        const val = e.target.value
        setChecked(e.target.value);
        setClickedobj({
            value:val,
            key:key,
            index:index
        })

        
    }

    return(
        <>
        <center className="container">
            <h1 className="fw-bold mt-5 que">QUESTIONS</h1>
                 {examination.map ((each, i) => (
                     <>
                 <div key={i} className="m-2">
                    {i===newQuestion?
                    <>
                    {`${i+1}/${examination.length}`}    
                    <div >
                        <div className='text'>
                            <div>
                                <h4 className="bg rounded-pill p-4 w-50">{i + 1}.{each.question}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 div bg-light">
                                <h4><input 
                                name='radio'  
                                checked={checked == each.A} 
                                type="radio"
                                key="A"
                                value={each.A}
                                onChange={(e)=>handleChange(e,i,"A",each)} 
                                />A. {each.A}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input 
                                name='radio'  
                                checked={checked == each.B} 
                                onChange={(e)=>handleChange(e,i,"B",each)} 
                                type="radio"
                                key="B"
                                value={each.B}
                                />B. {each.B}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input 
                                name='radio'  
                                checked={checked == each.C}
                                 onChange={(e)=>handleChange(e,i,"C",each)}
                                  type="radio"
                                  key="C"
                                  value={each.C}
                                  />C. {each.C}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input 
                                name='radio' 
                                checked={checked == each.D} 
                                onChange={(e)=>handleChange(e,i,"D",each)} 
                                type="radio"
                                key="D"
                                value={each.D}
                                />D. {each.D}</h4>
                            </div>
                        </div>
                        {newQuestion < 1?
                            <span></span>:
                            <button className='mt-4 btn shadow fw-bold' onClick={prevQuestion}>
                                <Link to={`/que/${i}`}>Previous</Link>
                            </button>
                        }
                            {newQuestion == examination.length - 1?
                            <button className='mt-4 btn shadow fw-bold' onClick={nextQuestion}>
                                <Link to={`/`}>Finish Test</Link>
                            </button>:
                            <button className='mt-4 btn shadow fw-bold' onClick={nextQuestion}>
                                <Link to={`/que/${i + 2}`}>Next</Link>
                            </button>
                              }
                       
                    </div>
                    </>:
                        <span></span>
                }
        </div>
        </>
        ))}
    </center>
    </>
    
    
    
    
    )}

export default Assign