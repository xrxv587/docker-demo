const redis = require('redis');
const client = redis.createClient({
	host: 'www.xierenxiang.com',
	port: 8999
});

client.on('connect', () => {
	console.log('redis has connected');
});
client.on('error', (err) => {
	console.error('redis 出错了');
});

module.exports = {
	testSet() {
		client.select(0, () => {
			client.set('test_key', 'it is a test');
		});
	}
};