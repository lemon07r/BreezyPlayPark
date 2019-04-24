
let submit = document.getElementById("donename");

submit.addEventListener("click", function() {
    let name =  document.getElementById("namer").value;

        if(!name){
            alert("please fill out the name of your guy");
        }
        else{
            document.location.href = "main.html";
            //not working
            document.getElementById("playername").innerHTML = name;
        }


});

function addBorder(id) {
    let x = document.getElementsByClassName("img");
    for(let i = 0; i < x.length; i++)
    {
        x.item(i).style.border = 'none';
    }
    id.style.border = '5px solid orange';
}