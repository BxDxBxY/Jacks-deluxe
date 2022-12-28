 document.getElementById("myBtn").onclick = function() {myFunction()};
 function myFunction() {
    document.getElementById("myDropdown").classList.toggle("d-block");
    return true;
}
document.getElementById("my2Btn").onclick = function() {my2Function()};

function my2Function() {
    document.getElementById("myDropdown").classList.toggle("d-none");
}


document.getElementById("my3Btn").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("d-block");
}