import { useState } from 'react'
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [length , setlength] = useState(8)
  // eslint-disable-next-line no-unused-vars
  const [numberAllowed , setnumberAllowed] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [charAllowed , setcharAllowed] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [password ,setpassword] = useState('')

  return (
   <div className='w-full max-w-md mx-auto shadow-md 
   rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500 '>
      <h1 className=' text-white text-center my-3'>
        Password Genarator</h1>
        <div className=' flex shadow rounded-lg 
        overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className=' outline-none w-full py-1 px-3'
          placeholder='Passsword'
          readOnly
          />
          <button className=' outline-none
          bg-blue-700 text-white px-3 py-0.5
          shrink-0
          '>Copy</button>
        </div>
        <div
        className='flex text-sm gap-x-2'
        >
          <div></div>
        </div>
   </div>
  )
}

export default App
