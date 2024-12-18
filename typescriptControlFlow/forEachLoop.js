var myName = "Ritika Shishodia";
var updatedName = "";
myName.split(' ').forEach(function (element) {
    updatedName += element.toUpperCase();
});
console.log(updatedName);
