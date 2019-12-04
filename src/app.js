console.log("App.js is running");

//JSX
var template = <h1 id="some id">Will it change?....Yes, it did!</h1>;
/* var template = React.createElement(
    "h1", 
    {
        id: "some id"
    }, 
    "Something new"
); */
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);