fetch("https://randomuser.me/api/?results =3")
.then(function(response){
    //do something with the result
    //extract the json from the response
    console.log('response status: ', response.status)
    return response.json();
}).then(function(json){
    //do something with the json payload
    //this is unpacking the json so it can be called
    console.log("response payload: ", json);
    processJson(json);// passing the (json) to the DOM function
})

//this is a function that toggles the display of the address class on and off
function handleSubmit() {
    var toggleDisplay = document.querySelectorAll(".address");
    console.log(toggleDisplay);
    for(let i = 0; i < toggleDisplay.length; i++){
 if(toggleDisplay[i].getElementsByClassName.display === "block") {
     toggleDisplay[i].getElementsByClassName.display = "none";
 }else{
     toggleDisplay[i].getElementsByClassName.display = "block";
 }
    }
}

// create a list of new element

let newLi = document.createElement("li");
let newSpan = document.createElement("span");
let newP = document.createElement("p");
let newDiv = document.createElement("div")
let newImg = document.getElementById("Img");
let theUl = document.getElementById("people-list");



let processJson = function(json) {
    //loop through the array and process one contact at a time
    for(let i =0; i < json.results.length; i++){
        let contact = json.results[i]; //creates a variable for every contact
        processContact(contact);
    }
}


//process one contact at a time and update the dom with that contact info
let processContact = function(contact) {
    let firstName = contact.firstName.first
    let lastName = contact.lastName.last;
    let email = contact.email;
    let city = contact.location.city;
    let state = contact.location.state;

    let street = contact.location.street.number + '' + contact.location.street.name;
    let picture = contact.picture.thumbnail;
    let newLi = document.createElement("li");
    let newSpan = document.createElement("span");
    let newP = document.createElement("p");
    let newA = document.createElement("a");
    let newDiv = document.createElement("div");
    let newImg = document.createElement("img")
    let theUl = document.getElementById("people-list");
    let newHr = document.createElement("hr");


    theUl.appendChild(newLi);
    newLi.appendChild(newSpan);
    newSpan.append(firstName, '',lastName);
    newLi.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newImg.src = picture;
    newImg.append(picture);
    newLi.appendChild(newP);
    newP.append("Email : ", email);
    newLi.appendChild(newA);
    newA.append("Address: ", street, " , ", city, " , ",state)
    newA.setAttribute('class', 'address')
    newLi.appendChild(newHr);


}