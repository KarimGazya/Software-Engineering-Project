let profilePic = document.getElementById("profile-pic");
let inputPic = document.getElementById("input-pic");

let tempData = 
{
    "id": 1,
    "first_name": "Alice",
    "last_name": "Smith",
    "gender": "Female",
    "email": "alice.smith@example.com",
    "contact_number": "+1234567891",
    "password": "strongPassword456",
    "address": "456 Oak St",
    "area": "Suburbia",
    "governorate": "Countyville",
    "profile_image": "../image/user.jpg",
    "document_verification_doctor": "../assets/certificate.pdf",
    "document_verification_teacher": "../assets/certificate.pdf",
    "specialty": "Pediatrics",
    "pro_bono_cases": 15,
    "pro_bono_classes": 3,
    "pro_bono_students": 10,
    "subject": "Chemistry",
    "lat":37.39094933041195,
    "lng":-122.02503913145092
}

inputPic.onchange = () => {
    profilePic.src = URL.createObjectURL(inputPic.files[0]);
    tempData.profile_image = profilePic.src
    localStorage.setItem('tempData', JSON.stringify(tempData));
};


// Function to handle Save button click event
function handleSaveButtonClick() {

    // Get form elements and update tempData attributes
    tempData.first_name = document.getElementById("first-name").value;
    tempData.last_name = document.getElementById("last-name").value;
    tempData.email = document.getElementById("email").value;
    tempData.contact_number = document.getElementById("phone-number").value;
    tempData.area = document.getElementById("area").value;
    tempData.governorate = document.getElementById("governorate").value;
    tempData.address = document.getElementById("address").value;

    const genderRadios = document.getElementsByName("gender");
    for (const radio of genderRadios) {
        if (radio.checked) {
            tempData.gender = radio.value;
            break;
        }
    }

    const selectedRole = localStorage.getItem("selectedRole");
    if (selectedRole === "teacher") {
        tempData.pro_bono_classes = document.getElementById("pro-bono-classes").value;
        tempData.pro_bono_students = document.getElementById("pro-bono-students").value;
        tempData.subject = document.getElementById("subject").value;
        tempData.document_verification_teacher = document.getElementById("document-pdf").src;
    } else if (selectedRole === "doctor") {
        tempData.specialty = document.getElementById("specialty").value;
        tempData.pro_bono_cases = document.getElementById("pro-bono-cases").value;
        tempData.document_verification_doctor = document.getElementById("document-pdf").src;
    }

    localStorage.setItem('tempData', JSON.stringify(tempData));

}


function populateProfile() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }
    document.getElementById("profile-pic").src = tempData.profile_image;
    document.querySelector(".profile-title").innerText = tempData.first_name + " " + tempData.last_name;
    document.querySelector(".profile-email").innerText = tempData.email;
    console.log(tempData);
}


function updatePDF() {
    let documentPDF = document.getElementById("document-pdf");
    let inputDocument = document.getElementById("document-input");
    
    if (inputDocument && documentPDF) {
        if (inputDocument.files && inputDocument.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                documentPDF.src = e.target.result;
            };
            reader.readAsDataURL(inputDocument.files[0]);
        }
    }
};

const menuLinks = document.querySelectorAll('.menu-link');

function handleMenuClick(event) {

    event.preventDefault();
    
    menuLinks.forEach(link => {
        link.classList.remove('selected');
    });

    this.classList.add('selected');
}

menuLinks.forEach(link => {
    link.addEventListener('click', handleMenuClick);
});

let accountBtn = document.getElementById("account-btn");
let passwordBtn = document.getElementById("password-btn");
let selectRoleBtn = document.getElementById("select-role-btn");
let logOutBtn = document.getElementById("log-out-btn");

