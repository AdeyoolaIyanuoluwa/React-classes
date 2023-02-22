import React from 'react'
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import examination from './examination';
// const allquestions = questions

const  Assign =(ex)=> {
    // const {id} = useParams()
    const [newQuestion, setnewQuestion] = useState(0)

    const nextQuestion=()=>{
        setnewQuestion(newQuestion + 1)
    }
    const prevQuestion=()=>{
        setnewQuestion(newQuestion - 1)
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
                    <div >
                        <div className='text'>
                            <div>
                                <h4 className="bg rounded-pill p-4 w-50">{i + 1}.{each.question}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 div bg-light">
                                <h4><input type="radio"/>A. {each.A}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input type="radio"/>B. {each.B}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input type="radio"/>C. {each.C}</h4>
                            </div>
                            <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                                <h4> <input type="radio"/>D. {each.D}</h4>
                            </div>
                        </div>
                            <button className='mt-4 btn shadow fw-bold' onClick={prevQuestion}>
                                <Link to={`/que/${i}`}>Previous</Link>
                                </button>
                            <button className='mt-4 btn shadow fw-bold' onClick={nextQuestion}>
                                <Link to={`/que/${i + 2}`}>Next</Link>
                            </button>
                       
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