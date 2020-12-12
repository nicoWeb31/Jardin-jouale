import express from 'express';
import path from 'path';
const app = express();
// import morgan from 'morgan';

// //morgan
// if(process.env.NODE_ENV !== 'production') {
//     app.use(morgan('dev'));
// }

//for production
const __dirname = path.resolve();
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'));
    })
}else{
    app.get('/', (req,res)=>{
        res.send('API is running!!!')
    })
}



export default app;