<template>
  <div v-show="unDone" id="test">
    <div v-show="test">
      <div class="word">{{ using[0].word }}</div>
      <div class="eg" v-show="showEg">例句:{{ using[0].eg }}</div>
      <button @click=isKnown @mouseover="chengeGreen" @mouseleave="clearColar" class="known">{{ showEg ? '想起来了' : '认识' }}</button>
      <button @click=unKnown @mouseover="chengeRed" @mouseleave="clearColar" class="known">不认识</button>
    </div>
    <div v-show="details" id="details">
      <div class="word">{{ using[0].word }}</div>
      <div>意思:{{ using[0].translate }}</div>
      <div class="eg">例句:{{ using[0].eg }}</div>
      <div>例句翻译:{{ using[0].egTranslate }}</div>
      <button @click="renderNext" style="float:  right;">下一个</button> 
    </div>
  </div>
</template>

<script>
export default {
    name:'ShowWords',
    mounted: function () {
      this.using = this.words
    },
    data(){
      return{
        //后端传入的词组
        words:[
        {
          word:'hello',
          translate:'你好',
          eg:'hello,world',
          egTranslate:'世界你好',
        },
        {
          word:'school',
          translate:'学校',
          eg:'there is a school',
          egTranslate:'这有一所学校',
        },
        {
          word:'car',
          translate:'汽车',
          eg:'I have a car',
          egTranslate:'我有一辆汽车',
        }
        ],
        //using数组 当前页面正在使用的单词组,默认为words
        using:[],
        //正在学习的词组
        doing:[],
        //将要学完的数组
        done:[],
        //是否认识该单词
        known:false,
        //test模块是否显示
        test: true,
        //例句是否展示
        showEg: false,
        //details模块是否显示
        details:false,
        //整体页面是否显示
        unDone:true
      }
    },
    methods:{

      isKnown(){
        //点击认识时的回调,当showEg为false表明用户认识该词汇,showEg为true时表明用户已经查看例句
        if(this.showEg == false)
        {
          this.known = true
          this.test = false
          this.details = true
        }else{
          this.details = true
          this.test = false
          this.showEg = false
        }
      },
      unKnown(){
        //点击不认识的回调
        if(this.showEg == false){
          this.showEg = true
        }else{
          this.details = true
          this.test = false
          this.showEg = false
        }
      },
      renderNext(){

        //判断单词是否学过,将认识或不认识的单词添加到对应数组,并在原数组中删除
        if(this.using == this.words){
          if(this.known == true){
            this.words.shift()
          }else{
            this.doing.push(this.words.shift())
          }
          this.using = this.words
          if(this.words[0] == null){
            this.using = this.doing
          }
        }else if(this.using == this.doing){
          if(this.known == true){
            this.done.push(this.doing.shift())
          }
          this.using = this.doing
          if(this.doing[0] == null){
            this.using =this.done
          }
        }else if(this.using == this.done){
          if(this.known == true){
            this.done.shift()
          }else{
            this.doing.push(this.done.shift())
          }
          this.using == this.done
          if(this.done[0] == null & this.doing[0] != null){
            this.using = this.doing
          }
        }
        if(this.done[0] == null & this.doing[0] == null & this.words[0] == null){
          this.unDone = false
          alert('Congratulations')
        }

        //一个单词学习结束后重置页面
        this.known = false,
        this.test = true,
        this.details = false,
        this.showEg = false
      },
      //鼠标移入移出时按钮的颜色更改
      chengeGreen(event){
        event.target.style.backgroundColor = 'MediumSeaGreen'
      },
      chengeRed(event){
        event.target.style.backgroundColor = 'red'
      },
      clearColar(event){
        event.target.style.backgroundColor = ''
      }
    },
}
</script>
<style>
  #unDone{
    width: 600px;
    margin:0 auto;
    text-align: center;
    
  }
  #test{
    width: 600px;
    margin:0 auto;
    text-align: center;
    
  }
  #details{
    width: 600px;
    margin:0 auto;
    text-align: center;
  }
  .word{
    font-size:40px;
  }
  .eg{
    font-size:20px;
  }
  .known{
    width: 600px;
    height: 40px;
    border-style: none;
  }
</style>