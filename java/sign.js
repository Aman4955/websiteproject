

const user_name=document.querySelector("input[type='text']")
const user_email=document.querySelector("input[type='email']")
const user_password=document.querySelector("input[type='password']")
const btn=document.querySelector(".btn")
let users=[];
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    let newuser=
    {
        name:user_name.value,
        email:user_email.value,
        password:user_password.value
    };

    let=JSON.parse(localStorage.getItem("users"))||[];

    users.push(newuser);

    localStorage.setItem("users",JSON.stringify(users));

    alert("Successfull Register",users)

    
    user_name.value=""
    user_email.value=""
    user_password.value=""
    
window.location.href="login.html"

});
