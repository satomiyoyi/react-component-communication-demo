# react组件通信方式demo
## 安装依赖
`npm install`
## 项目启动
`npm start`
## 主要内容
react组件通信类型划分为：
+ 父组件向子组件通信
+ 子组件向父组件通信
+ 跨级组件通信
+ 非嵌套组件通信
### 父组件向子组件通信--props属性传递
父->子 利用props属性**单向**传递

### 子组件向父组件通信--回调函数|react-emit
子->父 理论上也是属性传递 子组件执行父组件提供的回调方法

react-emit 实现类似vue $on 和 $emit的方法。项目中EventEmit.js实现该方案。可以用于兄弟和父子传递

### 跨级组件通信--props|context
1. 祖先->子 利用props一层层传递

2. context 执行上下文 也常用于祖先后代通信

实现方法：
1) 把后代需要的共同状态，事先存储到祖先上下文中

```javascript
static childContextType = {// 指定类型
  <!-- 指定后代能用到的公共状态的类型 -->
  <!-- 存放的都是祖先组件对应的状态信息和方法 便于改变之后整体改变 -->
}
getChildContext(){// 指定值
  <!-- 生命周期函数之一 第一次在getIntialState 之后执行 -->
  <!-- 给后代提供可用的上下文信息 -->
  return {
    ***
  }
}
```

2）后代需要，直接使用
```javascript
static contextTypes = {
  <!-- 想用哪些公共状态 则声明一下他的类型 -->
  <!-- 类型和祖先声明时保持一致 -->
}
```
### 非嵌套组件通信--react-emit

## demo

![image](https://github.com/satomiyoyi/react-component-communication-demo/blob/master/react-component-communication.png)

