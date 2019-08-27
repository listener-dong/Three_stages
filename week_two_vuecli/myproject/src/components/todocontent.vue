<template>
    <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">待办事项</th>
                    <th scope="col">完成时间</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr is="todoitem" v-for="(item,idx) in datalist" :class="{'table-primary':item.done}" :data="item"
                    :idx="idx" :complitem="complitem" :removeitem="removeitem"></tr> -->
                    <todoitem v-for="(item,idx) in datalist" :class="{'table-primary':item.done}" :data="item"
                    :idx="idx" :key="item.time"></todoitem>
            </tbody>
        </table>
</template>

<script>
import todoitem from "./todoitem.vue";
export default {
  //   props: ["datalist", "complitem", "removeitem"],
  props: ["datalist"],
  data() {
    return {};
  },
  components: {
    todoitem
  }
};
</script>

