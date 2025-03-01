
function change ()
{
    const r = Math.floor((Math.random() * 10000000)).toString(16)
   
    document.body.style.backgroundColor = "#" + r;
    document.getElementById('modal').style.display="block"
}
function closeLogic ()
{
        document.getElementById("modal").style.display = "none"

}
function change(){
   const r = Math.floor((Math.random() * 10000000)).toString(16);
   document.getElementById("container").style.backgroundColor="#"+r
   
   const m = Math.floor((Math.random() * 10000000)).toString(16);
   document.getElementById("cont1").style.backgroundColor="#"+m
   document.getElementById("cont2").style.backgroundColor="#"+m


   const n = Math.floor((Math.random() * 10000000)).toString(16);
   document.getElementById("cont1-2").style.backgroundColor="#"+n
   document.getElementById("btn2").style.backgroundColor="#"+n


   document.getElementById("cont1-1").style.backgroundColor="#"+n
   document.getElementById("btn1").style.backgroundColor="#"+n

   const o = Math.floor((Math.random() * 10000000)).toString(16);
   document.getElementById("btn1").style.color="#"+o
   document.getElementById("btn2").style.color="#"+o
}