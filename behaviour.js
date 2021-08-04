let Addbtn = document.getElementById("addbtn");
let container = document.getElementById("demo");
let inputfield = document.getElementById("myInput");

Addbtn.addEventListener('click', function(){
    var paragraph = document.createElement("p");
    paragraph.innerText = inputfield.value;
    paragraph.classList.add("paragraph-styling");
    container.appendChild(paragraph);
    inputfield.value = ""

    //Adding line on done tasks
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    //Double click on task to remove it
    paragraph.addEventListener('dblclick', function(){
      //  paragraph.style.display = "none";
      container.removeChild(paragraph);
    })
})



























