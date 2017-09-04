// Imports express and sets up the router
var express = require("express");
var router = express.Router();

// Imports burger to use its database functions
var burger = require("../models/burger.js");

//Sets up routes

	//Gets information in the SQL database for populating the client with yummy burgers
	router.get("/", function(req, res) {
	
		burger.allRows(function(data) {
			res.render("index", {burger: data});	
		});
	});

	//Receives information from the client and posts it to the DB
	//Used to add new burgers
	router.post("/", function(req, res) {
		
		burger.createRow(["'" + req.body.name + "'", "'" + req.body.URL + "'", false], function() {
			res.redirect("/");
		});
	});

	//Updates SQL entries that match the ID with the pass args
	//Only used to update when a burger is eaten
	router.put("/:id", function(req, res) {

		burger.updateRow(["devoured", 1, "id", req.params.id], function(){
			res.redirect("/");
		});
	});

//Exports routes for the server to use
module.exports = router;