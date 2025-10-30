import mongoose from "mongoose"



const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB connected`)
    } catch (error) {
        console.log('error connecting to mongoDB',error)
        process.exit(1)
    }
}

export default dbConnect