function getDonorHTML() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    return `
    <div class="account-header">
        <h1 class="account-title">Account Settings</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleSaveButtonClick()">Save</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>First Name</label>
            <input id="first-name" type="text" placeholder="First Name" value="${tempData.first_name}">
        </div>
        <div class="input-container">
            <label>Last Name</label>
            <input id="last-name" type="text" placeholder="Last Name" value="${tempData.last_name}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Email</label>
            <input id="email" type="email" placeholder="Email" value="${tempData.email}">
        </div>
        <div class="input-container">
            <label>Phone Number</label>
            <input id="phone-number" type="text" placeholder="Phone Number" value="${tempData.contact_number}">
        </div>
    </div>

    <div class="gender-container">
        <label for="gender">Gender:</label>
        <input class="gender-radio" type="radio" name="gender" value="Male" id="male" ${tempData.gender === "Male" ? "checked" : ""}>
        <label class="gender-label" for="male">Male</label>
        <input class="gender-radio" type="radio" name="gender" value="Female" id="female" ${tempData.gender === "Female" ? "checked" : ""}>
        <label class="gender-label" for="female">Female</label>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Area</label>
            <input id="area" type="text" placeholder="Area" value="${tempData.area}">
        </div>
        <div class="input-container">
            <label>Governorate</label>
            <input id="governorate" type="text" placeholder="Governorate" value="${tempData.governorate}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Address</label>
            <textarea id="address" placeholder="Address">${tempData.address}</textarea>
        </div>
    </div>
`;
}

function getTeacherHTML() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    return `
    <div class="account-edit">
        <div class="input-container">
            <label for="pro-bono-classes">Number of Classes</label>
            <input type="number" id="pro-bono-classes" placeholder="Number of Pro-bono Classes" value="${tempData.pro_bono_classes}">
        </div>
        <div class="input-container">
            <label for="pro-bono-students">Number of Students</label>
            <input type="number" id="pro-bono-students" placeholder="Number of Pro-bono Students" value="${tempData.pro_bono_students}">
        </div>
        <div class="input-container">
            <label for="subject">Subject</label>
            <input type="text" id="subject" placeholder="Subject" value="${tempData.subject}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container" id="pdf-preview-container">
            <iframe id="document-pdf" src="${tempData.document_verification_teacher}" width="100%" height="500px"></iframe>
        </div>           
    </div>
    <div class="account-edit">
        <div class="input-container">
            <label for="document-input">Certificate (PDF)</label>
            <input type="file" id="document-input" accept=".pdf" onchange="updatePDF()">
        </div>       
    </div>
    `;
}

function getDoctorHTML() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    return `
    <div class="account-edit">
        <div class="input-container">
            <label for="specialty">Specialty</label>
            <input type="text" id="specialty" placeholder="Specialty" value="${tempData.specialty}">
        </div>
        <div class="input-container">
            <label for="pro-bono-cases">Number of Pro-bono Cases</label>
            <input type="number" id="pro-bono-cases" placeholder="Number of Pro-bono Cases" value="${tempData.pro_bono_cases}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container" id="pdf-preview-container">
            <iframe id="document-pdf" src="${tempData.document_verification_doctor}" width="100%" height="500px"></iframe>
        </div>           
    </div>
    <div class="account-edit">
        <div class="input-container">
            <label for="document-input">Certificate (PDF)</label>
            <input type="file" id="document-input" accept=".pdf" onchange="updatePDF()">
        </div>       
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label for="map-link">Specify Clinic Location</label>
        </div>
        <div class="input-container">
            <a href="Map.html" id="map-link" class="clinic-link">View On Map</a>
        </div>
    </div>

    `;
}

// Function to execute when the accountBtn is clicked or when the page is loaded
function reloadPage() {
    const section = localStorage.getItem("section")
    if (section === "password") {
        document.getElementById("form-id").innerHTML = getPasswordHTML();
    } 
    else if(section === "role"){
        document.getElementById("form-id").innerHTML = getRoleHTML();
    }
    else {

        let additionalHTML = '';

        // Check the role stored in localStorage
        const selectedRole = localStorage.getItem("selectedRole");

        // Add additional HTML based on the selected role
        if (selectedRole === "doctor") {
            additionalHTML = getDoctorHTML();
        } else if (selectedRole === "teacher") {
            additionalHTML = getTeacherHTML();
        }
        document.getElementById("form-id").innerHTML = getDonorHTML() + additionalHTML;
    }
    
}

