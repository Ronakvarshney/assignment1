import DbConnect from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function GET(request) {
    try{
        await DbConnect();
     const fetchusers = await User.find();
     if(!fetchusers){
        return NextResponse.json({
            success : false ,
            message : "user not exists"
        })
     }
     return NextResponse.json({
        success : true ,
        message : 'all users fetches' ,
        users : fetchusers
     })
    }
    catch(error){
        return NextResponse.json({
            success : false ,
            message : error.message
        })
    }
    
}