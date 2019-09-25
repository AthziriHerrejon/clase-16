const express= require ("express")
const app = express ();


app.listen(9000, () => {
    console.log("Si funciona")
});

app.get("/handler1", function (req, res) {
    res.send ("handler 1")
});

app.get ("/handler2", function (req, res) { //se usa el metodo get
    res.send ("handler 2") //  a la pantalla se manda handler 2 , si googleo localhost:9000]/handler 1
});
 
//para que en chrome me aparezca cada URL, debo teclear control C en mi terminal para detener un proceso y despues volver a correr el documento .js
