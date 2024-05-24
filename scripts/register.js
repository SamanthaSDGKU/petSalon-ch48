let petSalon={//obj
    name:"The Fashion pet",//var
    phone:"666-6666-6666",//var
    hours:{//obj
        open:"9:00 am",//var
        close:"9:00 pm"//var
    },
    pets:[
        { 
            name:"Scooby",
            age:99,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Scrappy",
            age:99,
            gender:"Male",
            service:"Grooming"
        },
        {
            name:"Tweety",
            age:89,
            gender:"Female",
            service:"Nails cut"
        }
    ]
}

function displayNames(){
    let names="";
    //suggestion: use a loop
    for(let i=0;i<3;i++){
        names+=`<p> ${petSalon.pets[i].name} </p>`;
        console.log(names);
    }
    document.getElementById("petNames").innerHTML=names;
}

function countPets(){
    console.log(petSalon.pets.length);
}