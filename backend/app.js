import express from 'express';
import path from 'path';
import morgan from 'morgan';
const app = express();
import ErrMidlware from './controllers/errorController.js'

//import route
import authRoute from './routes/authRoute.js';
import totoSeedRoute from './routes/seedRoute.js';
import cDefaultJefaitCeQueJeVeutProductRoute from './routes/ItemsVenteRoute.js'


//middleware
app.use(express.json());
app.use(morgan('dev'))




//_______________________route__________________________________
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/seed',totoSeedRoute)
app.use('/api/v1/product',cDefaultJefaitCeQueJeVeutProductRoute)





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


//_______________________error midlleware__________________________________
//err midlleware
app.use(ErrMidlware);






export default app;