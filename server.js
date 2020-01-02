const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');

 app.get('/api/probes/temps', (req, res) => {
 	axios.get(`https://fireboard.io/api/v1/devices/${process.env.FBDEVICE}/temps.json`, 
     {headers: {Authorization: `Token ${process.env.FBID}`}})
   .then((response) => {
     res.json(response.data)
   })
 })

 app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const root = require('path').join(__dirname, 'app', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);


