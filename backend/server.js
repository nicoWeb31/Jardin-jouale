import app from './app.js';
import connectBDD from './config/bdd.js';
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

//_______________________connect bdd_____________________________
connectBDD();




//_______________________server__________________________________
const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
    console.log(`Server run in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold);
});
