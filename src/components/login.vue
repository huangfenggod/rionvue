<template>
  <div class="login">
  <el-form class="login-form">
    <h3 class="title">后台管理登录</h3>
    <el-form-item>
    <el-input placeholder="账号" v-model="username"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input v-model="password"
        type="password"
        auto-complete="off"
        placeholder="密码">
        <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" />
      </el-input>
    </el-form-item>
<el-button @click="submit">登录</el-button>


  </el-form>


  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    submit(){
      if (this.username=='admin'&&this.password==='admin'){
        this.$router.push('/manage')
      }else {
        alert('账号密码错误')
      }
    }
  }

}
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /*background-image: url("../assets/img.png");*/
  background-size: cover;
}
</style>
