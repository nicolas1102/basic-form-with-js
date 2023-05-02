const formElement = document.querySelector('#form');

async function submitForm(event) {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    if (username === 'admin' && password === 'admin') {
        window.location.replace('/home');
    } else {
        alert('This user is not authenticated. Try again.');
    }
}

formElement.addEventListener('submit', submitForm);






