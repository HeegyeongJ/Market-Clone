<script>
    import { getDatabase, ref, push } from "firebase/database";
    import Footer from "../components/Footer.svelte";
    import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage";


    let title;
    let price;
    let description;
    let place;
    let files;
    const storage = getStorage();
    const db = getDatabase();


    async function writeUserData(imgUrl) {
        push(ref(db, 'items/'), {
           title,
           price,
           description,
           place,
           insertAt: new Date().getTime(),
           imgUrl
        });
        window.location.hash ='/';
    }
        

    

    // // 'file' comes from the Blob or File API
    // uploadBytes(storageRef, file).then((snapshot) => {
    // console.log('Uploaded a blob or file!');
    // });

    const uploadFile = async () => {
        const file = files[0];
        const name = file.name;
        const imgRef = refImage(storage, name);
        const res = await uploadBytes(imgRef, file);
        const url = await getDownloadURL(imgRef);
        return url;
    }

    const handleSubmit = async () => {
        const url = await uploadFile();
        writeUserData(url);
    }
</script>

<form action="" id="write-form" on:submit|preventDefault={handleSubmit}>
    <div>
        <label for="image">이미지</label>
        <input type="file" bind:files name="image" id="image">
    </div>
    <div>
        <label for="title">제목</label>
        <input type="text" name="title" id="title" bind:value={title}>
    </div>
    <div>
        <label for="price">가격</label>
        <input type="number" name="price" id="price" bind:value={price}>
    </div>
    <div>
        <label for="description">설명</label>
        <input type="text" name="description" id="description" bind:value={description}>
    </div>
    <div>
        <label for="place">장소</label>
        <input type="text" name="place" id="place" bind:value={place}>
    </div>       
    <div>
        <button type="submit" class="submit-btn">제출</button>
    </div>
</form>
<Footer location="write"></Footer>

<style>
    .submit-btn{
        background-color: orange;
        width: 50px;
        height: 30px;
        border-radius: 20px;
    }
</style>