// Execute the function when the accountBtn is clicked
accountBtn.onclick = () => {
    localStorage.setItem("section", "account");
    let additionalHTML = '';

    // Check the role stored in localStorage
    const selectedRole = localStorage.getItem("selectedRole");

    // Add additional HTML based on the selected role
    if (selectedRole === "doctor") {
        additionalHTML = getDoctorHTML();
    } else if (selectedRole === "teacher") {
        additionalHTML = getTeacherHTML();
    }
    document.getElementById("form-id").innerHTML = getDonorHTML() + additionalHTML;
}
// Execute the function when the page is loaded
document.addEventListener("DOMContentLoaded", reloadPage);
document.addEventListener("DOMContentLoaded", populateProfile);
document.addEventListener("DOMContentLoaded", getDoctorHTML);


function getPasswordHTML(){
    return `
    <div id="change-password-section" class="account-header">
        <h1 class="account-title">Change Password</h1>
        <div class="btn-container" onclick="handleChangePasswordButtonClick()">
            <button type="button" class="btn-save">Save</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label for="old-password">Old Password</label>
            <input type="password" id="old-password" placeholder="Old Password">
        </div>
    </div>

    <div class="account-edit" id="new-password-section">
        <div class="input-container">
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" placeholder="New Password">
        </div>
        <div class="input-container">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password">
        </div>
    </div>
    `;
}

function getRoleHTML(){
    return `
    <div id="change-role-section" class="account-header">
        <h1 class="account-title">Select Role</h1>
    </div>

    <div class="role-selection">
        <div class="role-option">
            <input type="radio" id="donor" name="role" value="donor" ${localStorage.getItem("selectedRole") === "donor" ? "checked" : ""}>
            <label for="donor"><i class="fas fa-user"></i> Donor</label>
        </div>
        <div class="role-option">
            <input type="radio" id="teacher" name="role" value="teacher" ${localStorage.getItem("selectedRole") === "teacher" ? "checked" : ""}>
            <label for="teacher"><i class="fas fa-user-graduate"></i> Teacher</label>
        </div>
        <div class="role-option">
            <input type="radio" id="doctor" name="role" value="doctor" ${localStorage.getItem("selectedRole") === "doctor" ? "checked" : ""}>
            <label for="doctor"><i class="fas fa-user-md"></i> Doctor</label>
        </div>
    </div>  
    `;
}

passwordBtn.onclick = () => {
    document.getElementById("form-id").innerHTML = getPasswordHTML();
    localStorage.setItem("section", "password");
}

function handleChangePasswordButtonClick() {

    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const storedPassword = tempData.password;

    if (oldPassword !== storedPassword) {
        displayMessage("Old password is incorrect.", "alert-danger");
        return;
    }

    if (newPassword !== confirmPassword) {
        displayMessage("New password and confirm password do not match.", "alert-danger");
        return;
    }

    tempData.password = newPassword;
    localStorage.setItem('tempData', JSON.stringify(tempData));

    displayMessage("Password successfully changed.", "alert-success");
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


selectRoleBtn.onclick = () => {
    localStorage.setItem("section", "role");
    document.getElementById("form-id").innerHTML = getRoleHTML();

    // Add event listener to each radio button
    document.querySelectorAll('input[name="role"]').forEach((radio) => {
        radio.addEventListener('click', () => {
            localStorage.setItem("selectedRole", radio.value);
        });
    });
}

logOutBtn.onclick = () => {
    
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');

    const confirmationBox = document.createElement('div');
    confirmationBox.classList.add('confirmation-box');

    const message = document.createElement('p');
    message.textContent = 'Are you sure you want to log out?';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.classList.add('logout-btn');
    logoutButton.addEventListener('click', () => {
        // Perform logout action
        localStorage.clear();
        window.location.href = 'LandingPage.html';
        // Close confirmation pop-up and modal backdrop
        document.body.removeChild(modalBackdrop);
        document.body.removeChild(confirmationBox);
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-btn');
    cancelButton.addEventListener('click', () => {
        // Close confirmation pop-up and modal backdrop
        document.body.removeChild(modalBackdrop);
        document.body.removeChild(confirmationBox);
    });
    
    buttonsContainer.appendChild(logoutButton);
    buttonsContainer.appendChild(cancelButton);
    confirmationBox.appendChild(message);
    confirmationBox.appendChild(buttonsContainer);

    document.body.appendChild(modalBackdrop);
    document.body.appendChild(confirmationBox);
};