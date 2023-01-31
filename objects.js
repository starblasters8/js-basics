//object literals
/*
let blogs = [
    {title: "why mac & cheese rules", likes: 30},
    {title: "10 things to make with marmite", likes: 50}
]
*/

let user = {
    name: "Crystal",
    age: 30,
    email: "crystal@zachiscool.fun",
    location: "Berlin",
    blogs: [
        {title: "why mac & cheese rules", likes: 30},
        {title: "10 things to make with marmite", likes: 50}
    ],
    login: function(){
        console.log("the user logged in");
    },
    logout: function(){
        console.log("the user logged out");
    },
    logBlogs(){
        //this is a reference to the object/context
        console.log("this user has written the following blogs:");
        this.blogs.forEach(blog => {console.log(blog.title, blog.likes);});
    }
};
//arrow functions don't change the "this" keyword
//name: function(){} is the same as name(){}

user.login();
user.logout();
user.logBlogs();


function Car(color) {
    this.color = color;
    this.drive = function(){
        console.log("vrooom");
    }
}

const carOne = new Car("red");
const carTwo = new Car("blue");
console.log(carOne.color);
console.log(carTwo.color);