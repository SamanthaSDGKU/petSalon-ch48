let petSalon={//obj
    name:"The Fashion pet",//var
    phone:"666-6666-6666",//var
    hours:{//obj
        open:"9:00 am",//var
        close:"9:00 pm"//var
    },
    pets:[]
}
//constructor ... 
function Pet(name,age,gender,service){
    //properties  = parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}
function isValid(aPet){
    let validation =true;

    if(aPet.name==""){//is empty?
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");
    }
    if(aPet.service==""){//is empty?
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }
    //validate the service

    return validation;
}
function register(){
    //getting the values from the HTML
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    
    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputService);
    if(isValid(newPet)){// isValid?
        petSalon.pets.push(newPet);//adding the pet to the array
        displayCards();
        displayTotalPets();
        displayServiceCount()
    }
}

function init(){
    let pet1 = new Pet("Scooby",79,"Male","Grooming");//declaring obj
    let pet2 = new Pet("Scrappy",79,"Male","Grooming");//declaring obj
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    displayCards();
    displayTotalPets();
    displayServiceCount();
}

window.onload=init;//waiting to render the HTML
