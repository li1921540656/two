<template>
  <!-- 底部 -->
  <div class="botnav">
    <div class="content">
      <div class="left">
        <ul>
          <li>主页</li>
          <li>种养产地</li>
          <li>全国门店</li>
          <li>会员专享</li>
          <li>政企合作</li>
        </ul>
        <img src="../assets/line.png" />
        <ul>
          <li>QQ:258506508</li>
          <li>联系电话 : 020-000000 &nbsp;&nbsp;&nbsp;&nbsp;400-000000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
        </ul>
        <ul>
          <li>联系邮箱:XXX@.co.m</li>
          <li>联系地址 : XXX省XXX市XXX县XXX路XXX号</li>
        </ul>
      </div>
      <div class="right">
          <img src="../assets/qrCode.png" alt="">
          <p>扫一扫手机官网</p>
      </div>
    </div>
    <div class="bg">
        <p>©2019 网站商城—日用百货 版权所有</p>
        <p>手机版|本站使用</p>
    </div>
  </div>
</template>

<style scoped>
.botnav {
  width: 100%;
  background-color: #222222ed;
  font-size: 14px;
  color: #666666;
}
.content {
  width: 72%;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
}
.left,
.right {
  width: 50%;
}
.right{
    text-align: right;
}
.left {
  overflow: hidden;
}

.left > ul {
  display: flex;
  justify-content: space-between;
}
.left > img {
  margin: 35px 0;
}
.left > ul:nth-child(4){
    margin-top: 10px;
}
.bg{
    height: 100px;
    background-color: #222222;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    padding: 10px 0;
}
.bg p{
    margin-top: 10px;
}
</style>