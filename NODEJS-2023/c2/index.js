// console.log('zdravo svetu');
// console.log(5!=5);
// console.log(typeof 25);

// const chovek = {
//     name: "John",
//     surname: "Doe"
// };


// console.log(chovek);
// a = 10;
// console.log(a);
// a = 12;
// console.log(a);
// const b = 15;
// console.log(b);


let student = {
    ime: "Pero",
    prezime: "Nakov",
    vozrast: 25
};

console.log(student);

student = {
    ime: "Pero",
    
};

console.log(student);


function testFn() {
    console.log('a:', a);
    console.log('b:', b);
    return 'Test ';
}

console.log(testFn());
let test_fn = testFn(a, b);
console.log(test_fn);

const testFn1 = () => {
    console.log('test fn initiated. This is an arrow function');
}

testFn1();

const testFn2 = (b, a = 25) => {
    return a + b
    console.log(testFn2(50, 20));
}

const testFn3 = (0 = {}) => {
    o.ime = "Zivko"
    console.log(o);
}
const s = {}
    o.ime = "Zivko"
    console.log(o);

const convert = (type, value) => {
    switch (type) {
        case 'c2f':
            return value * 9/5 + 32;
         case 'c2f':  
         return (value - 32) * 5/9;
    }
}


const ucenik1 = { ime: "Stefan", prezime: "Petreski", ocenka: 5};
const ucenik2 = { ime: "Marija", prezime: "Stojanovska", ocenka: 3};
    
    

console.log(ucenik);