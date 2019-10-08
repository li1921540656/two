<template>
  <div>
    <div class="side">商品后台管理系统</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="产品管理" name="first">
        <el-table
          :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
          style="width: 100%"
        >
          <el-table-column label="产品名称" prop="name"></el-table-column>
          <el-table-column label="价钱" prop="price"></el-table-column>
          <el-table-column label="原价" prop="oriprice"></el-table-column>
          <el-table-column label="类别" prop="type"></el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="mini" type="danger" @click="open(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="产品添加" name="second">
        <form action="javascript:void 0" class="editform">
          产品名称:
          <input type="text" v-model="name" />
          <br />
          <br />价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;钱:
          <input type="text" v-model="price" />
          <br />
          <br />原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价:
          <input type="text" v-model="oriprice" />
          <br />
          <br />类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:
          <input type="text" v-model="type" />
          <br />
          <br />
          <button @click="add">提交</button>
        </form>
      </el-tab-pane>
      <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane> -->
      <el-tab-pane label="产品编辑" name="fourth" v-if="flag">
        <form action="javascript:void 0" class="editform">
          产品名称:
          <input type="text" v-model="name" />
          <!-- :value="datas.name" -->
          <br />
          <br />价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;钱:
          <input type="text" v-model="price" />
          <br />
          <br />原&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价:
          <input type="text" v-model="oriprice" />
          <br />
          <br />类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:
          <input type="text" v-model="type" />
          <br />
          <br />
          <button @click="editp">提交</button>
        </form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [],
      search: "",
      flag: false,
      name: "",
      price: "",
      oriprice: "",
      type: ""
      //   pid:""
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
      if (this.activeName == "second") {
        this.name = "";
        this.price = "";
        this.oriprice = "";
        this.type = "";
      }
    },
    //编辑
    handleEdit(index, row) {
      this.flag = true;
      this.activeName = "fourth";
      this.name = row.name;
      this.price = row.price;
      this.oriprice = row.oriprice;
      this.type = row.type;
      this.pid = row.pid;
    },
    handleDelete(index, row) {},
    //提交修改
    editp() {
      this.axios
        .post("/editProduct", {
          name: this.name,
          price: this.price,
          oriprice: this.oriprice,
          type: this.type,
          pid: this.pid
        })
        .then(response => {
          if (response.data.code == 1) {
            alert("修改成功");
            this.activeName = "first";
            this.prolist();
            this.flag = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //点击删除
    open(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.axios.get("/delProduct?pid=" + row.pid).then(response => {
            this.tableData = response.data;
          });
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.prolist();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //添加
    add() {
      this.axios
        .post("/addProduct", {
          name: this.name,
          price: this.price,
          oriprice: this.oriprice,
          type: this.type
        })
        .then(response => {
          if (response.data.code == 1) {
            alert("添加成功");
            this.activeName = "first";
            this.prolist();
            this.flag = false;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    prolist() {
      this.axios.get("/productList").then(response => {
        this.tableData = response.data;
      });
    }
  },
  created: function() {
    this.prolist();
  }
};
</script>
<style scoped>
.editform {
  margin: 40px 0;
}
.side {
  height: 100px;
  text-align: center;
  line-height: 100px;
  background-color: #4ab344;
  font-size: 20px;
  color: white;
}
.editform button {
  width: 290px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border: none;
  background: #4ab344;
}
.editform input {
  width: 200px;
  height: 30px;
  text-align: center;
  margin-left: 20px;
}
</style>