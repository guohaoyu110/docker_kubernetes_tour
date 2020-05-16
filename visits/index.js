const express = require('express');

const redis = require('redis');
const process = require('process');
const app = express();

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
    // get current number of time our pages are visited
    process.exit(0); // we exit because we want to.
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseint(visits + 1));
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
    
});