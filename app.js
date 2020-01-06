const app = require('express')();

const client = require('./redisClient');

app.get('/', (req, res) => {
	res.send('hello world hello world');
});
app.get('/test-redis', (req, res) => {
	client.testSet();
	res.send('set success');
});

app.listen(3999, () => {
	console.log('server listen on 3999');
});

