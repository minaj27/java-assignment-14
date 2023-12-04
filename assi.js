function handleBackground(bg){
    var bg = document.getElementById("data").value;
    document.getElementById("show").style.backgroundColor=bg
}
function handleRemove(){
    var bg = document.getElementById("data").value;
    document.getElementById("show").style.backgroundColor="";
}
function handleClear(){
    document.getElementById("data").value="";
}