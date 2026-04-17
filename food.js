let data = {
    fastfood: [
        "KFC",
        "Pizza Hut",
        "Burger King",
        "Takeout",
        "Madchef",
        "Chillox",
        "BFC",
        "Herfy",
        "American Burger",
        "Popeyes",
        
    ],

    bangladeshi: [
        "Haji Biriyani",
        "Star Kabab & Restaurant",
        "Nanna Biriyani",
        "Kacchi Bhai",
        "Sultan’s Dine",
        "Puran Dhaka Restaurant",
        "Fakruddin Biriyani",
        "Al Razzaque Restaurant",
        "Cafe Nawab",
        
        
    ],


    dessert: [
        "Premium Sweets",
        "Well Food",
        "Takeout Dessert",
        "Cold Stone Creamery",
        "Baskin Robbins",
        "Gelatissimo",
        "Tabaq Coffee",
        "Cheez Dessert Bar",
        "Bella Italia Dessert",
        
    ],

    chinese: [
        "Mainland China",
        "Red Chili Restaurant",
        "Kungfu Restaurant",
        "Golden Dragon",
        "China Garden",
        "Sizzling Wok",
        "Shanghai Express",
        "Dragon House",
        "Panda Garden",
        "Beijing Restaurant",
        
    ],

    indian: [
        "Handi Restaurant",
        "Nawab Restaurant",
        "Spice & Rice",
        "Royal Indian Cuisine",
        "Indian Spice House",
       
    ],

    drinks: [
        "Tabaq Coffee",
        "North End Coffee",
        "Gloria Jean's Coffee",
        "Coffee World",
        "Coffee House",
        
    ],

    healthy: [
    "Green Plate",
    "Fit Food Corner",
    "Nutri Bowl",
    "Fresh & Fit",
    "Healthy Choice"
    ]
};

function goToRestaurant(category){
    localStorage.setItem("category", category);
    window.location.href = "restaurant.html";
}

if(document.getElementById("restaurant")){
    let category = localStorage.getItem("category");
    let select = document.getElementById("restaurant");

    data[category].forEach(rest => {
        let option = document.createElement("option");
        option.text = rest;
        select.add(option);
    });
}

function goToItems(restaurant){
    localStorage.setItem("restaurant", restaurant);
    window.location.href = "items.html";
}


