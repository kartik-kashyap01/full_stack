import React, { useState } from 'react'
import { Sparkles } from 'lucide-react';
const Regestration = () => {
    const [userName, setuserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()




  return (

    
    <div>
          <div>
              <div id="login_page" className='bg-[#FFF7ED] h-screen overflow-hidden flex  '>
                  <div id="left" className=' flex-1  '></div>
                  <div id="mid" className=' flex items-center justify-center flex-col  flex-1 '>
                      <div id="circle" className='flex gap-1 p-3'>
                          <div id="dots"><div id="circle" className='h-2.5 shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>

                          <div id="dots"><div id="circle" className='h-2.5 shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>
                          <div id="dots"><div id="circle" className='h-2.5 shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>
                          <div id="dots"><div id="circle" className='h-2.5 shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>
                          <div id="dots"><div id="circle" className='h-2.5 shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>
                          <div id="dots"><div id="circle" className='h-2.5  shadow-[2px_2px_0px_0px_#000000] border-2 w-2.5 rounded-[50%]'></div></div>
                      </div>

                      <div id="star " className='shadow-[4px_4px_0px_0px_#000000] border-2  mb-[5%] rounded-xl bg-[#ff6482] p-3 '><Sparkles /></div>
                      <div id="login_box" className='border p-4  rounded-xl flex flex-col shadow-[8px_8px_0px_0px_#000000] items-center justify-start w-[30vw]  bg-white'>
                          <pre className='font-bold mt-[3%] text-[3vw] p-3'>Welcome back</pre>
                          <p className='text-gray-600 -mt-3 pb-9'>Look's new here. </p>
                          <div id="inputs" className=' w-[70%] p-1 flex gap-0.5 flex-col items-center justify-center  '>
                              <p className='self-start  font-bold  text font-mono capitalize'>username</p>
                              <input onChange={
                              (e)=>{
                                setuserName(e.target.value)
                              }
                              } className=' w-full rounded-sm border p-1 ' value={userName}  placeholder='enter username' />
                              <p className='self-start  font-bold  text font-mono capitalize'>email</p>
                              <input
                              onChange={(e)=>{
                                setEmail(e.target.value)
                              }}
                              className=' w-full rounded-sm border p-1 ' value={email} type="email" placeholder='enter email' />
                              <p className='self-start  font-bold mt-3 text font-mono capitalize'>password</p>
                              <input
                              onChange={(e)=>{
                                setPassword(e.target.value)
                              }}
                              className=' w-full rounded-sm p-1 border  '  value={password} type="password" placeholder='password' />

                              <p className='w-full' to='/home' ><button className='w-full rounded-sm bg-[#FF6482] active:bg-[#ffffff]    active:shadow-none p-1 mt-8 font-mono  border shadow-[4px_4px_0px_0px_#000000]'
                              >sign up</button></p>
                              <p className='p-3 font-bold'>OR</p>
                              <button className=' rounded-sm bg-[#B28BFF] active:bg-[#ffffff]    active:shadow-none p-1  font-mono w-full border shadow-[4px_4px_0px_0px_#000000]'>//Continue with gitHub</button>
                              <pre className='p-3'>New here/- <span className='text-[#0f7bbd] font-bold hover:underline'>create an account</span></pre>
                          </div>


                      </div>

                  </div>
                  <div id="right" className=' flex-1 '></div>
              </div>
          </div>
    </div>
  )
}

export default Regestration