<template>
  <div class="page">
    <div class="title">
         <p class="name">{{content.name}}</p>
        <p class="depart">所属部门：{{content.depart}}</p>
    </div>
    <div class="content">
      <div class="split"></div>
      <div class="count">
        <span>岗位职级：{{detail.level}}</span>
        <span>招聘人数：{{detail.count}}人</span>
      </div>
      <p>岗位描述</p>
      <p>{{detail.intro}}</p>
      <p>岗位要求</p>
      <p>{{detail.work}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      content: "",
      detail: ""
    };
  },
  created() {
    this.getContent();
  },
  methods: {
    getContent() {
      var num = this.$route.query.num;
      var index = this.$route.query.index;
      console.log(this.$route.query);
      axios.get("/api/jobdata1").then(res => {
        console.log(res);
        var content = res.data.data;
        this.content = content[index];
        this.detail = this.content.detail[0];
      });
    }
  },
  watch: {}
};
</script>
<style scoped>
.page {

}
.title {
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem 1rem;
}
.name {
  font-size: 1.5rem;
  color: #43add5;
  font-weight: 700;
}
.depart {
  color: #999;
  font-size: 0.8rem;
}
.content{
}
.split{
  height: .7rem;
  background-color: #f3f3f3;
}
.count{
  padding:0.8rem;
  display: flex;
  justify-content: space-between;
}
</style>
