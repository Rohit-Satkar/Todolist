"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [task, settask] = useState([])
  
  const RealoadHandler = (e)=>{
    e.preventDefault()
    settask([...task,{title,desc}])
    settitle("")
    setdesc("")
  }
  
  const removeTask = (i)=>{
      let copytask = [...task]
      copytask.splice(i,1)
      settask(copytask)
  }

  let storage = <div className='bg-black rounded-lg text-white px-10 py-7'><h5>No Task Availabel . . . !</h5></div>
  if(task.length > 0){
    storage = task.map((t,i)=>{
      return <ul key={i}>
                <div className='bg-black px-10 py-6 flex justify-between items-center mb-1 rounded-lg text-white'>
                  <h5 className='text-xl font-bold'>{t.title}</h5>
                  <h4>{t.desc}</h4>
                  <button onClick={()=>{
                    removeTask(i)
                  }} className='bg-red-600 rounded text-white px-4 py-2'>Delete</button>
                </div>
            </ul>
    })
  }
  return (
    <>
      <div className='font-serif'>
        <div>
          <nav className='bg-black h-20 border-b-2 flex items-center justify-center'>
            <h1 className='text-white text-6xl'>To do List</h1>
          </nav>
        </div>
        <div>
          <form className='flex-col items-center space-x-10' onSubmit={RealoadHandler}>
            <input className='placeholder:italic m-10 border-2 border-black px-4 py-2 rounded' placeholder = "Add your task..." type="text"
            value={title}
            onChange={(e)=>{
              settitle(e.target.value)
            }}/>
            
            <input className='placeholder:italic m-10 border-2 border-black px-4 py-2 rounded' placeholder = "Write Description..." type="text"
            value={desc}
            onChange={(e)=>{
              setdesc(e.target.value)
            }}/>
            
            <button className='h-10 w-32 bg-red-600 rounded border-none text-white'>Add Task</button>
          </form>
          <hr/>
          <div>
              {storage}
          </div>
        </div>
      </div>
    </>
  )
}
export default page