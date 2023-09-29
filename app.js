const heading  = React.createElement("h1",{
    id:"title",
},"Namaste React!");

 const heading1 = React.createElement("h1",{
    id:"title",
 },"heading1");

 const heading2 = React.createElement("h2",{
    id:"title",
 },"heading2");

 const container = React.createElement("div",{
    id:"container",
 },[heading1,heading2])


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(container);


// console.log(container);
// whenever we need to modify at browser end use reactDOM
// passing a react element inside the root
// only one root and one render method 
//react element is basically an object