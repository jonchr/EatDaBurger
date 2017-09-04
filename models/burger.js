var ORM = require("../config/orm.js");

//Creates a burger object that contains methods and connects to the ORM
var burger = {
	//Passes variables to ORM to create SQL query adding new burger
	createRow: function(args, cb) {
		ORM.insertOne(args[0], args[1], args[2], function(res) {
			cb(res);
		});
	},

	//Initiates and passes result of SQL query to pull full table
	allRows: function(cb) {
		ORM.selectAll(function(res) {
			cb(res);
		});
	},

	//Passes variables to ORM to update SQL table
	updateRow: function(args, cb) {
		ORM.updateOne(args[0], args[1], args[2], args[3], function(res){
			cb(res);
		});
	}
};

// Exports the burger object (to be caught by the burger_controller)
module.exports = burger;