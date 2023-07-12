import express, { application } from 'express'
import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv'

//routes
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'

// dotenv 
dotenv.config()

//mongodb connection
 
const connect = () => {
    mongoose.connect(process.env.MONGODB).then(() => {
        console.log('connected successfully').catch(() => {
            console.log('not connected')
        })  
    })
} 

const app = express();
const port = process.env.PORT;

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