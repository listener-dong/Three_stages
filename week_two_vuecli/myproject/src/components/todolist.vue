<template>
     <div class="todolist">
          <todoform :additem="additem"></todoform>
          <!-- <todocontent :datalist="datalist" :complitem="complitem" :removeitem="removeitem"></todocontent> -->
          <todocontent :datalist="datalist"></todocontent>
     </div>
</template>

<script>
// 引入组件
import todoform from "./todoform.vue";
import todocontent from "./todocontent.vue";
import "bootstrap/dist/css/bootstrap.css";
import Bus from "../bus.js";

export default {
  data() {
    return {
      datalist: [
        {
          content: "完成Vue团队项目",
          time: "2019-9-9",
          done: false
        }
      ]
    };
  },
  components: {
    todoform,
    todocontent
  },
  methods: {
    additem(content) {
      let data = {
        content,
        time: Date.now(),
        done: false
      };
      this.datalist.push(data);
    },
    removeitem(idx) {
      this.datalist.splice(idx, 1);
    },
    complitem(idx) {
      this.datalist[idx].done = true;
    }
  },
  mounted() {
    // 接收方：给vue实例添加自定义事件
    Bus.$on("remove", idx => {
      this.removeitem(idx);
    });
    Bus.$on("complete", idx => {
      this.complitem(idx);
    });
  }
};
</script>
<style>
</style>
