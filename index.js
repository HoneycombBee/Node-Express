ar express = require('express');

var app = express();
const PORT = 3000;

app.set('view engine','ejs');//sent views to EJS

//home page
app.get('/', (req,res)=>{
  var title = "Our Home Page";
  res.render('index',{title:title});
});

app.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
  console.log(data);

//add users route
app.get('/users', function(req, res) {
	var title = 'Users Page';
	res.render('users/index', {
    	title: title,
    	users: data
	});

  //user/view route - we are cheating by using the array index + 1
app.get('/users/view/:id', function(req, res) {
  var title = 'User Page';
  var id = req.params.id;
  res.render('users/view', {
      title: title,
      user: data[--id]
  });
 });
 
});

});
