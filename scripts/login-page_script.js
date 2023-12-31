  //DARK THEME 
  function addOrRemoveTheme() {
    const theme = document.getElementById('them');
    if (theme.className == "theme-light") {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
      localStorage.setItem('theme', 'dark');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const theme = document.getElementById('them');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      theme.innerHTML = '<img src="/images/sun_.png">';
      theme.setAttribute('class', 'theme-dark');
      document.body.setAttribute('dark', '');
    } else {
      theme.innerHTML = '<img src="/images/moon (1).png">';
      theme.setAttribute('class', 'theme-light');
      document.body.removeAttribute('dark');
    }
  });
  // BURGER MENU
  function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = menu.querySelector('.burger-menu_button, .burger-menu_lines');
    let links = menu.querySelectorAll('.burger-menu_link');
    let overlay = menu.querySelector('.burger-menu_overlay');
  
    button.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => toggleMenu());
    });
  
    overlay.addEventListener('click', () => toggleMenu());
  
    function toggleMenu() {
      menu.classList.toggle('burger-menu_active');
  
      if (menu.classList.contains('burger-menu_active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    }
  }
  
  burgerMenu('.burger-menu');

// COOKIE
  
function setCookie(name, value, hours) {
  var date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  var cookieName = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}

function ShowLoginForm(){
  SetTitle("Login");
  ShowHideForm("LoginFrom","Show");
  ShowHideForm("RegistrationFrom","Hide");
  ShowHideForm("ForgotPasswordForm","Hide");
  ActiveInactiveBtn("ShowLoginBtn","Active");
  ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
  ShowHideFromSwitchBtn("Show");
}

function ShowRegistrationForm(){
  debugger;
  SetTitle("Registration");
  ShowHideForm("RegistrationFrom","Show");
  ShowHideForm("LoginFrom","Hide");
  ShowHideForm("ForgotPasswordForm","Hide");
  ActiveInactiveBtn("ShowLoginBtn","Inactive");
  ActiveInactiveBtn("ShowRegistrationBtn","Active");
  ShowHideFromSwitchBtn("Show");
}

function SaveFormDataToCookie() {
  var formData = {
    loginForm: {
      email: document.getElementById('LoginEmail').value,
      password: document.getElementById('LoginPassword').value
    },
    registrationForm: {
      name: document.getElementById('RegiName').value,
      email: document.getElementById('RegiEmailAddres').value,
      password: document.getElementById('RegiPassword').value
    }
  };
  setCookie("formData", JSON.stringify(formData), 3); 
}


function LoadFormDataFromCookie() {
  var cookieData = getCookie("formData");
  if (cookieData !== "") {
    var formData = JSON.parse(cookieData);
    document.getElementById('LoginEmail').value = formData.loginForm.email;
    document.getElementById('LoginPassword').value = formData.loginForm.password;
    document.getElementById('RegiName').value = formData.registrationForm.name;
    document.getElementById('RegiEmailAddres').value = formData.registrationForm.email;
    document.getElementById('RegiPassword').value = formData.registrationForm.password;
  }
}

window.onload = function() {
  LoadFormDataFromCookie();
};

function ShowLoginForm(){
	
	SetTitle("Login");

	ShowHideForm("LoginFrom","Show");
	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Active");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");

	ShowHideFromSwitchBtn("Show");
};

function ShowRegistrationForm(){
	debugger;
	SetTitle("Registration");

	ShowHideForm("RegistrationFrom","Show");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Hide");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Active");

	ShowHideFromSwitchBtn("Show");
};

function ShowForgotPasswordForm() {
	
	SetTitle("Forgot Password");

	ShowHideForm("RegistrationFrom","Hide");
	ShowHideForm("LoginFrom","Hide");
	ShowHideForm("ForgotPasswordForm","Show");

	ActiveInactiveBtn("ShowLoginBtn","Inactive");
	ActiveInactiveBtn("ShowRegistrationBtn","Inactive");
	ShowHideFromSwitchBtn("Hide");
}

function SetTitle(Title){
	var formTitle = document.getElementById('formTitle');
	formTitle.innerHTML = Title;
}

function ShowHideForm(FormID,ShowOrHide){
	var Form = document.getElementById(FormID);

	if(ShowOrHide == "Show"){
		Form.style.display = 'block';
	}else{
		Form.style.display = 'none';
	}
}

function ActiveInactiveBtn(ButtonID,ActiveORInactive) {
	debugger;
	var Button = document.getElementById(ButtonID);

	if(ActiveORInactive == "Active"){
		Button.classList.add('active');
	}else{
		Button.classList.remove('active');
	}
}

function ShowHideFromSwitchBtn(ShowOrHide) {
	var formSwitchBtn = document.getElementById('formSwitchBtn');
	if(ShowOrHide == 'Show'){
		formSwitchBtn.style.display = '';
	}else{
		formSwitchBtn.style.display = 'none';
	}
}

