
/*
 * GET home page.
 */
exports.index = function(req, res){
    res.render('index.html');
};
exports.aboutUs = function(req, res){
    res.render('templates/about.html');
};
exports.contactUs = function(req, res){
    res.render('templates/contact.html');
};
exports.biodataTemplates = function(req, res){
    res.render('templates/biodata-templates.html');
};
