import React, { useRef, useEffect,useState } from 'react'
import { socket } from '../baseUrl'

const ForSocket = () => {
  const [chats, setChats] = useState([])
  
  const _id ="getfromdatabase"
    useEffect(() => {
      socket.emit("join-socket",{_id})
            socket.emit("user-active", {firstname:"Iyanu",lastname:"Adeyoola"})
            socket.on("message-sent", (chat)=>{
              setChats((chats)=> [...chats, chat])
      })
      socket.on("msg-sent-to-group", (chat)=>{
        setChats((chats)=> [...chats, chat])
      })
    }, [])
    const message = useRef()
    const forReact = useRef()
    const forVue = useRef()
    const forAngular = useRef()
    const sendMessage = ()=>{
      const chat={
              id: Math.floor(Math.random()*100000),
            text: message.current.value,
            time: new Date().toLocaleTimeString()
      }
        message.current.value = "";
        setChats([...chats,chat])
        socket.emit("send-message", chat)
    }

    const joinGroup = (group)=>{
      socket.emit("join-group", group)
    }
    const msgToGroup = (group,message,e)=>{
      e.preventDefault()
      const chat={
        id: Math.floor(Math.random()*100000),
      text: message,
      time: new Date().toLocaleTimeString()
}
      setChats((chats)=> [...chats, chat])
      socket.emit("send-msg-to-group",{group,chat})
      console.log(group,message)         
    }

  return (
    <div className='container center'>
      <div className='overflow-auto '>
            {chats.map(({text,time})=>
              <div className='border p-2 rounded'>{text}</div>
        )}
      </div>
        <input ref={message} className='form-control shadow rounded w-50' placeholder='Message here'/>
        <button className='btn btn-success rounded mt-4 w-50 text-center' onClick={sendMessage}>Send</button>

        <div>

          <div>
              <form onSubmit={(e)=> msgToGroup("react", forReact.current.value,e)}>
                <input ref={forReact} className='form-control shadow rounded w-25 mt-4'/>
              </form>

                <button onClick={()=>joinGroup("react")} className='btn btn-success rounded mt-2 w-25 text-center'>+ReactJs</button>
          </div>

          <div>
                <form onSubmit={(e)=>msgToGroup("vue", forVue.current.value,e)}>
                  <input ref={forVue} className='form-control shadow rounded w-25 mt-4'/>
                </form>

                <button onClick={()=>joinGroup("vue")} className='btn btn-success rounded mt-2 w-25 text-center'>+Vue</button>
          </div>

          <div>
                <form onSubmit={(e)=>msgToGroup("angular",forAngular.current.value,e)}>
                  <input ref={forAngular} className='form-control shadow rounded w-25 mt-4'/>
                </form>

                <button onClick={()=>joinGroup("angular")} className='btn btn-success rounded mt-2 w-25 text-center'>+Angular</button>
          </div>
        </div>
    </div>
  )
}

export default ForSocket