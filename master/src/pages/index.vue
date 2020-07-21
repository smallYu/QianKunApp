<template>
  <div class="page">
    我是主应用的首页 count:{{count}}
    <el-button @click="addCount">修改count ++ </el-button>
    <el-button @click="setExtra">主应用设置原State额外不存在的属性extra</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      };
    },
    mounted() {
      //第二个参数为true直接触发
      this.$action.onGlobalStateChange((state, prevState) => {
        this.count = state.count;
        console.log(state);
      }, true);
    },
    methods: {
      addCount() {
        this.$action.setGlobalState({
          count: ++this.count
        })
      },
      setExtra() {
        this.$action.setGlobalState({
          extra: 1
        })
      }
    },
  };
</script>
