<template>
  <div>
    <!-- 存放顶部图片 -->
    <div class="show"></div>
    <!-- 标题 -->
    <h2>NEW ARRIVALS</h2>
    <!-- 商品展示 -->
    <div class="list">
        <div></div>
    </div>
  </div>
</template>

<script>
export default {
    data:function(){
        return {
            products:[]
        }
    },
    created:function(){
        this.axios.get('/getProducts').then((response)=>{
            console.log(response.data);
        })
    }
}
</script>

<style scoped>
/* 顶部图片展示 */
.show {
  width: 100%;
  height: 380px;
  background-color: skyblue;
}
/* 标题 */
h2 {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  font-size: 24px;
  padding-top: 2px;
  line-height: 45px;
  font-family: Arial;
  font-weight: normal;
  color: #212121;
  margin-top: 80px;
  margin-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
}

/* 商品列表 */
.list {
  width: 90%;
  height: 812px;
  background-color: pink;
  margin: 0 auto;
}
</style>