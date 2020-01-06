const app = require('express')();

const client = require('./redisClient');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('/test-redis', (req, res) => {
	client.testSet();
	res.send('set success');
});
app.get('/test-get', (req, res) => {
	res.json({
		a: 12,
		b: 34
	});
});

app.listen(3999, () => {
	console.log('server listen on 3999');
});

