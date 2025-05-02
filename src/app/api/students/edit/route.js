import DbConnect from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { NextResponse } from "next/server";

export async function POST(req ) {
    try{
        await DbConnect();
        const{_id , name , contact , grade} = await req.json();
        const updateStudent = await User.findByIdAndUpdate(_id , {
            name : name ,
            contact : contact ,
            grade : grade 
        });

        return NextResponse.json({
            success : true ,
            message : "student update successfully" ,
            student : updateStudent
        })

    }
    catch(error){
        return NextResponse.json({
            success : false ,
            message : error.message 
        })
    }
    
}