<template>
    <div class="upload">
        <div class="image-upload">
            <label for="file"><img src="../images/picture.png" class="imagePrev"></label>
            <input type="file" id="file">
            <img src="../images/preview.png" class="previewBtn" @click="preview">
            <img src="" class="previewImg">
        </div>
        <div class="title-upload">
            <input type="text" class="input-title" placeholder="글 제목">
        </div>
        <div class="product-upload">
            <input type="text" class="input-product" placeholder="상품">
        </div>
        <div class="price-upload">
            <input type="text" class="input-price" placeholder="￦ 가격">
        </div>
        <div class="position-upload">
            <input type="text" class="input-position" placeholder="위치">
        </div>
        <div class="content-upload">
            <textarea class="input-content" placeholder="내용"></textarea>
        </div>
        <button @click="print" class="uploadBtn">출력</button>
    </div>
</template>

<script>
import database from '../database'

export default {
    data() {
        return {
            database : database,
            title : "",
            content : "",
            product : "",
            price : "",
            position : "",
            image : "",
        }
    },
    props: {

    },
    methods: {
         print(e) {
            let len = this.database.length;
            let imgURL = e.target.parentElement.children[0].children[1].files[0];

            this.image = URL.createObjectURL(imgURL);
            this.title = e.target.parentElement.children[1].children[0].value;
            this.content = e.target.parentElement.children[5].children[0].value;
            this.product = e.target.parentElement.children[2].children[0].value;
            this.price = e.target.parentElement.children[3].children[0].value;
            this.position = e.target.parentElement.children[4].children[0].value;

            this.database.push(
                {
                    id: len,
                    title : this.title,
                    content : this.content,
                    product : this.product,
                    price : this.price,
                    position : this.position,
                    image : this.image,
                    userName : "나",
                }
            )

            e.target.parentElement.children[1].children[0].value = "";
            e.target.parentElement.children[5].children[0].value = "";
            e.target.parentElement.children[2].children[0].value = "";
            e.target.parentElement.children[3].children[0].value = "";
            e.target.parentElement.children[4].children[0].value = "";
            let img = document.querySelector('.previewImg');
            img.src = "";
            let imagePrev = document.querySelector('.imagePrev');
            imagePrev.style.visibility = 'visible';
        },
        preview (e) {
            console.dir(e)
            // e.target
            let file = document.querySelector('#file');
            console.dir(file)
            file = file.files[0];
            file = URL.createObjectURL(file);

            let img = document.querySelector('.previewImg');
            img.src = file;

            let imagePrev = document.querySelector('.imagePrev');
            imagePrev.style.visibility = 'hidden';


        }
    },
}
</script>