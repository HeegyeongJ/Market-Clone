const calcTime = (timeStamp) => {
    const curTime = new Date().getTime() - 9*60*60*1000; // 글쓰기 timestamp가 세계시각으로 보내줘서 맞춰줘야함
    const time = new Date(curTime - timeStamp);
    const hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    if(hour>0) return ` ${hour}시간 전`; 
    else if(min>0) return ` ${min}분 전`;
    else if(sec>0) return ` ${sec}초 전`;
    else return ' 방금 전';
}


const renderData = (data) => {
    const main = document.querySelector('main');
    data.reverse().forEach(async (obj) => {
        const div = document.createElement('div');
        div.className = 'item-list';

        const imgDiv = document.createElement('div');
        imgDiv.className = 'item-list__img';

        const img = document.createElement('img');
        const res = await fetch(`/images/${obj.id}`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        img.src = url;


        const infoDiv = document.createElement('div');
        infoDiv.className = 'item-list__info';

        const infoTitleDiv = document.createElement('div');
        infoTitleDiv.className = 'item-list__info-title';
        infoTitleDiv.innerText = obj.title;

        const infoMetaDiv = document.createElement('div');
        infoMetaDiv.className = 'item-list__info-meta';
        infoMetaDiv.innerText = obj.place + calcTime(obj.insertAt);

        const infoPriceDiv = document.createElement('div');
        infoPriceDiv.className = 'item-list__info-price';
        infoPriceDiv.innerText = obj.price;


        main.appendChild(div);
        div.appendChild(imgDiv);
        imgDiv.appendChild(img);
        div.appendChild(infoDiv);
        infoDiv.appendChild(infoTitleDiv);
        infoDiv.appendChild(infoMetaDiv);
        infoDiv.appendChild(infoPriceDiv);
        
    }) 
}


const fetchList = async () => {
    const accessToken = window.localStorage.getItem('token');
    const res = await fetch('/items', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }
    });
    if(res.status === 401){
        alert('로그인 해주세요');
        window.location.pathname = '/login.html';
        return;
    }
    const data = await res.json();
    renderData(data);
}

fetchList();