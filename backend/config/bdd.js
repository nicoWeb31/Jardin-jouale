import mongoose from 'mongoose';

const connectBDD = async()=>{

    const URI = process.env.MONGO_URI_DEV.replace('<password>', process.env.MONGODB_PASSWORD_DEV)

    try {
        
        const co = await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })
        console.log(`Connect to MongoDB at : ${co.connection.host}....😻  `.cyan.underline)

    } catch (error) {
        console.error(`Error : ${error.message}.red.underline.bold`)
        process.exit(1);
    }



}

export default connectBDD;