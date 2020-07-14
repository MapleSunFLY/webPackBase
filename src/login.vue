<!--runtime-only 支持的创建组件的方法-->

<!--书写html代码-->
<template>
    <div>
        <h1>这是登录组件，使用 .vue 定义的组件----{{ msg }}</h1>
    </div>
</template>

<!--写业务逻辑-->
<script>
    // export default 解析看text.js
    export default {
        data() { //组件中 data 必须是一个· function
            return {
                msg: "123"
            }
        },
        methods: {
            show() {
                console.log("我是show方法")
            }
        }
    }
</script>

<!--写样式-->
<style>

</style>