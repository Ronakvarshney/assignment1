import DbConnect from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
    try{
      await DbConnect();
      const{_id} = await req.json();
      const student = await User.findById(_id);
      if(!student){
        return NextResponse.json({
            success : false ,
            message : "student not exists"
        })
      }


      return NextResponse.json({
        success : true ,
        message : "student get successfully",
        student
      })
    }
    catch(error){
        return NextResponse.json({
            success : false ,
            message : error.message
        })
    }
    
}