import React, { useEffect,useState } from 'react'
import { database } from '../firebase';

function Firebase() {
    const[name,setName] = useState('');
    const [age,setAge] = useState('');

    let createUserInDB= async()=>{
        // let res= await database.users.add({name,age});
        let res= await database.users.doc('11111111').set({name,age});  // unique ID      //create command
        console.log(res);
    }

    useEffect(async()=>{
        let uid='xWd36cotZ0M2UQ5366Eh';
        // let data=await database.users.doc(uid).get();  // for a single object
       // console.log(data.data());
        let data=await database.users.get();  // get all data
        
        data.forEach((obj)=>console.log(obj.data()))
        // let data=await database.users.orderBy('createdAt','desc').get();  //decreasing order on absis of createdAt column
    })

    let update = async() =>{
        let uid='xWd36cotZ0M2UQ5366Eh';
        await database.users.doc(uid).update({
            name,age
        })
    }
    let deletee = async() =>{
        let uid='11111111';
        await database.users.doc(uid).delete();
    }


  return (
    <>
    <div>
        <label htmlFor='name'>Name</label>
        <input type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
        <label htmlFor='age'>Age</label>
        <input type='number'  value={age} onChange={(e)=> setAge(e.target.value)}/>
        <button onClick={update}>Create</button>
        <button onClick={deletee}>Delete</button>
        </div>
    </>
  )
}

export default Firebase