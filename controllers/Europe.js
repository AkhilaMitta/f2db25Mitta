var Europe = require('../models/Europe'); 
 
// List of all Costumes 
exports.Europe_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Europe list'); 
}; 

// List of all Costumes 
exports.Europe_list = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.send(theEuropes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Costume. 
exports.Europe_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Europe detail: ' + req.params.id); 
}; 
 
// List of all Costumes 
exports.Europe_detail = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.send(theEuropes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Costume create on POST. 
exports.Europe_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Europe create POST'); 
}; 
 
// List of all Costumes 
exports.Europe_create_post = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.send(theEuropes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// Handle Costume delete form on DELETE. 
exports.Europe_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Europe delete DELETE ' + req.params.id); 
}; 

// List of all Costumes 
exports.Europe_delete = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.send(theEuropes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle Costume update form on PUT. 
exports.Europe_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Europe update PUT' + req.params.id); 
}; 

// List of all Costumes 
exports.Europe_update_put = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.send(theEuropes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.Europe_view_all_Page = async function(req, res) { 
    try{ 
        theEuropes = await Europe.find(); 
        res.render('Europes', { title: 'Europe Search Results', results: theEuropes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Costume create on POST. 
exports.Europe_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Europe(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.countries = req.body.countries; 
    document.state = req.body.state; 
    document.ranking= req.body.ranking; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 