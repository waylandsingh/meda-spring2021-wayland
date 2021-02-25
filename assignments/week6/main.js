console.log("something funny")

var numberToTest = 103

if (numberToTest >= 101) {
    console.log('It\'s a big\'un');
    console.log("don't forget the semicolon, bro")
}

// short circuiting logical operators: 
//|| returns LH if LF is Truthy, RH otherwise
console.log(true || "true");

// && does the opposite: return LH if LH is Falsy, RH otherwise
// this returns the empty string (which is Falsy)
console.log('' && "Man!");

//testing the prompt function
// let a = prompt('what is updog?')
// console.log(a)

// array, multivar instantiation
// let b = [1, 3, 5], c = {1:'hashmap?'};
// console.log(b[1], c[1]);

// for loop syntax
s = ''
for (let i = 0; i < 7; i++){
    s += '#';
    console.log(s);
}

// while loop syntax
s = ''
while (true) {
    s += '#';
    console.log(s);
    if (s.length == 7) {
        break;
    }
}

// fizzbuzz
let b = "Buzz", f = "Fizz";
for (let j = 1; j < 101; j++) {
    // if (j % 3 == 0) {
    //     console.log(f);
    // }
    // if (j % 5 == 0) {
    //     console.log(b);
    // }
    // console.log(j)

    //shmancy way to do it with ternary operator
    s = (j%3==0) ? 'Fizz' : '';
    s += (j%5==0) ? 'Buzz' : '';
    s = (s) ? s : j;
    console.log(s);
}

//self calling function: simultaneous definition + call
(function somefunction() {
    console.log('this is some fun k shun')
})()

// inline function definition
let someArray = [10, 20, 30, 40, 50];

someArray.forEach(function (aVal) {
    console.log(aVal + 100);
});

// recursive functions calling themselves. Need some kind of way to have the function stop calling itself