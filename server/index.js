const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

//connexion
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crudmarveldatabase'
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

// on crée une autre route avec la data du back
app.get('/api/get', (req, res)=>{
    const sqlSelect = "SELECT * FROM personnages";
    db.query(sqlSelect,(err, result)=>{
        //envoyer les infos récupérées au front
        res.send(result)
    });


})

//route qui est appelée par le front
app.post('/api/insert', (req,res)=>{   // require pour recup de la data venant u front / response pour envoyer de la data au front
    //f qui se declenche avec cette route

    // on recupere les variables venant du front qui se trouvent dans req
    const characterName = req.body.characterName
    const description = req.body.description
    const image = req.body.image


    // requete sql avec les variables récupérées dans le front 
    const sqlInsert = "INSERT INTO personnages(nom, description,image) VALUES (?,?,?)"
    db.query(sqlInsert, [characterName, description, image],(err, result)=>{
        console.log('result',result )
    });
});
app.listen(3001, ()=>{
    console.log('running on port 3001');
})