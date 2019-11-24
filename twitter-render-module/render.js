/*Test array*/
const TweeterModule = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const getPosts = () => _posts

    return {
        getPosts: getPosts
    }
}

const RendererModule = function () {
    /*Renderer function scope*/
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let post of posts) {
            $('#posts').append('<div data-id="' + post.id + '" class="post" > ' + post.text + ' </div>')
            addComments(post)
        }
    }
    const addComments = function (post) {
        comments = post.comments
        if (comments.length >= 1) {
            $('#posts').append('<p> Comments: </p>') //Check how to make <p> a child of <posts> (In the DOM traversal lessons)
        }
        for (let comment of comments) {
            $('#posts').append('<div data-id="' + comment.id + '" class="comment" > ' + comment.text + ' </div>') //Check how to make <div> a child of <posts> (In the DOM traversal lessons)
        } 
    }
    return {
        renderPosts: renderPosts //Not exposing any other function
    }
}

/*Main scope*/
/*  TEST CODE    */
const tweeter = TweeterModule()
const renderer = RendererModule()
renderer.renderPosts( tweeter.getPosts() )
console.log( tweeter.getPosts() )

//============================
//Stop here
//Make sure everything works. Then keep going
//============================

/* End of TEST CODE */