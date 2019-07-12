<template>
  <el-row class="header">
     <el-row type="flex" justify="space-between" class="btn">
        <!-- logo -->
        <div class="logo">
          <nuxt-link to="/">
            <img src="http://157.122.54.189:9093/images/logo.jpg" alt="">
          </nuxt-link>
        </div>

        <!-- 导航栏 -->

        <el-row type="flex" class="navs">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>

        <!-- 登录 -->
        <el-row type="flex" align="middle">
          <!-- 如果用户存在展示用户信息，用户数据来自store -->
          <el-dropdown v-if="false">
            <el-row type="flex" align="middle" class="loginEl">
              <nuxt-link to="#">
                <img src="http://157.122.54.189:9093/images/pic_sea.jpeg"/>
              </nuxt-link>
               <i class="el-icon-caret-bottom el-icon--right"></i>
            </el-row>

            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <nux-link to="#">个人中心</nux-link>
              </el-dropdown-item>
                <el-dropdown-menu>
                  <div>退出</div>
                </el-dropdown-menu>
            </el-dropdown-menu>
          </el-dropdown>
        </el-row>
     </el-row>
 </el-row>

</template>
<script>
export default {

}
</script>

<style lang="less" scoped>
.header{
  height: 60px;
  line-height:60px;
  background:#ffff;
  border-bottom: 0 3px 0 #f5f5f5;
  box-shadow: 0 3px 0 #f5f5f5;
  box-sizing: border-box;
}
.btn{
  width: 1000px;
  margin: 0 auto;
}
.logo{
  width: 156px;
  padding-top: 8px;
  img{
    display: block;
    width: 100%;
  }
}
.navs{
  margin: 0 20px;
  flex: 1;
  a{
    display: block;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;
    &:hover,&:focus,&:active{
      border-bottom: 5px #409eff solid;
      color: #409eff
    }
  }
}
</style>
