<template>
  <div class="box">
    <div class="cominfo">
      <img :src="pro.img" alt class="comImg" />
      <div class="comRight">
        <div class="title">
          <span>{{pro.name}}</span>
          <span>二维码</span>
        </div>
        <div class="price">
          <span>价格：</span>
          <span>￥{{pro.price}}</span>
          <span>￥{{pro.oriprice}}</span>
        </div>
        <div class="outnum">
          <div>销量：{{outnum}}</div>
          <div>评论：{{comment}}条</div>
          <div>收藏：0</div>
        </div>
        <div class="buynum">
          购买数量：
          <el-input-number v-model="buynum" @change="buynumChange" :min="1" :max="10" label="描述文字"></el-input-number>
          <span>库存量：500</span>
        </div>
        <div class="buy">
          <el-button plain class="gouwu" @click="addShopping">
            <span class="iconfont icon-gouwuche" style="font-weight:600"></span> 添加到购物车
          </el-button>
          <el-button type="success" @click="paying">
            <span class="nowbuy">立即购买</span>
          </el-button>
        </div>
      </div>
    </div>
    <div class="boxcenter">
      <div>
        <span @click="collect">
          <i
            :class="formLabelAlign.iscollect?'el-icon-star-on':'el-icon-star-off'"
            :style="!formLabelAlign.iscollect?'':'color:red'"
          ></i>收藏
        </span>
      </div>
      <div>
        <span>
          <i class="el-icon-share"></i>分享
        </span>
      </div>
      <div>
        <span>
          <i class="el-icon-edit-outline"></i>评论
        </span>
      </div>
    </div>
    <div class="boxend">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane :label="'产品评论('+comment+')'" name="first">
          <ul class="userComment">
            <li v-for="(item,index) in cominfos" :key="index">
              <div class="uinfo">
                <img
                  src="http://localhost:8520/uploads/bg.png"
                  alt
                  style="dispaly:block;width:50px;height:50px;display:block;"
                />
                <span>{{item.name}}</span>
              </div>
              <div class="cRegion">{{item.region}}</div>
            </li>
          </ul>
          <div class="cominfo">
            <el-form
              ref="formLabelAlign"
              :label-position="labelPosition"
              label-width="80px"
              :model="formLabelAlign"
            >
              <el-form-item label="产品星级" class="xingji">
                <el-rate v-model="formLabelAlign.xingji" show-text @change="rateChange"></el-rate>
              </el-form-item>
              <el-form-item label="昵称" class="name">
                <el-input v-model="formLabelAlign.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" class="liveArea">
                <el-input type="textarea" v-model="formLabelAlign.region"></el-input>
              </el-form-item>
              <el-form-item label="上传图片" class="upload" style :model="formLabelAlign.imglist">
                <el-upload
                  action="http://localhost:81/uploads"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-success="handleAvatarSuccess"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" size="tiny">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit(formLabelAlign)">提交评论</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="产品详情" name="second"></el-tab-pane>
        <el-tab-pane :label="'销售记录('+outnum+')'" name="third">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="买家" width="350"></el-table-column>
            <el-table-column prop="info" label="选项信息" width="350"></el-table-column>
            <el-table-column prop="num" label="数量"></el-table-column>
            <el-table-column prop="date" label="成交时间"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
