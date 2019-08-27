<template>
  <div class="search mb-3">
    <h4>
      <slot name="title"></slot>
    </h4>
    <div class="input-group">
      <input type="text" class="form-control" v-model="keyword">
      <div class="input-group-append">
        <button class="btn btn-danger" type="button">
          <slot/>
        </button>
      </div>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="item in result" :key="item">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      keyword: ""
    };
  },
  computed: {
    result() {
      return this.data.filter(item => {
        return item.includes(this.keyword);
      });
    }
  }
};
</script>
<style>
</style>
