# 开发指南

```
# 下载仓库代码
git clone git@github.com:GuoYongfeng/course-code.git
# 到仓库目录
cd course-code
# 下载项目的依赖
npm install
# 运行
npm run dev
# http://localhost:8080/
```

> js编译器

- babel-cli
```
# -g 全局安装
npm install babel-cli -g

npm install babel-cli --save-dev
```

现在完成的事情

- npm init package.json
- babel 编译
```
npm install babel
```


1. 建立目录
2. babel
我们正常使用jsx语法写代码 我们正常es6的语法写代码

剩下的解析的工作 交给babel
babel 如何完成解析的工作
```
"babel-preset-es2015": "^6.9.0",
"babel-preset-react": "^6.11.1"
```

1. 下载
```
npm install babel-preset-react --save-dev
```
2. 配置 .babelrc
3. 运行

```

class MyComponent extend Component {
  render(){
    return <h1> hh </h1>
  }
}

// es5 封装一个类 class

function Fn( a ){
  this.a = a;
}

Fn.prototype.sayHi = function(){

}

// es6
class Fn {
  constructor( a ){
    this.a = a
  }
  sayHi(){

  }
}

// es6 对对象字面量的扩展
//
 var a = {
   b(){

   }
 }
 // es5
 var a = {
   b: function(){

   }
 }
```
