var tacanOdgovor;

function resetInput(){
    document.getElementById('unos').value='';
}
function randomBroj(){
   return Math.floor(Math.random()*21);
}
function kreirajPitanje(){
    var broj1=randomBroj();
    var broj2=randomBroj();
    tacanOdgovor=broj1+broj2;
    document.getElementById('pitanje').innerText=' ';
   document.getElementById('pitanje').append(`${broj1}+${broj2}`);
}
kreirajPitanje();

function provjeriOdgovor(){
    var odgovor=document.getElementById('unos').value;
   if(odgovor==tacanOdgovor){
       return 'tacno';
   }
       else {
           return 'netacno';
       }
   
}
function appendResult(rezultat){
    document.getElementById('rezultat').innerText=' ';
    document.getElementById('rezultat').append(rezultat)
}

document.getElementById('submitButton').addEventListener('click',function(){
    appendResult(provjeriOdgovor());
    resetInput();
    kreirajPitanje();
})