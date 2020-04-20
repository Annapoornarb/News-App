function ContatosDAO(connection){
    this._connection = connection;
}

ContatosDAO.prototype.getContatos = function (callback) {
    this._connection.query('SELECT * FROM contato', callback);
}

ContatosDAO.prototype.salvarContato = function (contato, callback) {
    this._connection.query("INSERT INTO contato (nome,email,ddd,telefone,mensagem) VALUES (?,?,?,?,?)",
        [contato.nome, contato.email, contato.ddd, contato.telefone, contato.mensagem], callback);

}

module.exports = function(){
    return ContatosDAO;
}

