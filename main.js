//Подтягиваем заголовок формы
let title = document.querySelector('#form_title');
let form = document.getElementById('form');
//Переменные отражающие статус нынешнего окна
let registration = false;
let logIn = false;
let buttonClick = document.querySelector('#logIn')

//Статус окна - вход
let func = function startLogIn(){
        
        let title = document.querySelector('#form_title');
        title.innerHTML = 'Вход в учетную запись';
        animateChoice()
        logIn = true;
        registration = false;
        return logIn;
}
buttonClick.onclick = func;

document.querySelector('#registration').onclick = function startRegistration(event){
    let title = document.querySelector('#form_title');
    title.innerHTML = 'Регистрация';
    animateChoice();
    console.log('work');
    registration = true;
    logIn = false;
}

let alertText = document.querySelector('#alert-text');
let userName;
let userPassword;
//sing up
//Функция, которая в зависимости от статуса окна, либо регистрирует, либо сверяет данные для входа
document.querySelector('#button').onclick = function(event){
    event.preventDefault();
    console.log('work');
    console.log('regist ' + registration + ';' + 'login ' + logIn);
    let user = document.querySelector('#username').value;
    let pass = document.querySelector('#password').value;
    if (registration == true){
        if((pass.length > 4) && (user != '')){
            alertText.innerHTML = '';
            userName = user;
            userPassword = pass;
            form.reset();
            textInForm();
            func();
        }
        else if (user == false){
            alertText.innerHTML = 'Введите имя';
        }
        else if (pass.length < 4){
            alertText.innerHTML = 'Короткий пароль';
        }
    } 
    else if(logIn == true || func == true){

            if(pass == userPassword){
                if(String(user == userName)){
                    title.innerHTML = 'Вы вошли успешно';
                    alertText.style.fontSize = '0px';
                    animateSuccessForm();
                }
                else{
                }
            }
        else{
            alertText.innerHTML = 'Неправильное имя, или пароль';
            
        }
    }
}
