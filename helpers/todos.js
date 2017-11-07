var db = require('../models');

// INDEX ROUTE
exports.getTodos = function(req, res){
	db.Todo.find()
	.then(function(todos){
		res.status(201).json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

// CREATE ROUTE
exports.createTodo = function(req, res){
	db.Todo.create(req.body)
	.then(function(newTodo){
		res.json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

// SHOW ROUTE
exports.getTodo = function(req, res){
	db.Todo.findById(req.params.todoId)
	.then(function(foundTodo){
		res.json(foundTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

// UPDATE ROUTE
exports.updateTodo = function(req, res){
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})
}

// DELETE ROUTE
exports.deleteTodo = function(req, res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(todo){
		res.json({message: 'We deleted it!'});
	})
	.catch(function(err){
		res.send(err);
	})
}

module.exports = exports;