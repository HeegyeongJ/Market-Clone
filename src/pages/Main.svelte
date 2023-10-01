<script>
    import { onMount } from "svelte";
    import Nav from "../components/Nav.svelte";
    import { getDatabase, ref, onValue } from "firebase/database";

    let hour = new Date().getHours();
    let min = new Date().getMinutes();   
  
    $: items = [];

    const db = getDatabase();
    const itemsRef = ref(db, 'items/');

    onMount(() => {
        onValue(itemsRef, (snapshot) => {
        const data = snapshot.val();
        items = Object.values(data).reverse();
        })
    });

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
</script>

<header>
    <div class="info-bar">
        <div class="info-bar__time">{hour}:{min}</div>
        <div class="info-bar__icons">
            <img src="assets/chart-bar.svg" alt="chart-bar">
            <img src="assets/wifi.svg" alt="wifi">
            <img src="assets/battery.svg" alt="battery">
        </div>
    </div>
    <div class="menu-bar">
        <div class="menu-bar__location">
            <div>역삼1동</div>
            <div class="menu-bar__location-icon">
                <img src="assets/arrow_down.svg" alt="">
            </div>
        </div>
        <div class="menu-bar__icons">
            <img src="assets/search.svg" alt="search">
            <img src="assets/menu.svg" alt="menu">
            <img src="assets/alert.svg" alt="alert">
        </div>
    </div>
</header>

<main>
    {#each items as item}
    <div class="item-list">
        <div class="item-list__img">
            <img src="{item.imgUrl}" alt="{item.title}">
        </div>
        <div class="item-list__info">
            <div class="item-list__info-title">{item.title}</div>
            <div class="item-list__info-meta">{item.place} {calcTime(item.insertAt)}</div>
            <div class="item-list__info-price">{item.price}</div>
            <div class="item-list__info-description">{item.description}</div>
        </div>
    </div>
    {/each}
    <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Nav location="home"></Nav>

<div class="media-info-msg">화면 사이즈를 줄여주세요</div>


