const userProfile = {
    name: "Danaiym",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["gym", "work"]
};

console.log(userProfile);
console.log(typeof userProfile.name);
console.log(typeof userProfile.birthYear);
console.log(typeof userProfile.isDeveloper);
console.log(typeof userProfile.hobbies);

function showProfile() {
    let currentYear = new Date().getFullYear();
    let age = currentYear - userProfile.birthYear;
    let months = age * 12;
    let hobbiesCount = userProfile.hobbies.length;

    console.log("Age: " + age);
    console.log("Months old: " + months);
    console.log("Hobbies count: " + hobbiesCount);

    document.getElementById("profileName").textContent = userProfile.name;
    document.getElementById("profileYear").textContent = userProfile.birthYear;
    document.getElementById("profileDev").textContent = userProfile.isDeveloper;
    document.getElementById("profileHobbies").textContent = userProfile.hobbies;
    document.getElementById("profileAge").textContent = age;
    document.getElementById("profileMonths").textContent = months;
    document.getElementById("profileCount").textContent = hobbiesCount;
}

showProfile();

let updateBtn = document.getElementById("updateBtn");
let message = document.getElementById("message");

updateBtn.addEventListener("click", function () {
    let nameValue = document.getElementById("username").value;
    let yearValue = document.getElementById("birthYear").value;

    if (nameValue === "" || yearValue === "") {
        message.textContent = "Please fill in all fields";
        message.style.color = "red";
        return;
    }

    let year = Number(yearValue);
    let currentYear = new Date().getFullYear();

    if (year < 1900 || year > currentYear) {
        message.textContent = "Please enter a correct birth year";
        message.style.color = "red";
        return;
    }

    userProfile.name = nameValue;
    userProfile.birthYear = year;

    console.log("Updated profile:", userProfile);
    showProfile();

    message.textContent = "Profile updated!";
    message.style.color = "green";
});

let taskList = document.getElementById("taskList");
let newItem = document.getElementById("newItem");
let addBtn = document.getElementById("addBtn");
let removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function () {
    if (newItem.value === "") {
        alert("Enter a task first");
        return;
    }

    let li = document.createElement("li");
    li.textContent = newItem.value;
    taskList.appendChild(li);

    newItem.value = "";
});

removeBtn.addEventListener("click", function () {
    let lastItem = taskList.lastElementChild;

    if (lastItem === null) {
        alert("The list is empty");
        return;
    }

    taskList.removeChild(lastItem);
});