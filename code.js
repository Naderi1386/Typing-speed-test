const time=document.querySelector(".show_time");
const textarea=document.querySelector(".main_type_test-speed");
const main_text=document.querySelector(".main_text-test").innerHTML;
const main_text2=document.querySelector(".main_text-test");

let isfinish;
const restartbutton=document.querySelector(".main_restart");

let count_keypress=0;
let showthetime="";
let array=[0,0,0,0];
function zero(){
    if(array[0]<10 && array[1]<10){
        showthetime="0"+array[0]+":0"+array[1]+":"+array[2];

   }else if(array[0]<10){
        showthetime="0"+array[0]+":"+array[1]+":"+array[2];

   }else if(array[1]<10){
        showthetime=array[0]+":0"+array[1]+":"+array[2];

   }else{
        showthetime=array[0]+":"+array[1]+":"+array[2];

   }
}
function addtime(){

    zero();
   time.innerHTML=showthetime;
   array[3]++;
   array[0]=Math.floor((array[3]/100)/60);
   array[1]=Math.floor((array[3]/100)-(array[0]*60));
   array[2]=Math.floor(array[3]-(array[1]*100)-(array[0]*6000));
}
textarea.addEventListener("keypress",interval);
function interval(){
    count_keypress++;
    if(count_keypress==1){

        isfinish=setInterval(addtime,10);
    }

}
restartbutton.addEventListener('click',function(){
    for(let i =0;i<array.length;i++){
        array[i]=0;
    }
    textarea.style.borderColor="black";
    clearInterval(isfinish)
    isfinish=null;
    time.innerHTML="00:00:00";
    count_keypress=0;
    textarea.value="";


},false);


function checkword(){
  let val_text=textarea.value;
   let sub__string=main_text.substring(0,val_text.length);
   if(main_text==val_text){
       textarea.style.borderColor="green";
       clearInterval(isfinish);

   }else{
    if(sub__string==val_text){
        textarea.style.borderColor="yellow";


    }else{
        textarea.style.borderColor="red";


    }

   }
  
}
textarea.addEventListener('keyup',checkword);



