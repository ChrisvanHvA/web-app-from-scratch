import routes from "./js/routes.js"

window.addEventListener("load", () => {
    onRouteChanged(window.location.hash);
});

window.addEventListener("hashchange", () => {
    onRouteChanged(window.location.hash);
});

routes.facts();


function onRouteChanged(hash) {
    if (hash == '#facts') {
        console.log('the fact page')
        routes.facts();

    } else if (hash == '#jokes') {
        console.log('the joke page')
        routes.jokes();
    } else {
        console.log("haha yikes");
    }
}




















// const routes = {

//     jokes: {
//         template: "jokes.html",
//         title: "jokes",
//         description: "mildly embarrasing jokes",
//     },
//     facts: {
//         template: "facts.html",
//         title: "cat facts",
//         description: "fun cat facts",
//     },
// };
// const locationHandler = async () => {
//     // get the url path, replace hash with empty string
//     var location = window.location.hash.replace("#", "");
//     // if the path length is 0, set it to primary page route
//     if (location.length == 0) {
//         location = "/";
//     }
//     // get the route object from the routes object
//     const route = routes[location] || routes["facts"];
//     // get the html from the template
//     const html = await fetch(route.template).then((response) => response.text());
//     // set the content of the content div to the html
//     document.getElementById("content").innerHTML = html;
//     // set the title of the document to the title of the route
//     document.title = route.title;
//     // set the description of the document to the description of the route
//     document
//         .querySelector('meta[name="description"]')
//         .setAttribute("content", route.description);
// };

// // create a function that watches the hash and calls the urlLocationHandler
// window.addEventListener("hashchange", locationHandler);
// // call the urlLocationHandler to load the page
// locationHandler();
