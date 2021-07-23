 document.querySelector('.menu-btn').addEventListener('click',() => document.querySelector('.main-menu').classList.toggle('show'));


 var btnn = document.querySelector("#bt");

 btnn.addEventListener('click',() =>{
     document.querySelector("#bttn").style.display ="block";
     document.querySelector("#bt").style.display ="none";
 });

 var ls = document.querySelector("#less");
 ls.addEventListener('click', () =>{
     document.querySelector('#bttn').style.display ='none';
     document.querySelector('#bt').style.display ='block';
 });