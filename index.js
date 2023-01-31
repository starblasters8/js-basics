        //Comment the same as Java, // or /* */ and ' is used for a String '
        //Run node stuff be typing node index.js in the terminal in the same directory as the index.html file
        //console.log('Hello World');

        //you can make a popup with alert('Hello World');

        //use let to declare a variable (var is also used but let is better)
        //single quote and double quote work for Strings

        //no reserved keywords
        //should be meaningful
        //cannot start with a number (1name)
        //cannot contain a space or hyphen (-)
        //are case-sensitive

        //camel case is usually used for variables
        let name = "Mosh";

        let firstName;
        let FirstName

        let lastName, lasterName;

        //Constants
        //constants defined using const with NO let
        //if you try to change the value of a constant you will get an error
        //constants are usually written in all caps
        //if you want to change values in a constant use let otherwise use const
        const interestRate = 0.3;

        //Primitives/Value Types
        //String, Number, Boolean, undefined, null
        let nameTwo = "Mosh"; //String Literal
        let age = 30; //Number Literal
        let isApproved = true; //Boolean Literal
        let firstNameTwo = undefined; //undefined
        let selectedColor = null; //null clears value of a variable
        //there's also a symbol type but it's not used much

        //typeof operator checks type of variable
        //console.log(typeof nameTwo); //outputs string

        nameTwo = 34;
        //console.log(typeof nameTwo); //outputs number
        //this is called dynamic typing because the type of a variable can change at runtime

        //JS shows all numbers (float and int) as just "number"
        //console.Log(typeof firstNameTwo); //outputs undefined
        //console.log(typeof selectedColor); //outputs object

        //Objects
        //refrence types object, array, function

        let person = {
            name: "Mosh",
            age: 30
        };// object literal

        //console.log(person); // returns { name: 'Mosh', age: 30 }

        //Dot notation
        person.name = "John";
        //console.log(person); // returns { name: 'John', age: 30 }

        //Bracket notation
        person["age"] = 31;
        //console.log(person); // returns { name: 'John', age: 31 }
        let selection = "name";
        person[selection] = "Mary";
        //console.log(person); // returns { name: 'Mary', age: 31 }

        //Arrays
        //let selectedColors = []; //empty array [] means array literal
        let selectedColors = ["Red", "Blue"];
        //console.log(selectedColors); // returns [ 'Red', 'Blue' ]
        //console.log(selectedColors[0]); // returns Red

        //type of objects in an array can be different
        selectedColors[2] = 1;
        //console.log(selectedColors); // returns [ 'Red', 'Blue', 1 ]

        //console.log(selectedColors.length); // returns 3

        //Functions (methods in java)

       // function greet()
       // {
       //     console.log("Hello world!");
       // }
       // greet(); // returns Hello world!

       // function greet(name)
       // {
       //     console.log("Hello " + name);
       // }
       // greet("John"); // returns Hello John
       // greet("Mary"); // returns Hello Mary

       //function greet(name, lastName)
       //{
       //     console.log("Hello " + name + " " + lastName);
       //}
       //greet("John", "Smith"); // returns Hello John Smith

       // function square(number)
       // {
       //     return number*number;
       // }
       // let number = square(2); // sets number to 4
       // console.log(square(2)); // returns 4

       class Person
         {
              constructor(name)
              {
                this.name = name;
              }
         }

        let personer = new Person("John");
        console.log(personer.name); // returns John