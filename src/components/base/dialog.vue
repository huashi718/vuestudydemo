<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content"  v-if="isShow">
        	<div class="dialog-head">
        		<span class="span-tags"></span>
        		{{title}}
        		 <p class="dialog-close" @click="closeMyself">x</p>
        	</div>
	        <div class="dialog-body">
	         		<slot>empty</slot>
	        </div>
	        <div class="dialog-foot" v-if="isShowBtn">
	         		<span class="dialog-btns-save">确认</span>
	         		<span class="dialog-btns-save" @click="closeMyself">取消</span>
	        </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title:{
    	type:String,
      default: "信息"
    },
    isShowBtn:{
    	type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  line-height: 1.6;
	background: rgba(255,255,255,0.96);
	box-shadow: 0 2px 6px 0 rgba(0,0,0,0.30);
	border-radius: 8px;
}
.dialog-body{
	max-height:300px;
	overflow-y: auto;
	padding:30px;
}

.dialog-body::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
}
.dialog-body::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #0993E9;
}
.dialog-body::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}

.dialog-head{
	padding-left: 20px;
	height:30px;
	line-height:30px;
	border-bottom: 1px solid #E2E2E2;
}
.dialog-foot{
	height:30px;
	line-height:30px;
	text-align: center;
	padding:15px ;
}
.dialog-btns-save{
	display: inline-block;
	width: 80px;
	height: 28px;
	line-height: 28px;
	background: #0993E9;
	font-family: MicrosoftYaHei;
	font-size: 14px;
	color: #FFFFFF;
	letter-spacing: 0;
	text-align: center;
	border-radius:4px;
	margin-right: 5px;
	cursor: pointer;
}
.span-tags {
	margin-right: 5px;
	position: relative;
	top: 2px;
	width: 4px;
	height: 14px;
	display: inline-block;
	background: #0993E9;
	border-radius: 2px;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top:0px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
