const app = require('express')();

app.use('/', (req, res) => {
	res.send('hello world');
});

app.listen(3999);

