const mongoose = require('mongoose');
const url = 'mongodb+srv://axel:IgAJXELvPl1LMPhu@cluster0.2snwgao.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(url, {}, ()=>{
    console.log('--------------------------------')
    console.log('Conexion a la DB exitosa')
    console.log('--------------------------------')
})

module.exports = mongoose