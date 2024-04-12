import express from 'express'
import dotenv from 'dotenv';
import router from './routes/routes.js'
import connect from './connect.js';
import cors from 'cors'
const app=express();

dotenv.config();
connect(process.env.MONGO_URI);
// console.log(process.env.MONGO_URI)
app.use(express.json());
app.use(cors({ origin:'http://localhost:3000', credentials: true }));
app.use("/api/auth",router);


const PORT=process.env.PORT||5030;


// app.use(cookieParser());
// app.get("/",(req,res)=>{
//     res.send("hello world hi")
// })

app.listen(PORT,()=>{
    
    console.log('server is running');
})