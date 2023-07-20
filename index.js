$(document).ready(function(){
    const signupBtn = $("#signupBtn");
    const loginBtn = $("#loginBtn");

    const signupForm = $("#signupForm");
    const loginForm = $("#loginForm");

    loginBtn.click(function (e) {
        signupBtn.removeClass("active");
        loginBtn.addClass("active");
        signupForm.hide();
        loginForm.show();
    });

    signupBtn.click(function (e) {
        loginBtn.removeClass("active");
        signupBtn.addClass("active");
        loginForm.hide();
        signupForm.show()
    });

    const loginSubmit = $("#loginSubmit")

    $("#loginemail").blur(function (e) { 
        e.preventDefault();
        const email = $("#loginemail");
        const emailValue = email.val();
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let result = regex.test(emailValue); 
        if(!result){
            $("#logindemo3").show();
        }

        if(emailValue.length == 0){
            $("#logindemo3").hide();
        }
    });
    loginSubmit.submit(function (e) { 
        e.preventDefault();
        const email = $("#loginemail");
        const emailValue = email.val();
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        let result = regex.test(emailValue); 
        if(!result){
            $("#logindemo3").show();
        }
    });
})

// let options = ["1", "@"];

// function empty() {
//     if (document.getElementById("fname").value == "") {
//         document.getElementById("demo1").innerHTML = "input name";
//         return false;
//     }
//     if (document.getElementById("fname").value.includes(a)) {
//         document.getElementById("demo1").innerHTML = "must include @";
//         return false;
//     }
//     else {
//         return true

//     }

// }

// const signupBtn = $(".signupBtn");
// const loginBtn = document.getElementById("loginBtn");

// loginBtn.addEventListener("click", function (params) {
//     signupBtn
// })
