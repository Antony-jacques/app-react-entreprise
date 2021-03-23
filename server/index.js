const express = require('express')
const app = express()



//route
app.get('/', (req,res)=>{   // require pour recup de la data venant u front / response pour envoyer de la data au front
    //f qui se declenche avec cette route
    res.send("hello anto")
})
app.listen(3001, ()=>{
    console.log('running on port 3001');
})