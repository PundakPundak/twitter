/*Test array*/
// const TweeterModule = function () {
//     const _posts = [
//         {
//             text: "First post!",
//             id: "p1",
//             comments: [
//                 { id: "c1", text: "First comment on first post!" },
//                 { id: "c2", text: "Second comment on first post!!" },
//                 { id: "c3", text: "Third comment on first post!!!" }
//             ]
//         },
//         {
//             text: "Aw man, I wanted to be first",
//             id: "p2",
//             comments: [
//                 { id: "c4", text: "Don't wory second poster, you'll be first one day." },
//                 { id: "c5", text: "Yeah, believe in yourself!" },
//                 { id: "c6", text: "Haha second place what a joke." }
//             ]
//         }
//     ]

//     const getPosts = () => _posts

//     return {
//         getPosts: getPosts
//     }
// }

const RendererModule = function () {
    /*Renderer function scope*/
    const renderPosts = function (posts) {
        $('#posts').empty()
        for (let post of posts) {
            $('#posts').append(`<div data-id = "${post.id}" class="post"><p class = post-text >${post.text}<p/></div>`)
            addComments(post)
            $(`[data-id=${post.id}]`).append(`<input type="text" placeholder="Got something to say?" class="comment-input">`)
            $(`[data-id=${post.id}]`).append(`<button type="button" class = "comment" >Comment</button>`)
            $(`[data-id=${post.id}]`).append(`<button class = "delete">Delete Post</button>`)
        }
    }
    const addComments = function (post) {
        comments = post.comments
        /*
        if (comments.length >= 1) {
            $(`[data-id=${post.id}]`).append('<p> Comments: </p>') //Check how to make <p> a child of <posts> (In the DOM traversal lessons)
        }
        */
        for (let comment of comments) {
            //Add delete comment icon (class = "delete-comment")
            const commentDiv = $(`[data-id=${post.id}]`).append(`<div></div>`)
            commentDiv.append(`<i class = "delete-comment">X</i>`)
            commentDiv.append(`<div data-id = "${comment.id}" class="comments" >${comment.text}</div>`)
            //$(`[data-id=${post.id}]`).append(`<i class = "delete-comment">X</i>`)
            //$(`[data-id=${post.id}]`).append(`<div data-id = "${comment.id}" class="comments" >${comment.text}</div>`)

            
        }
        
        
    }
    return {
        renderPosts: renderPosts //Not exposing any other function
    }
}

/*Main scope*/
/*  TEST CODE    */
/* End of TEST CODE */

//============================
//Stop here
//Make sure everything works. Then keep going
//============================

