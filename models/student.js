const mongoose = require('mongoose');

const studentSchema= new mongoose.Schema({
    name: {type:String,
            required: true,
            unique: true
            },

    email:{type:String,
            required: true,          
            },

    college: {type:String,
        required: true, 
           },

   batch: {type:String,
            required: true,
            unique: true
            },

    dsa:{type:Number,
            required: true,          
            },

    webdev: {type:Number,
        required: true, 
           },

    react: {type:Number,
        required: true, 
            },

    placementStatus: 
        {type: String,
        enum: ["Placed", "Not placed"],
        required: true},

    interviews: [
            {
              company: {
                type: String,
                required: true,
              },
              date: {
                type: String,
                required: true,
              },
              result: {
                type: String,
                enum: ["PASS", "FAIL", "Didn't Attempt", "On Hold", "Pending"],
              },
            },
          ],





}, {
    timestamps:true
});

const Student= mongoose.model('Student', studentSchema);

module.exports= Student;