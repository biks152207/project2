
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Tutorial' });
};
exports.member=function(req,res){
    res.render('member',{title:'member'});
    
    
};
exports.contact=function(req,res){
    
 res.render('contact',{title:'contact'});   
};