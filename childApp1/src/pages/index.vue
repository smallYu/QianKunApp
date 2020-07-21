<template>
  <div class="home">
    <button @click="addCount">改变主应用数据 count ++ </button> 当前count:{{count}}
    <button @click="setExtra">微应用不能设置原State不存在的属性extra，不信你试下</button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        count: 0
      }
    },
    components: {},
    created() {},
    mounted() {
      this.$action.onGlobalStateChange((state, prev) => {
        this.count = state.count;
        console.log(state)
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
    computed: {},
    watch: {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
  };
</script>
