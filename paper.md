# 摘要

现在高校学生普遍存在与就业市场实际需求脱节的问题，本文针对这个问题，拟定创建一个项目机会分享平台，该平台试图通过给学生提供在校进行企业级项目机会的形式，并整合相关的就业市场信息，来解决学生方面和企业存在的信息不对称的问题。

本文将采用最近兴起的MERN技术栈来开发这个机会分享平台。该技术栈是指采用基于node.js 的JavaScript的运行平台，用express作为Node的web应用开发框架，用react作为表现层框架，用mogodb作为数据库的一整套技术解决方案。

我在完成搭建这个平台项目中的工作如下：
1. 基于Node端的Npm包管理工具和和Webpack前端资源打包工具，为实现该平台的技术团队搭建技术框架。完成项目生产环境和开发环境的配置工作，编写了分别用户开发和生产用的配置脚本。
2. 通过实现业务逻辑中最复杂的用户认证模块，完成对该系统的可行性验证。
3. 通过实现用户管理子系统的中的简历管理模块，来展示一些react最具有代表性的特性。
4. 维护服务器并使之能够运行项目，在服务器上对各个性能指标进行测试。

经过测试表明：
项目脚手架可以良好的支持团队协作开发，并且具有良好的可维护性，可扩展性，可配置性，可测试性。
系统的功能性需求和非功能需求、包括易用性需求，安全性需求、性能需求均可以得到满足。响应式的页面设计使得用户在多终端中都能非常好的交互体验。



## 项目配置

项目配置对于一个项目能正确的运行起来，以及团队的开发效率，乃至于项目的稳定性和性能都有至关重要的影响。

但是同时又由于这部分工作难以量化，没有直观的产出结果，是一个项目架构中容易被忽视的部分，而实际上这部分工作是消耗时间的且非常重要的。实际的开发实践中重复造轮子的事情是缺乏效率的，一个实际运作的项目必然有大量的依赖其他模块、组件、中间件等，而项目的配置的实质就是管理好这些依赖，让它们彼此协调，良好的运作起来。

在项目配置的过程中还包括了在一些细节方面的技术选型和评估，以及一些最佳的开发实践在项目中的落地实施。

下面从NPM包管理配置和Webpack打包工具配置两个方面来介绍我为这个项目脚手架进行的项目配置工作。

### npm包管理配置
npm（全称Node Package Manager，即node包管理器）是Node.js默认的、以JavaScript编写的软件包管理系统。
项目构建为一个npm包，并且由npm来加载其他的包依赖，并且在npm配置项目中编写各个启动脚本，实现开发环境和生产环境的集成配置。

项目启动脚本:
```json
"scripts": {
    "clean": "rimraf dist",
    "compile": "better-npm-run compile",
    "lint": "eslint bin build config server src tests",
    "lint:fix": "npm run lint -- --fix",
    "start": "better-npm-run start",
    "prod-start": "better-npm-run deploy:prod && NODE_ENV=production node bin/dev-server.js",
    "quick-start": "npm run clean && NODE_ENV=production npm run compile && NODE_ENV=production node bin/dev-server.js",
    "deploy": "better-npm-run deploy",
    "deploy:dev": "better-npm-run deploy:dev",
    "deploy:prod": "better-npm-run deploy:prod",
  },
  "betterScripts": {
    "compile": {
      "command": "node bin/compile",
      "env": {
        "DEBUG": "app:*"
      }
    },
    "dev": {
      "command": "nodemon bin/dev-server --ignore dist --ignore coverage --ignore tests --ignore src",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*"
      }
    },
    "deploy": {
      "command": "npm run clean && npm run compile",
      "env": {
        "DEBUG": "app:*"
      }
    },
    "deploy:dev": {
      "command": "npm run deploy",
      "env": {
        "NODE_ENV": "development",
        "DEBUG": "app:*"
      }
    },
    "deploy:prod": {
      "command": "npm run deploy",
      "env": {
        "NODE_ENV": "production",
        "DEBUG": "app:*"
      }
    },
    "start": {
      "command": "node bin/dev-server",
      "env": {
        "DEBUG": "app:*"
      }
    },
```
相关执行脚本说明：
- npm start : 项目在默认的开发环境条件下的启动方式。
- npm run prod-start : 项目默认在生成环境下的启动方式。
- npm run deploy : 项目在启动状态下，不重启服务器的情况下，直接一键部署新的版本到线上。
- npm run quick-start : 项目开发模式部署并启动。
- npm run compile : 对现有的源代码进行打包和编译，生成静态资源文件，默认情况下为生产模式。
- npm run clean : 清理所有的由打包生成的静态资源文件。
- npm run lint : 基于eslint代码检查工具对全部源码进行自动检查。
- npm run lint:fix : 基于eslint工具尝试自动修复部分的代码问题。

