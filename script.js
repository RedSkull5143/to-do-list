let input=document.getElementById("inptbx");
let listcon=document.getElementById("list");

function add(){
    if(input.value===''){
        alert("Enter Task First");
    }else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listcon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
    store();
}

listcon.addEventListener("click", function(om){
    if(om.target.tagName=="LI"){
        om.target.classList.toggle("checked");
        store();
    }else if(om.target.tagName==="SPAN"){
        om.target.parentElement.remove();
        store();
    }
}, false);

function store(){
    localStorage.setItem("data", list.innerHTML);
}

function showdata(){
    list.innerHTML=localStorage.getItem("data");
}

showdata();