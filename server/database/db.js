import mongoose from 'mongoose'

const Connection = async () => {
    
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.c3su4th.mongodb.net/whatsappclone?retryWrites=true&w=majority`

    try {
       await mongoose.connect(URL,{ useUnifiedTopology:true})
       console.log("Database connected successfully");
    } catch (error) {
        console.log("error while connecting with database",error.message);
    }
}

export default Connection