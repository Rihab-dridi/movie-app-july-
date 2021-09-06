import React from "react";
import Modal from "react-modal";
import { useState } from "react";

export default function Add({addHandler}) {
  const [show, setShow] = useState(false);
  //decalre a varibla name=show
  // declare a function to set the variable =setShow
  // asign an initial value =false

  const toggle = () => {
    setShow(!show);
  };

  const [title, settitle] = useState('')
  const [poster, setposter] = useState('')
  const [description, setdescription] = useState('')
  const [rate, setrate] = useState()


const addMovie=()=>{
  title&&
addHandler({ id:Math.random(), title:title, rate:rate, img:poster, Description:description})
settitle('')
setrate('')
setdescription('')
setposter('')
toggle()
}

  return (
    <div>
      <button onClick={toggle}>
        <i class="far fa-plus-square"></i>
      </button>
      <Modal isOpen={show}  className='Modal'  >
        <h1> add a New Movie </h1>
        <label> add the title </label><br/>
        <input
        onChange={(e)=>settitle(e.target.value)}
         palceholder="enter the mivoe  title " /><br/>

        <label> add the Poster link </label>
        <input
          onChange={(e)=>setposter(e.target.value)}
        palceholder="enter the mivoe  Poster link " /><br/>


        <label> add the description</label>
        <input
          onChange={(e)=>setdescription(e.target.value)}
        palceholder="enter the mivoe  description" /><br/>


        <label> add the rate</label><br/>
        <input 
          onChange={(e)=>setrate(e.target.value)}
        palceholder="enter the mivoe  rate" />

      <div>
      <button onClick={toggle}> close </button>
      <button onClick={addMovie}> Submit </button>
      </div>
      </Modal>
    </div>
  );
}
