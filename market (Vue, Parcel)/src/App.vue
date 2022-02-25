<template>
  <div id="app">
    <HeadComponent 
      :onScreenList="onScreenList" 
      :onScreenUpload="onScreenUpload"
      @setInput="setInput"/>
    <ProductList  v-if="onScreenList" />
    <button>확인</button>
    <ProductUpload v-if="onScreenUpload" />
  </div>
</template>

<script>
//로컬component import
import HeadComponent from './components/HeadComponent.vue'
import ProductList from './components/ProductList.vue'
import ProductUpload from './components/ProductUpload.vue'


export default{ 
  components : {HeadComponent, ProductList, ProductUpload},
  data() {
    return {
      onScreenList : true,
      onScreenUpload : flase,
    }
  },
  methods: {
    setInput(list, upload) {
      this.onScreenList = list;
      this.onScreenUpload = upload;
      console.log(this.onScreenList)
      console.log(this.onScreenUpload)
    }
  },
}
</script>