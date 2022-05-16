<template>
    <header>
        <h1>🥕 Market</h1>
    </header>
    <nav>
        <ul @click="onEmit">
            <li @click="list = true, upload = false">물건 리스트</li>
            <li @click="list = false, upload = true">물품 올리기</li>
            <li>마이페이지</li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            list : this.onScreenList,
            upload : this.onScreenUpload,
        }
    },
    props : {
      onScreenList : Boolean,
      onScreenUpload : Boolean,
    },
    methods: {
        onEmit() {
            this.$emit("setInput", this.list, this.upload);
        },
        clickUpload() {

        } 
    },
}
</script>