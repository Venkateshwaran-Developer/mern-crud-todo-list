const mongoose = require('mongoose');

const connectdatabase= ()=>{
    mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log('Connected to database Successfully')
})
}

module.exports = connectdatabase;

