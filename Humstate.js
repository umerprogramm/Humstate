import  { useState,useEffect} from 'react'

export default function Humstate(p) {

 const [state,setstate] =  useState(p)
 
 const [state1,setstate1] =  useState([])
 useEffect(() => {
   setstate1([...state1, state])
  localStorage.setItem("value", JSON.stringify([...state1,state]))
}, [state]);


  return [  state, setstate]

 
}
let array
 function Prevalue(){

  let value = localStorage.getItem("value")
   array = JSON.parse(value)
   return array
}
Prevalue()
export {array}
