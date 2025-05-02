import Link from "next/link";

export default function page(){
  
  return(
    <div>
      Hello , Myself Ronak Varshney
      <Link href='/students' className="m-10 bg-blue-600 p-2">Go to Students</Link>
    </div>
  )
}