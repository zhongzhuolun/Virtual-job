export let detailBanks1 = [
  {
    "industry": "测试", 
    "title": "JavaScript测试笔试题（一）", 
    "limit_time": "30", 
    "questionTypeNum": { 
      "radio": 7,
      "checkbox": 0, 
      "blank": 1, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 2
    },
    "bank": [ 
      {
        "title": "JavaScript定时器不包含哪个函数：", 
        "type": "单选", 
        "options": {
          "A": "setTimeout()",
          "B": "clearTimeout()",
          "C": "setInterval()",
          "D": "getInterval()"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "" 
      },
      {
        "title": "以下单词属于javascript关键字：", 
        "type": "不定项选",
        "options": {
          "A": "with",
          "B": "void",
          "C": "class",
          "D": "parent"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": ""
      },
      {
        "title": "给网页添加javascript的方式有", 
        "type": "不定项选", 
        "options": {
          "A": "使用script标签，将javascript代码写到<script></script>之间",
          "B": "添加外部javascript文件",
          "C": "使用行内javascript",
          "D": "使用@import引入javascript文件"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": ""
      },
      {
        "title": "javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，javascript语言实现继承机制的核心就是[填空1]，而不是Java语言那样的类式继承。Javascript 解析引擎在读取一个Object的属性的值时，会沿着[填空2]向上寻找，如果最终没有找到，则该属性值为[填空3]；如果最终找到该属性的值，则返回结果。与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。",
        "type": "填空",
        "correct_answer": [ // 填空这里不需要options，只需要有correct_answer就行了，每个空占一个位置
          "prototype",
          "原型链",
          " undefined"
        ],
        "parsing": "",
        "note": ""
      },
      {
        "title": "以下Javascript中数组数据类型的方法中，不会改变原始数据的方法是", 
        "type": "单选", 
        "options": {
          "A": "splice",
          "B": "slice",
          "C": "reverse",
          "D": "shift"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": ""
      },
      {
        "title": "下列关于JavaScript节点操作的函数说明中,错误的是", 
        "type": "单选", 
        "options": {
          "A": "neborNode.previousSibling获取已知节点的相邻的上一个节点",
          "B": "nerbourNode.nextSlbling: 获取已知节点的下一个节点",
          "C": "parentObj.children  只选择元素节点,（但是IE678会包含注释节点)",
          "D": "neborNode.siblings可以获取元素的同胞节点"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": ""
      },
      {
        "title": "在JavaScript中,下列选项中哪项可以得到0至9之间的随机整数",
        "type": "单选",
        "options": {
          "A": "Math.pow(Math.random()*10);",
          "B": "Math.ceil(Math.random()*10);",
          "C": "Math.floor(Math.random()*10);",
          "D": "Math.round(Math.random()*10);"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": ""
      },
      {
        "title": "JavaScript中,以下选项哪组代码可以得到字母'a'的ASCII码'97'",
        "type": "单选",
        "options": {
          "A": "var str=new String(“how are you?”);\nalert(str.charAt(4));",
          "B": " var str=new String(“how are you?”);\nalert(str.charCodeAt(4));",
          "C": "var str=new String(“how are you?”);\nalert(String.fromCharCode(97));",
          "D": "var str=new String(“how are you?”);\nalert(str.indexOf('a'));"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": ""
      },
      {
        "title": "下列选项中,不属于JavaScript弹框的是", 
        "type": "单选", 
        "options": {
          "A": "prompt",
          "B": "confirm",
          "C": "openToast",
          "D": "alert"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
      },
      {
        "title": "在JavaScript中,阻止冒泡的方法正确的是", 
        "type": "单选", 
        "options": {
          "A": "event.stopPropagation();",
          "B": "window.event.cancelBubble=false;",
          "C": "event.stopPropagation;",
          "D": "window.event.cancelBubble;"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
      }
    ]
  },
]