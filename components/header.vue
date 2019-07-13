<template>
  <el-row class="header">
    <el-row type="flex" justify="space-between" class="btn">
      <!-- logo -->
      <div class="logo">
        <nuxt-link to="/">
          <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
        </nuxt-link>
      </div>

      <!-- 导航栏 -->

      <el-row type="flex" class="navs">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>

      <!-- 登录/用户信息-->
      <el-row align="middle" type="flex">
        <!-- 如果用户存在则展示用户信息，用户数据来自store -->
        <el-dropdown>
          <span class="el-dropdown-lin">
            <i class="el-icon-message-solid el-icon--right"></i>
            消息<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>消息</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-dropdown v-if="false">
          <el-row type="flex" align="middle" class="el-dropdown-link">
            <nuxt-link to="#">
              <img src="http://157.122.54.189:9093/images/pic_sea.jpeg" />
              用户名
            </nuxt-link>
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </el-row>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <nuxt-link to="#">个人中心</nuxt-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <div @click="handout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 不存在用户信息的展示登录注册链接 -->

        <nuxt-link to="/user/login" class="account-link" v-else>登录/注册</nuxt-link>
      </el-row>
    </el-row>
  </el-row>
</template>
<script>
export default {
  methods: {
    // 用户退出
    handout() {}
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  background: #ffff;
  border-bottom: 0 3px 0 #f5f5f5;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;
}
.btn {
  width: 1000px;
  margin: 0 auto;
}
.logo {
  width: 156px;
  padding-top: 8px;
  img {
    display: block;
    width: 100%;
  }
}
.navs {
  margin: 0 20px;
  flex: 1;
  a {
    display: block;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;
    &:hover,
    &:focus,
    &:active {
      border-bottom: 5px #409eff solid;
      color: #409eff;
    }
  }
  /deep/ .nuxt-link-exact-active{
    background:#409eff;
    // color: #fff!important ;
  }
}

.el-dropdown-link{
  margin-left:20px;
  &:hover{
    img{
      border-color:#409eff;

    }
  }
  a{
    display:block;
  }
  img{
    width:3px;
    height: 32px;
    vertical-align: middle;
    border-radius: 50%;

  }
}

.account-link{
  font-size:14px;
  margin-left:10px;
  color:#6666;
  &:hover{
    color:#409eff;
    text-decoration: underline;
  }
}
// 登录注册

.el-dropdown-lin{
  margin-left:30px;
}
</style>
