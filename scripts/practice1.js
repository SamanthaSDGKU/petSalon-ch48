var globalVariable="I am global variable";

function myFunction(){
    var localVariable="I am local variable";
    console.log(globalVariable);
    
    globalVariable="I change it!!!";
    
    if(true){
        console.log(localVariable);
        let blockVariable="I am block variable";
        console.log(globalVariable);
        console.log(blockVariable);
    }
    
}

//object literal {}
let student1 = {
    name:"Kevin",
    email:"kevin@gmail.com",
    grades:[3.7,3.8,3.6],
    credentials:{
        uname:"gare",
        password:"gare"
    },
    gitCredentials:{
        uname:"gare",
        password:"gare"
    }
}

let student2={
    name:"Terry",
    email:"terry@gmail.com",
    grade101:3.6,
    grade102:3.8
}

console.log(student1);
console.log(student2);

//Arrays []
let myArray=[10,false,"Richard",student2];
console.log(myArray[2]);//Richard