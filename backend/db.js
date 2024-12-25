const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/authentication?directConnection=true'

const connectToMongo = async() => {
    try {
        await mongoose.connect(mongoURI)
        console.log("Backend connected successfully")
    } catch (error) {
        console.log("Backend error",error)
    }
} 

module.exports = connectToMongo;