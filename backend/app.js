import express from 'express';
import path from 'path';
import morgan from 'morgan';
const app = express();

//import route
import authRoute from './routes/authRoute.js';


//middleware
app.use(express.json());
app.use(morgan('dev'))




//_______________________route__________________________________
app.use('/api/v1/auth',authRoute);




//_______________________for rendering production_________________________________________

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