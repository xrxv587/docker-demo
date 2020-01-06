const app = require('express')();

app.use('/', (req, res) => {
	res.send('hello world hello world');
});

app.listen(3999, () => {
	console.log('server listen on 3999');
});

