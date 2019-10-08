<template>
    <div class="lunbo" style=" margin: 10px 0">
      <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 3" :key="item">
        <img class="lunbo" :src="'http://localhost:8520/uploads/l'+item+'.png'" alt />
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<style scoped>
.lunbo {
  height: 400px;
}

</style>