/*
We'll use our main.js file as our controller file.

Specifically, we want to add a listener on the following elements:

The Twit button
The Delete Post button
The Comment button
The X next to each comment

Remember how we add listeners on dynamic elements? If not, refer back to the jQuery intro lesson - all of the listeners (except on Twit) will be dynamic!

There's not much code to write since your other modules do most of the work, but one last time you're on your own with the following guidelines:

When the user clicks on the Twit button, you should grab the value from the big input and create a new post
Notice that you already have an addPost function in your Tweetermodule - invoke it!
When the Delete Post button is clicked, grab the ID of the post using what you learned about DOM Traversal and invoke the removePost function in your logic module

Stop here
Make sure everything works. Then keeping coding

When the Comment button is pressed, again use DOM Traversal to get the ID of the post, then grab the text to be added, and invoke your addCommentfunction.
The DOM Traversal for this one might be a little tricky, but you've seen something similar before - you can do it!
You know what to do when the X on any comment is pressed ;)
Think about which function you want to invoke in your Tweeter module ~

Note that for all of these, it may make your life easier to add some classes in your HTML if you don't have any. 

That is to say, you might need to go back to your Renderer module and make sure you're generating HTML with some classes.

Also, make sure to re-render each time you change the data! Otherwise you'll never see the View updating!
*/

const tweeter = TweeterModule() //MODEL in MVC
const renderer = RendererModule() //VIEW in MVC

//console.log(tweeter)
$(`#post`).on("click", function() {
    const post = $(`#post-input`).val()
    if (post) {
        tweeter.addPost(post)
        renderer.renderPosts(tweeter.getPosts())
    }
    $(`#post-input`).val("What's on your mind?")
})
$("#posts").on("click", ".delete", function() {
    let postIdToRemove = $(this).closest(".post").data().id
    tweeter.removePost(postIdToRemove)
    renderer.renderPosts(tweeter.getPosts())
})

/*
$(`#comment`).on("click", function() {
    const comment = $(`#comment-input`).val() //Requires DOM traversal
    if (comment) {
        tweeter.addComment(//post) //Requires DOM traversal
        renderer.renderPosts(tweeter.getPosts())
    } 
})
*/
