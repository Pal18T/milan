import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const[roomCode,setRoomCode] = useState("");
    console.log(roomCode);

const navigate = useNavigate()

const submitCode = (e) => {
    e.preventDefault();
    navigate("./Room/${roomCode}")
}
  return (
    <div>
        <form action='' onSubmit={submitCode} className="flex flex-col items-center justify-center">
        <label htmlFor='' className ="font-bold text-2xl pt-12">Enter The Room Code</label>
        <input type="text" required placeholder="Enter Room Code" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} className="placeholder-white mt-5 bg-blue-500 rounded-full px-4 py-1" />
        <button type='submit' className='mt-4 bg-orange-400 rounded-[0.5rem] px-2 py-1.5 font-bold'>Enter the Room</button>
        </form>
    </div>
  );
};

export default Home