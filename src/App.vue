<template>
  <div id="app">
    <span>背呗单词</span>
    <el-divider></el-divider>
    <el-tabs v-model="activeName">
      <el-tab-pane label="单词学习" name="first" ></el-tab-pane>
      <el-tab-pane label="学习设置" name="second"></el-tab-pane>
    </el-tabs>
    <WordPart v-show="activeName === 'first' ? true : false"/>
  </div>
</template>

<script>

import WordPart from './components/WordPart.vue'

export default {
  
  name: 'App',
  components:{
    WordPart
  },
  data() {
      return {
        activeName: 'first',
      };
    },
    mounted(){
      this.$store.dispatch('getWords')
    }
      
}
</script>

<style>
.app{
  width:100%;
  height: 100%;
}
</style>
