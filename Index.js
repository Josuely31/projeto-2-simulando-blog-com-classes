const Comment = require('./Comment')
const Author = require('./Author')
const Post = require('./Post')


const author1 = new Author(
    'Jonh Wick',
)

const post1 = new Post(
    'Título do post',
    'Conteúdo do post',
)


const comment1 = new Comment(
    'Winston',
    'Que bacana!'
)


const comment2 = new Comment(
    'Coleen Houver',
    'É assim que acaba',
)

console.log(post1)
console.log(author1)
console.log(comment1)
console.log(comment2)