const form = document.getElementById("myform")
form.addEventListener("submit", (event)=>{
  event.preventDefault();
  let nameval = document.getElementById("name");
  let age = document.getElementById("age");
  let msg = document.getElementById("msg");

  if(age.value<0){
    msg.textContent = "Age cant be Negative dumbass"
  }

  else if(age.value == 0){
    msg.textContent = "You are just Born Kid"
  }

  else if(age.value<=19){
    msg.textContent = "Go to college"
  }

  else if(age.value>=20 && age.value<90){
    if(nameval.value == "avinash"){
      msg.textContent = "Congratulations VOLT you are selected"
    }
    else if(nameval.value == "rumesh"){
      msg.textContent = "Congratulations GOKUL CHAT you are selected"
    }
    else if(nameval.value == "varan"){
      msg.textContent = "Congratulations VARAN you are selected as EDITOR of our film"
    }
  }

  else if(age.value>=90){
    msg.textContent = "You are too OLD grandpa"
  }
})
// this is ended