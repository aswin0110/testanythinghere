function ajax(){
    
    //CREATING an XHR Object

let xhttp = new XMLHttpRequest();
// EVENTlistner
xhttp.onreadystatechange = function(){
    // condition
    if(this.readystate == 4&& this.status ==200){
        document.getElementById('demo').innerHTML = this.responseText;
    }
}

xhttp.open("GET", "./ajax.txt" ,true);
xhttp.send();
}
