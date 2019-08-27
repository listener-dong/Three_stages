<template>
  <div class="container-fluid">
    <h1>todolist_vue.cli</h1>
    <todolist></todolist>
    <mysearch :data="city">查询
      <template v-slot:title>爱吹牛爱装逼</template>
    </mysearch>
    <mysearch :data="web">搜索</mysearch>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import todolist from "./components/todolist.vue";
import mysearch from "./components/search.vue";

export default {
  name: "app",
  data() {
    return {
      city: ["广州", "深圳", "北京", "南京", "上海", "沙巴"],
      web: ["html", "css", "javascript", "mysql", "php", "mongodb", "node.js"]
    };
  },
  components: {
    // 注册局部组件
    todolist,
    mysearch
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
