import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks=async (req,res)=>{
    try{
        const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        
        //Gettings headers
        const headers={
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        } ;

        //Verifying Headers
        await whook.verify(JSON.stringify(req.body),headers)

        //Geting Data from request body
        const{data,type}=req.body

        const userData={
            _id:data.id,
            email:data.email_addresses[0].email_addresses,
            username:data.first_name+ " " +data.last_name,
            image:data.image_url,
        }

        //switch cases for different events
        switch (type) {
            case "user.created":{
                await User.create(userData);
                break;
            }
               case "user.updated":{
                await User.findByIdUpdate(data.id,userData);
                break;
            }   
               case "user.deleted":{
                await User.findByIdDelete(data.id);
                break;
            } 
        
            default:
                break;
        }
        res.json({suceess:true,messsage:"Webhook Received"})
    }catch(error){
        console.log(error.messsage)
        res.json({suceess:false,messsage:error.messsage});
    }
}
export default clerkWebhooks;
    
