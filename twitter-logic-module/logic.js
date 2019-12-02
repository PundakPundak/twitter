/*
Here is what should go inside your Tweeter module:

1. An array of posts - 
    this should be private. Use the dummy data below to get started
2. A variable postIdCounter -
    to count the number of total posts
3. A variable commentIdCounter -
    to count the number of total comments
4. getPosts function -
    returns the posts array
5. An addPost function -
    receives some text and adds a post object to posts
6. Each object should have three properties: 
    id, text, and comments
7. You should generate the next id correctly for each post: "p4", "p5", ...
8. The comments array should be empty initially
9. A removePost function -
     that receives a postID and removes the relevant post from posts

     Stop here. Make sure everything works. 
10. An addComment function -
     that receives a postID and text. It should push an object to the relevant post's comments array
11. The object should have two properties: 
    text and id - this is the comment's ID
12. You should generate the next id correctly for each comment:
    "c7", "c8", ...
13/ A removeComment function -
     that receives a postID and a commentID - you understand what it should do
*/

/*
When you select something with jQuery you are invoking a function and passing in an argument
The argument is used to determine what you want to select
The result of invoking that function is an array of elements and some special jQuery methods
We can use these methods to manipulate the returned array of elements
*/

/*Example: Private*/
/*
//Add another two users
//Show the users
//Try to do console.log(userModule.users) - what do you see?
const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];
    const addUser = function (user) {
        _users.push(user)
    }
    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }
    return {
        addUser: addUser,
        listUsers: listUsers
    }
}
const usersModule = UsersModule()
usersModule.addUser('Narkis')
usersModule.listUsers()
console.log(userModule.users)
*/


const TweeterModule = function () {
    /*Tweeter function scope*/
    let postIdCounter = 0 //Initialize as int type
    let commentIdCounter = 0 //Initialize as int type
    /*An array with posts. Each post is an objec*/
    const _postArr = []
    /*
        {
            id: "p1",
            text: "First post!",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            id: "p2",
            text: "Aw man, I wanted to be first",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    //End of _postArr
    */

    /*Continue Tweeter function scope*/

    /*Continue Tweeter function scope*/
    const getPosts = function (){ // returns the posts array
        return _postArr
    }

    /*Continue Tweeter function scope*/
    const addPost = function (newPostText) { //I want to Use _postArr.push(). It's private and that's OK because we are inside the Tweeter function scope        

        postIdCounter++ //Increment because we add a new post
        newPost = {
            id: 'p' + postIdCounter, 
            text: newPostText,
            comments: [] //No comments yet so I put empty array here
        } 
        _postArr.push(newPost)
    }

    const removePost = function (postId) {
        const indexToRemove = _postArr.findIndex( post => post.id == postId ); //Finds index in _postArr with a certain post ID
        _postArr.splice(indexToRemove,1)
    }

    const addComment = function (commentText, postId) {

        commentIdCounter++ //Increment because we add a new comment
        newComment = {
            id: 'c' + commentIdCounter, text: commentText } 
        _postArr.find(post => post.id == postId).comments.push(newComment)

    }

    const removeComment = function (postId, commentId) {
        const postIndex= _postArr.findIndex( post => post.id == postId ); //Finds index in _postArr with a certain post ID
        const commentIndexToRemove = _postArr[postIndex].comments.findIndex( comment => comment.id == commentId ); //Find index in the relevant post comments array, which is _postArr[postIndex].comments , with a certain comment ID
        _postArr[postIndex].comments.splice( commentIndexToRemove ,1)
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}
/*Main scope*/
/*  TEST CODE    */
/*
const tweeter = TweeterModule()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

//============================
//============================
//Stop here
//Make sure everything works. Then keep going
//============================
//============================

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "
*/
/* End of TEST CODE */