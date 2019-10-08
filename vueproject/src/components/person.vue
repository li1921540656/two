<template>
    <div class="center">
        <img src="" alt="">
        <div><label>账号:</label>{{userinfo.username}}</div>
        <div><label>姓名:</label>{{userinfo.name}} </div>
        <div><label>性别:</label></div>
        <div><label>留言:</label>{{userinfo.descl}}</div>
        <div><label>邮箱:</label>{{userinfo.email}}</div>
    </div>
</template>
<style  scoped>
button{
    border:0px;
    border-radius: 5px;
    font-size: 12px;
}
.center{
 width: 500px;
 margin: 50px auto;
 text-align: left;
 margin-left: 200px;

}
label{
    width: 150px;
    height: 35px;
    display:inline-block;
    text-align: right;
    margin-right: 50px;
}
</style>
<script>
export default {
    data(){
        return{
            userinfo:{},
            username:""
        }
    },
    created:function(){
        this.username=this.$store.state.userinfo.username
        this.axios
            .get("/regs/center", { params: {username:this.username}})
            .then(res => {
              this.userinfo=res.data[0]
            })
            .catch(err => {
              console.log(err);
            });
    }
}
</script>>