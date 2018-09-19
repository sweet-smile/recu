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
        <!-- <span>招聘人数：{{detail.count}}人</span> -->
      </div>
      <p class="intro">岗位描述</p>
      <div class="intro-con">
        <p  v-for="(item,index) in intro" :key="index">{{item}}{{index==intro.length-1?'。':'；'}}</p>
      </div>
      <p class="work">岗位要求</p>
      <div class="work-con">
        <p  v-for="(item,index) in work" :key="index">{{item}}{{index==work.length-1?'。':'；'}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import data from "../data/data"
export default {
  data() {
    return {
      content: "",
      detail: "",
      intro:[],
      work:[]
    };
  },
  created() {
    // this.getContent();
     var num = this.$route.query.num;
      var index = this.$route.query.index;
      if(num==0){
         this.content = data.objList1[index];
      }
      if(num==1){
          this.content = data.objList2[index];
      }
      if(num==2){
         this.content = data.objList3[index];
      }
      this.detail = this.content.detail[0];
      var intro=this.detail.intro.split(';');
      var work=this.detail.intro.split(';');
     this.intro=intro;
     this.work=work;
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

.title {
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.3rem 1rem;
}
.name {
  font-size: 1.3rem;
  color: #43add5;
  font-weight: 700;
}
.depart {
  color: #999;
  font-size: 0.8rem;
}

.split{
  height: .7rem;
  background-color:red;
}
.count{
  padding:0.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom:.01rem solid #eee;
}
.intro {
  padding:.8rem;
}
.work{
   padding:.8rem;
}
.intro-con{
  padding:0 0.8rem 0.8rem;
  border-bottom:.01rem solid #eee;
}
.work-con{
  padding:0 0.8rem .8rem;
}
</style>
