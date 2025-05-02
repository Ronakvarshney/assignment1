import DbConnect from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";


export async function POST(req) {
    await DbConnect();
    try{
      const{_id} = await req.json();
      const deletestudent = await User.findByIdAndDelete(_id);
      return NextResponse.json({
        success : true ,
        message : 'student deleted successfully' ,
        deletestudent
      })
    }
    catch(error){
        return NextResponse.json({
            success : false ,
            message : error.message
        })
    }
    
}