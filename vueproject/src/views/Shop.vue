<template>
    <div>
        <!-- 背景 -->
        <div class="bg"><img src="../assets/bg2.png"></div>
        <p class="title">全国各销售门店</p>
        <p class="p1">2014年起，门店全新亮相，并争相开业。在这里，您可以直观感受O2O的便捷，体验面对面的贴心服务。就在你家门口的餐桌管家</p>
        <p class="p1">遛弯儿的时候常来看看...</p>
        <div class="middle" v-for="el in datas" :key="el.sid">
            <div><img :src="el.imgs" class="pic"></div>
            <div class="con">
                <p>{{el.shoper}}</p>
                <p>营业时间：{{el.times}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系电话：{{el.tel}}</p>
                <p>联系邮箱：{{el.email}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系地址：{{el.address}}</p>
                <button class="btn" @click="concat" v-if="btn">联系客服</button>
                <img src="../assets/concat.png" class="concat" v-if="flag">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            datas:[],
            flag:false,
            btn:true
        }
    },
    methods:{
        concat:function(){
            this.flag=true
            this.btn=false
        }
    },
    created:function(){
        this.axios.get("/getShop")
        .then(result=>{
            this.datas=result.data;
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>

<style scoped>

.bg>img{
    height: 370px;
    width: 100%;
}
.title{
    font-size: 26px;
    color: #444444;
    margin: 50px 0;
}
.p1{
    font-size: 14px;
    color: #777777;
    margin: 10px 0;
}
.pic{
    width: 355px;
    height: 217px;
    border-radius: 10px;
}
.con{
    width: 520px;
}
.con p{
    margin-top: 10px;
}
.con p:nth-child(2),
.con p:nth-child(3){
    font-size: 14px;
    color: #777777;
}
.con p:nth-child(1){
    margin-top: 0;
    margin-bottom: 30px;
}
.middle{
    width:68%;
    display: flex;
    margin: 110px auto;
    min-width: 924px;
    justify-content: space-between;
    text-align: left;
}
.btn{
    width: 120px;
    height: 41px;
    background-color: #4Ab344;
    border: 0;
    color: white;
    font-size: 14px;
    font-family: "微软雅黑";
    margin-top: 20px;
    border-radius: 5px;
}
.concat{
    width: 100px;
}
</style>