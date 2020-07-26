const btnTheme = document.getElementById('btnTheme');
const body = document.querySelector('body');
const btnThemeStyle = document.querySelector('#btnTheme span');
const logo = document.querySelector('.logo')

btnTheme.addEventListener('click', () => {
    //Add theme dark
    body.classList.toggle('body-dark');    
    header.classList.toggle('header-dark');

    //Change icon theme
    if(btnThemeStyle.classList.value == 'icon-moon') {
        btnThemeStyle.classList.remove('icon-moon');
        btnThemeStyle.classList.add('icon-sun');

        //Logo header white
        logo.src = 'wwwroot/img/logo-papirDoc-white.svg';
    } else {
        btnThemeStyle.classList.add('icon-moon');
        btnThemeStyle.classList.remove('icon-sun');

        //Logo header black
        logo.src = 'wwwroot/img/logo-papirDoc.svg';
    }

    //Set localStorage
    if(body.classList == 'body-dark') {
        localStorage.setItem('theme-dark', 'active');
    } else {
        localStorage.clear()
    }
})

//Starts the app with a dark theme
if(localStorage.getItem('theme-dark') == 'active') {
    body.classList.toggle('body-dark');    
    header.classList.toggle('header-dark');

    btnThemeStyle.classList.remove('icon-moon');
    btnThemeStyle.classList.add('icon-sun');
    
    //Logo header white
    logo.src = 'wwwroot/img/logo-papirDoc-white.svg';
}