.box {
  color: #333;
  font-size: 14px;
}
.box > .cominfo {
  width: 1100px;
  margin: 10px auto;
  padding: 20px 30px;
  background: transparent;
  display: flex;
}
.box > .cominfo > img {
  display: block;
  width: 420px;
  height: 420px;
  border: 1px solid #ccc;
  flex-shrink: 0;
}
.box > .cominfo > .comRight {
  width: 100%;
  margin-left: 30px;
  padding: 20px 60px;
}
.comRight > title {
  height: 40px;
  line-height: 40px;
  color: #333;
}
.title > span {
  font-size: 19px;
  margin-right: 10px;
}
.price {
  display: flex;
  padding: 30px 0px;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 20px;
  justify-content: left;
  border-bottom: 1px solid #ccc;
}
.price > span {
  align-items: center;
  display: inline-block;
  line-height: 30px;
}
.price > span:nth-child(2) {
  color: red;
  font-size: 35px;
  font-weight: 600;
  margin-right: 10px;
}
.price > span:nth-child(3) {
  text-decoration: line-through;
  color: #ccc;
}
.comRight > .outnum {
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.comRight > .outnum > div {
  line-height: 25px;
  padding: 0 30px;
  border-right: 1px solid #ccc;
}
.buynum {
  padding: 30px 0;
  text-align: left;
}
.buynum > span {
  margin-left: 10px;
}
.gouwu {
  font-size: 16px;
  color: #4ab344;
  border-color: #4ab344;
}
.gouwu > .icon {
  margin-right: 10px;
}
.buy {
  display: flex;
  justify-content: left;
  font-size: 16px;
  margin-top: 40px;
}
.buy .nowbuy {
  margin: 0 20px;
}
.boxcenter {
  width: 1100px;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
}
.boxcenter > div {
  width: 60px;
  margin-right: 30px;
  font-size: 15px;
  user-select: none;
}
.boxcenter > div span:hover {
  color: #4ab344;
  cursor: pointer;
}
.boxcenter > div i {
  font-size: 20px;
  margin-right: 5px;
}
.boxend {
  width: 1100px;
  margin: 10px auto;
}
.userComment {
  border: 1px solid #ccc;
  border-top: 2px solid #ccc;
}
.userComment > li {
  display: flex;
  justify-content: left;
  list-style: none;
  padding: 10px 20px;
  padding-right: 100px;
  /* background-color: #ccc; */
}
.userComment > li > .uinfo {
  padding-top: 15px;
}

.userComment > li > .cRegion {
  padding: 20px 30px;
  min-height: 80px;
  width: 100%;
  text-align: left;
}
.userComment > li > .cRegion:not(:end) {
  border-bottom: 1px solid rgb(241, 225, 225);
}
.cominfo {
  margin-top: 40px;
  background-color: #4ab34462;
  padding: 60px 50px;
  padding-right: 120px;
  padding-bottom: 30px;
}
.xingji {
  display: flex;
  justify-content: left;
}
.xingji > div {
  margin-left: 20px !important;
}
.xingji > div i {
  line-height: 40px;
}
.name > div {
  width: 200px !important ;
}
.liveArea > div textarea {
  height: 200px !important;
}
.upload {
  display: flex;
  justify-content: left;
  align-items: left;
}
.upload > div {
  margin-left: 20px !important;
}
</style>
<script>
export default {
  data: function() {
    return {
      userinfo: { nikename: "吴昊", uid: 1 },
      pro: {},
      outnum: 0,
      comment: 0,
      buynum: 0,
      activeName: "first",
      fTitle: "2",
      inshapcar: false,
      addShappingNum: 1,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          info: "xxxxxxx",
          num: "1"
        }
      ],
      cominfos: [{ name: "吴昊", region: "xxxxx", imglist: [] }],
      labelPosition: "right",
      formLabelAlign: {
        iscollect: false,
        xingji: null,
        name: "",
        region: "",
        imglist: []
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    open() {
      this.$notify({
        title: "操作成功",
        message: this.formLabelAlign.iscollect
          ? "收藏操作成功"
          : "取消操作成功",
        type: "success"
      });
    },
    buynumChange: function(value) {
      console.log(value);
      this.addShappingNum = value;
    },
    addShopping: function() {
      /* 添加购物车 */
      this.$notify({
        title: "操作成功",
        message: "添加购物车成功",
        type: "success"
      });
      this.inshapcar = !this.inshapcar;
      this.axios
        .post("/shopping/", {
          uid: this.$store.state.userinfo.uid,
          pid: this.$route.query.pid,
          addNum: this.addShappingNum
        })
        .then(function(response) {
          console.log(response);
        });
    },
    collect: function() {
      this.formLabelAlign.iscollect = !this.formLabelAlign.iscollect;
      this.open();
    },
    rateChange(rateNum) {
      console.log(rateNum); //输出星级
    },
    onSubmit: function(formName) {
      // this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });

      console.log(this.formLabelAlign);
    },
    handleAvatarSuccess: function(res, file, fileList) {
      console.log(res, file, fileList);
      this.formLabelAlign.imglist = fileList;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    paying() {
      let payModel = `<img src="http://localhost:8520/uploads/bg.png" alt style="width: 60%; margin: 0 auto;display: block;" />`;
      this.$alert(payModel, "支付", {
        dangerouslyUseHTMLString: true
      });
    }
  },
  watch: {
    activeName: function() {
      console.log(this.activeName);
    }
  },
  created: function() {
    console.log(this.$route.query);

    this.axios
      .get("/goods/getinfo", {
        params: {
          pid: this.$route.query.pid,
          uid: this.$store.state.userinfo.uid
        }
      })
      .then(response => {
        console.log(response.data[0][0], response.data[1]);
        this.pro = response.data[0][0];
        this.cominfos = response.data[1];
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>