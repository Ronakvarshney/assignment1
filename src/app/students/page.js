"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  
  const fetchStudents = async () => {
    const res = await axios.get('/api/students');
    console.log(res.data);
    setStudents(res.data.users)
    
  };
  const router = useRouter();
  const Deletehandler = async(id)=>{
    try{
       const res = await axios.post('/api/students/delete' , {_id : id});
       console.log(res.data);
       if(res.data.success){
        window.location.reload();
       }
    }
    catch(error){
      console.log(error.message);
    }
  }
  

  
  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">School ERP Dashboard</h1>
      <p className="mb-4">Total Students: <strong>{students?.length}</strong></p>
      <Link href="/add" className="bg-blue-600 text-white px-4 py-2 rounded">Add Student</Link>

      <div className="mt-6">
        {students?.map((s) => (
          <div key={s._id} className="border p-4 rounded mb-3">
            <p><strong>Name:</strong> {s.name}</p>
            <p><strong>Grade:</strong> {s.grade}</p>
            <p><strong>Contact:</strong> {s.contact}</p>
            <button onClick={()=>router.push(`students/${s._id}`)} className='bg-blue-600 text-white p-1 rounded-lg m-2'>Edit</button>
            <button onClick={()=>Deletehandler(s._id)} className='bg-red-600 text-white p-1 rounded-lg m-2'>Delete</button>
           </div>
        ))}
      </div>
    </div>
  );
}
