"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AddStudent() {
  const [form, setForm] = useState({
    name : '',
    grade : '',
    contact : ''

  })
  const [error, setError] = useState('');
  const router = useRouter();

 const submitHandler  = async(e)=>{
    e.preventDefault();
    console.log(form)

    try{
      const res = await axios.post('api/students/addstudent' , {form});
      console.log(res.data)
      if(res.data.success){
        setForm({
          name : '' ,
          contact : '',
          grade : ''
        });

        router.push('/');
      }
    }
    catch(error){
        console.log(error.message);
    }
 }
//   
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Student</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form  className="space-y-4" onSubmit={(e)=>submitHandler(e)}>
        <input type="text" placeholder="Name" name='name' className="w-full p-2 border" onChange={(e)=> setForm({...form ,  [e.target.name] : e.target.value})} />
        <input type="text" placeholder="Grade" name='grade' className="w-full p-2 border" onChange={(e)=>setForm({...form ,  [e.target.name] : e.target.value})}  />
        <input type="text" placeholder="Contact" name='contact' className="w-full p-2 border" onChange={(e)=>setForm({...form , [e.target.name]: e.target.value})}  />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}
