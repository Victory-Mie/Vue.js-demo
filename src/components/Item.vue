<template>
        <li>
          <label>
            <input type="checkbox" :checked="todo.done"  @change="checkOrnot(todo.id)"/>
            <span>{{todo.title}}</span>
          </label>
          <button class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
        </li>
</template>
<script>
export default{
    name:'Item',
    //声明接收todo对象
    props:['todo','checkTodo','deleteTodo'],
    methods:{
        //勾选
        checkOrnot(id){
            //通知app组件将对应的todo对象的done值取反。
            this.checkTodo(id);
        },
        //删除
        deleteItem(id){
            if(confirm('确定删除吗?')){
                //通知app删除对应id的todo项
                this.deleteTodo(id);
            }
        }
    }

}
</script>
<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
    background-color:antiquewhite;
}


li:hover button{
   display: block;
}
</style>