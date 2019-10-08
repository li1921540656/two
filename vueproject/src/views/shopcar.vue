<template>
  <div class="shoppingCar">
    <el-table ref="multipleTable" show-summary :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60"></el-table-column>
      <el-table-column width="150">
        
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="X" class="proimg">
          </template>
      </el-table-column>
      <el-table-column label="商品信息" width="auto">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column prop="price" label="价钱" width="160"></el-table-column>
      <el-table-column prop="addNum" label="数量" width="120" show-overflow-tooltip></el-table-column>
      <el-table-column prop="priceSum" label="总价" width="120"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="paying ()">结算</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          sid: 1,
          img: "http://localhost:8520/uploads/bg.png",
          name: "王小虎",
          price: 80.5,
          addNum: 2
        }
      ],
      multipleSelection: []
    };
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("你确定删除这一项么?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.axios
            .post("/shopping/remove", {
              sid: this.tableData[index].sid
            })
            .then(result => {
              console.log(result.data);
              if (result.data.code == 1) {
                this.tableData.splice(index, 1);
              }
              console.log(this.tableData);
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    paying() {
      if (this.multipleSelection.length == 0) {
        console.log("你还没有选中物品哦");
        this.$message({
          showClose: true,
          message: "尊敬的用户，你还没有选中物品哦",
          type: "warning"
        });
      } else {
        let payModel = `<img src="http://localhost:8520/uploads/bg.png" alt style="width: 60%; margin: 0 auto;display: block;" />`;
        this.$alert(payModel, "支付", {
          dangerouslyUseHTMLString: true
        });
      }
      //   console.log(this.multipleSelection);
    }
  },
  created: function() {
    let uid = this.$store.state.userinfo.uid;
    this.axios
      .get("/shopping/getSoppingcar", {
        params: {
          uid: uid
        }
      })
      .then(result => {
        console.log(result);
        this.tableData = result.data;
        this.tableData.forEach((value, index) => {
          value.priceSum = (value.price * value.addNum).toFixed(2);
          value.price = "￥" + value.price.toFixed(2);
          value.img = value.img;
        });
        console.log(this.tableData);
      });
  }
};
</script>
<style scoped>
.proimg {
  width: 75px;
  height: 75px;
}
.shoppingCar {
  width: 1100px;
  margin: 20px auto;
}
.payImg {
  width: 100px;
  height: 100px;
  margin: 10px auto;
}
</style>
