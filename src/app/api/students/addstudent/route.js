import User from "@/models/userSchema";
import DbConnect from "../../../../lib/dbConnect";
import { NextResponse } from "next/server";


export async function POST(req) {
    try{
        await DbConnect();
        const{form} = await req.json();
       const{name , grade , contact} = form ;
       if(!name || !grade || !contact){
        return NextResponse.json({
            success : false ,
            message : "fill all credentials"
        })
       }
       const newuser = await User.create({
        name ,
        grade : parseInt(grade) ,
        contact
       })
       return NextResponse.json({
        success : true ,
        message : "user created successfully",
        newuser
       })
    }
    catch(error){
        return NextResponse.json({
            success : false ,
            message : error.message
        })
    }

    
}