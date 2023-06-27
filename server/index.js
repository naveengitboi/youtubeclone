import express from 'express'
import mongoose, { mongo } from 'mongoose';



const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`server listening at port ${port}`)
});