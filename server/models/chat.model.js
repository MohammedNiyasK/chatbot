import mongoose,{Schema} from "mongoose";

const chatSchema = new Schema(
    {
        query:{
            type:String,
            required:true,

        },
        result:{
            type:String,
            required:true
        },
        
    },
    {
        timestamps:true
    }
)

export const Chat = mongoose.model("Chat",chatSchema)