var login = document.getElementById('login')
var password, email, form, opts;
login.addEventListener('click', function (ev) {
    password = document.getElementById('password')
    email = document.getElementById('email')
    console.log(email.value)
    form = JSON.stringify({
        email: email.value,
        password: password.value
    })
    opts = {
        method: 'POST',
        body: form,
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'same-origin'
    };
    fetch('/users/login', opts)
        .then(function (response) {
            return response.text();
        })
        .then(function (body) {
            var parseBody = JSON.parse(body)
            password.value = '';
            email.value = '';

            if (parseBody.login) {
                // console.log(parseBody.url)
                window.location = parseBody.url;
            }
            else {
                document.getElementById('massage').style.display = 'block'
            }
        });
})