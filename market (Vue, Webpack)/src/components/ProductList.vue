<template>
    <section>
        <div class="list-box">
        <div v-for="(data, i) in database" :key="i" class="list">
            <div class="image-position">
                <img :src="data.image">
            </div>
            <div class="text-position">
                <div class="title">{{data.title}}</div>
                <div class="position">{{data.position}}</div> 
                <div class="price">{{data.price}} 원</div>
                <div class="content">{{data.content}}</div>
                <div class="userName">작성자 : {{data.userName}}님</div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import database from '../database'

export default {
    data() {
        return {
            database : database,
        }
    },
    methods : {

    }
}
</script>