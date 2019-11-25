const tweeter = TweeterModule() //MODEL in MVC
const renderer = RendererModule() //VIEW in MVC

console.log(tweeter)
renderer.renderPosts(tweeter.getPosts())