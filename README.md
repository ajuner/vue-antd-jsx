# vue-antd-jsx

vue3 + ant-design-vue2
jsx简单解决方案

## 安装

```
yarn install
```

## 介绍 

![image](https://github.com/ajuner/vue-antd-jsx/blob/master/public/1606787092.jpg)
![image](https://github.com/ajuner/vue-antd-jsx/blob/master/public/1606787177.jpg)


由jsx代替vue文件，关于jsx语法的基本用法在页面中都有

对函数式组件更加友好

具体都可以在[vuejs/jsx-next](https://github.com/vuejs/jsx-next)中找到

## 用法变动

### 双向绑定v-model

``` jsx
<input vModel={value}>   //推荐
<input v-model={value}>  
<input modelValue={value} onInput={(e)=>{value=e.target.value}}>
```

### 自定义指令

``` jsx

directives: { autoshow:  mounted() {
    ...
}}

<div vAutoshow={value}>{message.value}</div>

```

### 插槽

``` jsx

const slots = {
    red: () => <p>red slot</p>,
    green: () => <p>green slot：green</p>,
    default: () => <p>default slot：default</p>
}

<Custom vSlots={slots}></Custom>

//or

const slots = {
    red: () => <p>red slot</p>,
    green: () => <p>green slot：green</p>
}

<Custom vSlots={slots}>
    <p>default slot：default</p>
</Custom>

```
