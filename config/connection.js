//Sets up and exports connection to Burgers_DB SQL database

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;