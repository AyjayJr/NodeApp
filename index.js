const express = require('express');
const app = express();

// Runs everytime we get an incoming request
// req and res are objects that are automatically passed in to this function

// app.use((req, res) => {
// 	console.log('we got a new request!');
// 	// res.send() is used to respond to requests
// 	res.send('Hello, we\'ve got your request, This is your response!');
// })

// The above chunk of code matches all requests and therefore must
// be commented out to apply separate responses for different routes.

// Creating routes with get requests.
// /cats = 'meow'
// /dogs = 'woof'
// '/'


app.get('/cats', (req,res) => {
	console.log('Incoming cat request!');
	res.send('Meeoooow!');
})

app.get('/dogs', (req,res) => {
	console.log('Incoming dog request!');
	res.send('Wooooof!');
})

app.get('/', (req,res) => {
	console.log('Incoming homepage request!');
	res.send('Hello, this is my homepage!');
})

app.get('*', (req,res) => {
	console.log('Unknown path request!');
	res.send('I don\'t know that path');
})

// Specifies which port we are listening for a request on
// Starts the server
app.listen(8080, () => {
	console.log('listening on port 8080!');
})