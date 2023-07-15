import express, { application } from 'express'
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

//routes
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'

// dotenv 
dotenv.config()

//mongodb connection

const connect = () => {
    mongoose.connect(process.env.MONGODB).then(() => {
        console.log('connected to mongo db')
    }).catch((error) => console.log(error))
}

//express connection

const app = express();
const port = process.env.PORT;


//middleware
app.use(express.json())
app.use(cookieParser())


//error handling middleware 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong worstly"
    return res.status(status).json({
        success:false,
        message:message,
        status:status
    })

})

//routes

app.get('/', (req, res) => {
    res.send('Hello World')  
})

app.use('/api/auth' , authRoute)
app.use('/api/user', userRoute) 

app.listen(port, () => {
    connect(); 
    console.log(`server listening at port ${port}`);
});


//controllers --->  routes ---> index 