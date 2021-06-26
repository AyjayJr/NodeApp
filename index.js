const express = require('express');
const app = express();

// Runs everytime we get an incoming request
// req and res are objects that are automatically created by Express

// app.use((req, res) => {
// 	console.log('we got a new request!');
// 	// res.send() is used to respond to requests
// 	res.send('Hello, we\'ve got your request, This is your response!');
// })

// The above chunk of code runs for all requests and therefore must
// be commented out to apply separate responses for different routes.

// Creating routes with get requests.
// '/'     = home path
app.get('/', (req,res) => {
	console.log('Incoming homepage request!');
	res.send('Hello, this is my homepage!');
})

// '/r/:subreddit' = anything matching this pattern
app.get('/r/:subreddit', (req,res) => {
	const { subreddit } = req.params;    // Property unpacked and stored into new variable
	console.log(`Incoming request for r/${subreddit}!`);
	res.send(`<h1>This is the ${subreddit} subreddit!</h1>`);
})

// '/r/:subreddit/:postId' = anything matching this pattern
app.get('/r/:subreddit/:postId', (req,res) => {
	const { subreddit, postId} = req.params;    // Destructuring object
	console.log(`Incoming request for r/${subreddit}/${postId}!`);
	res.send(`<h1>This is the ${subreddit} subreddit! Post Id: ${postId}</h1>`);
})

// '/cats' = cat path
app.get('/cats', (req,res) => {
	console.log('Incoming cat request!');
	res.send('Meeoooow!');
})

// '/dogs' = dog path
app.get('/dogs', (req,res) => {
	console.log('Incoming dog request!');
	res.send('Wooooof!');
})

// Response involving query strings
app.get('/search', (req,res) => {
	// Usually a query string will be passed from a link/form
	// e.g. search?q=dogs&color=red
	// console.log(req.query); >> { q: 'dogs', color: 'red' }
	const { q } = req.query
	res.send(`<h1>Search results for: ${q}</h1>`);
})

// '/*'    = all else
app.get('*', (req,res) => {
	console.log('Unknown path request!');
	res.send('I don\'t know that path');
})

// Specifies which port we are listening for a request on
// Starts the server
app.listen(8080, () => {
	console.log('listening on port 8080!');
})