const db = require("../model");
const Livro = db.livros;

// Criar um livro
exports.create = (req, res) => {
    // valida req
    if (!req.body.titulo) {
        res.status(400).send({ message: "Conteúdo não pode ser vazio." });
        return;
    }
    // validou tem dados - create
    const livro = new Livro({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        publicado: req.body.publicado ? req.body.publicado : false
    });
    Livro.save(livro).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: `${err.message}. Erro ao criar livro`
        });
    });
};

// Recuperar livro
exports.findAll = (req, res) => {
    const titulo = req.body.titulo;
    var condicao = titulo ? { titulo: { $regex: new RegExp(titulo), $options: "i" } } : {};

    Livro.find(condicao).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao recuperar livro."
        })
    })
}

// Recuperar por ID
exports.findOne = (req, res) => {
    const id = req.params.id;

    Livro.findById(id).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Não encontrado ${id}`
            }).catch(err => {
                res.status(500).send({
                    message: `Id não encontrado ${id}`
                })
            })
        }
    })
}

// Alterar livro = by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: `Dados não podem ser vazio!`
        })
    }

    const id = req.params.id;

    Livro.findByIdAndUpdate(id, req.body, { userFindAndModiFy: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Não foi possível alterar id= ${id}. Livro não encontrado`
            })
        } else {
            res.send({
                message: `Livro atualizado com sucesso.`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível atualizar = ${id}`
        })
    })
}

// Deletar livro = by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Livro.findByIdAndRemove(id, req.body, { userFindAndModiFy: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `Não foi possível deletar id= ${id}. Livro não encontrado`
            })
        } else {
            res.send({
                message: `Livro deletado com sucesso.`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: `Não foi possível deletar = ${id}`
        })
    })
}

// Deletar tudo
exports.deletarAll = (req, res) => {
    Livro.deleteMany({}).then(data => {
        res.send({
            message: `${data.deletedCount} Livros forma deletados.`
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Falha ao deletar livros"
        })
    })
}

// Buscar todos os livros
exports.findAllPublicados = (req, res) => {
    Livro.find({ publicado: true }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Falha ao recuperar livros."
        })
    })
}