### Webpack前端资源打包工具配置
Webpack从名字来看只是一个前端资源打包工具，但是它的实际作用远远不止如此，他在整个项目的部署中处于核心地位，它在项目中解决了如下问题。
1. 模块的定义、依赖和导出，具体包括对CMD，AMD，和ES6模块语法提供模块化支持，并将相应资源按需打包和加载。
2. 通过加载Loader来加载其他类型的资源文件，包括sass、scss和css的样式资源文件，woff、otf、ttf、ext、png、jgp等各类图片资源文件，json，jsx等JavaScript扩展文件。
3. 通过配置插件，在不同的启动条件下（主要是生产环境和开发环境的区别）加载不同的插件，实现区分。
4. 在开发环境配置Webpack Hot Module Rplaacement插件，来极大的提高前端开发效率，使得所见即所得，并配置好react和redux在Chrome 中开发插件，极大的提高了调试的效率。

### 项目配置中的良好开发实践

#### Webpack Hot Module Rplaacement
这里要着重强调一下这个开发环境中间件对于开发效率的提升。

Webpack hot middleware 它通过订阅 Webpack 的编译更新，之后通过执行 webpack 的 HMR api 将这些代码模块的更新推送给浏览器端。在编辑一段代码后，只需要按一次保存，webpack检测到本地文件的变化，每次自动重新编译代码并使得浏览器自动刷新，这个过程往往不超过3秒钟，相比与每次修改都需要重启服务器的并等待个几分钟编译启动才能看到开发效果，这个特性极大的增加了开发了敏捷性。

这个特性和原生的所见所得的HTML的修改是本质上不同的，在React框架下，前端项目已经是一个具有复杂度的工程项目，不仅仅是基于标签的页面修改那么简单的事情。

#### Chrome React DevTools & Chrome Redux DevTools
在项目开发环境中还引入了react和redux在chrome浏览器上的开发插件支持中间件，使得，使得项目的可调试性极大的增强。

1. Chrome React DevTools

这个插件能把前端页面中的react组件关系像DOM结构一样直观的表示出来，并且基于组件当前的状况，可以直接看到组件核心的props和state的变化。

2. Chrome Redux DevTools

它显示所有action操作, 可以查看action的内容, action执行前后state的diff, action执行后的state状态，可以手动触发action，可以以图表的形式查看store, 并且可以直接查看任意节点的值, 省去了debug时打印store的麻烦。


# 系统实现

## 项目源代码的目录结构

    ├── bin                        #项目可执行文件
    ├── config                     #项目配置文件
    ├── package.json		       #node-npm依赖配置
    ├── public			           #项目公用文件（icon等）
    ├── server                     #node中间件服务器
    │   ├── authentication.j       #用户认证模块
    │   ├── config		           #服务器配置文件
    │   ├── db_services            #连接服务器服务中间件
    │   ├── main.js	               #服务器启动文件
    │   └── test.js			       #测试用服务器启动文件
    ├── src                        #项目的前端源文件
    │   ├── actions	               #redux中的actin，这里主要是公用的
    │   ├── components             #项目公用组件
    │   ├── containers	           #项目业务逻辑的各个组件容器
    │   ├── index.html	           #单页应用的主入口
    │   ├── main.js 	           #react+redux的入口js文件
    │   ├── reducers	           #redux中的reducer
    │   ├── routes	               #前端项目的路由管理


由项目的目录结构可以看出，系统是典型的BS架构，server中是服务器的实现代码，src中是被组件化的前端项目代码。


## 项目

