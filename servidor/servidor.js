
var express     = require('express');
var cors        = require("cors");
var bodyParser  = require('body-parser')
const jwt = require("jsonwebtoken")
const expressJwt = require("express-jwt");
var app = express();

app.use(expressJwt({secret: "superclave"}).unless({path: ["/login"]}));

app.use(cors());



app.use(bodyParser.json())

let lista = [];

lista.push( {"id":"3","concepto":"auriculares","importe":200, "categoria": "informatica"} );
lista.push( {"id":"4","concepto":"patinete","importe":500,    "categoria": "deporte"} );

app.post("/login", function (req, res) {
  const usuario = req.body;

  if(usuario.nombre =="ricardo" && usuario.clave == "ricardo"){

          var token = jwt.sign({id: usuario.nombre}, 'superclave', {expiresIn: '2h'});
          res.send({token});


  }else{
     res.sendStatus(401);
  }
});

app.get('/productos', function (req, res) {
  res.send(lista);
});


app.delete('/productos/:id', function (req, res) {
        let seleccionado = lista.filter(function(elemento){
        return elemento =  req.param.id

  })[0];
  let indice = lista.indexOf(seleccionado);
  lista.splice(indice,1);
  res.status(204).send();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post("/productos",function(req, res){
    lista.push(req.body);

    res.status(201).send();
});

app.put("/productos/:id", function (req, res) {
console.log("PUT::"+ req.params.id);
  //seleccion  el elemento a borrar
  let seleccionado = lista.filter(function (elemento) {

    return elemento.id == req.params.id;
  })[0];
  // esta es la parte pura de actualizacion
  console.log("seleccionado: "+ seleccionado);
  let indice= lista.indexOf(seleccionado);
  lista[indice]=req.body;

  res.status(200).send();
})

app.get("/productos/filtro/:concepto",function(req,res) {


  let listaFiltrada = lista.filter(function (elemento) {

    return elemento.concepto.startsWith(req.params.concepto);
  });

  res.send(listaFiltrada);


})

app.get("/productos/:id",function(req,res) {


  let listaFiltrada = lista.filter(function (elemento) {

    return elemento.id == req.params.id;
  });

  res.send(listaFiltrada[0]);


})
