<template>

  <div class="hello ">
    <img src="http://assist.jd.com/job/static/img/logo.e7983d2.png" alt="">
    <span class="email">简历接收邮箱：<span class="email1">chenjian@jd.com</span></span>
    <p class="email2">changfangfang@jd.com</p>
  <ul class="clearfix title" >
    <li class="tab " v-for="(item,index) in job" :class="{active:index == num}" @click="tab(index)" :key="index">{{item.name}}</li>
  </ul>
    <div class="content" v-for='(item,index) in job'  v-show=" index == num" :key="index">
      <ul>
        <li  class="joblist" :class="{scan:list.scan}" v-for="(list,index) in item.job" :key="index" @click="gotoDetail(index)">
          <p class="name" >{{list.name}}</p>
          <p class="depart">所属部门：{{list.depart}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import obj from "../../mock/test.js"
export default {
  name: "job",
  data() {
    return {
      num: 0,
      job: obj||[]
    };
  },
  created() {
    // this.getList();
    console.log(this.obj)
  },
  methods: {
    tab(index) {
      this.num = index;
    },
    gotoDetail(index) {
      console.log(this.num, index);
      this.$router.push({
        path: "/detail",
        query: { num: this.num, index: index }
      });
      console.log(this.job[this.num])
      this.job[this.num].job[index].scan=true;
      console.log(this.job)
    },
    getList() {
      axios.get("/api/jobdata").then(res => {
        console.log(res);
        this.job = res.data.data;
        var jobC=this.job.map((item,index)=>{
          item.job.map((a,b)=>{
           return a.scan=false
          })
        })
        console.log(this.job)

      });

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 100%;
  height: 15rem;
}
.title {
  width: 100%;
  display: flex;
  /* justify-content: space-around; */
  height: 3rem;
  line-height: 3rem;
  border-bottom: 0.001rem solid #eee;
  border-top: 0.001rem solid #eee;
  margin-top: 0.5rem;
}
li {
  list-style: none;
}
.tab {
  width: 20%;
  text-align: center;
}
.content {
  display: block;
}
.clearfix:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.joblist {
  padding: 0.5rem 0.2rem 0.5rem 1rem;
  border-bottom: 0.01rem solid #eee;
}
.name {
  font-size: 1.2rem;
}
.depart {
  font-size: 0.9rem;
}
.email {
  font-size: 1.2rem;
  margin: 1.5rem;
}
.email1 {
  font-size: 1.2rem;
  color: #43add5;
}
.email2 {
  font-size: 1.2rem;
  color: #43add5;
  margin-left: 9.8rem;
}
.active {
  color: #43add5;
  border-bottom: 0.15rem solid #43add5;
}
.scan{
  color: #43add5;
}
</style>
