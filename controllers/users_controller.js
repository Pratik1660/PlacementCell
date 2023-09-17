module.exports.profile= (req,res)=>{
    return res.render('user_profile', {title: "Profile page"});
}

//render the sign up page
module.exports.signup= (req, res)=>{
    return res.render('user_sign_up', {title: "Placement cell | Sign Up"});
}


// render the sign in page
module.exports.signin= (req, res)=>{
    return res.render('user_sign_in', {title: "Placement cell | Sign In"});
}

const User= require('../models/user');
//get the sign up data
module.exports.create= (req, res)=>{
    if(req.body.password!= req.body.confirm_password){
        return res.redirect('back');
    }

User.findOne({ email: req.body.email })
    .then((user) => {
        if (!user) {
            User.create(req.body)
                .then(() => {
                    res.redirect('/users/sign-in');
                })
                .catch((err) => {
                    console.log('error in creating user in signing up', err);
                    return;
                });
        } else {
            res.redirect('back');
        }
    })
    .catch((err) => {
        console.log('error in finding user in signing up', err);
        return;
    });
}


//sign in and create session 
module.exports.create_session = (req, res)=>{
    User.findOne({ email: req.body.email })
    .then((user) => {
        if (user) {
            if(user.password!=req.body.password){
                return res.redirect('back');
            }

            //handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        } else {
            res.redirect('back');
        }
    })
    .catch((err) => {
        console.log('error in finding user in signing in', err);
        return;
    });
}


//show details of signed in user

module.exports.profile= (req,res)=>{
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id)
        .then((user) => { if(user){
                return res.render('user_profile', {
                    title:"User Profile",
                    user: user
                })
            }
            return res.redirect('/users/sign-in');

        });
        
    } else{
        return res.redirect('/users/sign-in');
    }
}


