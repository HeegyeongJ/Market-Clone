const form = document.querySelector('#signup-form'); 

const checkPassword = () => {
    const formData = new FormData(form);
    const pw1 = formData.get('pw');
    const pw2 = formData.get('pw2');
    if(pw1 === pw2) return true;
    else return false;

}

const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const sha256Password = sha256(formData.get('pw'));
    formData.set('pw', sha256Password);

    const div = document.querySelector('#info');

    if(checkPassword()){
        const res = await fetch('/signup', {
            method:'POST',
            body: formData
        })
        const data = await res.json();
        if (data==='200'){
            div.innerText = '회원가입에 성공했습니다!';
            div.style.color = 'blue';
        }
    }else{
        div.innerText = '비밀번호가 다릅니다.';
        div.style.color = 'red';
    }
}
form.addEventListener('submit', handleSubmit);