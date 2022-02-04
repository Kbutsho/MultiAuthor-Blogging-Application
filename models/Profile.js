const { Schema, model} = require('mongoose');
// const User = require('./User');
// const Post = require('./Post');

const profileSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    title:{
        maxlength: 100,
        trim: true,
        type: String
    },
    bio:{
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePic:{
        type: String
    },
    links:{
        website: String,
        twitter: String,
        facebook: String,
        linkedin: String,
        github: String
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    bookmarks:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
},{
    timestamps: true
});

const Profile = model('Profile', profileSchema);
module.exports = Profile;