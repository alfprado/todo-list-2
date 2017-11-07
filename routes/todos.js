var express = require('express'),
	db		= require('../models');
var router	= express.Router();

// INDEX ROUTE
router.get('/', function(req, res){
	db.Todo.find()
	.then(function(todos){
		res.status(201).json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
});

// CREATE ROUTE
router.post('/', function(req, res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})

});

// SHOW ROUTE
router.get('/:todoId', function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(function(todo){
		res.json(foundTodo)
	})
	.catch(function(err){
		res.send(err);
	})
});

// UPDATE ROUTE
router.put('/:todoId', function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
});

// DELETE ROUTE
router.delete('/:todoId', function(req, res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(todo){
		res.json({message: 'We deleted it!'});
	})
	.catch(function(err){
		res.send(err);
	})
});

module.exports = router;