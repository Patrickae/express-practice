const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const axios = require('axios');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

app.get('api/probes/temps', (req, res) => {
	axios.get(`https://fireboard.io/api/v1/devices/${process.env.FBDEVICE}/temps.json`, 
    {headers: {Authorization: `Token ${process.env.FBID}`}})
  .then((response) => {
    res.send(response.data)
  })
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
