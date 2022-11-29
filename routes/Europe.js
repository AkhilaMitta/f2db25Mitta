var express = require('express');
const Europe_controlers= require('../controllers/Europe'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  }

// /* GET home page. */

// router.get('/', function (req, res, next) {
//res.render('Europe',{title:'Search Results Europe'});
// });
/* GET detail Europe page */ 
router.get('/detail', Europe_controlers.Europe_view_one_Page); 

/* GET Europes */ 
router.get('/', Europe_controlers.Europe_view_all_Page ); 
router.get('/Europes/:id', Europe_controlers.Europe_detail); 
/* GET create Europe page */
router.get('/create',secured, Europe_controlers.Europe_create_Page);
/* GET create update page */
router.get('/update',secured, Europe_controlers.Europe_update_Page);
/* GET delete Europe page */
router.get('/delete',secured, Europe_controlers.Europe_delete_Page);

module.exports = router;




 

