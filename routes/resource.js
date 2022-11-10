var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Europe_controller = require('../controllers/Europe'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/Europes', Europe_controller.Europe_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/Europes/:id', Europe_controller.Europe_delete); 
 
// PUT request to update Costume. 
router.put('/Europes/:id', Europe_controller.Europe_update_put); 
 
// GET request for one Costume. 
router.get('/Europes/:id', Europe_controller.Europe_detail); 
 
// GET request for list of all Costume items. 
router.get('/Europes', Europe_controller.Europe_list); 
 
module.exports = router; 
 