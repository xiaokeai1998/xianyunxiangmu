<template>
  <div>
<<<<<<< HEAD
    <!-- 头部组件 -->
    <Header/>
<!-- 占位组件 -->
    <nuxt />
    <!-- 尾部组件 -->
    <Footer/>

  </div>
</template>

<script>
// 导入头部组件
import Header from "@/components/header"
import Footer from "@/components/footer"
export default {
  components: {
    // 注册组件
    Header,
    Footer
  }
}
</script>

=======
    <nuxt />
  </div>
</template>

>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

<<<<<<< HEAD
*{
  margin: 0;
  padding: 0;
}

ul,li,ol{
  list-style: none;

}
a{
  text-decoration: none;
  color:initial;
}
em,i{
  font-style: normal;
=======
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
}
</style>
