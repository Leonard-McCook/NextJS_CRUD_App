const MONGO_URI = "mongodb+srv://admin:Aversiacas0@nextjscrud.9ey7z.mongodb.net/?retryWrites=true&w=majority"
import mongoose from "mongoose";

const connectMongo = async () => {
    try {

      const { connection } = await mongoose.connect(MONGO_URI)

      if(connection.readyState == 1) {
        console.log("Database is connected")
      }

    } catch (errors) {
        return Promise.reject(errors)
    }

}

export default connectMongo;