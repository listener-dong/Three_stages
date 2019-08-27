<template>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" v-model="keyword" ref="key"
                @keyup.13="add">
            <div class="input-group-append">
                <button class="btn btn-success" type="button" @click="add">添加</button>
            </div>
        </div>
</template>

<script>
export default {
  props: ["additem"],
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    add() {
      this.additem(this.keyword);
      this.keyword = "";
      this.$refs.key.focus();
    }
  }
};
</script>
