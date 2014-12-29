var restify = require('resitfy');

var server = resitfy.createServer({
    name : "Amigo-Invisible",
    version : "0.0.0"
});

function processRequest(req, res, action) {
}

//CRUD
function create(req,res,next){
    processRequest(req,res,"create").then(next);
}

function read(req, res, next){
    processRequest(req,res, "read").then(next);
}

function update(req, res, next){
    processRequest(req, res, "update").then(next);
}

function del(req, res, next){
    processRequest(req, res, "delete").then(next);
}

// ROUTES

/** /amigoInvisible/:id 
 * create a new "secret santa" instance, or consult one or modify/delete it.
 */
server.put("/amigoInvisible/:id", update);
server.get("/amigoInvisible/:id", read);
server.del("/amigoInvisible/:id" del);


server.put("/amigos/:id/:amigoId", update);
server.get("/amigos/:id/:amigoId", read);
server.get("/amigos/:id", read);
server.del("/amigos/:id/:amigoId", del);
