<template>
  <div class="one">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="passwd">
        <el-input type="password" v-model="ruleForm.passwd" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<style  scoped>
.one {
  width: 40%;
  height: 100%;
  background: url(../assets/4.jpg) no-repeat;
  background-position: right;
  background-size: cover;
  background-attachment: fixed;
  margin: 20px auto;
  text-align: left;
  padding-left: 60px;
}
.el-input,
.el-textarea {
  width: 60%;
}
.el-form {
  padding-top: 20px;
}
.el-button + .el-button {
  margin-left: 50px;
}
</style>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.passwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        passwd: "",
        checkPass: "",
        avator:""
      },
      userinfo:'',
      rules: {
        username: [{ required: true, message: "请输入账户", trigger: "blur" }],
        passwd: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
        checkPass: [
          { validator: validatePass2, trigger: "blur" },
          { required: true, message: "请确认密码", trigger: "blur" }
        ]
      }
    };
  },
  created: function() {
    this.userinfo = this.$store.state.userinfo;
    console.log(this.userinfo);
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .get("/regs/login", { params: this.ruleForm })
            .then(res => {
              console.log(res.data,res.data.avator);

              if (res.data.code == 1) {
                this.ruleForm.isLogin = true;
                this.$store.commit("ADD_COUNT",res.data);

                if (res.data.administrator.administrator == 0) {
                window.location.href="http://localhost:8081" ; //跳转到首页?
                } else if (res.data.administrator.administrator == 1) {
                 window.location.href='http://localhost:8081/Admin'//跳转到后台
                }
              } else if (res.data.code == 0) {
                this.$alert("密码错误,请修改密码", {
                  confirmButtonText: "确定",
                  callback: action => {
                    window.location.href = "./Login";
                  }
                });
              } else {
                alert("该用户不存在");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>