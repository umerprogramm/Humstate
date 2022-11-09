import  { useState,useEffect} from 'react'

export default function Humstate(p) {


 const [state,setstate] =  useState(p)
 
 const [state1,setstate1] =  useState([])
 useEffect(() => {
   setstate1([...state1, state])
}, [state]);


  return [ state1, state, setstate]

 
}
