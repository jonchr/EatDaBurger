// Imports MySQL connection
var connection = require("./connection.js");

// Object Relational Mapper (ORM)
var ORM = {
	//returns the entire burgers table
	selectAll: function(cb) {
		connection.query("SELECT * FROM `burgers`", function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	//inserts a new row with id, name, url, devoured value, and timestamp
	insertOne: function (name, URL, eatenBool, cb) {
		var queryString = "INSERT INTO `burgers` (`burger_name`, `link`, `devoured`) ";
		queryString += "VALUES (" + name + "," + URL + "," + eatenBool + ");"
		
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	//updates values in one column for rows that match the given condition
	updateOne: function(columnName, newValue, whereCol, whereCond, cb) {
		var queryString = "UPDATE `burgers` SET ";
		queryString += columnName + "=" + newValue;
		queryString += " WHERE " + whereCol + whereCond;
		
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}

};

module.exports = ORM;