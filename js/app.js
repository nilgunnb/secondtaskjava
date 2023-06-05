function Chage(){
    let input_value = document.getElementById('input').value;
    let mode = input_value.slice(-3,-2);
    if (mode === "1"){
        document.getElementById('info').innerHTML = "Seher qrupu"
    }

    else if(mode === "2"){
        document.getElementById('info').innerHTML = "Gunorta qrupu";
    }

    else if (mode === "3"){
        document.getElementById('info').innerHTML= "Axsam qrupu";
    }

    else{
        alert("Invalid group name");
    }

    if (document.body.style.backgroundColor = "white"){
        document.body.style.backgroundColor = "black";
    }
    else if (document.body.style.backgroundColor = "black"){
        document.body.style.backgroundColor = "white";
    }
}


