// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom'
// import React, {useState} from 'react';
import '../App.css';
// import MainRouter from '../MainRouter';
// import Assign from '../assign';
// import Button from './components/Button';
// import Contacts from './components/Contacts';
// import Dashboard from './components/Dashboard';
// import Faq from './components/Faq';
// import LandingPage from './components/LandingPage';
// import NavBar from './components/NavBar';
// import Home from './home';
// import Styles from './style.module.css'
// import questions from "../questions";
// const allquestions = questions

const App=()=> {
    // const [headings, setheadings] = useState("")
    // const [buttonTitle, setbuttonTitle] = useState("")
    // const [eachColor, seteachColor] = useState("")
    
    // <questions/>
//   // const head = {
//   //   backgroundColor: 'blue'
//   // }
//   const user = {
//     Name: "Iyanuoluwa",
//     School: "Sqi",
//     Dept: "Software engineering"
//   }
//   const numbers =[0,1,2,3,4,5,6,7,8];
//   const users = [
//     {name: "felix",school: "sqi"},
//     {name: "Iyanu",school: "sqi"},
//     {name: "Tobi",school: "sqi"}
//   ]

//   const isVerified = true
//   return (
//     <div className="App">
//       {/* <Home /> */}
//       {/* <h1 className={Styles.heading} style={head}>My name is Iyanuoluwa</h1> */}
//       <h1 className={Styles.heading} style={{backgroundColor: 'red'}}>My name is Iyanuoluwa</h1>
//       <h1>My name is {user.Name}</h1>
//       <h1>My school is {user.School}</h1>
//       <h1>Department of {user.Dept}</h1>
//       {
//   numbers.filter((each, i)=> i <=8)
//   .map ((each, i) => 
//     (<span key={i} className={`p-2 shadow m-2 ${i===2 ?'bg-danger' : 'bg-primary'}`}>{each}</span>))
//   // map
//     // numbers.map(each =>(<span>{each}</span>))
//   }
      
//       {/* { users.map ((each, i) => 
//           (<span key={i} className='p-2 shadow m-2'>{each.name},{each.school}
//           </span>))
      
//       } */}
//       {/* {isVerified === true && "It is true"} */}
//       {/* {isVerified && "It is true"} */}
//       {/* {!isVerified && "It is false"} */}
//       {isVerified ? "verified" : "Not verified"}
//     </div>
//   );
// }

// {
//   // numbers.filter((each, i)=> i <=8)
//   // .map ((each, i) => 
//   //   (<span key={i} className='p-2 shadow m-2'>{each}
//     {/* <div>Hello</div> */}
//     // </span>))
//   // map
//     // numbers.map(each =>(<span>{each}</span>))
        // const nextQuestion=()=>{
        //     if(i<allquestions.length - 1){

        //     }
            
        // }
return(
    <>
        {/* <MainRouter/> */}
        <h1>My Name is Iyanuoluwa</h1>

   {/* <NavBar/> */}
   {/* <div className={eachColor}>Here is each color</div> */}
   {/* <Routes>
            
        <Route path='/' element={<LandingPage setheadings={setheadings} headings={headings} buttonTitle={buttonTitle} setbuttonTitle={setbuttonTitle} seteachColor={seteachColor} eachColor={eachColor} />}/>
        <Route path='/dashboard' element={<Dashboard setheadings={setheadings} headings={headings} buttonTitle={buttonTitle} setbuttonTitle={setbuttonTitle} seteachColor={seteachColor} eachColor={eachColor} />}/>
        <Route path='/contacts' element={<Contacts setbuttonTitle={setbuttonTitle} buttonTitle={buttonTitle} seteachColor={seteachColor} eachColor={eachColor} />}/>
        <Route path='/faq' element={<Faq setbuttonTitle={setbuttonTitle} buttonTitle={buttonTitle} seteachColor={seteachColor} eachColor={eachColor} />}/>
   </Routes> */}
    {/* <center className="container">    
                    <h1 className="fw-bold mt-5 que">QUESTIONS</h1>
          {[allquestions[0]].map ((each, i) => 
              (<span key={i} className={` m-2 ${i===2 ?'bg-danger-subtle' : 'bg-primary'}`}>
                <div>
                    <h4 className="bg rounded-pill p-4 w-50">{i + 1}.{each.question}</h4>
                </div>
                <div className="rounded-pill w-25 p-2 div bg-light">
                    <h4>A. {each.A}</h4>
                </div>
                <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                    <h4>B. {each.B}</h4>
                </div>
                <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                    <h4>C. {each.C}</h4>
                </div>
                <div className="rounded-pill w-25 p-2 mt-3 div bg-light">
                    <h4>D. {each.D}</h4>
                </div>
                <button onClick={nextQuestion}>Next</button>
              </span>))
          }
    </center> */}
    
</>
)
}




export default App;