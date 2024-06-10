import { useCallback, useEffect, useState } from 'react'

const App = () => {

  const[password,setpass]=useState("")
  const [length,setLength]=useState(6)
  const [number,numberAllowed]=useState(false)
  const [char,charAllowed]=useState(false)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*"
    for (let i = 0; i <= length; i++) {
      // const element = array[i];
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char)
      
    }
    setpass(pass)
  },[length,number,char])

  useEffect(()=>{
    passwordGenerator()
  },[length,char,number,passwordGenerator])

  // const copyPass=useCallback(()=>{

  //   window.navigator.clipboard.writeText(password);
  // },[password])



  return (
    <div className="h-screen w-screen flex justify-center p-10 bg-zinc-700">
      <div className="h-64 text-blue-600 justify-center backdrop-blur-lg w-3/4 bg-amber-50 rounded-xl">
      <h1 className="text-center mt-4"> Password Generator</h1>
      <div className="text-center flex mt-8 justify-center">

        <input className="bg-black text-2xl p-5 rounded-lg h-12 w-4/6 ml-6" 
        type="text"
        value={password}
        readOnly
         />

         <button onClick={()=>{window.navigator.clipboard.writeText(password)}} className="ml-10 h-12 bg-slate-800">Copy</button>


      </div>
    <div className="flex justify-center mt-8">

      <input className=' bg-gray-200 rounded-lg cursor-pointer'
      type="range"
      defaultValue={6}
      min={6}
      max={16}
      onChange={(e)=>setLength(e.target.value)}
      />

      <h2 className=" ml-5 mr-5 text-2xl">Length({length})</h2> 

      <input 
      type="checkbox"
      defaultChecked={number}
      onChange={()=>numberAllowed((prev)=>!prev)}
      

      />    
      <h2 className=" ml-5 mr-5 text-2xl">Number</h2>
      <input 
      type="checkbox"
      defaultChecked={char}
      onChange={()=>charAllowed((prev)=>!prev)}
      

      />      
      <h2 className=" ml-5 mr-5 text-2xl">Character</h2>
      </div>
      </div>
    </div>
  )
}

export default App