import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.less";

@withRouter
class AppNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.match.params.type,
      typeInfo: {
        1: {
          title: "关于css的一些笔记",
          list: [
            {
              title: "CSS常用样式",
              content: [
                "flex垂直水平居中，绝对定位居中，小三角，清除浮动，多行文本省略，less+rem适配",
              ],
              link: "https://juejin.im/post/5de751136fb9a0163770677b",
            },
          ],
        },
        2: {
          title: "关于javascript的一些笔记",
          list: [
            {
              title: "this全面解析",
              content: [
                "this完全取决于函数的调用位置。",
                "调用位置是函数在代码中被调用的位置。",
                "调用栈是为了到达当前执行位置所调用的所有函数，调用位置就在当前正在执行的函数的前一个调用中。",
              ],
              link: "https://juejin.im/post/5d26e069e51d4510bf1d670b",
            },
            {
              title: "js执行机制",
              content: [
                "同步任务异步任务:js是一门单线程语言，也就是js任务是一个个执行的，但当某一个任务需要耗费非常多的时间时，后面的任务就会一直等待，造成堵塞。比如新闻页面的中高清图片的加载，我们想要浏览新闻，没有必要等图片加载完成才能阅读接下来的内容。这时候就需要异步任务来模拟多线程任务。",
              ],
              link: "https://juejin.im/post/5df05d36f265da33ed411a6d",
            },
            {
              title: "对象",
              content: [
                "对象是javascript的基础。",
                "在javascript中一共有六种主要类型: string，number，boolean，null，undefined，object",
              ],
              link: "https://juejin.im/post/5dd75cd5e51d45234b6de20a",
            },
            {
              title: "作用域闭包经典题解",
              content: [
                "闭包: 闭包是指那些能够访问自由变量的函数。自由变量是指在函数中使用的，但既不是函数参数也不是函数的局部变量的变量。",
                "闭包 = 函数 + 函数能够访问的自由变量",
              ],
              link: "https://juejin.im/post/5d258a86e51d45109725ff07",
            },
            {
              title: "调用栈经典题解",
              content: [
                "变量声明: 在执行上下文时，首先会处理函数声明，其次会处理变量声明，如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性。",
                "连续赋值: 对象重新赋值时，并非是修改原堆内存的值，而是重新分配堆内存，栈内存中的指针会做相应修改。",
              ],
              link: "https://juejin.im/post/5dd75cd5e51d45234b6de20a",
            },
          ],
        },
        3: {
          title: "关于react的一些笔记",
          list: [
            {
              title: "React + antd + webpack打包优化，首屏加载优化",
              content: [
                "业务js按需加载",
                "webpack-bundle-analyzer（可视化视图查看器）",
                "moment打包过大",
                "icon组件打包过大",
                "服务器端使用gzip",
              ],
              link: "https://juejin.im/post/5c74d9636fb9a049e93d621b",
            },
            {
              title: "模拟react虚拟节点转换真实节点",
              content: [
                "ReactDom.render(vnode,container) => React.createElement(vnode) => container.appendChild(node)",
                "jsx转译 => 转换为真实节点",
              ],
              link: "https://juejin.im/post/5ea2b8bff265da47ed180ee0",
            },
            {
              title: "react模拟弹窗组件",
              content: [
                "Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。",
                "React.createPortal(child,container)",
                "第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。",
                "第二个参数（container）是一个 DOM 元素。",
              ],
            },
          ],
        },
        4: {
          title: "乱七八糟的一些笔记",
          list: [
            {
              title: "轻量应用服务器（centOS）+express+mysql搭建个人网站",
              content: ["工具准备：轻量服务器，SQlyog，xshell"],
              link: "https://juejin.im/post/5de470a56fb9a07164727a9b",
            },
            {
              title: "xss攻击和csrf攻击",
              content: [
                "xss攻击: 跨站脚本攻击（Cross Site Scripting），是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取cookie，或者其他用户身份信息。",
                "csrf攻击: 跨站点请求伪造（Cross—Site Request Forgery），攻击者盗用了你的身份，以你的名义发送恶意请求，对服务器来说这个请求是完全合法的，但是却完成了攻击者所期望的一个操作，比如以你的名义发送邮件、发消息，盗取你的账号，添加系统管理员，甚至于购买商品、虚拟货币转账等。",
              ],
              link: "https://juejin.im/post/5e8d6a99e51d4546e2637cbb",
            },
            {
              title: "0.1 + 0.2 === 0.3?",
              content: [
                "计算机不能精确表示0.1， 0.2这样的浮点数，计算时使用的是带有舍入误差的数",
                "Javascript的数字类型是基于IEEE754标准来实现的，该标准通常也被称为“浮点数”。Javascript使用的是“双精度”格式（即64位二进制）",
              ],
              link: "https://juejin.im/post/5d677bcae51d4561f95eea77",
            },
            {
              title: "百度地图定位--移动端",
              content: [
                "百度地图浏览器API  获取GPS定位是根据调用浏览器核心获取GPS，部分手机型号定位不准，主要是因为部分手机采用的是GOOGLE  GPS坐标格式、部分手机用的是原生坐标格式。这两种格式百度地图无法判断，默认是按照原生坐标格式，进行转换成百度地图的坐标格式，而后再进行展示。所以改用h5自带地理定位了。",
              ],
              link: "https://juejin.im/post/5d318b2851882566967dd44c",
            },
          ],
        },
      },
    };
  }

  render() {
    const { type, typeInfo } = this.state;
    return (
      <div className="app-note">
        <div className="app-note-main">
          {typeInfo[type].list.map((v, t) => (
            <div className="item" key={t}>
              <div className="line" />
              <div className="title">{v.title}</div>
              <div className="content">
                {(v.content || []).map((r, i) => (
                  <p key={i}>{r}</p>
                ))}
              </div>
              <div className="link">
                <a href={v.link} target="_blank" rel="noopener noreferrer">
                  阅读全文
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AppNote;
