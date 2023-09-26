const form = document.getElementById('write-form');

const handleSubmitForm = async (e) => {
    e.preventDefault();
    await fetch('/items',{
        method:'POST',
        body: new FormData(form),
    });
    console.log('success')
}

form.addEventListener('submit', handleSubmitForm);