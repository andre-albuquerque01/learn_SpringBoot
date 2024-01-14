const { default: mongoose } = require("mongoose")

module.exports = Mongoose => {
    var schema = mongoose.Schema(
        {
            titulo: String,
            descricao: String,
            publicado: Boolean
        },
        { timestamp: true }
    );

    schema.method("toJSON", function () {
        const { _v, _id, ...object } = this.object();
        object.id = _id;
        return object;
    })
    const Livro = mongoose.model("livro", schema);
    return Livro
}