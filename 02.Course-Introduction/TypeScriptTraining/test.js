var num = 5;
var str = '';
var list = [1, 2, 3];
var color = 'red';
color = 'blur';
var peshoUser = {
    name: "Pesho",
    age: 21,
};
var AnotherUserClass = /** @class */ (function () {
    function AnotherUserClass() {
    }
    return AnotherUserClass;
}());
var anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Mitko", id: 2 },
    { firstName: "Maria", id: 3 },
];
anotherUserList.forEach(function (_a) {
    var firstName = _a.firstName, id = _a.id;
    console.log("".concat(id, ": ").concat(firstName));
});
