<template>
      <div class="todo-footer" v-if="total">
        <label>
          <input type="checkbox" :checked="isAll" @click="checkAll"/>
        </label>
        <span>
          <span>已完成{{doneTotal }}</span> / 全部{{todoss.length}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>

    <div class="todo-footer" v-else>
    暂无任务
    </div>
</template>

<script>
export default{
    name:'myFooter',
    props:['todoss','checkAllTodo','clearAllTodo'],
    methods:{
        checkAll(event){
            this.checkAllTodo(event.target.checked)
        },
        clearAll(){
            this.clearAllTodo();

        }
    },
    computed:{

        total(){
            return this.todoss.length;
        },
        doneTotal(){
           return  this.todoss.reduce((pre,current)=>{
                //console.log('@',pre,current) 
                return pre+(current.done ? 1:0)
            },0)
           
        },
        isAll(){
            if(this.todoss.length>0)
            return this.doneTotal===this.total
        }
        //一个计算属性允许用其他计算属性继续计算
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>