// end

function ValidateLoginForm() {
	RemoveAllErrorMessage();

	var LoginEmail = document.getElementById('LoginEmail').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	var PasswordValidationMessage;
	var	emailValidationMessage;

	emailValidationMessage = isValidEmail(LoginEmail);
	if(emailValidationMessage != "valid"){
		ShowErrorMessage('LoginEmail',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(LoginPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('LoginPassword',PasswordValidationMessage);
		return false;
	}
	
	return true;
}

function ValidateRegistrationForm(){

	RemoveAllErrorMessage();

	var RegiName = document.getElementById('RegiName').value;
	var RegiEmailAddres = document.getElementById('RegiEmailAddres').value;
	var RegiPassword = document.getElementById('RegiPassword').value;
	var RegiConfirmPassword = document.getElementById('RegiConfirmPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	var	emailValidationMessage;

	if(RegiName == ""){
		ShowErrorMessage('RegiName',"Please fill the filed.");
		return false;
	}else if(RegiName.length < 3 || RegiName.length > 20){
		ShowErrorMessage('RegiName',"Name should be minimum 3 and maximum 20 characters long.");
		return false;
	}

	emailValidationMessage = isValidEmail(RegiEmailAddres);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('RegiEmailAddres',emailValidationMessage);
		return false;
	}
	
	PasswordValidationMessage = isValidPassword(RegiPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('RegiPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(RegiConfirmPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('RegiConfirmPassword',ConfirmPasswordMessage);
		return false;
	}

	if(RegiPassword != RegiConfirmPassword){
		ShowErrorMessage('RegiConfirmPassword',"Password not match.");
		return false;
	}

	return true;
}


function ValidateForgotPasswordForm(){

	RemoveAllErrorMessage();

	var forgotPassEmail = document.getElementById('forgotPassEmail').value;
	
	var	emailValidationMessage;
	emailValidationMessage = isValidEmail(forgotPassEmail);

	if(emailValidationMessage != "valid"){
		ShowErrorMessage('forgotPassEmail',emailValidationMessage);
		return false;
	}
}



function ValidateResetPasswordForm(){

	RemoveAllErrorMessage();

	var NewPassword = document.getElementById('NewPassword').value;
	var ConfirmNewPassword = document.getElementById('ConfirmNewPassword').value;

	var PasswordValidationMessage;
	var ConfirmPasswordMessage;
	
	PasswordValidationMessage = isValidPassword(NewPassword);
	if(PasswordValidationMessage != "valid"){
		ShowErrorMessage('NewPassword',PasswordValidationMessage);
		return false;
	}
	
	ConfirmPasswordMessage = isValidPassword(ConfirmNewPassword);
	if(ConfirmPasswordMessage != "valid"){
		ShowErrorMessage('ConfirmNewPassword',ConfirmPasswordMessage);
		return false;
	}

	if(NewPassword != ConfirmNewPassword){
		ShowErrorMessage('ConfirmNewPassword',"Password not match.");
		return false;
	}

	return true;
}

function RemoveAllErrorMessage(){

	var allErrorMessage = document.getElementsByClassName('error-message');
	var allErrorFiled = document.getElementsByClassName('error-input');
	var i;

	for(i=(allErrorMessage.length - 1); i>=0; i--){
		allErrorMessage[i].remove();
	}
	
	for(i=(allErrorFiled.length-1);i>=0;i--){
		allErrorFiled[i].classList.remove('error-input');
	}
}

function ShowErrorMessage(InputBoxID,Message){

	var InputBox = document.getElementById(InputBoxID);
	InputBox.classList.add('error-input');
	InputBox.focus();

	var ErrorMessageElement = document.createElement("p");
	ErrorMessageElement.innerHTML = Message;
	ErrorMessageElement.classList.add('error-message');
	ErrorMessageElement.setAttribute("id",InputBoxID+'-error');

	InputBox.parentNode.insertBefore(ErrorMessageElement, InputBox.nextSibling);
	
}

function isValidEmail(email){

	const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email == ""){
		return "Please fill the field.";
	}

	if(emailRegex.test(email) == false){
		return "This is not a valid email.";
	}

	return "valid";
}

function isValidPassword(password) {
	
	const minLength = 8;
	const maxLength = 32;
	const letterNumberRegexSpecialChar = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

	if(password == ""){
		return "Please fill the field."
	}

	if (password.length < minLength || password.length > maxLength) {
		return "Password length should be minimum 8 & maximum 32 characters.";
	}

	if (!letterNumberRegexSpecialChar.test(password)) {
		return "Password should contain alphabetic, numeric and special characters.";
	}
	return "valid";
}
