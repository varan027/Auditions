const form = document.getElementById("myform")
let nameval = document.getElementById("name");
let age = document.getElementById("age");
let msg = document.getElementById("msg");

const today = new Date();
let date = today.getDate()
let month = today.getMonth()
let year = today.getFullYear()

form.addEventListener("submit", (event)=>{
  event.preventDefault();

  if(age.value<0){
    msg.textContent = "Age cant be Negative"
    msg.classList.add("error")
  }

  else if(age.value>=0 && age.value<=18){
    msg.textContent = "You are not eligible"
    msg.classList.add("error")
  }

  else if(age.value>=20 && age.value<80){

    if(nameval.value.toLowerCase() == "avinash" || nameval.value.toLowerCase() == "varan" || nameval.value.toLowerCase() == "rumesh" || nameval.value.toLowerCase() == "kranthi"){
      msg.textContent = "Congratulations you are selected"
      msg.classList.add("success")
    }

    else {
      msg.textContent = "Please visit MAHANKALI PICTURES on " + `${date+3}/${month+1}/${year}` + " at Ramoji Film City."
      msg.classList.add("visit")
    }

  }

  else {
    msg.textContent = "You are too OLD"
    msg.classList.add("error")
  }

})
function darkmode(){
document.getElementsByTagName("body")[0].classList.toggle("bg-color")
document.getElementsByTagName("div")[0].classList.toggle("in-color")
}