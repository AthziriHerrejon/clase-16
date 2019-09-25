const express= require ("express")
const app = express ();


app.use("/handler1", function (req, res, next) {
    //res.status (200)
    //res.set("Content-Type","text/plain");
    //res.send ("Soy un middleware") ;
    console.log('soy un middleware')
    next();
});

app.listen(9000, () => {
    console.log("Si funciona")
});

/*
console.dir(req.baseUrl)
console.dir(req.body)
console.dir(req.hostname)
console.dir(req.method)
console.dir(req.originalUrl)
console.dir(req.path)
console.dir(req.protocol)
console.dir(req.query)
});*/

/*
app.get ("/handler2", function (req, res) { //se usa el metodo get
    res.send ("handler 2") //  a la pantalla se manda handler 2 , si googleo localhost:9000]/handler 1
}); */
 
//para que en chrome me aparezca cada URL, debo teclear control C en mi terminal para detener un proceso y despues volver a correr el documento .js

// investigar los Status code mas comunes