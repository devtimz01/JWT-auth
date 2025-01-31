const mongoose = require('mongoose');
const connect= mongoose.connect(process.env.DATABASE);

connect.then(()=>{
    console.log('userVerification database on')
})
.catch(()=>{
    console.log('error')
})

const userVerificationSchema = new mongoose.Schema(
    {
        userId: String,
        uniqueString: String,
        createdAt: Date,
        expiresAt: Date
     }
);

const userVerification = new mongoose.model('userVerification', userVerificationSchema,'userVerification1')
module.exports = userVerification;
