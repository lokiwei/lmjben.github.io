(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{188:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("恶意攻击者往Web页面里插入恶意script代码，当用户浏览该页时，嵌入其中Web里面的script代码会被执行，从而达到恶意攻击用户的目的。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),e("p",[t._v("CSRF（Cross-site request forgery），中文名称：跨站请求伪造，也被称为：one click attack/session riding，缩写为：CSRF/XSRF。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("CSRF 攻击之所以能够成功，是因为黑客可以完全伪造用户的请求，该请求中所有的用户验证信息都是存在于 cookie 中，因此黑客可以在不知道这些验证信息的情况下直接利用用户自己的 cookie 来通过安全验证。要抵御 CSRF，关键在于在请求中放入黑客所不能伪造的信息，并且该信息不存在于 cookie 之中。可以在 HTTP 请求中以参数的形式加入一个随机产生的 token，并在服务器端建立一个拦截器来验证这个 token，如果请求中没有 token 或者 token 内容不正确，则认为可能是 CSRF 攻击而拒绝该请求。")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("它是以asp，php，jsp或者cgi等网页文件形式存在的一种命令执行环境，由于webshell其大多数是以动态脚本的形式出现，也有人称之为网站的后门工具。")]),t._v(" "),t._m(10),t._v(" "),e("p",[t._v("上传文件扩展名")]),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("上传文件 HTTP 请求伪造")]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("防范：")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),e("p",[t._v("网页挂马指的是把一个木马程序上传到一个网站里面然后用木马生成器生一个"),e("a",{attrs:{href:"https://baike.baidu.com/item/%E7%BD%91%E9%A9%AC",target:"_blank",rel:"noopener noreferrer"}},[t._v("网马"),e("OutboundLink")],1),t._v("，再上到空间里面！再加代码使得木马在打开网页时运行！")]),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("如果你原本想访问A网站，但是有人偷偷做了手脚，让你实际上打开的是B网站，这就叫流量劫持。")]),t._v(" "),e("p",[t._v("常见的劫持包括："),e("router-link",{attrs:{to:"/blog/dns-cdn.html"}},[t._v("DNS劫持")]),t._v("，路由器弱口令，WiFi 弱口令等。")],1),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("参考资料：")]),t._v(" "),e("p",[e("a",{attrs:{href:"http://fex.baidu.com/blog/2014/04/traffic-hijack/",target:"_blank",rel:"noopener noreferrer"}},[t._v("流量劫持"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"web-安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-安全","aria-hidden":"true"}},[this._v("#")]),this._v(" WEB 安全")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"xss-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-攻击","aria-hidden":"true"}},[this._v("#")]),this._v(" XSS 攻击")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("反射型：被动的非持久性XSS，诱导用户点击短型URL，服务器解析后响应，在返回的响应内容中隐藏和嵌入攻击者的XSS代码，从而攻击用户。")]),this._v(" "),s("li",[this._v("持久型：也叫存储型XSS，主动提交恶意数据到服务器，当其他用户请求后，服务器从数据库中查询数据并发给用户受到攻击。")]),this._v(" "),s("li",[this._v("DOM型：DOM通过html结构执行事件脚本。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xx"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("onerror")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("console.log(document.cookie);"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"csrf-攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-攻击","aria-hidden":"true"}},[this._v("#")]),this._v(" CSRF 攻击")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"fontend-security-csrf.jpg",alt:"csrf"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"csrf-防范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csrf-防范","aria-hidden":"true"}},[this._v("#")]),this._v(" CSRF 防范")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("低安全级别：被黑客抓包，获取请求地址，直接修改参数。")]),this._v(" "),s("li",[this._v("中安全级别：加入验证码，判断reffer，这些参数前端都是可以篡改的。（流失用户）")]),this._v(" "),s("li",[this._v("高安全级别：验证token，每次动态更新。")]),this._v(" "),s("li",[this._v("终极防范： 强验证码+动态token请求。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"token"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#token","aria-hidden":"true"}},[this._v("#")]),this._v(" Token")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"web-shell-网站提权渗透"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-shell-网站提权渗透","aria-hidden":"true"}},[this._v("#")]),this._v(" Web Shell 网站提权渗透")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("编写可执行的web脚本文件（木马）")]),this._v(" "),s("li",[this._v("寻找上传漏洞，将我们的木马上传")]),this._v(" "),s("li",[this._v("找到上传后路径，并执行")]),this._v(" "),s("li",[this._v("安装好中国菜刀，管理木马（获取整个网站的目录了）")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"fontend-security1.png",alt:"上传文件扩展名"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"fontend-security2.png",alt:"上传文件 HTTP 请求伪造"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1、上传时检测字节码。如果是图片，字节码前面的几个字符是固定的。")]),this._v(" "),s("li",[this._v("2、修改上传文件名。")]),this._v(" "),s("li",[this._v("3、修改静态资源的执行权限。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"网页挂马和流量劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页挂马和流量劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 网页挂马和流量劫持")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"网页挂马"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页挂马","aria-hidden":"true"}},[this._v("#")]),this._v(" 网页挂马")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"流量劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#流量劫持","aria-hidden":"true"}},[this._v("#")]),this._v(" 流量劫持")])}],!1,null,null,null);r.options.__file="fontend-security.md";s.default=r.exports}}]);