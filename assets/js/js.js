


function authFormUp(){
    const authFormSignUp = document.getElementsByClassName("auth-form--sign-up");
    const authFormSignIn = document.getElementsByClassName("auth-form--sign-in");
    authFormSignIn[0].classList.remove('element--enabled');
    authFormSignIn[0].classList.remove('element--disabled');
    authFormSignUp[0].classList.remove('element--enabled');
    authFormSignUp[0].classList.remove('element--disabled');
    authFormSignIn[0].classList.add('element--enabled');
    authFormSignUp[0].classList.add('element--disabled');

}
function authFormIn(){
    const authFormSignUp = document.getElementsByClassName("auth-form--sign-up");
    const authFormSignIn = document.getElementsByClassName("auth-form--sign-in");
    authFormSignIn[0].classList.remove('element--enabled');
    authFormSignIn[0].classList.remove('element--disabled');
    authFormSignUp[0].classList.remove('element--enabled');
    authFormSignUp[0].classList.remove('element--disabled');
    authFormSignIn[0].classList.add('element--disabled');
    authFormSignUp[0].classList.add('element--enabled');

}

function modalSignUp(){
    const modal = document.getElementsByClassName("modal")
    const authFormSignUp = document.getElementsByClassName("auth-form--sign-up");
    authFormSignUp[0].classList.remove('element--enabled');
    authFormSignUp[0].classList.remove('element--disabled');
    authFormSignUp[0].classList.add('element--enabled');
    modal[0].classList.add('element--enabled-flex');

}

function modalSignIn(){
    const modal = document.getElementsByClassName("modal");
    const authFormSignIn = document.getElementsByClassName("auth-form--sign-in");
    authFormSignIn[0].classList.remove('element--enabled');
    authFormSignIn[0].classList.remove('element--disabled');
    authFormSignIn[0].classList.add('element--enabled');
    modal[0].classList.add('element--enabled-flex');

}

function modalClose(){
    const modal = document.getElementsByClassName("modal");
    const authFormSignUp = document.getElementsByClassName("auth-form--sign-up");
    const authFormSignIn = document.getElementsByClassName("auth-form--sign-in");
    modal[0].classList.remove('element--enabled-flex');
    authFormSignIn[0].classList.remove('element--enabled');
    authFormSignIn[0].classList.remove('element--disabled');
    authFormSignUp[0].classList.remove('element--enabled');
    authFormSignUp[0].classList.remove('element--disabled');
}


function logOut(){
    
    const headerNavbarUser = document.getElementById('header__navbar-user');
    const signUpBtn = document.getElementById('header__navbar-sign-up');
    const signInBtn = document.getElementById('header__navbar-sign-in');
    headerNavbarUser.style.display='none';
    signUpBtn.style.display='inline-flex';
    signInBtn.style.display='inline-flex';
    

}

function signIn(){
    
    const headerNavbarUser = document.getElementById('header__navbar-user');
    const signUpBtn = document.getElementById('header__navbar-sign-up');
    const signInBtn = document.getElementById('header__navbar-sign-in');
    headerNavbarUser.style.display='inline-flex';
    signInBtn.style.display='none';
    signUpBtn.style.display='none';
    modalClose();
    

}

