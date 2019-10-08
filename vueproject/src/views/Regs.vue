<template>
  <div>
    <div class="cut">
      <p class="tiao">会员注册</p>
    </div>
    <Logino></Logino>
  </div>
</template>

<style scoped>
.cut{
  width:78%;
  margin: 0 auto;
  height: 40px;
  border-bottom:1px solid #4ab344;
}
.tiao {
  position: relative;
  color: #4ab344;
  text-align: left;
  padding-left: 20px;
  
  /* line-height:  */
  
}
.tiao::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 20px;
  position: absolute;
  top:0;
  left: 2px;
  background: #4ab344;
}
</style>
<script>
import Logino from "../components/Logino.vue";

export default {
  components: {
    Logino
  }
};
</script>>