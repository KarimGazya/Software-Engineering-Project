let clothesBtn = document.getElementById("clothes-btn");
let toysBtn = document.getElementById("toys-btn");
let foodBtn = document.getElementById("food-btn");
let medicalSuppliesBtn = document.getElementById("medical-supplies-btn");
let schoolSuppliesBtn = document.getElementById("school-supplies-btn");
let bloodDonationsBtn = document.getElementById("blood-donations-btn");



function getClothesHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">Clothes Request</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Type</label>
            <input id="clothing-type" type="text" placeholder="Type">
        </div>
        <div class="input-container">
            <label>Age</label>
            <input id="age" type="text" placeholder="Age">
        </div>
    </div>

    <div class="gender-container">
        <label for="gender">Gender:</label>
        <input class="gender-radio" type="radio" name="gender" value="Male" id="male">
        <label class="gender-label" for="male">Male</label>
        <input class="gender-radio" type="radio" name="gender" value="Female" id="female">
        <label class="gender-label" for="female">Female</label>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Season</label>
            <input id="season" type="text" placeholder="Season">
        </div>        
        <div class="input-container">
            <label>Material</label>
            <input id="material" type="text" placeholder="Material">
        </div>
        <div class="input-container">
            <label>Quantity</label>
            <input id="quantity" type="number" placeholder="Quantity">
        </div>
    </div>
    `;
}

function getToysHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">Toys Request</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Type</label>
            <input id="toy-type" type="text" placeholder="Type">
        </div>
        <div class="input-container">
            <label>Age</label>
            <input id="age" type="text" placeholder="Age">
        </div>
    </div>

    <div class="gender-container">
        <label for="gender">Gender:</label>
        <input class="gender-radio" type="radio" name="gender" value="Male" id="male">
        <label class="gender-label" for="male">Male</label>
        <input class="gender-radio" type="radio" name="gender" value="Female" id="female">
        <label class="gender-label" for="female">Female</label>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Category</label>
            <select class="custom-select" id="category">
                <option value="boardgames">Board Games</option>
                <option value="stuffedtoys">Stuffed Toys</option>
                <option value="dolls">Dolls</option>
                <option value="sports">Sports</option>
                <option value="cars">Cars</option>
                <option value="outdoor">Outdoor</option>
            </select>
        </div>        
    </div>

    <div class="account-edit">
        <div class="input-container" id="pdf-preview-container">
            <img id="pic" src="" width="100%" height="100%"></img>
        </div>           
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Image</label>
            <input id="input-pic" type="file" accept="image/*" onchange="updatePic()">
        </div>
        <div class="input-container">
            <label>Quantity</label>
            <input id="quantity" type="number" placeholder="Quantity">
        </div>
    </div>    
    `;
}


function getFoodHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">Food Request</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Item Name</label>
            <input id="item-name" type="text" placeholder="Item Name">
        </div>
        <div class="input-container">
            <label>Quantity</label>
            <input id="quantity" type="number" placeholder="Quantity">
        </div>
    </div>
    `;
}


function getMedicalSuppliesHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">Medical Supplies Request</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Device Type</label>
            <input id="device-type" type="text" placeholder="Device Type">
        </div>
        <div class="input-container">
            <label>Use</label>
            <input id="use" type="text" placeholder="Use">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container" id="pdf-preview-container">
            <img id="pic" src="" width="100%" height="100%"></img>
        </div>           
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Image</label>
            <input id="input-pic" type="file" accept="image/*" onchange="updatePic()">
        </div>
        <div class="input-container">
            <label>Quantity</label>
            <input id="quantity" type="number" placeholder="Quantity">
        </div>
    </div>
    `;
}


function getSchoolSuppliesHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">School Supplies Request</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Food Type</label>
            <input id="item-type" type="text" placeholder="Food Type">
        </div>
        <div class="input-container">
            <label>Quantity</label>
            <input id="quantity" type="number" placeholder="Quantity">
        </div>
    </div>
    `;
}

function getBloodDonationsHTML() {
    return `
    <div class="account-header">
        <h1 class="account-title">Blood Donations</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleCreateButtonClick()">Create</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Name of Patient</label>
            <input id="patient-name" type="text" placeholder="Name of Patient">
        </div>
        <div class="input-container">
            <label>Blood Type (including RH type)</label>
            <input id="blood-type" type="text" placeholder="Blood Type">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Hospital Name</label>
            <input id="hospital-name" type="text" placeholder="Hospital Name">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Hospital Area</label>
            <input id="hospital-area" type="text" placeholder="Area">
        </div>
        <div class="input-container">
            <label>Hospital Governorate</label>
            <input id="governorate" type="text" placeholder="Governorate">
        </div>
        <div class="input-container">
            <label>Hospital Address</label>
            <input id="hospital-address" type="text" placeholder="Address">
        </div>
    </div>
    `;
}


// Function to execute when the accountBtn is clicked or when the page is loaded
function reloadPage() {
    const section = localStorage.getItem("section")
    if (section === "clothes-btn") {
        document.getElementById("form-id").innerHTML = getClothesHTML();
    }

    if (section === "toys-btn") {
        document.getElementById("form-id").innerHTML = getToysHTML();
    }

    if (section === "food-btn") {
        document.getElementById("form-id").innerHTML = getFoodHTML();
    }

    if (section === "medical-supplies-btn") {
        document.getElementById("form-id").innerHTML = getMedicalSuppliesHTML();
    }

    if (section === "school-supplies-btn") {
        document.getElementById("form-id").innerHTML = getSchoolSuppliesHTML();
    }

    if (section === "blood-donations-btn") {
        document.getElementById("form-id").innerHTML = getBloodDonationsHTML();
    }
}

document.addEventListener("DOMContentLoaded", reloadPage);

clothesBtn.onclick = () => {
    localStorage.setItem("section", "clothes-btn");
    document.getElementById("form-id").innerHTML = getClothesHTML();
}

toysBtn.onclick = () => {
    localStorage.setItem("section", "toys-btn");
    document.getElementById("form-id").innerHTML = getToysHTML();
}

foodBtn.onclick = () => {
    localStorage.setItem("section", "food-btn");
    document.getElementById("form-id").innerHTML = getFoodHTML();
}

medicalSuppliesBtn.onclick = () => {
    localStorage.setItem("section", "medical-supplies-btn");
    document.getElementById("form-id").innerHTML = getMedicalSuppliesHTML();
}

schoolSuppliesBtn.onclick = () => {
    localStorage.setItem("section", "school-supplies-btn");
    document.getElementById("form-id").innerHTML = getSchoolSuppliesHTML();
}

bloodDonationsBtn.onclick = () => {
    localStorage.setItem("section", "blood-donations-btn");
    document.getElementById("form-id").innerHTML = getBloodDonationsHTML();
}

function updatePic(){
    let pic = document.getElementById("pic");
    let inputPic = document.getElementById("input-pic");

    pic.src = URL.createObjectURL(inputPic.files[0]);
}

function handleCreateButtonClick() {
    var form = document.getElementById("form-id");

    var inputs = form.querySelectorAll("input");

    var anyEmpty = false;

    inputs.forEach(function(input) {
        if (input.value.trim() === "") {
            anyEmpty = true;
        }
    });

    if (anyEmpty) {
        displayMessage("Please fill in all fields.", "alert-danger");
    } else {
        displayMessage("Request submitted successfully.", "alert-success");
    }
}

function displayMessage(message, alertClass) {
    // Remove any existing message divs
    const existingMessages = document.querySelectorAll('.alert');
    existingMessages.forEach(messageDiv => {
        messageDiv.remove();
    });

    // Create and append the new message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("alert", alertClass);
    messageDiv.setAttribute("role", "alert");
    messageDiv.textContent = message;

    const form = document.getElementById("form-id");
    form.appendChild(messageDiv);
}