<template>
        <tr>
            <th scope="row">{{idx+1}}</th>
            <td>{{data.content}}</td>
            <td>{{data.time}}</td>
            <td>{{data.done?'是':'否'}}</td>
            <td>
                <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-primary" @click="complitem(idx)">完成</button>
                    <button type="button" class="btn btn-outline-danger" @click="removeitem(idx)">删除</button>
                </div>
            </td>
        </tr>
</template>
<script>
import Bus from "../bus.js";
export default {
  //   props: ["data", "idx", "complitem", "removeitem"],
  props: ["data", "idx"],
  methods: {
    //   触发定义在Bus上的自定义事件
    complitem(idx) {
      Bus.$emit("complete", idx);
    },
    removeitem(idx) {
      Bus.$emit("remove", idx);
    }
  }
};
</script>
