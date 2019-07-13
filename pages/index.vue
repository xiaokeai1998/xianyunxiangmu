<template>
  <div class="container">
<<<<<<< HEAD
    <!-- 幻灯片 -->
    <el-carousel :interval="5000">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div
          class="banner-image"
          :style="`background:url(${item.url}) center no-repeat;background-size:contain contain;`"
        ></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 搜索栏 -->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row type="flex" class="search-tab">
          <span
            v-for="(item, index) in options"
            :key="index"
            :class="{active: index === currentOption}"
            @click="handleOption(index)"
          >
            <i>{{item.name}}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row type="flex" align="middle" class="search-input">
          <input
            :placeholder="options[currentOption].placeholder"
            v-model="searchValue"
            @keyup.enter="handleSearch"
          />
          <i class="el-icon-search"></i>
        </el-row>
=======
    <div>
      <logo />
      <h1 class="title">
        xianyun
      </h1>
      <h2 class="subtitle">
        My cat&#39;s pajamas Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  data() {
    return {
      // 轮播图数据
      banners: [
        {
          url: "http://157.122.54.189:9095/assets/images/th03.jfif"
        },
        {
          url: "http://157.122.54.189:9095/assets/images/th04.jfif"
        }
      ],
      // 搜索tab选项
      options: [
        {
          name: "攻略",
          placeholder: "请输入城市",
          pageUrl: "/post?city="
        },
        {
          name: "酒店",
          placeholder: "搜索酒店",
          pageUrl: "/hotel?city="
        },
        {
          name: "机票",
          placeholder: "请输入出发地址",
          pageUrl: "/air"
        }
      ],
      searchValue: "",
      currentOption: 0 //当前选项中的选项
    };
  },
  methods: {
    handleOption(index) {
      if (index == 2) {
        this.$router.push("/air");
      }
      this.currentOption = index;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;

  /deep/ .el-carousel__container {
    height: 700px;
  }

  .banner-image {
    width: 100%;
    height: 100%;
  }
}
.banner-content {
  z-index: 9;
  width: 1000px;
  position: absolute;
  left: 50%;
  top: 45%;
  margin-left: -500px;
  border-top: 1px transparent solid;
}
.search-bar {
  width: 552px;
  margin: 0 auto;
}

.search-tab {
  .active {
    i {
      color: #333;
    }
    &::after {
      background: #eee;
    }
  }

  span {
    width: 82px;
    height: 36px;
    display: block;
    position: relative;
    margin-right: 8px;
    cursor: pointer;

    i {
      position: absolute;
      z-index: 2;
      display: block;
      width: 100%;
      height: 100%;
      line-height: 30px;
      text-align: center;
      color: #fff;
    }

    &:after {
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      content: "";
      width: 100%;
      height: 100%;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-bottom: none;
      transform: scale(1.1, 1.3) perspective(0.7em) rotateX(2.2deg);
      transform-origin: bottom left;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 1px 2px 0 0;
      box-sizing: border-box;
    }
  }
}

.search-input {
  width: 550px;
  height: 46px;
  background: #fff;
  border-radius: 0 4px 4px 4px;
  border: 1px rgba(255, 255, 255, 0.2) solid;
  border-top: none;
  box-sizing: unset;

  input {
    flex: 1;
    height: 20px;
    padding: 13px 15px;
    outline: none;
    border: 0;
    font-size: 16px;
  }

  .el-icon-search {
    cursor: pointer;
    font-size: 22px;
    padding: 0 10px;
    font-weight: bold;
  }
=======
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
>>>>>>> 1684d41fc5fdc73c8258d95903a4a30442346ce2
}
</style>
