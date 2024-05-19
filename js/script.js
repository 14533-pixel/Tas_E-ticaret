var isim = "Ahmet"; //global scope

function yazdir(){
    var isim = "Ayşe";
    var yas = 20;
    console.log("functıon scope: ", isim, yas);
}

yazdir();
console.log(isim);
//console.log(yas);
if(true){
    var isim = "Zeynep";
    console.log(isim);
}
console.log(isim);
yazdir();