const form = document.querySelector('#login-form'); 

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const sha256Password = sha256(formData.get('pw'));
    formData.set('pw', sha256Password);

    const res = await fetch('/login', {
        method:'POST',
        body: formData
    })
    const data = await res.json();
    if (res.status === 200){
        alert('로그인에 성공했습니다!!');
        window.location.pathname ='/';
    }else if(res.status === 401){
        alert('id 혹은 password가 틀렸습니다!!');
    }
    
}
form.addEventListener('submit', handleSubmit);