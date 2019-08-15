
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gloridb');

var userbiodata= require('./Biodata');
var express=require('express');
var app=express();
var bodyparser=require('body-parser');



app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


var port=process.env.PORT || 8080;


var router=express.Router();

//middleware to use for all requests
router.use(function(req, res, next){
    console.log('Something is happeing');
    next();
})

router.get('/', function(req, res){

    res.json({message: 'hooray! welcome to our api!'});
});

router.route('/Biodata')

.post(function(req, res){

    var myuser= new userbiodata();
    myuser.firstname=req.body.firstname;
    myuser.Surname=req.body.Surname;
    myuser.Gender=req.body.Gender;
    myuser.Local_Govt=req.body.Local_Govt;
    myuser.State=req.body.State;
    myuser.Country= req.body.Country;

    //save the user and check for errors
    
    myuser.save(function(err){
        if(err)

        res.send(err);

        res.json({  message: 'user created'});
    });
   
})

.get(function(req, res){
    userbiodata.find(function(err, users){
        if(err)
        res.send(err);
        res.json(users);
    });
});

router.route('/Biodata/:user_id')

.get(function(req, res){
    userbiodata.findById(req.params.user_id, function(err, users){
        if (err) res.send(err);
        res.json(users);
    });
})

        .put(function(req, res){
    userbiodata.findById(req.params.user_id, function(err, users){

        if(err)
        res.send(err);

        users.firstname=req.body.firstname;
        users.Surname=req.body.Surname;
        users.Gender=req.body.Gender;
        users.Local_Govt=req.body.Local_Govt;
        users.State=req.body.State;
        users.Country=req.body.Country;

        users.save(function(err){

            if(err)
            res.send(err);
            res.json({Message: 'user updated'});
        });
    });
})

.delete(function(req, res){

    userbiodata.remove({ _id: req.params.user_id},
        function(err, users){
            if (err)
            res.send(err);

            res.json({message: 'Successfull Deleted'});
        });

    })
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port' + port);