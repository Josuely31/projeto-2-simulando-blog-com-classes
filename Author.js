const Post = require('./Post')


class Author{
    constructor(author, post){
        this.author = author
        this.post = [post]
    }
    
    addPost(){
    const newPost = new Post(comment, this);
    this.posts.push(newPost);
    return newPost

    }
}


module.exports = Author 