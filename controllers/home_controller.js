const Student = require("../models/student");

module.exports.home= (req,res)=>{
    Student.find({})
    .then((students)=>{return res.render('home', {title: "Home", students: students})})

}