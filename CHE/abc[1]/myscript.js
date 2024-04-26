let searchForm = document.querySelector('.search-form');

document.querySelector('.search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('.login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
}
