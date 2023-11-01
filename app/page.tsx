"use client"

import Image from 'next/image'
import Login from './components/login'
import { useAppSelector } from '@/redux/store'


export default function Home() {


  const username = useAppSelector((state) => (state.authReducer.value.username))
  const isModerator = useAppSelector((state) => (state.authReducer.value.isModerator))

  return (  
   <div className=" flex min-h-screen flex-col items-center ">
      <Login/>

      <h1 className="text-3xl text-black"> Username: {username}</h1>
      {isModerator && <h1>You are a moderator</h1>}
   </div>
   


  )
}
