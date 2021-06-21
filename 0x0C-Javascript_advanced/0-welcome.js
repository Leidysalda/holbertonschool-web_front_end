// return full name

function welcome(firstName, lastName) {
    let fullname = firstName + ' ' + lastName;

    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName()
}