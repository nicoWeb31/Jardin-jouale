import express from 'express';
import path from 'path';
const app = express();

//import route
import authRoute from './routes/authRoute.js'




//_______________________route__________________________________
app.use('/api/v1/',authRoute);




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