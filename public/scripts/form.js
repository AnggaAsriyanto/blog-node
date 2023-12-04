const inputPass = document.getElementById('password');
const btnPass   = document.getElementById('vis-pass');

btnPass.addEventListener('click', () => {
    if(inputPass.type === "password") {
        inputPass.type = "text";
        btnPass.innerHTML = `<span><i class="far fa-eye-slash"></i></span>`;
    } else {
        inputPass.type = "password";
        btnPass.innerHTML = `<span><i class="far fa-eye"></i></span>`;
    }
})