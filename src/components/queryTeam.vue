<template>

  <div>
    <el-button @click="submitManage">跳转到管理界面</el-button>
    <el-button @click="submitQuery">跳转到地址查询</el-button>
    <h1>团队查询</h1>
    <el-input  v-model="subaddress" placeholder="请输入要查询的钱包地址" auto-complete="off"></el-input>
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
    <div class="block">
      <span class="demonstration">换页</span>
      <el-pagination @current-change="pageChange"
                     layout="prev, pager, next"
                     :total="50">
      </el-pagination>
    </div>


  </div>
</template>

<script>
import re from "../config/request";
export default {
  name: "queryTeam",
  data(){
    return{
      subaddress:'',
      tableData:[
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:'',
          pid:''
        },
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
    submitQuery(){
      this.$router.push('/query')
    },
    submit(){
      re({url:'/getChildren',method:'get',params:{'address':this.subaddress,pageSize:20,pageNum:1}})
        .then(res=>{
          if (res.data.data==null){return }

          let length= res.data.data.length;
          var resData=res.data.data;
          for (var i=0;i<length ; i++){
            this.tableData[i].id=resData[i].id;
            this.tableData[i].address=resData[i].address;
            this.tableData[i].pid=resData[i].pid;
            if (resData[i].pay==0){
              this.tableData[i].pay = '否'
            }else {
              this.tableData[i].pay ='是'
            }
            if(resData[i].time!=null){
              this.tableData[i].time=resData[i].time.replace('T',' ').replace('000+00:00','').replace('.','')
            }
          }
        })
    },

    handleClick(row){
      re({url:'/update',method:'post',params:{address:row.address}})
        .then(res=>{
          if (res.data.code==200){
            alert("转账更改成功");

          }else {alert(res.data.data)||alert(res.data)}
        })
    },
    pageChange(page){
      re({url:'/getChildren',method:'get',params:{pageSize:20,pageNum:page}})
        .then(res=>{
          let length= res.data.data.length;
          var resData=res.data.data;
          for (var i=0;i<length ; i++){
            this.tableData[i].id=resData[i].id;
            this.tableData[i].address=resData[i].address;
            this.tableData[i].pid=resData[i].pid;
            if (resData[i].pay==0){
              this.tableData[i].pay = '否'
            }else {
              this.tableData[i].pay ='是'
            }
            if(resData[i].time!=null){
              this.tableData[i].time=resData[i].time.replace('T',' ').replace('000+00:00','').replace('.','')
            }
          }





        })


    }

  }
}
</script>

<style scoped>

</style>
