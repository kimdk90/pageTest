// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    //html 에서 a 태그나 submit 태그는 고유의 동작이 있다. 
    //페이지를 이동시킨다거나 form 안에 있는 input 등을 전송한다던가 그러한 동작이 있는데 
    //e.preventDefault 는 그 동작을 중단시킨다.

    //e.preventDefault는 고유 동작을 중단시키고, e.stopPropagation 는 상위 엘리먼트들로의 이벤트 전파를 중단시킨다.
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    
    //localStorage 작은db
    localStorage.setItem(USERNAME_KEY, username);

    paintGreetings(username);
}

// function onClickLink(event) {
//     event.preventDefault(); 
//     console.log(event);
//     alert("clicked!");
// }

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(saveUsername);
}

//link.addEventListener("click", onClickLink);
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//    // console.dir(loginInput); -객체정보 dir
//     const username = loginInput.value;
//     console.log(username);
//     // if(username === "") {
//     //     alert("Please write your name");
//     // } else if(username.length > 15)  {
//     //     alert("Your name is too long.");
//     // } else {
//     //     alert(`hello ${username}`);
//     // }

   
// };

// loginButton.addEventListener("click", onLoginBtnClick);

// window.addEventListener('beforeunload',() => {
//     localStorage.removeItem(USERNAME_KEY);
// });