module.exports = app => {
    const livros = require("../controller/livro.controller");

    var router = require("express").Router();

    // criar
    router.post("/", livros.create);

    // recuperar todos
    router.get("/", livros.findAll);

    // recuperar por publicacao
    router.get("/publicado", livros.findAllPublicados);

    // recuperar by id
    router.get("/:id", livros.findOne);

    // update by id
    router.put("/:id", livros.update);

    // deletar by id
    router.delete("/:id", livros.delete);

    // deletar tudo
    router.delete("/", livros.deletarAll);
    
    app.use("/api/livros")
}