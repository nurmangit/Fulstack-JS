import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
// app.use(cors({
//     origin: 'http://localhost:3000', // Izinkan akses dari origin ini
//     methods: 'GET, POST, PUT, DELETE', // Izinkan metode yang diizinkan
//     allowedHeaders: 'Content-Type, Authorization', // Izinkan header yang diizinkan
// }));
app.use (cors())
app.use(express.json());
app.use(UserRoute);

app.listen(3100, ()=> console.log('server di angkat dan berjalan...'));
