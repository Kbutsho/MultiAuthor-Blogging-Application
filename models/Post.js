const { Schema, model } = require('mongoose');
// const Comment = require('./Comment');
// const User = require('./User');

const postSchema = new Schema({
    title: {
        required: true,
        type: String,
        maxlength: 100,
        trim: true
    },
    body: {
        required: true,
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    thumbnail: String,
    readTime: String,
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    disLikes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {
    timestamps: true
});

const Post = model('Post', postSchema);
module.exports = Post;