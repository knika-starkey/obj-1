let user = {
    firstName: "Василий",
    lastName: "Петров",
}
let user1 = {
    firstName: "Петр",
    lastName: "Васильев",
}

function showFullName(hello) {
    alert(`${this.firstName} ${this.lastName} ${hello}`);
}

showFullName.call(user, "Привет");

let show = showFullName.bind(user, "Hello!");
show();