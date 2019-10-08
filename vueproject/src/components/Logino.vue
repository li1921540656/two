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

      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>

      <el-form-item prop="email" label="邮箱">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="留言" prop="descl">
        <el-input type="textarea" v-model="ruleForm.descl"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
        name: "",
        username: "",
        passwd: "",
        checkPass: "",
        descl: "",
        email: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账户", trigger: "blur" }],
        username: [{ required: true, message: "请输入账户", trigger: "blur" }],
        descl: [{ required: false, message: "请填写活动形式", trigger: "blur" }],
        pass: [
          { validator: validatePass, trigger: "blur" },
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
        checkPass: [
          { validator: validatePass2, trigger: "blur" },
          { required: true, message: "请确认密码", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: "blur,change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.axios
            .post("/regs", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.code == 1) {
                this.$alert("注册成功,是否跳转到登录界面", {
                  confirmButtonText: "确定",
                  callback: action => {
                   window.location.href='./Login'
                   
                  }
                });
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