function registration(){
    document.getElementById("form2").style.display = "block";
    document.getElementById("form1").style.display = "none";
    document.getElementById("official").innerHTML =
        `Already have an account?
         <a href="#" onclick="login()">Log in</a>`;
}
function login(){
    document.getElementById("form1").style.display = "block";
    document.getElementById("form2").style.display = "none";
    document.getElementById("official").innerHTML =
        `Don't have an account?
         <a href="#" onclick="registration()">Register</a>`;
}
function validateUsername() {
    let username = document.getElementById("username").value;
    let error = document.getElementById("userError");
    if (username.length > 0 && username.length <= 5) {
        error.innerHTML = "Username must be greater than 5 characters";
        error.style.color = "red";
    } else {
        error.innerHTML = "";
    }
}
document.getElementById("fname").addEventListener("input", ()=> {
    const val = document.getElementById("fname").value;
    const efname = document.getElementById("flname");
    let flag = 1;
    for (let i = 0; i < val.length; i++) {
        if ((val[i] >= 'A' && val[i] <= 'Z') || (val[i] >= 'a' && val[i] <= 'z') ||(val[i] === ' ')) {
            continue;
        } else {
            flag = 0;
            break;
        }
    }
    if (flag === 0) {
        efname.innerHTML = "<br>Only Alphabets are allowed";
        efname.style.color = "red";
    } else {
        efname.innerHTML = "";
    }
});
document.getElementById("lname").addEventListener("input", ()=> {
    const val = document.getElementById("lname").value;
    const elname = document.getElementById("elname");
    let flag = 1;
    for (let i = 0; i < val.length; i++) {
        if ((val[i] >= 'A' && val[i] <= 'Z') || (val[i] >= 'a' && val[i] <= 'z') ||(val[i] === ' ')) {
            continue;
        } else {
            flag = 0;
            break;
        }
    }
    if (flag === 0) {
        elname.innerHTML = "<br>Only Alphabets are allowed";
        elname.style.color = "red";
    } else {
        elname.innerHTML = "";
    }

});
function validation(){
    let x = document.getElementById("uname").value;
    if(x.length < 3){
        alert("username must be minimum 3 charcters!");
    }
}
document.getElementById("pass").addEventListener("input", ()=>{
    let val = document.getElementById("pass").value;
    let eCA = document.getElementById("eCA");
    let eSA = document.getElementById("eSA");
    let eD = document.getElementById("eD");
    let eSC = document.getElementById("eSC");
    let ca = 0, sa = 0, d = 0, sc = 0;
    for(let i = 0; i<val.length; i++){
        if(val[i]>='A' && val[i]<='Z'){
            ca = 1;
        } else if(val[i]>='a' && val[i]<='z'){
            sa = 1;
        } else if(val[i]>='0' && val[i]<='9'){
            d = 1;
        } else if(val[i]==' '){
            continue;
        } else{
            sc = 1;
        }
    }
    if(ca == 1){
        eCA.innerHTML = "<br>✔️Capital Alphabet";
    } else{
        eCA.innerHTML = "<br>❌Capital Alphabet";
    }
    if(sa == 1){
        eSA.innerHTML = "<br>✔️Small Alphabet";
    } else{
        eSA.innerHTML = "<br>❌Small Alphabet";
    }
    if(d == 1){
        eD.innerHTML = "<br>✔️Digit";
    } else{
        eD.innerHTML = "<br>❌Digit";
    }
    if(sc == 1){
        eSC.innerHTML = "<br>✔️Special Characters";
    } else{
        eSC.innerHTML = "<br>❌Special Characters";
    }
});
document.getElementById("fname").addEventListener("input", ()=>{
    const val = document.getElementById("fname").value;
    const efname = document.getElementById("efname");
    const sub = document.getElementById("x");
    let flag = 1;
    for(let i = 0; i < val.length; i++){
        if((val[i]>='A' && val[i]<='Z') || (val[i]>='a' && val[i]<='z') || val[i]==' '){
            flag = 1;
            continue;
        }
        flag = 0;
        break;
    }
    if(flag == 0){
        efname.innerHTML = "<br>Only Alphabets are allowed";
        efname.style.color = "Red";
        sub.disabled = true;
    } else{
        efname.innerHTML = "";
        sub.disabled = false;
    }
});
document.getElementById("lname").addEventListener("input", ()=>{
    const val = document.getElementById("lname").value;
    const elname = document.getElementById("elname");
    let flag = 1;
    for(let i = 0; i < val.length; i++){
        if((val[i]>='A' && val[i]<='Z') || (val[i]>='a' && val[i]<='z') || val[i]==' '){
            flag = 1;
            continue;
        }
        flag = 0;
        break;
    }
    if(flag == 0){
        elname.innerHTML = "<br>Only Alphabets are allowed";
        elname.style.color = "Red";
    } else{
        elname.innerHTML = "";
    }
});
function validateGender() {
    const genders = document.getElementsByName("gender");
    const error = document.getElementById("genderError");
    let selected = false;
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            selected = true;
            break;
        }
    }
    if (!selected) {
        error.innerHTML = "Select one";
        error.style.color = "red";
    } else {
        error.innerHTML = "";
    }
} const genders = document.getElementsByName("gender");
for (let i = 0; i < genders.length; i++) {
    genders[i].addEventListener("change", function() {
        document.getElementById("genderError").innerHTML = "";
    });
}
function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== "" && !pattern.test(email)) {
        error.innerHTML = "Invalid email format";
        error.style.color = "red";
    } else {
        error.innerHTML = "";
    }
}

function checkErrors() {
    let userError = document.getElementById("userError").innerHTML;
    let emailError = document.getElementById("emailError").innerHTML;
    let btn = document.getElementById("registerBtn");
    if (userError === "" && emailError === "") {
        btn.disabled = false;   // Enable
    } else {
        btn.disabled = true;    // Disable
    }
}

function validateUsername() {
    let username = document.getElementById("username").value;
    let error = document.getElementById("userError");
    if (username.length <= 5) {
        error.innerHTML = "Username must be greater than 5 characters";
        error.style.color = "red";
    } else {
        error.innerHTML = "";
    }
    checkErrors();   // 🔥 Important
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let error = document.getElementById("emailError");
    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        error.innerHTML = "Invalid email format";
        error.style.color = "red";
    } else {
        error.innerHTML = "";
    }

    checkErrors();   // 🔥 Important
}


function submitForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields!");
        return false;
    }

    document.getElementById("successMsg").classList.remove("hidden");

    document.querySelector("form").reset();

    return false; // page reload বন্ধ করার জন্য
}

function calculateTotal(){

let burger = document.getElementById("burgerQty").value * 5;
let pizza = document.getElementById("pizzaQty").value * 10;
let ice = document.getElementById("iceQty").value * 4;
let coffee = document.getElementById("coffeeQty").value * 3;

let total = burger + pizza + ice + coffee;

document.getElementById("totalPrice").innerText = total;

}
document.getElementById("restaurantSelect").addEventListener("change", function() {
    loadMenuForRestaurant(this.value);
});

