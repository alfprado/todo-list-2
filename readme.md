# TodoAPI

<img src="https://coligo.io/images/express.svg" height="50"> 
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/527px-MongoDB-Logo.svg.png" height="50">
<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/JQuery_logo.svg/1280px-JQuery_logo.svg.png" height="50">

This is a project of Web Developer Bootcamp.
A single page app Todo list with Express, Mongo and JQuery.

## Features

*  **[Node.JS](https://nodejs.org)**
*  **[Express](https://github.com/expressjs/express)**
*  **[MongoDB](https://www.mongodb.com/)** with **[Mongoose](https://github.com/Automattic/mongoose)**

## Usage

Install dependencies

```
$ npm install
```

## The data

|Field 		  |Type     |
|-------------|-------- |			
| name 		  | String  |
| completed	  | Boolean |
| createdDate |	Date    |


## Rest Routes

|url 				         |verb     |desc.                        |
|--------------------|---------|-----------------------------| 
| /api/todos      	 |	GET    | Display a list of all todos |
| /api/todos  		   |	POST   | Create new todo             |
| /api/todos/:todoId |	GET    | Retrieve a todo             |
| /api/todos/:todoId |  PUT    | Update a todo               |
| /api/todos/:todoId |	DELETE | Delete a todo               |

