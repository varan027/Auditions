const form = document.getElementById("myform")
let nameval = document.getElementById("name");
let age = document.getElementById("age");
let msg = document.getElementById("msg");
form.addEventListener("submit", (event)=>{
  event.preventDefault();

  if(age.value<0){
    msg.textContent = "Age cant be Negative dumbass"
  }

  else if(age.value == 0){
    msg.textContent = "Fill in the details"
  }

  else if(age.value<=19 && age.value>0){
    msg.textContent = "you are not eligible"
  }

  else if(age.value>=20 && age.value<90){
    if(nameval.value == "avinash"){
      msg.textContent = "Congratulations you are selected"
    }
    else if(nameval.value == "rumesh"){
      msg.textContent = "Congratulations you are selected"
    }
    else if(nameval.value == "varan"){
      msg.textContent = "Congratulations you are selected"
    }
    
  }

  else if(age.value>=90){
    msg.textContent = "You are too OLD grandpa"
  }
})
function darkmode(){
document.getElementsByTagName("body")[0].classList.toggle("bg-color")
}