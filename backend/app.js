import express from 'express'
const app = express();
import morgan from 'morgan';

//morgan
if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
}






export default app;