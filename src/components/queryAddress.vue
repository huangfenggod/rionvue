<template>
<div>
  <el-button @click="submitManage">跳转到管理界面</el-button>
  <el-button @click="submitTeam">跳转团队查询</el-button>
<h1>钱包地址查询</h1>
    <el-input  v-model="address" placeholder="请输入要查询的钱包地址" auto-complete="off"></el-input>
<br/><br/>
<el-button @click="submit">查询</el-button>
<br/><br/>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="100">
    </el-table-column>
    <el-table-column
      fixed
      prop="time"
      label="日期"
      width="160">
    </el-table-column>
    <el-table-column
      prop="address"
      label="钱包地址"
      width="500">
    </el-table-column>
    <el-table-column
      prop="pid"
      label="推荐人编号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="pay"
      label="是否转账"
      width="120">
    </el-table-column>
    <!--    fixed="right"-->
    <el-table-column
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" size="small" >转账</el-button>

      </template>
    </el-table-column>
  </el-table>



</div>
</template>

<script>
import re from "../config/request";

export default {
  name: "queryAddress",
  data(){
    return {
      address:'',
      tableData:[
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        }]
    }
},
  methods:{
    submitManage(){
      this.$router.push('/manage')
    },
    submitTeam(){
      this.$router.push('/team')
    },
    handleClick(row){
      re({url:'/update',method:'post',params:{address:row.address}})
        .then(res=>{
          if (res.data.code==200){
            alert("转账更改成功");

          }else {alert(res.data.data)||alert(res.data)}
        })
    },
    submit(){
      if (this.address==''){alert("输入钱包地址查询");return }
      re({url:'/checkAddress',method:'get',params:{'address':this.address}}).then(
        res=>{
          if (res.data.code!=200){alert("没有查到");return };
          this.tableData[0].id=res.data.data.id;
          this.tableData[0].pid=res.data.data.pid;
          this.tableData[0].address=res.data.data.address;
          this.tableData[0].time=res.data.data.time.replace('T',' ').replace('000+00:00','').replace('.','');
          if (res.data.data.pay==0){
            this.tableData[0].pay='否'
          }else {
            this.tableData[0].pay='是'
          }
        }
      ).catch(e=>alert(e))

    }
  }
}
</script>

<style scoped>

</style>
