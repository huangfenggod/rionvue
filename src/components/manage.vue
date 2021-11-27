<template>
<div>
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
      width="300">
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
  name: "manage",
  data(){
    return {
      ispay:[
        false,false
      ],


      tableData:[
        {
        id:'',
        time:'',
        address:'',
        pay:''
      },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },
        {
          id:'',
          time:'',
          address:'',
          pay:''
        },


      ]

    }
  },
methods:{
  handleClick(row){
    re({url:'/update',method:'post',params:{address:row.address}})
      .then(res=>{
        if (res.data.code==200){
          alert("转账更改成功");

        }else {alert(res.data.data)||alert(res.data)}
      })
  },
  pageChange(page){
    re({url:'/getDetail',method:'get',params:{pageSize:40,pageNum:page}})
      .then(res=>{
        let length= res.data.data.length;
        var resData=res.data.data;
        for (var i=0;i<length ; i++){
          this.tableData[i].id=resData[i].id;
          this.tableData[i].address=resData[i].address;
          if (resData[i].pay==0){
            this.tableData[i].pay = '否'
          }else {
            this.tableData[i].pay ='是'
          }
          if(resData[i].time!=null){
            this.tableData[i].time=resData[i].time.replace('T',' ').replace('000+00:00','')
          }
        }





      })


  }

},
  created() {
    re({url:'/getDetail',method:'get',params:{pageSize:40,pageNum:1}})
      .then(res=>{


      let length= res.data.data.length;
        var resData=res.data.data;
       for (var i=0;i<length ; i++){
         this.tableData[i].id=resData[i].id;
         this.tableData[i].address=resData[i].address;
         if (resData[i].pay==0){
           this.tableData[i].pay = '否'
         }else {
           this.tableData[i].pay ='是'
         }
  if(resData[i].time!=null){
      this.tableData[i].time=resData[i].time.replace('T',' ').replace('000+00:00','')
  }
       }





      })
    .catch(reasion=>{alert("获取失败"+reasion)})


  }
}
</script>

<style scoped>


</style>
