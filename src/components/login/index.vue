<template>
  <div class="root">
    <div class="login">
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" v-model="form.username" clearable maxlength="8" class="elinput"
                    prefix-icon="el-icon-user"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input placeholder="请输入密码" v-model="form.password" show-password maxlength="8" class="elinput"
                    prefix-icon="el-icon-key"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="success" style="width: 100%" class="loginBtn" @click="login">登录</el-button>
    </div>


  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        form: {
          username: '',
          password: ''
        }, rules: {
          username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          password: [{required: true, message: '请输入密码', trigger: 'blur'}]
        }

      }
    },
    methods: {
      login: function () {
        let password = this.form.password
        let username = this.form.username
        if (!password || !username || username.trim() == '' || password.trim() == '') {
          this.$message.error({
            message: '请输入账号或密码',
            center: true,
          });
          return
        }
        this.$httpPOST("login", this.form).then((result) => {
          if (result.code == 0) {
            let token = result.data.token
            this.$setToken(token)
          }
        })
      }
    }
  }
</script>

<style scoped>
  .elinput {
  }

  .loginBtn {
    border-radius: 13px;
  }

  .root {
    background: #487eb0;

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login {
    width: 200px;
    height: 200px;
  }

  li {
    list-style-type: none;
  }
</style>
