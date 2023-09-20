const port = 8080;
const db = require('./configs/mongoose');
const express = require(`express`);
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./routers');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routers);
app.listen(port, (err)=>{
    if(err) console.log(`Error in running the server : ${err}`);
    console.log(`Server successfully running on http://localhost:${port}`);
});