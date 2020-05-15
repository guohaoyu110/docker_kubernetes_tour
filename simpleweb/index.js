const express = require('express');

const app = express();
// if i want to make the modification in the container, 
// we have to rebuild the container


app.get('/', (req, res) => {
    res.send('Bye there, how are you doing?');
});

app.listen(8080 , () => {
    console.log('Listening on port 8080');
    
});

// 如果在index.js里面改动过了，一定要重新build 这个image

