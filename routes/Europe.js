var express = require('express');
const Europe_controlers= require('../controllers/Europe'); 
var router = express.Router();

// /* GET home page. */

// router.get('/', function (req, res, next) {
//     res.render('Europe',{title:'Search Results Europe'});
// });


/* GET costumes */ 
router.get('/', Europe_controlers.Europe_view_all_Page ); 
// GET request for one costume. 
router.get('/Europes/:id', Europe_controlers.Europe_detail); 

module.exports = router;




 

