<template>
  <div id="main-app">
    <el-menu router :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/">主应用首页</el-menu-item>
      <el-submenu index="/vueApp1/">
        <span slot="title">Vue微应用A</span>
        <el-menu-item index="/vueApp1/">首页</el-menu-item>
        <el-menu-item index="/vueApp1/#/about">关于</el-menu-item>
      </el-submenu>
      <el-submenu index="/vueApp2/">
        <span slot="title">Vue微应用B</span>
        <el-menu-item index="/vueApp2/">首页</el-menu-item>
        <el-menu-item index="/vueApp2/#/about">关于</el-menu-item>
      </el-submenu>
      <el-menu-item index="/about">主应用about路由</el-menu-item>
    </el-menu>
    <router-view v-show="$route.name" />
    <keep-alive>
      <div v-show="!$route.name" id="subapp-container"></div>
    </keep-alive>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      },
      upload(e) {
        let files = e.target.files[0];
        let formData = new FormData();
        formData.append('images', files);
        formData.append('data2', JSON.stringify({
          a: 1
        }))
        this.$post('/api/v1/public/busBoy', formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(res => {
          console.log(res);
        })
      }
    }
  }
</script>

<style lang="less">

</style>
