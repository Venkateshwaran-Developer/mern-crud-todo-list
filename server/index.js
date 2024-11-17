const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectdatabase = require('./config/connectdatabase');
dotenv.config({ path: './config/.env' });
const cors = require('cors');
app.use(express.json());
app.use(cors());
const Employee  = require('./router/router');

connectdatabase();

app.use('/api/v1', Employee);




app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})