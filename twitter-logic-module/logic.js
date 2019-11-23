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
let postIdCounter = 0 //Initialize as int type
let commentIdCounter = 0 //Initialize as int type

const TweeterModule = function () {
    /*Tweeter function scope*/
    
    /*An array with posts. Each post is an objec*/
    const _postArr = [ //Initialization. _postArr is Private
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

    /*Continue Tweeter function scope*/
    const updatePostIdCounter = function () {  
        //Take only the number of the last post in _postArr without the 'p'. Cast type to Int type and increment
        const lastPostId = _postArr[_postArr.length-1].id
        postIdCounter = lastPostId.substring(1) 
        postIdCounter++
    }

    const updateCommentIdCounter = function () {        // Gets array arr with post objects and return a new ID for a new post
        //return 'c' + (_postArr.comments.length + 1)   // I Assume p3 always comes after p2 etc. I need to check the assumption. 
                                             // Maybe I need to change the implementation
                                             // Also, if it's one line function, then I better use arrow functio
    }

    /*Continue Tweeter function scope*/
    const getPosts = function (){ // returns the posts array
        return _postArr
    }

    /*Continue Tweeter function scope*/
    const addPost = function (newPostText) { //I want to Use _postArr.push(). It's private and that's OK because we are inside the Tweeter function scope        
        
        updatePostIdCounter()

        newPost = {
            
            text: newPostText,
            id: 'p' + postIdCounter, 
            comments: [] //No comments yet so I put empty array here
        } 
        _postArr.push(newPost)
    }

    const removePost = function (postId) {
        const IndexToRemove = _postArr.findIndex( post => post.id == postId );
        _postArr.splice(IndexToRemove,1)
    }

    const addComment = function () {

    }

    const removeComment = function () {

    }

    return {
        updatePostIdCounter: updatePostIdCounter,
        updateCommentIdCounter: updateCommentIdCounter,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}
/*Main scope*/
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