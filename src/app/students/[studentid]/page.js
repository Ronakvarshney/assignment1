"use client"

import axios from "axios";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function StudentPage (){
    const[Student , setStudent] = useState();

    const[Form , setForm] = useState({
        name : Student?.name || '' ,
        grade : Student?.grade  || '',
        contact : Student?.contact || ''
    })
    const {studentid} = useParams();
    const id = studentid ;
    useEffect(()=>{
      const fetchstudents = async()=>{
        try{
            const res = await axios.post('/api/students/fetch' , {_id : id})
            setStudent(res.data.student)
          console.log(res.data)
        }
        catch(error){
            console.log(error.message);
        }
      }
      fetchstudents()
    },[])
    const router = useRouter();

    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post('/api/students/edit' , {_id : id , name : Form?.name , grade : Form?.grade , contact : Form?.contact});
            console.log(res.data);
            if(res.data.success){
                router.push('/students');
            }
          }
          catch(error){
            console.log(error.message);
          }
    }
    return (
        <div className="p-6 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Student</h2>
       
        <form  className="space-y-4" onSubmit={(e)=>submitHandler(e)}>
          <input type="text" placeholder={Student?.name} name='name' className="w-full p-2 border" onChange={(e)=> setForm({...Form ,  [e.target.name] : e.target.value})} />
          <input type="text" placeholder={Student?.grade} name='grade' className="w-full p-2 border" onChange={(e)=>setForm({...Form ,  [e.target.name] : e.target.value})}  />
          <input type="text" placeholder={Student?.contact} name='contact'  className="w-full p-2 border" onChange={(e)=>setForm({...Form , [e.target.name]: e.target.value})}  />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    )
}