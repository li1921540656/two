<template>
  <div>
    <!-- 顶部图片 -->
    <div class="img">
      <img src="../assets/bg.png" alt srcset />
    </div>
    <div class="content">
      <h1 class="h">{{datas.title}}</h1>
      <p class="time">发表时间 : {{datas.time}}</p>
      <div class="line"></div>
      <p class="text">{{datas.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      datas: ""
    };
  },
  created: function() {
    console.log(this.$route.query);
    this.datas = this.$route.query;

  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.img > img {
  width: 100%;
  height: 370px;
}
.content{
    width: 100%;
    padding: 10px 80px;
}
.h {
  font-size: 25px;
  color: #333333;
  text-align: left;
  font-weight: 400;
  margin: 5px 0 5px 0
}
.time{
    color: #adadad;
    font-size: 13px;
    text-align: left;
    margin: 30px 0;
}
.line{
    border: 1px solid #f0efef;
    border-bottom: none;
    margin: 20px 0;
}
.text{
    text-align: justify;
    line-height: 50px;
    margin-bottom: 30px;
}
</style>