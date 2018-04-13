const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;
const ctrl = require('./controller.js');
const massive = require('massive');
require('dotenv').config();
const app = express();
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());


app.get('/api/houses', ctrl.getHouses);
app.post('/api/house', ctrl.newHouse);
app.delete('/api/house/:id', ctrl.deleteHouse);







massive(process.env.CONNECTIONSTRING).then(connectionInstance => {
    app.set('db', connectionInstance);
    app.listen(port, () => console.log(`I'm listening on port ${port}`))
})
