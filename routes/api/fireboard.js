const router = require("express").Router();
const axios = require('axios');

// Matches with "/api/books"
router.route("/")
  .get((req, res)=>{
  	console.log('this one worked');
  	res.send('this one worked')
  })


// Matches with "/api/books/:id"
router
  .route("/todos/:count")
  .get((req, res) => {
  	axios.get(`'https://jsonplaceholder.typicode.com/todos/${req.params.count}'`)
  	.then(data => {
  		res.send(data)
  	})
  })

router
	.route('/temps')
	.get((req, res) => {
		axios.get(`https://fireboard.io/api/v1/devices/${process.env.FBDEVICE}/temps.json`, 
      {headers: {Authorization: `Token ${process.env.FBID}`}})
    .then((response) => {
      res.send(response.data)
    })
	})


module.exports = router;


