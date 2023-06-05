function Chage(){
    let input_value = document.getElementById('input').value;
    let mode = input_value.slice(-3,-2);
    if (mode === "1"){
        document.getElementById('info').value.style.color = "yellow";
    }

    else if(mode === "2"){
        document.getElementById('info').value.style.color = "red";
    }

    else if (mode === "3"){
        document.getElementById('info').value.style.color = "black";
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


