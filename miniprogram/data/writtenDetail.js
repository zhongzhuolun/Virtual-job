export let detailBanks1 = [
  {
    "parentId": 10,
    "industry": "iOS", 
    "class": "笔试题", 
    "title": "2018迅雷校园招聘iOS在线笔试B卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 15,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 10
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "32位机器上，以下结构的sizeof(P)为\n\nstruct A {\nint a;\nchar b;\nint c;\nchar d;\n}\nstruct P {\nstruct A w[2];\nshort b;\nstruct A* p;\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "26",
          "B": "38",
          "C": "40",
          "D": "30"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪个容器的删除操作会进行内存的移动", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "map",
          "B": "list",
          "C": "set",
          "D": "vector"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于const和#define定义常量的区别，说法不正确的有", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "define宏是在预处理阶段展开。const常量是编译运行阶段使用",
          "B": "宏没有类型，不做任何类型检查，仅仅是展开。const常量有具体的类型，在编译阶段会执行类型检查",
          "C": "define宏仅仅是展开，有多少地方使用，就展开多少次，不会分配内存。const常量会在内存中分配(可以是堆中也可以是栈中)",
          "D": "const定义和#define定义的常量在程序运行过程中只有一份拷贝"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪个值最大\nvoid test() {\nint s1;\nint s2;\nint *s3 = (int *)malloc(4);\nint *s4 = (int *)malloc(4);\n}",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "&amp;s1",
          "B": "&amp;s2",
          "C": "s3",
          "D": "s4"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪个数据结构不是二叉树", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "AVL",
          "B": "Huffman",
          "C": "B+",
          "D": "红黑"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "12345^0x12345^0x12345的值为", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "12345",
          "B": "n0x12345",
          "C": "0",
          "D": "6743235123"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "699个节点的完全二叉树，有叶子节点多少个",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "350",
          "B": "699",
          "C": "1398",
          "D": "其他都不是"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下哪个是带行缓冲的IO",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "write(STDOUT_FILENO, &quot;helloworld&quot;, 10);",
          "B": "fprintf(stderr, &quot;helloworld&quot;);",
          "C": "fwrite(&quot;helloworld&quot;, 10, 1, stdout);",
          "D": "fo = fopen(&quot;a.txt&quot;, &quot;w&quot;); fwrite(&quot;helloworld&quot;, 10, 1, fo);"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "父进程open了一个文件，并且通过fork产生一个子进程，以下说法正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "父子进程不共享文件的偏移量",
          "B": "子进程复制了父进程的文件描述符表",
          "C": "子进程复制了父进程的文件表",
          "D": "子进程复制了父进程的v节点表"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪种POSIX锁效率最高", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "spin lock",
          "B": "mutex lock",
          "C": "r/w lock",
          "D": "condition variable"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在一个cpp文里面，定义了一个static类型的静态全局变量，下面说法正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "只能在该cpp文件中使用该变量",
          "B": "该变量的值不可修改",
          "C": "该变量不能在类成员函数中出现",
          "D": "这种变量只能是基本类型（如int,char）不能是类或者struct"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下说法正确的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "gcc编译.c文件，__cplusplus没有定义，编译器按照c编译代码",
          "B": "gcc编译.cpp文件，__cplusplus有定义，编译器按照c++编译代码",
          "C": "g++编译.c文件,  __cplusplus没有定义，编译器按照c编译代码",
          "D": "g++编译.cpp文件， __cplusplus有定义，编译器按照c++编译代码"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下可以用来处理哈希表冲突的方法是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "开放定址法",
          "B": "移位法",
          "C": "再哈希法",
          "D": "链地址法"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪一些是C++的属性(非C的属性)",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
        "options": {
          "A": "union",
          "B": "class",
          "C": "template",
          "D": "virtual function",
          "E": "pragma"
        },
        "correct_answer": [
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪些是不带缓冲的IO", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "read",
          "B": "write",
          "C": "fread",
          "D": "fprintf"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "给定fun函数如下，那么fun(10)的输出结果是（）\nint fun(int x) {\nreturn (x==1) ? 1 : (x + fun(x-1));\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "0",
          "B": "10",
          "C": "55",
          "D": "3628800"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "判断一包含n个整数a[]中是否存在i、j、k满足a[i] + a[j] = a[k]的时间复杂度为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 17,
        "options": {
          "A": "O(n)",
          "B": "O(n^2)",
          "C": "O(nlog(n))",
          "D": "O(n^2log(n))"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于多线程,下面说法正确的是：",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 18,
        "options": {
          "A": "当多个线程对某个原子数据进行读写操作时，读操作不用加锁，只用对写操作加锁即可",
          "B": "同一线程中，可以连续多次对同一个mutex进行lock操作，等数据修改完成后，再进行一次unlock操作即可",
          "C": "同一进程中的不同线程，他们没有独立的堆栈空间；使用共享的堆栈空间，以便为各个线程间频繁的数据更新提供更好的性能",
          "D": "其他都正确或都不正确"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "某公司现有职员信息表（employee）如下：\n工号 id int 例如： 32454\n姓名 name char(40) 例如： 姚明\n性别 sex int 例如： 0， （0表示男， 1表示女）\n入职时间 entrytime int 例如： 20110101\n工作岗位 keypost int 例如： 研发\n工作绩效 performance text 例如： S|A|B|C|B, (其中S>A>B>C)\n关于下面查询语句，不正确的是：", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 19, 
        "options": {
          "A": "找出最近连续两次绩效为C的员工： select * from employee where performance like &quot;%C|C&quot;;",
          "B": "找出公司最新入职的10位员工 select id from employee order by entrytime desc limit 10;",
          "C": "统计出各个不同岗位中，女性员工的数量： select count(id) from employee where sex = 1 group by keypost;",
          "D": "按照各部门的人数由多到少进行排序： select count(id) as usercount,keypost from employee group by keypost order by usercount desc;"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在基类中，关于访问标号以下描述错误的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 20, 
        "options": {
          "A": "protected成员不可以被类的调用方访问",
          "B": "private成员不可以被类的调用方和友元访问",
          "C": "public成员可以被派生类访问",
          "D": "protected成员可以被类的调用方和友元访问"
        },
        "correct_answer": [ 
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "这段代码执行后的输出结果是：\nchar *str = “Thunder Network”;\nstr[0] = ‘\0’;\nprintf(“%s\n”, str);",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 21,
        "options": {
          "A": "空",
          "B": "“Thunder Network”",
          "C": "代码编译错误",
          "D": "段错误"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列迭代器的用法哪些是错误的？\nconst vector<int> ivec(10);\nvector<string> svec(10);\nlist<int> ilist(10);</int></string></int>", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 22, 
        "options": {
          "A": "vector&lt;int&gt;::iterator it = ivec.begin();",
          "B": "list&lt;int&gt;::iterator it = ilist.begin() + 2;",
          "C": "vector&lt;string&gt;::iterator it = &amp;svec[0];",
          "D": "for ( vector&lt;string&gt;::iterator it = svec.begin(); it != 0; ++it ) //…"
        },
        "correct_answer": [ 
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列选项中是操作系统死锁的必要条件的有哪些？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 23, 
        "options": {
          "A": "互斥条件",
          "B": "系统资源有限",
          "C": "进程调度上不合理",
          "D": "环路等待条件"
        },
        "correct_answer": [ 
          "A",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "编译过程中，语法分析器的任务是？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 24, 
        "options": {
          "A": "分析单词是怎样构成的",
          "B": "分析单词串是如何构成语言和说明的",
          "C": "分析语句和说明是如何构成程序的",
          "D": "分析程序的结构"
        },
        "correct_answer": [
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下不是平衡二叉查找树的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 25, 
        "options": {
          "A": "AVL树",
          "B": "红黑树",
          "C": "B+/B-树",
          "D": "哈夫曼树"
        },
        "correct_answer": [ 
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 11,
    "industry": "Android", 
    "class": "笔试题", 
    "title": "货拉拉2018秋招Android工程师笔试题卷三（B）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 9,
      "checkbox": 0, 
      "blank": 4, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 1
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "关于Intent 对象说法错误的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "在android 中，Intent 对象是用来传递信息",
          "B": "Intent 对象可以把值传递给广播或 Activity",
          "C": "利用Intent 传值时，可以传递一部分值类型",
          "D": "利用Intent 传值时，它的 key 值可以是对象"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "Android 项目工程下面的 assets 目录的作用是什么（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "放置应用到的图片资源",
          "B": "主要放置一些文件资源,这些文件会被原封不动打包到 apk 里面",
          "C": "放置字符串，颜色，数组等常量数据res/values",
          "D": "放置一些与UI 相应的布局文件，都是 xml 文件 res/layout"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "Android 开发中常用的开发与调试工具有很多，下面相关描述不对的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "Android Debug Bridge，简称 adb，它只是一个能用来调试 Android 应 用程序的工具。",
          "B": "DDMS 的全称是 Dalvik Debug Monitor Service，是 Android 开发环境 中的 Dalvik 虚拟机调试监控服务。",
          "C": "LogCat 日志记录工具，这个工具很常用，可以理解为 C 或 Java 程序中 的控制台输出，常被用来在手写代码的调试方式中，输出调试信息。",
          "D": "SDK 的管理器，使用自动更新的方式从 Google 服务器中下载最新的 SDK 版本及工具到本机。"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面说法错误的是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "Activity Manager（活动管理器）管理各个应用程序生命周期以及通常的导航回退功能。",
          "B": "Window Manager（窗口管理器）管理所有的移动设备窗口功能。",
          "C": "Content Provider（内容提供器）使得不同应用程序之间存取或者分享数据。",
          "D": "View System（视图系统）构建应用程序的基本组件。"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于内存泄漏说法正确的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "内存泄漏是操作系统内存管理出错导致的问题",
          "B": "单线程程序不可能内存泄漏",
          "C": "如果一个进程在运行过程中占用的内存无限制上升，那么该进程有内存泄漏",
          "D": "只要进程在退出之前释放了所有分配的内存，那么就不会内存泄漏",
          "E": "内存泄漏是仅仅出现在C/C++程序的问题，Java程序不会内存泄漏"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "一棵二叉树有7个度为1的结点，6个度为2的结点，则该二叉树共有个多少个结点（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "20",
          "B": "17",
          "C": "25",
          "D": "31"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "当Activity 被消毁时，如何保存它原来的状态（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "实现Activity 的 onInstanceState（）方法",
          "B": "实现Activity 的 onSaveInstance（）方法",
          "C": "实现Activity 的 onSaveInstanceState（）方法",
          "D": "实现Activity 的 onSaveState（）方法"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列不属于android 布局的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "FrameLayout",
          "B": "LinearLayout",
          "C": "BorderLayout",
          "D": "TableLayout",
          "E": "RelativeLayout"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下面关于AndroidUI 框架描述的选项中有误的一项是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "Android 中所有的 UI（用户界面）元素都是使用 View 和 ViewGroup 对象建立的",
          "B": "ViewGroup 是一个包含多个的 View 和 ViewGroup 的容器，用来定义UI 布局",
          "C": "ViewGroup 是一个可以将一些信息绘制在屏幕上并与用户产生交互的对象",
          "D": "Android 使用 View 类作为界面开发的超类，所有的界面开发都与View有关"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在数据库系统中，产生不一致的根本原因是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "数据存储量太大",
          "B": "未对数据进行完整性控制",
          "C": "并发控制不当",
          "D": "数据冗余"
        },
        "correct_answer": [ 
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "你有8个一样大小的球，其中7个的重量是一样的，另一个比较重。用天平将那个重一些的球找出来，至少需要_[填空1]_次",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 11,
        "correct_answer": [
          "2"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "有如下任务需要安排在若干机器上并行完成，每个任务都有开始时间和结束时间（开始和结束时间都包括在任务执行时间内）的要求\n任务名称      开始时间     结束时间\na         　　　 1       7\nb         　　　 8       9\nc         　　　 2       5\nd         　　　 7      11\ne          　　　3       6\nf         　　　 7        9\ng          　　　10      13\n则最少需要使用的机器数目为1_[填空1]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 12,
        "correct_answer": [
          "3"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "service的启动方法有_[填空1]_和_[填空2]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 13,
        "correct_answer": [
          "startService",
          "bindService"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "Activity的生命周期会回调哪些方法_[填空1]_,_[填空2]_,_[填空3]_,_[填空4]_,_[填空5]_,_[填空6]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 14,
        "correct_answer": [
          "onCreate",
          "onStart",
          "onResume",
          "onPause",
          "onStop",
          "onDestroy"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 12,
    "industry": "测试工程师", 
    "class": "笔试题", 
    "title": "2019乐信校园招聘测试工程师笔试题", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 5
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "考虑函数原型void hello(int a,int b=7,char* pszC="*"),下面的函数调用钟,属于不合法调用的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "hello(5)",
          "B": "hello(5,8)",
          "C": "hello(6,&quot;#&quot;)",
          "D": "hello(0,0,&quot;#&quot;)"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "一个栈的入栈序列是A，B，C，D，E，则栈的不可能的输出序列是？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "EDCBA",
          "B": "DECBA",
          "C": "DCEAB",
          "D": "ABCDE"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "当n=6时，下列函数的返回值是:()\nint foo(int n)\n{\nif(n < 2)\nreturn n;\nreturn foo(n-1)+foo(n-2);\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "5",
          "B": "7",
          "C": "8",
          "D": "10"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于TCP/IP传输层协议的描述中，正确的是 ",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "TCP协议能够支持可靠的字节流传输",
          "B": "TCP协议是一种面向无连接的协议",
          "C": "UDP协议是一种面向连接的协议",
          "D": "UDP协议能够支持可靠的字节流传输"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "把数据结构从逻辑上分为（）两大类。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "顺序结构、链式结构",
          "B": "静态结构、动态结构",
          "C": "静态结构、动态结构",
          "D": "线性结构、非线性结构"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于继承如下说法错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "Java是单继承的",
          "B": "通过extends来定义继承",
          "C": "所有父类方法可以被override",
          "D": "继承呈现的是is a的关系"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下说法错误的是",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "单元测试：单元测试是对软件中的基本组成单位进行的测试，如一个模块、一个过程等。",
          "B": "集成测试：集成测试是在软件系统集成过程中所进行的测试，其主要目的是检查软件单位之间的接口是否正确。",
          "C": "系统测试是对已经集成好的软件系统进行彻底的测试，只需要验证功能没有问题。",
          "D": "验收测试旨在向软件的购买者展示该软件系统满足其用户的需求。它的测试数据通常是系统测试的测试数据的子集。"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "属于白盒测试的技术是",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "语句覆盖",
          "B": "等价类划分",
          "C": "边界值分析",
          "D": "因果关系分析"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "如果i=5；那么a=(++i)--;之后，a和i的值各是多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "a=6.i=6",
          "B": "a=5.i=6",
          "C": "a=6.i=5",
          "D": "a=5.i=5"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知二叉树的前序序列为ABCDEFG，中序序列为CBDAEDF，请问后序序列为", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "DAFEGCB",
          "B": "CDBGFEA",
          "C": "CAEGFDB",
          "D": "DAEFGCB"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "引用和指针，下面说法不正确的是：", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "引用没有自己的内存空间，指针有自己的内存空间",
          "B": "指针和引用在声明时可不用初始化",
          "C": "引用声明后，引用的对象不可改变，对象的值可以改变，指针可以随时改变指向的对象以及对象的值",
          "D": "空值NULL不能引用，而指针可以指向NULL"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面中哪两个可以在Demo的子类中使用：（ ）\nclass Demo {\nprotected int m1 (int a, int b) {\nreturn 0;\n}\n}", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "public int m1 (int a, int b) { return 0; }",
          "B": "private int m1 (int a, int b) { return 0; }",
          "C": "private int m1 (int a, long b) { return 0; }",
          "D": "public short m1 (int a, int b) { return 0; }"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于变量及其作用范围描述正确的是",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "实例变量是类的成员变量",
          "B": "静态变量用关键字static声明",
          "C": "在方法体中定义的局部变量在该方法被执行时创建",
          "D": "局部变量在使用前可不用初始化"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面程序输出结果为（）：\npublic class Demo{\npublic static void main (String [] args) {\nString lx = “LeXin”;\nString nb = lx;\nlx = “Fenqile”;\nSystem.out.println(bar);\n}\n}", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
        "options": {
          "A": "程序异常，编译不通过",
          "B": "程序编写正常，可正常运行",
          "C": "程序输出值为“LeXin”",
          "D": "程序输出值为“Fenqile”"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有关数据库事务隔离级别描述正确的是？ ", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "未提交读(Read Uncommitted)：允许脏读，也就是可能读取到其他会话中未提交事务修改的数据",
          "B": "提交读(Read Committed)：只能读取到已经提交的数据",
          "C": "可重复读(Repeated Read)：在同一个事务内的查询都是事务开始时刻一致的",
          "D": "串行读(Serializable)：完全串行化的读，每次读都需要获得表级共享锁，读写相互都会阻塞"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 13,
    "industry": "测试工程师", 
    "class": "笔试题", 
    "title": "2019乐信校园招聘测试工程师笔试题", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 5
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "已知张三、李四、王五三人被A、B、C大学录取录取。分别被哪个学校录取的，同学们作了如下的猜测：\n同学甲猜：张三被B录取，王五被C录取。\n同学乙猜：张三被C录取，李四被B录取。\n同学丙猜：张三被A录取，王五被B录取。\n结果，同学们的猜测各对了一半。那么，他们的录取情况是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "张三、李四、王五分别被B、C和A录取。",
          "B": "张三、李四、王五分别被A、B和C录取。",
          "C": "张三、李四、王五分别被B、A和C录取。",
          "D": "张三、李四、王五分别被A、C和B录取。",
          "E": "张三、李四、王五分别被C、B和A录取。"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "如果A去旅游，那么B、C和D将一起去。如果上述断定是真的，那么，以下哪项也是真的？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "如果A没去旅游，那么B、C、D三人中至少有一人没去。",
          "B": "如果A没去旅游，那么B、C、D三人都没去。",
          "C": "如果C没去旅游，那么A和D不会都去。",
          "D": "如果B、C、D都去旅游，那么A也去",
          "E": "如果D没去旅游，那么B和C不会都去。"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "A、B、C准备去爬山。天气预报说今天可能下雨。围绕天气预报，三个人争论起来。\nA:“今天可能下雨，那并不排斥今天也可能不下雨，我们还是去爬山吧。\nB：“今天可能下雨，那就表明今天要下雨，我们还是不去爬山了吧。”\nC：“今天可能下雨，只是表明今天不下雨不具有必然性去不去爬山由你们决定。”\n对天气预报的理解，三个人中", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "A正确，B和C不正确。",
          "B": "B正确，A和C不正确。",
          "C": "C正确，A和B不正确。",
          "D": "B和C正确，A不正确。",
          "E": "A和C正确，B不正确。"
        },
        "correct_answer": [
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在某餐馆中，只有川菜、粤菜，A点的菜中有川菜，因此，A点的菜中没有粤菜。以下哪项最能增强上述论证？",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "餐馆规定，如果点了川菜，可以不点粤菜，但点了粤菜，一定也要点川菜。",
          "B": "餐馆规定，点粤菜就不能点川菜，反之亦然。",
          "C": "A是四川人，只喜欢川菜。",
          "D": "A是广东人，但不喜欢粤菜。",
          "E": "A是四川人，最不喜欢粤菜。"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某餐厅发生一起谋杀案，经调查：\n第一，谋杀或者用的是叉，或者用的是刀，二者必居其一。\n第二，谋杀时间或者在午夜12点，或者在凌晨4点。\n第三，谋杀者或者是甲，或者是乙，二者必居其一。\n如果以上断定是真的，那么以下哪项也一定是真的？\n(1)死者不是甲用叉在午夜12点谋杀的，因此，死者是乙用刀子在凌晨4点谋杀的。\n(2)死者是甲用叉在凌晨4点谋杀的，因此，死者不是乙用叉在凌晨4点谋杀的。\n(3)谋杀的时间是午夜12点，但不是甲用叉子谋杀的，因此，一定是乙用刀子谋杀的。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "(1)、(2)、(3)",
          "B": "(2)、(3)",
          "C": "仅(l)",
          "D": "仅(2)",
          "E": "仅(3)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某银行被窃，A、B、C、D四人涉嫌被拘审。侦破结果表明，罪犯就是其中的某一个人。\nA说：“是C偷的。”\nB说：“我没偷。”\nC说：‘我也没偷。”\nD说；‘如果B没有偷，那么就是我偷的。”\n现已查明，其中只有一个说假话。从上述条件可以确定以下哪项成立？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "A偷",
          "B": "B偷",
          "C": "C偷",
          "D": "D偷",
          "D": "无法推断"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "2，1，2/3，1/2，()",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "2/5",
          "B": "5/6",
          "C": "3/4",
          "D": "1/4"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "vi编辑器里面如何删除最后一行？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "G;d",
          "B": "G;dd",
          "C": "shift+G;dd",
          "D": "shift+G;d"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "如何杀掉所有java进程？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "kill -9 java",
          "B": "killall -9 java",
          "C": "init 6",
          "D": "shutdown -9 java"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下命令哪一个能测试某服务器的某个端口是否能够访问？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "ping",
          "B": "telnet",
          "C": "wget",
          "D": "curl",
          "D": "yum"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下命令哪一个能确认某个端口是否被占用？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "netstat",
          "B": "iostat",
          "C": "vmstat",
          "D": "jstat",
          "E": "sar"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于HTTP的长连接和短连接说法错误的是？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "HTTP/1.0默认使用短连接",
          "B": "短连接是指客户端和服务器每进行一次HTTP操作，就建立一次连接，任务结束就中断连接",
          "C": "在HTTP协议头加入：Connection:keep-alive就能实现长链接",
          "D": "HTTP/1.1默认使用长连接",
          "E": "长链接能有效降低连接数"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "软件测试按照测试方法来区分可以分成？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "单元测试，集成测试",
          "B": "黑盒测试，白盒测试",
          "C": "集成测试，系统测试",
          "D": "功能测试，性能测试"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "Linux系统中，文件的权限是755表示什么意思？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
        "options": {
          "A": "文件所有者可读可写可执行",
          "B": "与文件所有者同属一个用户组的其他用户可读可执行",
          "C": "其它用户组可读可执行",
          "D": "其它用户组可读可写可执行"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "Linux系统中，软链接和硬链接有什么区别？",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "软链接创建时间与源文件不一样",
          "B": "软链接是指向源文件，硬链接是拷贝一个副本",
          "C": "硬链接创建时间与源文件一样",
          "D": "硬链接会同步更新",
          "E": "硬链接创建时间与源文件不一样"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于TCP和UDP，下列说法正确的是？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "TCP能保证数据顺序，而UDP不能",
          "B": "TCP和UDP都需要握手，但是UDP不需要挥手",
          "C": "TCP保证数据正确性，UDP可能丢包",
          "D": "TCP比UDP更加安全，不容易受攻击",
          "E": "TCP比UDP会消耗更多资源"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "如何查看磁盘空间的使用情况？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 17, 
        "options": {
          "A": "df",
          "B": "du -h",
          "C": "du",
          "D": "df -h",
          "E": "du -h --max-depth=1"
        },
        "correct_answer": [
          "A",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于数据库索引，下面说法不正确的是？ ", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 18, 
        "options": {
          "A": "有效缩短数据的检索时间",
          "B": "加快表与表之间的连接",
          "C": "索引越多越好",
          "D": "只有很少数据值的列不应该建索引"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 14,
    "industry": "测试工程师", 
    "class": "笔试题", 
    "title": "爱数科技2017校招测试开发工程师笔试试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 7,
      "checkbox": 0, 
      "blank": 4, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "数据库设计的（）阶段进行关系规范化。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "需求分析",
          "B": "概念设计",
          "C": "逻辑设计",
          "D": "物理设计"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "系统测试由若干个不同的测试类型组成，其中（）检查系统能力的最高实际限度，即软件在一些超负荷情况下的运行情况。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "情况测试",
          "B": "性能测试",
          "C": "恢复测试",
          "D": "可靠性测试"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知一棵二叉树，如果先序遍历的节点顺序是：ADCEFGHB，中序遍历是：CDFEGHAB，则后序遍历结果为：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "CFHGEDBA",
          "B": "CDFEGHBA",
          "C": "FGHCDEBA"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "系统测试将软件，硬件，网络等其他因素结合，对整个软件进行测试.（）不是系统测试的内容。",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "路径测试",
          "B": "可靠性测试",
          "C": "安装测试"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "SQL语言中，删除一个表的命令是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "CLEAR TABLE",
          "B": "DROP TABLE",
          "C": "DELETE TABLE"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "建立动态路由需要用到的文件有（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "/etc/hosts",
          "B": "/etc/gateways",
          "C": "/etc/resolv、conf"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面是一段求最大值的程序，其中 datalist 是数据表， n 是 datalist 的长度\nint GetMax(int n,int datalist[])\n{\n    int k=0;\n    for(int j=1;j<n;j++)\n        if(datalist[j]>datalist[k])\n            k=j;\n    return k;\n}\n请问该程序段的 McCabe 环路复杂性为多少？（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "设有关系 R(S,D,M), 其函数依赖集 F={S,D,D->M}. 则关系 R 至多满足_[填空1]_范式",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 8,
        "correct_answer": [
          "第一"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "SSH 服务默认端口为_[填空1]_.\nTelnet 服务默认端口为_[填空2]_.",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 9,
        "correct_answer": [
          "22",
          "23"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在RedHat中，从root用户切换到user1用户，命令是_[填空1]_.",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 10,
        "correct_answer": [
          "su user1"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "基础测试的工作开展更多站在_[填空1]_的角度上；系统测试站在_[填空2]_的角度上。",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 11,
        "correct_answer": [
          "测试人员",
          "用户"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 15,
    "industry": "测试开发", 
    "class": "笔试题", 
    "title": "爱数科技2017校招测试开发工程师笔试试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 7,
      "checkbox": 0, 
      "blank": 4, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "数据库设计的（）阶段进行关系规范化。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "需求分析",
          "B": "概念设计",
          "C": "逻辑设计",
          "D": "物理设计"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "系统测试由若干个不同的测试类型组成，其中（）检查系统能力的最高实际限度，即软件在一些超负荷情况下的运行情况。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "情况测试",
          "B": "性能测试",
          "C": "恢复测试",
          "D": "可靠性测试"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知一棵二叉树，如果先序遍历的节点顺序是：ADCEFGHB，中序遍历是：CDFEGHAB，则后序遍历结果为：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "CFHGEDBA",
          "B": "CDFEGHBA",
          "C": "FGHCDEBA"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "系统测试将软件，硬件，网络等其他因素结合，对整个软件进行测试.（）不是系统测试的内容。",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "路径测试",
          "B": "可靠性测试",
          "C": "安装测试"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "SQL语言中，删除一个表的命令是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "CLEAR TABLE",
          "B": "DROP TABLE",
          "C": "DELETE TABLE"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "建立动态路由需要用到的文件有（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "/etc/hosts",
          "B": "/etc/gateways",
          "C": "/etc/resolv、conf"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面是一段求最大值的程序，其中 datalist 是数据表， n 是 datalist 的长度\nint GetMax(int n,int datalist[])\n{\n    int k=0;\n    for(int j=1;j<n;j++)\n        if(datalist[j]>datalist[k])\n            k=j;\n    return k;\n}\n请问该程序段的 McCabe 环路复杂性为多少？（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "设有关系 R(S,D,M), 其函数依赖集 F={S,D,D->M}. 则关系 R 至多满足_[填空1]_范式",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 8,
        "correct_answer": [
          "第一"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "SSH 服务默认端口为_[填空1]_.\nTelnet 服务默认端口为_[填空2]_.",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 9,
        "correct_answer": [
          "22",
          "23"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在RedHat中，从root用户切换到user1用户，命令是_[填空1]_.",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 10,
        "correct_answer": [
          "su user1"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "基础测试的工作开展更多站在_[填空1]_的角度上；系统测试站在_[填空2]_的角度上。",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 11,
        "correct_answer": [
          "测试人员",
          "用户"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 16,
    "industry": "运维开发工程师", 
    "class": "笔试题", 
    "title": "摩拜2018校招运维开发工程师笔试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 7,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":2
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "在使用super 和this关键字时，以下描述正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "在子类构造方法中使用super（）显示调用父类的构造方法，super（）必须写在子类构造方法的第一行，否则编译不通过",
          "B": "super（）和this（）不一定要放在构造方法内第一行",
          "C": "this（）和super（）可以同时出现在一个构造函数中",
          "D": "this（）和super（）可以在static环境中使用，包括static方法和static语句块"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "访问修饰符作用范围由大到小是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "private-protected-default-public",
          "B": "private-default-protected-public",
          "C": "public-protected-default-private",
          "D": "public-default-protected-private"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面方法中，用于调度线程使其运行的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "init()",
          "B": "start()",
          "C": "run()",
          "D": "resume()",
          "E": "sleep()"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于数组说法正确的是",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "一维数组实质上是相同类型变量的列表",
          "B": "创建一个数组首先定义数组变量所需的类型",
          "C": "char c[]=new char[26];可声明一个含有 26 个元素的 char型数组",
          "D": "当为一个多维数组的时候分配内存时，仅需要为第一维指定内存，然后再分配其他维内存 XXXXX",
          "E": "int twain[][] = new int[4][5];可声明一个二维数组"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对下列数字：1, 48, 8, 13, 26, 55, 12, 6, 56, 99, 16, 100进行希尔排序（最小增量排序），进行2次后的结果", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "1, 8, 13, 48, 6, 12, 26, 55, 16, 56, 99, 100",
          "B": "1, 6, 8, 12, 16, 55, 13, 26, 56, 99, 48, 100",
          "C": "1, 8, 13, 26, 12, 6, 16, 48, 55, 56, 99, 100",
          "D": "100, 1, 6, 8, 12, 13, 16, 26, 48, 55, 56, 99"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在虚拟存储系统中，假定某进程在内存敏感词有5页（初始为空），采用先进先出（FIFO）页面淘汰算法，当进程访问以下序列：1，2，3，4，5，6，1，3，5，1，4，5，2，5时产生中断的次数是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "5",
          "B": "6",
          "C": "7",
          "D": "8"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关键字集合｛12, 67, 56, 16, 25, 37, 22, 29, 15, 47, 48, 34｝，散列函数为f(key) = key mod 12，将关键字依次存入下标为0~11的散列表中，采用线性探测解决冲突，那么关键字34存储的位置下标为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "8",
          "B": "9",
          "C": "10",
          "D": "11"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在MySQL中，VARCHAR与CHAR的区别描述，正确的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "CHAR是一种可变长度的类型，VARCHAR是一种固定长度",
          "B": "VARCHAR长度可以指定为0到65535之间的值",
          "C": "CHAR(20)和VARCHAR(20)存储的长度是 一样的",
          "D": "CHAR比VARCHAR更省空间"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "TCP的三次握手过程中，accept发生在三次握手的哪个阶段？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "三次握手之后",
          "B": "第一次握手",
          "C": "第二次握手",
          "D": "第三次握手"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 17,
    "industry": "运维工程师", 
    "class": "笔试题", 
    "title": "摩拜2018校招运维开发工程师笔试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 7,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":2
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "在使用super 和this关键字时，以下描述正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "在子类构造方法中使用super（）显示调用父类的构造方法，super（）必须写在子类构造方法的第一行，否则编译不通过",
          "B": "super（）和this（）不一定要放在构造方法内第一行",
          "C": "this（）和super（）可以同时出现在一个构造函数中",
          "D": "this（）和super（）可以在static环境中使用，包括static方法和static语句块"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "访问修饰符作用范围由大到小是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "private-protected-default-public",
          "B": "private-default-protected-public",
          "C": "public-protected-default-private",
          "D": "public-default-protected-private"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面方法中，用于调度线程使其运行的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "init()",
          "B": "start()",
          "C": "run()",
          "D": "resume()",
          "E": "sleep()"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于数组说法正确的是",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "一维数组实质上是相同类型变量的列表",
          "B": "创建一个数组首先定义数组变量所需的类型",
          "C": "char c[]=new char[26];可声明一个含有 26 个元素的 char型数组",
          "D": "当为一个多维数组的时候分配内存时，仅需要为第一维指定内存，然后再分配其他维内存 XXXXX",
          "E": "int twain[][] = new int[4][5];可声明一个二维数组"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对下列数字：1, 48, 8, 13, 26, 55, 12, 6, 56, 99, 16, 100进行希尔排序（最小增量排序），进行2次后的结果", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "1, 8, 13, 48, 6, 12, 26, 55, 16, 56, 99, 100",
          "B": "1, 6, 8, 12, 16, 55, 13, 26, 56, 99, 48, 100",
          "C": "1, 8, 13, 26, 12, 6, 16, 48, 55, 56, 99, 100",
          "D": "100, 1, 6, 8, 12, 13, 16, 26, 48, 55, 56, 99"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在虚拟存储系统中，假定某进程在内存敏感词有5页（初始为空），采用先进先出（FIFO）页面淘汰算法，当进程访问以下序列：1，2，3，4，5，6，1，3，5，1，4，5，2，5时产生中断的次数是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "5",
          "B": "6",
          "C": "7",
          "D": "8"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关键字集合｛12, 67, 56, 16, 25, 37, 22, 29, 15, 47, 48, 34｝，散列函数为f(key) = key mod 12，将关键字依次存入下标为0~11的散列表中，采用线性探测解决冲突，那么关键字34存储的位置下标为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "8",
          "B": "9",
          "C": "10",
          "D": "11"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在MySQL中，VARCHAR与CHAR的区别描述，正确的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "CHAR是一种可变长度的类型，VARCHAR是一种固定长度",
          "B": "VARCHAR长度可以指定为0到65535之间的值",
          "C": "CHAR(20)和VARCHAR(20)存储的长度是 一样的",
          "D": "CHAR比VARCHAR更省空间"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "TCP的三次握手过程中，accept发生在三次握手的哪个阶段？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "三次握手之后",
          "B": "第一次握手",
          "C": "第二次握手",
          "D": "第三次握手"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 18,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "public class CharToString {\n  public static void main(String[] args)\n  {\n    char myChar = 'g';\n   String myStr = Character.toString(myChar);\n   System.out.println(“String is: ”+myStr);\n   myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n}\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于udp协议，不正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "udp需要三次握手，但不需要建立连接",
          "B": "2500B的udp包能够一次穿透以太网",
          "C": "DNS、NFS和SNMP使用的是UDP",
          "D": "UDP和TCP一样都会出现粘包问题"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "快件信息表（waybillinfo）中存储了快件的所有操作信息，请找出在中山公园网点，异常派送（optype='异常派件'）次数超过3次的快件(waybillno),正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nand count(waybillno) >3",
          "B": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\norder by waybillno having count(*) > 3",
          "C": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nhaving count(*) > 3",
          "D": "select waybillno from waybillinfo where zonecode='中山公园' and optype='异常派件'\ngroup by waybillno having count(*) > 3"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "死锁产生的必要条件是（ ）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "互斥",
          "B": "请求与保持",
          "C": "循环等待",
          "D": "优先级高",
          "E": "非剥夺"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "那些是OSI层（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "物理层、数据链路层",
          "B": "传输层、网络层",
          "C": "协议层",
          "D": "UI层",
          "E": "服务层"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "二维数组k[1..7,1..9],每元素大小占2个字节，而且使用列存储，a[5,4]的偏移量为（）个字节。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "78",
          "B": "39",
          "C": "25",
          "D": "50"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "一个队列只能从右侧入队，左右侧皆可出队。顺序为Ka、Kb、Kc、Kd、Ke的序列入队后，不能得到的输出是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Ka->Kb->Kc->Kd->Ke",
          "B": "Ke->Kd->Kc->Kb->Ka",
          "C": "Ka->Kb->Ke->Kc->Kd",
          "D": "Ke->Ka->Kc->Kb->Kd"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "“abcdefg”中长度2的子串的个数是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "8",
          "B": "7",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "单链表的按升序排列，其中L指向头结点，写一个函数,若start<元素<end，则删除，并释放空间。\n如13->19->26->30->49->63,start=21,end=51,删除后为13->19->63.结点定义及函数模板如下，请为（1)(2)(3)(4)处出选择合适的代码。\ntypedef struct Node{\n    int data;\n    struct Node *next;\n}Node,*LinkList;\nint delList(LinkList L,int start,int end)\n{\n    (1) * q = L;*p = L->next;\n     int delFlag = 0;\n     while ( p )\n         if ( p->data <= start)\n             { q = p; p = (2);}\n         else\n             if ( p->data < end )\n             {\n                 q->next = (3); free(p);\n                 p = (4); delFlag = 1;\n              }\n             else  break;\n      if( delFlag == 0) return -1;\n      return 0;\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "(1)LinkList\n(2)p->next\n(3)p\n(4)q->next",
          "B": "(1)LinkList\n(2)p->next\n(3)p->next\n(4)q->next",
          "C": "(1)Node\n(2)p->next\n(3)p->next\n(4)q",
          "D": "(1)Node\n(2)p->next\n(3)p->next\n(4)q->next"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，正确的是（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性",
          "B": "当用户查询索引字段时，索引可以快速地执行检索操作，借助索引，在执行查询的时候不需要扫描整个表就可以快速地找到所需要的数据。",
          "C": "创建索引和维护索引要耗费时间、空间,当对表中的数据进行增加、删除和修改的时候,会降低数据的维护速度",
          "D": "一张表只能创建一个唯一索引"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "用递归算法实现转换，如“uvxyz”转换后为“zyxvu”，请选择合适的语句（）\nvoid rev_str（char *s，int len）\n{\n    char ch;\n    if ( len > 1)\n        {\n             ch = *s;\n             *s = *(s+len-1);\n             *(s+len-1) = ch;\n             rev_str(?,?);\n        }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "s,len-1",
          "B": "s,len-2",
          "C": "s+2,len-2",
          "D": "s+1,len-2"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在有序表( 7, 13, 33, 87, 99, 97, 117, 123,129,131,137)中，使用二分查找算法查找13时需要的关键字比较次数是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "4",
          "B": "3",
          "C": "2",
          "D": "5"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 19,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":3
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下函数的时间复杂度是( )\nvoid foo(int n, int x, int y)\n{\n      int z = 0;\n    if (n <= 0)\n    {\n       z = x + y;\n    }\n    else\n    {\n        foo(n - 1, x + 1, y);\n        foo(n - 1, x, y + 1);\n    }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "O(1)",
          "B": "O(n)",
          "C": "O(logN)",
          "D": "O(n^2)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n }\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "import numpy as np\na = np.repeat(np.arange(5).reshape([1,-1]),10,axis = 0)+10.0 b = np.random.randint(5, size= a.shape)\nc = np.argmin(a*b, axis=1)\nb = np.zeros(a.shape)\nb[np.arange(b.shape[0]), c] = 1\nprint b\n以上函数输出结果为()", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "Hello World!",
          "B": "一个 shape = (5,10) 的随机整数矩阵",
          "C": "一个 shape = (5,10) 的 one-hot 矩阵",
          "D": "一个 shape = (10,5) 的 one-hot 矩阵"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知a = [1, 2, 3]和b = [1, 2, 4]，那么id(a[1])==id(b[1])的执行结果 （）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "TRUE",
          "B": "FALSE"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下不能在list中添加新元素的方法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "append()",
          "B": "add()",
          "C": "extend()",
          "D": "insert"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于分类器的说法中不正确的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "SVM的目标是找到使得训练数据尽可能分开且分类间隔最大的超平面，属于结构风险最小化",
          "B": "Naive Bayes是一种特殊的Bayes分类器，其一个假定是每个变量相互独立。",
          "C": "Xgboost是一种优秀的集成算法，其优点包括速度快、对异常值不敏感、支持自定义损失函数等等",
          "D": "随机森林中列采样的过程保证了随机性，所以就算不剪枝，也不容易出现过拟合。"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下列关于线性回归说法错误的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "在现有模型上，加入新的变量，所得到的R^2的值总会增加",
          "B": "线性回归的前提假设之一是残差必须服从独立正态分布",
          "C": "残差的方差无偏估计是SSE/(n-p)",
          "D": "自变量和残差不一定保持相互独立"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于机器学习算法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "LR模型在加入正则化项后Variance将增大",
          "B": "线性SVM是寻找最小边缘的超平面的一个分类器",
          "C": "xgboost和GDBT都是属于boosting算法",
          "D": "xgboost和随机森林都是属于bagging算法"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下说法正确的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "增加模型复杂度，模型在测试集上的准确率就能更好",
          "B": "L2正则化的解通常是稀疏的，L1正则化可以使得参数趋向于更平滑",
          "C": "对于PCA，我们应该选择是的模型具有最小variance的主成分",
          "D": "每次使用K-means算法得到的聚类结果可能会不一样"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列关于PCA的说法错误的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "PCA的结果受异常值的影响较",
          "B": "对任何一个的矩阵来说，它的奇异值分解总是存在",
          "C": "各个主成分变量之间是保持相互垂直的",
          "D": "第一个主成分的方差总是大于其他所有的主成分的方差"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "EM算法是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "有监督",
          "B": "无监督",
          "C": "半监督",
          "D": "都不是"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列哪项叙述是正确的（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "Adaboost可以降低方差",
          "B": "Xgboost可以降低偏差",
          "C": "Random Forest可以降低方差",
          "D": "Decision Tree可以降低偏差"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下方法属于集成方法的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "bagging",
          "B": "stacking",
          "C": "blending",
          "D": "boosting"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下排序算法平均时间复杂度和插入排序相同的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "冒泡排序",
          "B": "堆排序",
          "C": "希尔排序",
          "D": "归并排序"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "丰巢柜中有A、B、C、D、E、F六个人的快递，每个人各有两个快递。现在随机取出5个快递，那么5个快递中至少有2个快递属于同一个人的概率是多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "0.242424242424242",
          "B": "0.757575757575758",
          "C": "0.606060606060606",
          "D": "0.333333333333333"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "假设有三个人同时参加这场笔试，假设满分为1，三个人的得分符合分布U（0，1）。那么三个人最低分的期望为？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "1",
          "B": "1/3",
          "C": "1/4",
          "D": "1/6"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 20,
    "industry": "人工智能", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "public class CharToString {\n  public static void main(String[] args)\n  {\n    char myChar = 'g';\n   String myStr = Character.toString(myChar);\n   System.out.println(“String is: ”+myStr);\n   myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n}\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于udp协议，不正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "udp需要三次握手，但不需要建立连接",
          "B": "2500B的udp包能够一次穿透以太网",
          "C": "DNS、NFS和SNMP使用的是UDP",
          "D": "UDP和TCP一样都会出现粘包问题"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "快件信息表（waybillinfo）中存储了快件的所有操作信息，请找出在中山公园网点，异常派送（optype='异常派件'）次数超过3次的快件(waybillno),正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nand count(waybillno) >3",
          "B": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\norder by waybillno having count(*) > 3",
          "C": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nhaving count(*) > 3",
          "D": "select waybillno from waybillinfo where zonecode='中山公园' and optype='异常派件'\ngroup by waybillno having count(*) > 3"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "死锁产生的必要条件是（ ）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "互斥",
          "B": "请求与保持",
          "C": "循环等待",
          "D": "优先级高",
          "E": "非剥夺"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "那些是OSI层（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "物理层、数据链路层",
          "B": "传输层、网络层",
          "C": "协议层",
          "D": "UI层",
          "E": "服务层"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "二维数组k[1..7,1..9],每元素大小占2个字节，而且使用列存储，a[5,4]的偏移量为（）个字节。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "78",
          "B": "39",
          "C": "25",
          "D": "50"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "一个队列只能从右侧入队，左右侧皆可出队。顺序为Ka、Kb、Kc、Kd、Ke的序列入队后，不能得到的输出是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Ka->Kb->Kc->Kd->Ke",
          "B": "Ke->Kd->Kc->Kb->Ka",
          "C": "Ka->Kb->Ke->Kc->Kd",
          "D": "Ke->Ka->Kc->Kb->Kd"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "“abcdefg”中长度2的子串的个数是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "8",
          "B": "7",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "单链表的按升序排列，其中L指向头结点，写一个函数,若start<元素<end，则删除，并释放空间。\n如13->19->26->30->49->63,start=21,end=51,删除后为13->19->63.结点定义及函数模板如下，请为（1)(2)(3)(4)处出选择合适的代码。\ntypedef struct Node{\n    int data;\n    struct Node *next;\n}Node,*LinkList;\nint delList(LinkList L,int start,int end)\n{\n    (1) * q = L;*p = L->next;\n     int delFlag = 0;\n     while ( p )\n         if ( p->data <= start)\n             { q = p; p = (2);}\n         else\n             if ( p->data < end )\n             {\n                 q->next = (3); free(p);\n                 p = (4); delFlag = 1;\n              }\n             else  break;\n      if( delFlag == 0) return -1;\n      return 0;\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "(1)LinkList\n(2)p->next\n(3)p\n(4)q->next",
          "B": "(1)LinkList\n(2)p->next\n(3)p->next\n(4)q->next",
          "C": "(1)Node\n(2)p->next\n(3)p->next\n(4)q",
          "D": "(1)Node\n(2)p->next\n(3)p->next\n(4)q->next"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，正确的是（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性",
          "B": "当用户查询索引字段时，索引可以快速地执行检索操作，借助索引，在执行查询的时候不需要扫描整个表就可以快速地找到所需要的数据。",
          "C": "创建索引和维护索引要耗费时间、空间,当对表中的数据进行增加、删除和修改的时候,会降低数据的维护速度",
          "D": "一张表只能创建一个唯一索引"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "用递归算法实现转换，如“uvxyz”转换后为“zyxvu”，请选择合适的语句（）\nvoid rev_str（char *s，int len）\n{\n    char ch;\n    if ( len > 1)\n        {\n             ch = *s;\n             *s = *(s+len-1);\n             *(s+len-1) = ch;\n             rev_str(?,?);\n        }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "s,len-1",
          "B": "s,len-2",
          "C": "s+2,len-2",
          "D": "s+1,len-2"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在有序表( 7, 13, 33, 87, 99, 97, 117, 123,129,131,137)中，使用二分查找算法查找13时需要的关键字比较次数是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "4",
          "B": "3",
          "C": "2",
          "D": "5"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 21,
    "industry": "人工智能", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":3
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下函数的时间复杂度是( )\nvoid foo(int n, int x, int y)\n{\n      int z = 0;\n    if (n <= 0)\n    {\n       z = x + y;\n    }\n    else\n    {\n        foo(n - 1, x + 1, y);\n        foo(n - 1, x, y + 1);\n    }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "O(1)",
          "B": "O(n)",
          "C": "O(logN)",
          "D": "O(n^2)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n }\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "import numpy as np\na = np.repeat(np.arange(5).reshape([1,-1]),10,axis = 0)+10.0 b = np.random.randint(5, size= a.shape)\nc = np.argmin(a*b, axis=1)\nb = np.zeros(a.shape)\nb[np.arange(b.shape[0]), c] = 1\nprint b\n以上函数输出结果为()", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "Hello World!",
          "B": "一个 shape = (5,10) 的随机整数矩阵",
          "C": "一个 shape = (5,10) 的 one-hot 矩阵",
          "D": "一个 shape = (10,5) 的 one-hot 矩阵"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知a = [1, 2, 3]和b = [1, 2, 4]，那么id(a[1])==id(b[1])的执行结果 （）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "TRUE",
          "B": "FALSE"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下不能在list中添加新元素的方法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "append()",
          "B": "add()",
          "C": "extend()",
          "D": "insert"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于分类器的说法中不正确的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "SVM的目标是找到使得训练数据尽可能分开且分类间隔最大的超平面，属于结构风险最小化",
          "B": "Naive Bayes是一种特殊的Bayes分类器，其一个假定是每个变量相互独立。",
          "C": "Xgboost是一种优秀的集成算法，其优点包括速度快、对异常值不敏感、支持自定义损失函数等等",
          "D": "随机森林中列采样的过程保证了随机性，所以就算不剪枝，也不容易出现过拟合。"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下列关于线性回归说法错误的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "在现有模型上，加入新的变量，所得到的R^2的值总会增加",
          "B": "线性回归的前提假设之一是残差必须服从独立正态分布",
          "C": "残差的方差无偏估计是SSE/(n-p)",
          "D": "自变量和残差不一定保持相互独立"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于机器学习算法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "LR模型在加入正则化项后Variance将增大",
          "B": "线性SVM是寻找最小边缘的超平面的一个分类器",
          "C": "xgboost和GDBT都是属于boosting算法",
          "D": "xgboost和随机森林都是属于bagging算法"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下说法正确的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "增加模型复杂度，模型在测试集上的准确率就能更好",
          "B": "L2正则化的解通常是稀疏的，L1正则化可以使得参数趋向于更平滑",
          "C": "对于PCA，我们应该选择是的模型具有最小variance的主成分",
          "D": "每次使用K-means算法得到的聚类结果可能会不一样"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列关于PCA的说法错误的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "PCA的结果受异常值的影响较",
          "B": "对任何一个的矩阵来说，它的奇异值分解总是存在",
          "C": "各个主成分变量之间是保持相互垂直的",
          "D": "第一个主成分的方差总是大于其他所有的主成分的方差"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "EM算法是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "有监督",
          "B": "无监督",
          "C": "半监督",
          "D": "都不是"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列哪项叙述是正确的（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "Adaboost可以降低方差",
          "B": "Xgboost可以降低偏差",
          "C": "Random Forest可以降低方差",
          "D": "Decision Tree可以降低偏差"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下方法属于集成方法的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "bagging",
          "B": "stacking",
          "C": "blending",
          "D": "boosting"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下排序算法平均时间复杂度和插入排序相同的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "冒泡排序",
          "B": "堆排序",
          "C": "希尔排序",
          "D": "归并排序"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "丰巢柜中有A、B、C、D、E、F六个人的快递，每个人各有两个快递。现在随机取出5个快递，那么5个快递中至少有2个快递属于同一个人的概率是多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "0.242424242424242",
          "B": "0.757575757575758",
          "C": "0.606060606060606",
          "D": "0.333333333333333"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "假设有三个人同时参加这场笔试，假设满分为1，三个人的得分符合分布U（0，1）。那么三个人最低分的期望为？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "1",
          "B": "1/3",
          "C": "1/4",
          "D": "1/6"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 22,
    "industry": "机器学习", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "public class CharToString {\n  public static void main(String[] args)\n  {\n    char myChar = 'g';\n   String myStr = Character.toString(myChar);\n   System.out.println(“String is: ”+myStr);\n   myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n}\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于udp协议，不正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "udp需要三次握手，但不需要建立连接",
          "B": "2500B的udp包能够一次穿透以太网",
          "C": "DNS、NFS和SNMP使用的是UDP",
          "D": "UDP和TCP一样都会出现粘包问题"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "快件信息表（waybillinfo）中存储了快件的所有操作信息，请找出在中山公园网点，异常派送（optype='异常派件'）次数超过3次的快件(waybillno),正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nand count(waybillno) >3",
          "B": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\norder by waybillno having count(*) > 3",
          "C": "select waybillno, count(*) from waybillinfo where zonecode='中山公园' and optype='异常派件'\nhaving count(*) > 3",
          "D": "select waybillno from waybillinfo where zonecode='中山公园' and optype='异常派件'\ngroup by waybillno having count(*) > 3"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "死锁产生的必要条件是（ ）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "互斥",
          "B": "请求与保持",
          "C": "循环等待",
          "D": "优先级高",
          "E": "非剥夺"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "那些是OSI层（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "物理层、数据链路层",
          "B": "传输层、网络层",
          "C": "协议层",
          "D": "UI层",
          "E": "服务层"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "二维数组k[1..7,1..9],每元素大小占2个字节，而且使用列存储，a[5,4]的偏移量为（）个字节。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "78",
          "B": "39",
          "C": "25",
          "D": "50"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "一个队列只能从右侧入队，左右侧皆可出队。顺序为Ka、Kb、Kc、Kd、Ke的序列入队后，不能得到的输出是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Ka->Kb->Kc->Kd->Ke",
          "B": "Ke->Kd->Kc->Kb->Ka",
          "C": "Ka->Kb->Ke->Kc->Kd",
          "D": "Ke->Ka->Kc->Kb->Kd"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "“abcdefg”中长度2的子串的个数是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "8",
          "B": "7",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于链表，正确的是（）",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "单链表的按升序排列，其中L指向头结点，写一个函数,若start<元素<end，则删除，并释放空间。\n如13->19->26->30->49->63,start=21,end=51,删除后为13->19->63.结点定义及函数模板如下，请为（1)(2)(3)(4)处出选择合适的代码。\ntypedef struct Node{\n    int data;\n    struct Node *next;\n}Node,*LinkList;\nint delList(LinkList L,int start,int end)\n{\n    (1) * q = L;*p = L->next;\n     int delFlag = 0;\n     while ( p )\n         if ( p->data <= start)\n             { q = p; p = (2);}\n         else\n             if ( p->data < end )\n             {\n                 q->next = (3); free(p);\n                 p = (4); delFlag = 1;\n              }\n             else  break;\n      if( delFlag == 0) return -1;\n      return 0;\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "(1)LinkList\n(2)p->next\n(3)p\n(4)q->next",
          "B": "(1)LinkList\n(2)p->next\n(3)p->next\n(4)q->next",
          "C": "(1)Node\n(2)p->next\n(3)p->next\n(4)q",
          "D": "(1)Node\n(2)p->next\n(3)p->next\n(4)q->next"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，正确的是（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性",
          "B": "当用户查询索引字段时，索引可以快速地执行检索操作，借助索引，在执行查询的时候不需要扫描整个表就可以快速地找到所需要的数据。",
          "C": "创建索引和维护索引要耗费时间、空间,当对表中的数据进行增加、删除和修改的时候,会降低数据的维护速度",
          "D": "一张表只能创建一个唯一索引"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "用递归算法实现转换，如“uvxyz”转换后为“zyxvu”，请选择合适的语句（）\nvoid rev_str（char *s，int len）\n{\n    char ch;\n    if ( len > 1)\n        {\n             ch = *s;\n             *s = *(s+len-1);\n             *(s+len-1) = ch;\n             rev_str(?,?);\n        }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "s,len-1",
          "B": "s,len-2",
          "C": "s+2,len-2",
          "D": "s+1,len-2"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在有序表( 7, 13, 33, 87, 99, 97, 117, 123,129,131,137)中，使用二分查找算法查找13时需要的关键字比较次数是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "4",
          "B": "3",
          "C": "2",
          "D": "5"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 23,
    "industry": "机器学习", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":3
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下函数的时间复杂度是( )\nvoid foo(int n, int x, int y)\n{\n      int z = 0;\n    if (n <= 0)\n    {\n       z = x + y;\n    }\n    else\n    {\n        foo(n - 1, x + 1, y);\n        foo(n - 1, x, y + 1);\n    }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "O(1)",
          "B": "O(n)",
          "C": "O(logN)",
          "D": "O(n^2)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n  }\n }\n此代码片段输出正确的值是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "import numpy as np\na = np.repeat(np.arange(5).reshape([1,-1]),10,axis = 0)+10.0 b = np.random.randint(5, size= a.shape)\nc = np.argmin(a*b, axis=1)\nb = np.zeros(a.shape)\nb[np.arange(b.shape[0]), c] = 1\nprint b\n以上函数输出结果为()", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "Hello World!",
          "B": "一个 shape = (5,10) 的随机整数矩阵",
          "C": "一个 shape = (5,10) 的 one-hot 矩阵",
          "D": "一个 shape = (10,5) 的 one-hot 矩阵"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知a = [1, 2, 3]和b = [1, 2, 4]，那么id(a[1])==id(b[1])的执行结果 （）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "TRUE",
          "B": "FALSE"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下不能在list中添加新元素的方法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "append()",
          "B": "add()",
          "C": "extend()",
          "D": "insert"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于分类器的说法中不正确的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "SVM的目标是找到使得训练数据尽可能分开且分类间隔最大的超平面，属于结构风险最小化",
          "B": "Naive Bayes是一种特殊的Bayes分类器，其一个假定是每个变量相互独立。",
          "C": "Xgboost是一种优秀的集成算法，其优点包括速度快、对异常值不敏感、支持自定义损失函数等等",
          "D": "随机森林中列采样的过程保证了随机性，所以就算不剪枝，也不容易出现过拟合。"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下列关于线性回归说法错误的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "在现有模型上，加入新的变量，所得到的R^2的值总会增加",
          "B": "线性回归的前提假设之一是残差必须服从独立正态分布",
          "C": "残差的方差无偏估计是SSE/(n-p)",
          "D": "自变量和残差不一定保持相互独立"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于机器学习算法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "LR模型在加入正则化项后Variance将增大",
          "B": "线性SVM是寻找最小边缘的超平面的一个分类器",
          "C": "xgboost和GDBT都是属于boosting算法",
          "D": "xgboost和随机森林都是属于bagging算法"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下说法正确的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "增加模型复杂度，模型在测试集上的准确率就能更好",
          "B": "L2正则化的解通常是稀疏的，L1正则化可以使得参数趋向于更平滑",
          "C": "对于PCA，我们应该选择是的模型具有最小variance的主成分",
          "D": "每次使用K-means算法得到的聚类结果可能会不一样"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列关于PCA的说法错误的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "PCA的结果受异常值的影响较",
          "B": "对任何一个的矩阵来说，它的奇异值分解总是存在",
          "C": "各个主成分变量之间是保持相互垂直的",
          "D": "第一个主成分的方差总是大于其他所有的主成分的方差"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "EM算法是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "有监督",
          "B": "无监督",
          "C": "半监督",
          "D": "都不是"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列哪项叙述是正确的（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "Adaboost可以降低方差",
          "B": "Xgboost可以降低偏差",
          "C": "Random Forest可以降低方差",
          "D": "Decision Tree可以降低偏差"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下方法属于集成方法的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "bagging",
          "B": "stacking",
          "C": "blending",
          "D": "boosting"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下排序算法平均时间复杂度和插入排序相同的是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "冒泡排序",
          "B": "堆排序",
          "C": "希尔排序",
          "D": "归并排序"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "丰巢柜中有A、B、C、D、E、F六个人的快递，每个人各有两个快递。现在随机取出5个快递，那么5个快递中至少有2个快递属于同一个人的概率是多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "0.242424242424242",
          "B": "0.757575757575758",
          "C": "0.606060606060606",
          "D": "0.333333333333333"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "假设有三个人同时参加这场笔试，假设满分为1，三个人的得分符合分布U（0，1）。那么三个人最低分的期望为？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "1",
          "B": "1/3",
          "C": "1/4",
          "D": "1/6"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
    ]
  },
  {
    "parentId": 24,
    "industry": "数据分析师", 
    "class": "笔试题", 
    "title": "乐信2020校园招聘数据笔试题", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 4, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":4
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "DB、DBMS和DBS三者之间的关系是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "DB包括DBMS和DBS",
          "B": "DBS包括DB和DBMS",
          "C": "DBMS包括DB和DBS",
          "D": "不能相互包括"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "现有A表30条数据，B表50条数据，A表通过其中一个字段左关联B表，A为主表，B为从表，得到的结果表数据条数为（）条。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": ">=30",
          "B": "=30",
          "C": "<=30",
          "D": "=50"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于HDFS的文件写入，正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "支持多用户对同一文件的写操作",
          "B": "用户可以在文件任意位置进行修改",
          "C": "默认将文件块复制成三份存放",
          "D": "复制的文件块默认都存在同一机架上"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪一个命令可以统计linux系统上一个文件中“乐信”出现的行数",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "cat “乐信” filename | wc -l",
          "B": "grep “乐信” filename | wc -l",
          "C": "cat “乐信” filename | wc -w",
          "D": "grep “乐信” filename | wc -w"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "根据关系模式的完整性规则，一个关系中的主键", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "不能有两个",
          "B": "不能成为另一个关系的外部键",
          "C": "可以重复",
          "D": "不允许空值"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "逻辑回归将输出概率限定在[0, 1]之间，使用了以下哪个函数？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "tanh 函数",
          "B": "Sigmoid 函数",
          "C": "ReLU函数",
          "D": "Leaky ReLU函数"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "数据仓库的数据量越大，其应用价值也越大",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "正确",
          "B": "错误"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下哪一种排序函数会形成“1,2,2,4,5,5,7”的排序结果？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "Rank()",
          "B": "DENSE_RANK()",
          "C": "ROW_NUMBER()",
          "D": "全部错误"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "Mysql中，以下哪种删除sql命令是错误的？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Delete from table1 where status=2",
          "B": "Delete from table1 a where a.status=2",
          "C": "Delete a from table1 a where a.status=2",
          "D": "truncate table table1"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关系数据模型的基本数据结构是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "树",
          "B": "图",
          "C": "关系",
          "D": "索引"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "mysql中对于a、b、c建立了一个联合索引，以下能走索引的组合是",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "a",
          "B": "(a,b)",
          "C": "(b,c)",
          "D": "(a,c)"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下有关SQL性能优化正确的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
        "options": {
          "A": "sql需要避免在索引字段上使用函数",
          "B": "避免在WHERE子句中使用in，not in , 可以使用exist和not exist代替",
          "C": "将对于同一个表格的多个字段的操作写到同一个sql中， 而不是分开成两个sql语句实现",
          "D": "避免建立索引的列中使用空值"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面那些组件有实时计算的能力", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "Storm",
          "B": "Flink",
          "C": "Hive",
          "D": "Spark Streaming"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "常用的排序算法中，平均时间复杂度为O(n*logn)的有哪些？",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "堆排序",
          "B": "冒泡排序",
          "C": "快速排序",
          "D": "归并排序"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "hadoop主要组成部分包括：_[填空1]_,_[填空2]_,_[填空3]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 15,
        "correct_answer": [ 
          "HDFS",
          "MapReduce",
          "Yarn"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "解决0/1背包问题可以使用是_[填空1]_、_[填空2]_、_[填空3]_等算法",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 16,
        "correct_answer": [ 
          "动态规划",
          "回溯法",
          "分支限界法"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "常见的OLAP多维数据分析包括_[填空1]_、_[填空2]_、_[填空3]_和旋转等操作",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 17,
        "correct_answer": [ 
          "上钻",
          "下钻",
          "切片"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "Linux某文件的权限为：drw-r--r--，用数值形式表示该权限为:_[填空1]_，该文件属性是_[填空2]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 18,
        "correct_answer": [ 
          "644",
          "只读文件夹"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 25,
    "industry": "数据开发", 
    "class": "笔试题", 
    "title": "唯品会2019秋招数据开发岗", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 15,
      "checkbox": 0, 
      "blank": 5, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":10
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "假设需要对磁盘上的2000W条记录构建索引，你认为下面哪种数据结构来存储索引最合适？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "Hash Table",
          "B": "AVL-Tree",
          "C": "B-Tree",
          "D": "List"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "进程从运行状态进入就绪状态的原因可能是?", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "被选中占有处理机",
          "B": "等待某一事件",
          "C": "等待的事件已发生",
          "D": "时间片用完"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪个调度器是hadoop的默认调度器", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "调度器Capacity Scheduler",
          "B": "调度器FIFO",
          "C": "资源调度器 Resource Scheduler",
          "D": "调度器Fair Scheduler"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列哪一个命令不是用作测试IP协议连通性？",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "ping",
          "B": "ifconfig",
          "C": "telnet",
          "D": "tracert"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "传送速率单位“ b/s ”代表什么？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "bytes per second",
          "B": "bits per second",
          "C": "baud per second",
          "D": "billion per second"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于Cache的叙述中，正确的是？ ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "CPU中的Cache容量应大于CPU之外的Cache容量",
          "B": "Cache的设计思想是在合理成本下提高命中率",
          "C": "Cache的设计目标是容量尽可能与主存容量相等",
          "D": "在容量确定的情况下，替换算法的时间复杂度是影响Cache命中率的关键因素"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下哪一个不是对数据库关系范式的目的？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "减少数据冗余",
          "B": "加快查询速度",
          "C": "解决更新异常问题",
          "D": "提高存储空间效率"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "线性表的顺序存储结构是一种 __  的存储结构", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "随机存取",
          "B": "索引存取",
          "C": "顺序存取",
          "D": "散列存取"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面哪个程序负责 HDFS 数据存储",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "NameNode",
          "B": "Jobtracker",
          "C": "Datanode",
          "D": "secondaryNameNode"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在关系数据库系统中，为了简化用户的查询操作，而又不增加数据的存储空间，常用的方法是创建", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "另一个表（TABLE）",
          "B": "游标（CURSOR）",
          "C": "视图（VIEW）",
          "D": "索引（INDEX）"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪个是正确的索引类型", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "A_TREE",
          "B": "B_TREE",
          "C": "C_TREE",
          "D": "D_TREE"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "中column字段上有索引，不会用到索引的哪种",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "column = ‘a‘",
          "B": "column = substr(‘abc‘,1,1)",
          "C": "substr(column,1,1) = substr(‘abc‘,1,1)",
          "D": "column = concat(‘a‘,‘b‘)"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "count(*) 和 count（column）是否一致？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "是",
          "B": "否"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下哪个是DDL语句",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "select",
          "B": "delete",
          "C": "drop",
          "D": "update"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "非主属性非部分依赖于主关键字，这个是哪个范式的定义", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "1NF",
          "B": "2NF",
          "C": "3NF"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于TRUNCATE 和DELETE 的说法正确的是",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "TRUNCATE 属于DDL，而DELETE 属于DML",
          "B": "TRUNCATE 与DELETE 均能够删除表中的指定记录",
          "C": "TRUNCATE 不能删除表中指定的记录，而DELETE 能够删除表中的指定记录",
          "D": "在清空表记录的操作时，TRUNCATE 的执行效率比DELETE 高)"
        },
        "correct_answer": [
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪些语句是DML（数据库操作语言） ", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 17, 
        "options": {
          "A": "SELECT",
          "B": "INSERT",
          "C": "DROP",
          "D": "CREATE"
        },
        "correct_answer": [
          "A",
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在数据库的SQL语言开发中，下述关于Union和Union all的描述哪些是正确的", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 18, 
        "options": {
          "A": "使用Union或Union all组合查询的数据集，需满足两个条件：列数和列的顺序必须相同；数据类型必须兼容",
          "B": "Union在进行表链接后会筛选掉重复的记录，所以在表链接后会对所产生的结果集进行排序运算，删除重复的记录再返回结果。",
          "C": "Union all返回的结果集就会包含重复的数据了，如果表数据量大的话可能会导致用磁盘进行排序。因此，从效率上说，union要比union all快很多",
          "D": "如果可以确认合并的两个结果集中不包含重复的数据的话，那么就建议使用Union all"
        },
        "correct_answer": [
          "A",
          "B",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下数据表连接正确的有？",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 19,
        "options": {
          "A": "join",
          "B": "left join",
          "C": "right join",
          "D": "cross join"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "常用的聚合函数有哪些",
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 20, 
        "options": {
          "A": "max()",
          "B": "count()",
          "C": "sum()",
          "D": "sex()"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪些是DBMS的特性？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 21, 
        "options": {
          "A": "原子性（Atomicity）",
          "B": "一致性（Consistency）",
          "C": "隔离性（Isolation）",
          "D": "持久性（Durability）"
        },
        "correct_answer": [
          "A",
          "B",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于SQL优化，哪些是正确的？", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 22, 
        "options": {
          "A": "查询时尽量减少候选集的数据量",
          "B": "只选取需要的字段",
          "C": "运行前检查执行计划"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "取前价最高的top100商品，需要用到哪些函数组合？",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 23,
        "options": {
          "A": "order by",
          "B": "group by",
          "C": "limit",
          "D": "max"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "常用的分析函数有哪些", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 24, 
        "options": {
          "A": "row_number()",
          "B": "rank()",
          "C": "dense_rank()",
          "D": "mix_rank()"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "有哪些清空表的方式？",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 25,
        "options": {
          "A": "drop表然后重建",
          "B": "truncate表",
          "C": "delete表",
          "D": "update表"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "数据质量检查是ETL工作中非常重要的一步，主要关注一下四个方面:_[填空1]_检查,_[填空2]_检查,_[填空3]_检查,完全性检查",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 26,
        "correct_answer": [ 
          "正确性",
          "明确性",
          "一致性"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "三种变化数据捕获技术:_[填空1]_,_[填空2]_,_[填空3]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 27,
        "correct_answer": [ 
          "采用审计列",
          "数据库日志",
          "全表扫描"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "在对异构数据源进行整合抽取时，我们需要做的事情依次是标识出所有的源系统，对源系统进行概况分析，定义_[填空1]_逻辑，建立_[填空2]_规则，生成_[填空3]_。",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 28,
        "correct_answer": [ 
          "数据匹配",
          "筛选",
          "一致性维度"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "逻辑数据映射(Logical Data Map)用来描述_[填空1]_、_[填空2]_以及将源系统的数据转换到数据仓库中需要做操作和处理方式的说明文档",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 29,
        "correct_answer": [ 
          "源系统的数据定义",
          "目标数据仓库的模型"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "数据库中常见的约束有哪些：1._[填空1]_；2._[填空2]_；3._[填空3]_",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 30,
        "correct_answer": [ 
          "非空值约束",
          "唯一性约束",
          "检查约束"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 26,
    "industry": "数据挖掘", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招大数据挖掘与分析工程师客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 11,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "二叉排序树的链表节点定义如下：\ntypedef struct BiTnode{\n     int key_value;\n    struct BiTnode *L,*R;/*节点的左、右树指针*/\n}\n\n请补充完整查找键值key的函数。\nBSTree lookup_key(BSTree root,int key)\n{\n    if() return NULL;\n    else \n        if(key == root->key_value)\n            return root;\n        else if(key > root->key_value)\n            return (1);\n        else\n            return (2);\n }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "(1)lookup_key(root->R,key)\n(2)lookup_key(NULL,key)",
          "B": "(1)lookup_key(root->R,root.key_value)\n(2)lookup_key(root->L,root.key_value)",
          "C": "(1)lookup_key(root->L,key)\n(2)lookup_key(root->R,key)",
          "D": "(1)lookup_key(root->R,key)\n(2)lookup_key(root->L,key)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对序列（12,18,22,38,39,49,79,89）进行排序，最不适合的算法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "冒泡排序",
          "B": "快速排序",
          "C": "归并排序",
          "D": "插入排序"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "调用函数时，入参及返回地址使用了（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "队列",
          "B": "多维数组",
          "C": "顺序表",
          "D": "栈"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "设有递归算法如下，最终打印结果是（）\n #include<stido.h>\n  int foo(int a ,int b)\n{\n    if (b == 0) return 0;\n   if (b %2 == 0) return foo(a+a,b/2);\n     return foo(a+a,b/2)+a;    \n  }\n void main()\n { \n  printf(“%d”，foo(1,3));\n}",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "指出堆排序、选择排序、冒泡排序、快速排序、的时间复杂度（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "nlogn、n^2、n^2、nlogn",
          "B": "n^2、n^2、n^2、nlogn",
          "C": "nlogn、nlogn、n^2、nlogn",
          "D": "nlogn、n^2、n^2、n^2"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "What is Static Method in Java（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "It is a method which belongs to the class and not to the object(instance)",
          "B": "A static method can access only static data. It can not access non-static data (instance variables)",
          "C": "A static method can call only other static methods and can not call a non-static method from it.",
          "D": "A static method can not be accessed directly by the class name and doesn’t need any object"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n  System.out.println(“String is: ”+myStr);\n }\n }\n此代码片段输出正确的值是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "一个空栈，如果有顺序输入：a1，a2，a3。。。an（个数大于3），而且输出第一个为an-1,那么所有都出栈后，（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "输出的最后元素一定为an",
          "B": "输出的最后元素一定为a1",
          "C": "不能确定元素a1~an-2在输出顺序",
          "D": "an-2一定比an-3先出"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "利用栈完成数制转换，将十进制的169转换为八进制，出栈序列为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "251",
          "B": "521",
          "C": "215",
          "D": "152"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "主机IP为200.15.13.13/23,其子网掩码是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "255.255.249.0",
          "B": "255.255.2410",
          "C": "255.255.253.0",
          "D": "255.255.254.0"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "总部给某分公司分配的网络地址是172.16.2.0/24,该分公司有三个部门，每个部门计算机不多于30台,在网络配置时，进行子网划分，可以使用的子网掩码是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "255.255.255.128",
          "B": "255.255.255.192",
          "C": "255.255.255.224",
          "D": "255.255.255.240"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，不正确的有（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "单元测试对源程序中每一个程序单元进行测试，检查各个模块是否正确实现规定的功能，从而发现模块在编码中或算法中的错误。该阶段涉及编码和详细设计文档。",
          "B": "集成测试是基于软件需求说明书的黑盒测试，是对已经集成好的软件系统进行彻底的测试，以验证软件系统的正确性和性能等满足其规约所指定的要求，检查软件的行为和输出是否正确",
          "C": "确认测试主要是检查已实现的软件是否满足需求规格说明书中确定了的各种需求。",
          "D": "系统测试的主要目的是检查软件单位之间的接口是否正确，主要是针对程序内部结构进行测试，特别是对程序之间的接口进行测试。"
        },
        "correct_answer": [
          "B",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下关于链表和数组说法正确的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "数组从栈中分配空间，链表从堆中分配空间",
          "B": "数组插入或删除元素的时间复杂度O(n)，链表的时间复杂度O(1)",
          "C": "数组利用下标定位，时间复杂度为O(1)，链表定位元素时间复杂度O(n)",
          "D": "对于add和remove，ArrayList要比LinkedList快"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "甲乙丙3个进程对某类资源的需求分别是7个、8个、3个。且目前已分别得到了3个、3个和2个资源，若系统还至少能提供（ ）个资源，则系统是安全的。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "1",
          "B": "4",
          "C": "2",
          "D": "8"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "32位处理器是指处理器的（）是32位的",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "控制总线",
          "B": "数据总线",
          "C": "地址总线",
          "D": "所有的总线"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于TCP和UDP说法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 17, 
        "options": {
          "A": "TCP数据传输慢，UDP数据传输快",
          "B": "TCP通过滑动窗口机制进行拥塞控制",
          "C": "UDP缓冲区小于报文长度，则会丢失报文",
          "D": "DNS协议用于域名解析，默认23端口"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 27,
    "industry": "数据挖掘", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招大数据挖掘与分析工程师客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":3
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "允许信号在两个方向上传输，但某一时刻只允许信号在一个信道上单向传输的通信是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "单工通信",
          "B": "半双工通信",
          "C": "全双工通信",
          "D": "时工通信"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "LR分析法属于（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "自顶向下分析法",
          "B": "LALR分析法",
          "C": "SLR分析法",
          "D": "自底向上分析法"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪种UML图描述的是一个实体基于事件反应的动态行为，显示了该实体如何根据当前所处的状态对不同的事件做出反应（ ）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "活动图",
          "B": "状态图",
          "C": "配置图",
          "D": "构件图"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在关系模式R(U,F)中,X，Y，Z是U中属性，则多值依赖的传递律是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "如果X→→Y，Y→→Z，则X→→Z",
          "B": "如果X→→Y，Y→→Z，则X→→YZ",
          "C": "如果X→→Y，Y→→Z，则X→→Y Z",
          "D": "如果X→→Y，Y→→Z，则X→→Z-Y"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于JAVA的垃圾回收机制，正确的是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "当调用“System.gc()”来强制回收时，系统会立即回收垃圾",
          "B": "垃圾回收不能确定具体的回收时间",
          "C": "程序可明确地标识某个局部变量的引用不再被使用",
          "D": "程序可以显式地立即释放对象占有的内存"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "SpringMVC的核心入口是DispatcherServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "文法G[E]：\nE-> T|E+T|E - T\nT-> F|T*F|T/F\nF ->(E)|i\n以下论述正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "该文法的开始符号是E",
          "B": "该文法的终结符号集合为{+、-、*、/、(、)}",
          "C": "该文法的非终结符号集合为{E、T、F}",
          "D": "句型T+T*F+I的简单短语为i、T*F、第一个T"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "SpringMvc的核心入口是DispatchServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "表关联时，以下哪种说法是正确的（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "左连接时，结果集数据的行数一定等于左表",
          "B": "左连接时，结果集数据的行数一定等于右表",
          "C": "右连接时，结果集数据的行数一定等于右表",
          "D": "左连接时，结果集的行数可能大于左表的行数"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有一张学生成绩表sc（sno 学号，class 课程，score 成绩），请查询出每个学生的英语、数学的成绩（行转列，一个学生只有一行记录）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "select sno,class,score from sc where class in('english','math')",
          "B": "select sno,\nif(class='english',score,0),\nif(class='math',score,0)\nfrom sc\nwhere class in('english','math')",
          "C": "select sno,\ncase when class='english' then score else 0  end ,\ncase when class='math' then score else 0 end\nfrom sc\nwhere class in('english','math')",
          "D": "select sno,\nsum(if(class='english',score,0)) as english,\nsum( if(class='math',score,0) ) as math\nfrom sc\nwhere class in('english','math')\ngroup by sno"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在hive中下列哪些命令可以实现去重（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "distinct",
          "B": "group by",
          "C": "row_number",
          "D": "having"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于K-means聚类算法说法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "对大数据集有较高的效率并且具有可伸缩性。",
          "B": "是一种无监督学习方法。",
          "C": "k值无法自动获取，初始聚类中心随机选择。",
          "D": "初始聚类中心的选择对聚类结果影响不大。"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下列算法常用于聚类的问题是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "k-means",
          "B": "逻辑回归模型",
          "C": "决策树模型",
          "D": "随机森林模型"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "网点755WM有两个单元区域A和B，单元区域A有5名员工，单元区域B有8名员工，历史上单元区域A和B的投诉率分别是0.1%,0.15%,现在755WM有一个投诉，问投诉发生在单元区域A的概率是多少（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "0.29",
          "B": "0.39",
          "C": "0.13",
          "D": "0.5"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在hive中一个查询语句执行后显示的结果为：\n20180812  50；20180813  32；20180814 NULL，则最有可能的查询语句是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "SELECT inc_day,count(task_no) FROM 任务表\nWHERE inc_day<=20180814",
          "B": "SELECT inc_day, count(task_no) FROM 任务表\nWHERE inc_day<=20180814 GROUP BY inc_day",
          "C": "SELECT  inc_day,count(task_no) FROM 任务表\nWHERE inc_day<=20180814 order by inc_day",
          "D": "SELECT inc_day, count(task_no) FROM 任务表 HAVING inc_day<=20180814 GROUP BY inc_day"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 28,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招大数据挖掘与分析工程师客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 11,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "二叉排序树的链表节点定义如下：\ntypedef struct BiTnode{\n     int key_value;\n    struct BiTnode *L,*R;/*节点的左、右树指针*/\n}\n\n请补充完整查找键值key的函数。\nBSTree lookup_key(BSTree root,int key)\n{\n    if() return NULL;\n    else \n        if(key == root->key_value)\n            return root;\n        else if(key > root->key_value)\n            return (1);\n        else\n            return (2);\n }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "(1)lookup_key(root->R,key)\n(2)lookup_key(NULL,key)",
          "B": "(1)lookup_key(root->R,root.key_value)\n(2)lookup_key(root->L,root.key_value)",
          "C": "(1)lookup_key(root->L,key)\n(2)lookup_key(root->R,key)",
          "D": "(1)lookup_key(root->R,key)\n(2)lookup_key(root->L,key)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对序列（12,18,22,38,39,49,79,89）进行排序，最不适合的算法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "冒泡排序",
          "B": "快速排序",
          "C": "归并排序",
          "D": "插入排序"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "调用函数时，入参及返回地址使用了（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "队列",
          "B": "多维数组",
          "C": "顺序表",
          "D": "栈"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "设有递归算法如下，最终打印结果是（）\n #include<stido.h>\n  int foo(int a ,int b)\n{\n    if (b == 0) return 0;\n   if (b %2 == 0) return foo(a+a,b/2);\n     return foo(a+a,b/2)+a;    \n  }\n void main()\n { \n  printf(“%d”，foo(1,3));\n}",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "指出堆排序、选择排序、冒泡排序、快速排序、的时间复杂度（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "nlogn、n^2、n^2、nlogn",
          "B": "n^2、n^2、n^2、nlogn",
          "C": "nlogn、nlogn、n^2、nlogn",
          "D": "nlogn、n^2、n^2、n^2"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "What is Static Method in Java（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "It is a method which belongs to the class and not to the object(instance)",
          "B": "A static method can access only static data. It can not access non-static data (instance variables)",
          "C": "A static method can call only other static methods and can not call a non-static method from it.",
          "D": "A static method can not be accessed directly by the class name and doesn’t need any object"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n  System.out.println(“String is: ”+myStr);\n }\n }\n此代码片段输出正确的值是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "一个空栈，如果有顺序输入：a1，a2，a3。。。an（个数大于3），而且输出第一个为an-1,那么所有都出栈后，（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "输出的最后元素一定为an",
          "B": "输出的最后元素一定为a1",
          "C": "不能确定元素a1~an-2在输出顺序",
          "D": "an-2一定比an-3先出"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "利用栈完成数制转换，将十进制的169转换为八进制，出栈序列为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "251",
          "B": "521",
          "C": "215",
          "D": "152"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "主机IP为200.15.13.13/23,其子网掩码是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "255.255.249.0",
          "B": "255.255.2410",
          "C": "255.255.253.0",
          "D": "255.255.254.0"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "总部给某分公司分配的网络地址是172.16.2.0/24,该分公司有三个部门，每个部门计算机不多于30台,在网络配置时，进行子网划分，可以使用的子网掩码是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "255.255.255.128",
          "B": "255.255.255.192",
          "C": "255.255.255.224",
          "D": "255.255.255.240"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，不正确的有（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "单元测试对源程序中每一个程序单元进行测试，检查各个模块是否正确实现规定的功能，从而发现模块在编码中或算法中的错误。该阶段涉及编码和详细设计文档。",
          "B": "集成测试是基于软件需求说明书的黑盒测试，是对已经集成好的软件系统进行彻底的测试，以验证软件系统的正确性和性能等满足其规约所指定的要求，检查软件的行为和输出是否正确",
          "C": "确认测试主要是检查已实现的软件是否满足需求规格说明书中确定了的各种需求。",
          "D": "系统测试的主要目的是检查软件单位之间的接口是否正确，主要是针对程序内部结构进行测试，特别是对程序之间的接口进行测试。"
        },
        "correct_answer": [
          "B",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下关于链表和数组说法正确的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "数组从栈中分配空间，链表从堆中分配空间",
          "B": "数组插入或删除元素的时间复杂度O(n)，链表的时间复杂度O(1)",
          "C": "数组利用下标定位，时间复杂度为O(1)，链表定位元素时间复杂度O(n)",
          "D": "对于add和remove，ArrayList要比LinkedList快"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "甲乙丙3个进程对某类资源的需求分别是7个、8个、3个。且目前已分别得到了3个、3个和2个资源，若系统还至少能提供（ ）个资源，则系统是安全的。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "1",
          "B": "4",
          "C": "2",
          "D": "8"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "32位处理器是指处理器的（）是32位的",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "控制总线",
          "B": "数据总线",
          "C": "地址总线",
          "D": "所有的总线"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于TCP和UDP说法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 17, 
        "options": {
          "A": "TCP数据传输慢，UDP数据传输快",
          "B": "TCP通过滑动窗口机制进行拥塞控制",
          "C": "UDP缓冲区小于报文长度，则会丢失报文",
          "D": "DNS协议用于域名解析，默认23端口"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 29,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招大数据挖掘与分析工程师客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":3
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "允许信号在两个方向上传输，但某一时刻只允许信号在一个信道上单向传输的通信是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "单工通信",
          "B": "半双工通信",
          "C": "全双工通信",
          "D": "时工通信"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "LR分析法属于（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "自顶向下分析法",
          "B": "LALR分析法",
          "C": "SLR分析法",
          "D": "自底向上分析法"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪种UML图描述的是一个实体基于事件反应的动态行为，显示了该实体如何根据当前所处的状态对不同的事件做出反应（ ）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "活动图",
          "B": "状态图",
          "C": "配置图",
          "D": "构件图"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在关系模式R(U,F)中,X，Y，Z是U中属性，则多值依赖的传递律是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "如果X→→Y，Y→→Z，则X→→Z",
          "B": "如果X→→Y，Y→→Z，则X→→YZ",
          "C": "如果X→→Y，Y→→Z，则X→→Y Z",
          "D": "如果X→→Y，Y→→Z，则X→→Z-Y"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于JAVA的垃圾回收机制，正确的是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "当调用“System.gc()”来强制回收时，系统会立即回收垃圾",
          "B": "垃圾回收不能确定具体的回收时间",
          "C": "程序可明确地标识某个局部变量的引用不再被使用",
          "D": "程序可以显式地立即释放对象占有的内存"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "SpringMVC的核心入口是DispatcherServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "文法G[E]：\nE-> T|E+T|E - T\nT-> F|T*F|T/F\nF ->(E)|i\n以下论述正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "该文法的开始符号是E",
          "B": "该文法的终结符号集合为{+、-、*、/、(、)}",
          "C": "该文法的非终结符号集合为{E、T、F}",
          "D": "句型T+T*F+I的简单短语为i、T*F、第一个T"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "SpringMvc的核心入口是DispatchServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "表关联时，以下哪种说法是正确的（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "左连接时，结果集数据的行数一定等于左表",
          "B": "左连接时，结果集数据的行数一定等于右表",
          "C": "右连接时，结果集数据的行数一定等于右表",
          "D": "左连接时，结果集的行数可能大于左表的行数"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有一张学生成绩表sc（sno 学号，class 课程，score 成绩），请查询出每个学生的英语、数学的成绩（行转列，一个学生只有一行记录）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "select sno,class,score from sc where class in('english','math')",
          "B": "select sno,\nif(class='english',score,0),\nif(class='math',score,0)\nfrom sc\nwhere class in('english','math')",
          "C": "select sno,\ncase when class='english' then score else 0  end ,\ncase when class='math' then score else 0 end\nfrom sc\nwhere class in('english','math')",
          "D": "select sno,\nsum(if(class='english',score,0)) as english,\nsum( if(class='math',score,0) ) as math\nfrom sc\nwhere class in('english','math')\ngroup by sno"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在hive中下列哪些命令可以实现去重（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "distinct",
          "B": "group by",
          "C": "row_number",
          "D": "having"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于K-means聚类算法说法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "对大数据集有较高的效率并且具有可伸缩性。",
          "B": "是一种无监督学习方法。",
          "C": "k值无法自动获取，初始聚类中心随机选择。",
          "D": "初始聚类中心的选择对聚类结果影响不大。"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下列算法常用于聚类的问题是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "k-means",
          "B": "逻辑回归模型",
          "C": "决策树模型",
          "D": "随机森林模型"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "网点755WM有两个单元区域A和B，单元区域A有5名员工，单元区域B有8名员工，历史上单元区域A和B的投诉率分别是0.1%,0.15%,现在755WM有一个投诉，问投诉发生在单元区域A的概率是多少（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "0.29",
          "B": "0.39",
          "C": "0.13",
          "D": "0.5"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在hive中一个查询语句执行后显示的结果为：\n20180812  50；20180813  32；20180814 NULL，则最有可能的查询语句是（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "SELECT inc_day,count(task_no) FROM 任务表\nWHERE inc_day<=20180814",
          "B": "SELECT inc_day, count(task_no) FROM 任务表\nWHERE inc_day<=20180814 GROUP BY inc_day",
          "C": "SELECT  inc_day,count(task_no) FROM 任务表\nWHERE inc_day<=20180814 order by inc_day",
          "D": "SELECT inc_day, count(task_no) FROM 任务表 HAVING inc_day<=20180814 GROUP BY inc_day"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 30,
    "industry": "项目经理", 
    "class": "笔试题", 
    "title": "项目经理笔试测试题", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 16,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "“病毒营销”之所以能够成功，其利用的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "用户的积极性和人际网络",
          "B": "依赖高流量推广平台",
          "C": "广告宣传上的高投入",
          "D": "提高品牌知名度"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪些在java中是基本数据类型", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "String",
          "B": "byte",
          "C": "Integer",
          "D": "enum"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "著名游戏制作人小岛秀夫的生涯代表作是？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "鬼泣系列",
          "B": "合金装备系列",
          "C": "生化危机系列",
          "D": "全面战争系列"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "青蛙掉入21米井里，每天向上爬10米，晚上再掉下来7米，几天爬出？ ",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "4天",
          "B": "5天",
          "C": "6天",
          "D": "7天"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列互联网企业高管中已退休的是？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "马云",
          "B": "程维",
          "C": "丁磊",
          "D": "张朝阳"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "PRD（Product Requirement Document）文档是产品项目由“概念化”阶段进入到“图纸化”阶段的最主要的一个文档，其作用就是“对MRD（市场需求文档）中的内容进行指标化和技术化”，这个文档的质量好坏直接影响到研发部门是否能够明确产品的功能和性能。以下对PRD的理解正确的是( )", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "没有数据支持的情况下，PRD可以从个人经验、部门要求或者领导指示进行撰写",
          "B": "在PRD中，应当重视对“市场需求”描述，对产品其它指标项的说明可以简略一些",
          "C": "PRD的主要内容包括企业成长经历、产品、服务、营销、团队、股权、人事、财务、运营到融资方案等",
          "D": "PRD的基点依然是MRD中的内容，所以PRD要把MRD中的需求内容独立复制出来补充进PRD",
          "E": "PRD在项目中“承上启下”，“向上”对MRD内容继承和发展，“向下”要把MRD中的内容详细并量化"
        },
        "correct_answer": [
          "E"
        ],
        "parsing": "A、PRD必须要有数据、市场支持。\nB、PRD应当重视对产品需求的描述。\nC、PRD主要包括以下内容：目标、市场、竞品、产品描述、优先级、用例、软硬件要求、技术支持。 C选项中企业成长经历、产品、服务、营销、团队、股权、人事、财务、运营到融资方案等是商业策划书的主要内容。\nD、PRD需要对MRD中的需求进行细化而不是照搬。", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "IT项目计划必须具有（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "现实性、有用性、可操作性",
          "B": "虚拟性、有用性、可操作性",
          "C": "现实性、有用性、不可操作性",
          "D": "虚拟性、不确定性、可操作性"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列关于产品特性的论述中,错误的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "特性可以是固有或赋予的",
          "B": "成品完成后因不同要求对产品所增加的特性是固有特性",
          "C": "产品可能具有一类或多类别的固有特性",
          "D": "某些产品的赋予特性可能是一些产品的固有特性"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下哪些产品不属于SaaS工具",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Google",
          "B": "Tower",
          "C": "Slack",
          "D": "Teambition"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下有关价值观的说法，错误的一项是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "人们的价值观归根结底是一定社会物质生活条件和社会关系的反映",
          "B": "在不同历史时期，不同社会制度下，人们会有着不同的人生价值观",
          "C": "价值观是人们在对人生目的和实践活动进行认识和评价时所持的基本观点和观念",
          "D": "在同一历史时期、同一社会制度下，人们会有着相同的人生价值观"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "项目是为了创造一个“_______”的产品或提供一个唯一的服务而进行的“_______”的努力", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "唯一、临时性",
          "B": "多样性、临时性",
          "C": "多样性、长期性",
          "D": "唯一、长期性"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "新媒体运营的核心要素是？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "活动",
          "B": "推广渠道",
          "C": "内容",
          "D": "社群"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "项目目标的“______”是项目管理最基本的方法 ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "静态控制",
          "B": "管理控制",
          "C": "强制控制",
          "D": "动态控制"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在非洲大陆占有率第一的国产手机厂商为",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "华为",
          "B": "一加",
          "C": "传音",
          "D": "努比亚"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "前端js代码：a = 8 + “8”;  会输出什么？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "16",
          "B": "编译错误",
          "C": "“88”",
          "D": "运行时错误"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下对事务描述不对的是？",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "原子性",
          "B": "一致性",
          "C": "隔离性",
          "D": "锁定性"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 31,
    "industry": "ARM开发", 
    "class": "笔试题", 
    "title": "ARM开发笔试测试题", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 16,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "与其它内核相比，关于ARM内核的主要特点，以下说法错误的是（  ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "功能强大，低功耗设计，RISC结构",
          "B": "全部都是RISC，哈佛结构",
          "C": "功耗低，代码效率高，合作伙伴多",
          "D": "成本低，软件可移植性好，供货源多"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "ARM处理器内核与其他处理器内核相比，主要特点有耗电省、功能强、成本低、16位Thumb与32位ARM和Thumb-2双指令集并存以及具有非常众多的合作伙伴；为RISC结构，多数为哈佛结构。B选项错误，故本题选择B。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "S3C2410设计了I2C总线，提供符合I2C总线设备连接的串行连接线是（   ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "RXD  TXD",
          "B": "SCL  SDA",
          "C": "RXD  SDA",
          "D": "SCLK  SDI"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "ARM处理器如果R1＝0x00000080，则指令MOV R0,R1, LSL#2执行后，R0的值为（  ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "0x00000200",
          "B": "0x00000320",
          "C": "0x00000020",
          "D": "0x00000040"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "本指令表示将寄存器R1的值左移2位后传送到R0，故本题选A。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "将R1中的8位二进制数存储到由R2+1指示的单元，并自动更新地址的ARM指令是（）。",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "STRB R1,[R2,#1]!",
          "B": "STRH R1,[R2,#1]!",
          "C": "STREQ R1,[R2,#1]!",
          "D": "STR R1,[R2,#1]!"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "根据题目意思，本题要用的指令是STRB，且采用基址加变址寻址方式，同时需要自动更新地址，则指令为STRB R1,［R2,#1］!，故本题选A。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下关于ARM程序状态寄存器CPSR的说法正确的是(  )。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "CPSR中N=1表示运算结果为正数",
          "B": "CPSR中F=0允许快速中断",
          "C": "CSPR中V=0表示运算结果溢出",
          "D": "CPSR中Z=0表示运算结果为0"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "CPSR为当前程序状态寄存器。N为符号标志，N=1表示运算结果为负数，N=0表示运算结果为正数；F为禁止快速中断FIQ的控制位，F=0允许FIQ中断；V为溢出标志，加减法运算结果有溢出时V=1，否则V=0；Z为全0标志，运算结果为0，则Z=1，否则Z=0。故本题选择B。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "ARM处理器如果R1＝0x98001200,已知在小端模式下，内存0x98001204中存放数据0x35, 0x98001205中存放数据0x36, 0x98001206中存放数据0x37, 0x98001207中存放数据0x38, 在指令LDR R0，[R1，#4]执行后，R0中的值为（  ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "0x35363738",
          "B": "0x36353837",
          "C": "0x38373635",
          "D": "0x37383536"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "小端模式，是指数据的高位保存在内存的高地址中，而数据的低位保存在内存的低地址中；本指令表示将寄存器R1的内容自动增加4，形成操作数的有效地址，从中取得32位操作数存入寄存器R0中。故本题选C。", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于经典ARM处理器的工作模式，以下说法错误的是（  ）。",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "中止模式是处理普通中断的模式",
          "B": "用户模式是程序正常执行的工作模式",
          "C": "快速中断模式用来处理快速中断FIQ",
          "D": "管理模式是操作系统的保护模式，处理软中断SWI"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "ARM体系结构支持7种工作模式，取决于当前程序状态寄存器CPSR的低5位的值。工作模式间可以相互切换，但是是有条件的。中止模式是处理存储器故障，实现虚拟存储器和存储器保护。用户模式是程序正常执行的工作模式，快速中断模式用来处理快速中断FIQ，管理模式是操作系统的保护模式，处理软中断SWI。故此题选A。",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于ARM子程序和Thumb子程序互相调用描述正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "系统初始化之后ARM处理器只能工作在一种状态不存在互相调用。",
          "B": "只要遵循一定调用的规则Thumb子程序和ARM子程序就可以互相调用。",
          "C": "只要遵循一定调用的规则仅能Thumb子程序调用ARM子程序。",
          "D": "只要遵循一定调用的规则仅能ARM子程序调用Thumb子程序。"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "LDR R2，[R3，#8]的寻址方式是（     ）。",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "寄存器寻址",
          "B": "寄存器寻址",
          "C": "变址寻址",
          "D": "间接寻址"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "如果要选择ARM处理器工作在外部中断模式，允许外部中断IRQ，禁止快速中断FIQ,使用Thumb工作状态，则需要设置的寄存器是（  ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "PSP",
          "B": "MSP",
          "C": "CPSR",
          "D": "SPSR"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "CPSR(当前程序状态寄存器)在任何处理器模式下被访问。它包含了条件标志位、中断禁止位、当前处理器模式标志以及其他的一些控制和状态位。故本题选择C。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "RS232-C串口通信中，表示逻辑1的电平是（    ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "0V",
          "B": "3.3V",
          "C": "+5V～+15V",
          "D": "-5V～-15V"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下具有Thumb-2状态的ARM处理器内核是（）。",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "ARM7",
          "B": "ARM9",
          "C": "ARM10",
          "D": "Cortex-M3"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "在ARM的体系结构中，处理器可以工作在3种不同的状态①ARM状态②Thumb状态及Thumb-2状态③调试状态。其中，除支持Thumb-2的ARM处理器外，其他所有ARM处理器都可以工作在ARM状态，而Cortex-M3只有Thumb-2状态和调试状态。故本题选择D。",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "不属于ARM内核主要特点的是（  ）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "Approximate Algorithm",
          "B": "Approximate Algorithm",
          "C": "功耗低",
          "D": "功能强大",
          "E": "采用RISC结构",
          "F": "全部采用哈佛结构"
        },
        "correct_answer": [
          "F"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "ARM处理器在指令LDR R2，[R5，#2]！执行后，R5中的值为（  ）。",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "R5不变",
          "B": "R5=R5+2",
          "C": "R5=R2+2",
          "D": "R5=2"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "LDR是存储器到寄存器的数据传送指令，#是立即数符号，题中是基址加变址寻址，表示［R5+2］→R2，执行过后，R5的值为R5+2。故本题选择B。",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于ARM处理器异常中断响应过程中，以下说法正确的是（）。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "SPSR的值保存到CPSR中",
          "B": "设置当前状态寄存器CPSR的相应位",
          "C": "断点地址会自动保存在R13中",
          "D": "自动把异常向量地址写入R14中"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "ARM对异常的响应过程如下：将CPRS的值保存到将要执行的异常中断对应的各自SPSR中；设置CPSR的相应位；将引起异常指令的下一条地址（断点地址）保存到R14中；给PC强制赋值，转入向量地址，以便执行相应的处理程序。故本题选B项。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面是关于基于ARM内核的嵌入式芯片中的中断控制器的叙述，其中错误的是（）。",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 16, 
        "options": {
          "A": "中断控制器是连接AMBA的系统总线和外围总线的桥接器",
          "B": "一般采用向量中断或嵌套向量中断方式管理中断",
          "C": "向量中断区分中断的优先级，并且每个中断都有各自的中断处理程序地址",
          "D": "高优先级的中断可以进入低优先级中断的处理过程中，待高优先级中断处理完成后再继续执行低优先级中断处理"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "连接AMBA的系统总线和外围总线的是桥接器，DMA连接在AMBA的系统总线上，故A错误；DMA一般采用向量中断或嵌套向量中断方式管理中断，向量中断区分中断的优先级，并且每个中断都有各自的中断处理程序地址，高优先级的中断可以进入低优先级中断的处理过程中，待高优先级中断处理完成后再继续执行低优先级中断处理。故本题选A。", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 32,
    "industry": "人工智能", 
    "class": "笔试题", 
    "title": "创新工场DeeCamp2018年人工智能训练营在线笔试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 12,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "有关机器学习分类算法的Precision和Recall，以下定义中正确的是（假定tp = true positive, tn = true negative, fp = false positive, fn = false negative）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "Precision= tp / (tp + fp), Recall = tp / (tp + fn)",
          "B": "Precision = tp / (tn + fp), Recall = tp /(tp + fn)",
          "C": "Precision = tp / (tn + fn), Recall = tp /(tp + fp)",
          "D": "Precision = tp / (tp + fp), Recall = tp /(tn + fn)"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面有关计算机基本原理的说法中，正确的一项是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "堆栈（stack）在内存中总是由高地址向低地址方向增长的。",
          "B": "发生函数调用时，函数的参数总是通过压入堆栈（stack）的方式来传递的。",
          "C": "在64位计算机上，Python3代码中的int类型可以表示的最大数值是2^64-1。",
          "D": "在任何计算机上，Python3代码中的float类型都没有办法直接表示[0,1]区间内的所有实数。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有关矩阵运算，以下说法中正确的是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "矩阵运算可以在并行或分布式系统上以并发方式执行。",
          "B": "矩阵乘法运算在任何时候都不满足交换律。",
          "C": "m*n的矩阵在内存或文件中存储时，需要的字节数总是与 m*n 成正比。",
          "D": "空矩阵是指所有元素都为0的矩阵。"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有关 TensorFlow API，以下说法中正确的是：（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "tf.Variable和一般编程语言中“变量（Variable）”的含义完全相同。",
          "B": "tf.placeholder定义的对象，对应于深度神经网络中的“超参数（Hyperparameter）”。",
          "C": "通过tf.constant定义的对象，因为是常量，所以，在session.run()运行前就可以用eval()方法获得对象的值。",
          "D": "session.run()运行一个训练过程时，TensorFlow会使用符号执行（SymbolicExecution）对计算图进行优化。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪一个正则表达式不能与字符串“https://www.tensorflow.org/”（不含引号）匹配？（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "[a-z]+://[a-z.]+/",
          "B": "https[://]www[.]tensorflow[.]org[/]",
          "C": "[htps]+://www.tensorflow.org/",
          "D": "[a-zA-Z.:/]+"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "一个长度为 n 的正整数数列，先递减再递增，如果要找到数列中最小的正整数，最优算法的平均时间复杂度是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "O(n)",
          "B": "O(nlog(n))",
          "C": "O(log(n^2))",
          "D": "O(log(n))"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "假设可以不考虑计算机运行资源（如内存）的限制，以下 python3 代码的预期运行结果是：（）\nimport math\ndef sieve(size):\n     sieve= [True] * size\n    sieve[0] = False\n    sieve[1] = False\n    for i in range(2, int(math.sqrt(size)) + 1):\n        k= i * 2\n         while k < size:\n           sieve[k] = False\n           k += i\n    return sum(1 for x in sieve if x)\nprint(sieve(10000000000))",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "455052510",
          "B": "455052511",
          "C": "455052512",
          "D": "455052513"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "有关机器学习分类算法的Precision和Recall，以下定义中正确的是（假定tp = true positive, tn = true negative, fp = false positive, fn = false negative）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "Precision= tp / (tp + fp), Recall = tp / (tp + fn)",
          "B": "Precision = tp / (tn + fp), Recall = tp /(tp + fn)",
          "C": "Precision = tp / (tn + fn), Recall = tp /(tp + fp)",
          "D": "Precision = tp / (tp + fp), Recall = tp /(tn + fn)"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面有关计算机基本原理的说法中，正确的一项是：（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "堆栈（stack）在内存中总是由高地址向低地址方向增长的。",
          "B": "发生函数调用时，函数的参数总是通过压入堆栈（stack）的方式来传递的。",
          "C": "在64位计算机上，Python3代码中的int类型可以表示的最大数值是2^64-1。",
          "D": "在任何计算机上，Python3代码中的float类型都没有办法直接表示[0,1]区间内的所有实数。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "有关 TensorFlow API，以下说法中正确的是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "tf.Variable和一般编程语言中“变量（Variable）”的含义完全相同。",
          "B": "tf.placeholder定义的对象，对应于深度神经网络中的“超参数（Hyperparameter）”。",
          "C": "通过tf.constant定义的对象，因为是常量，所以，在session.run()运行前就可以用eval()方法获得对象的值。",
          "D": "session.run()运行一个训练过程时，TensorFlow会使用符号执行（SymbolicExecution）对计算图进行优化。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪一个正则表达式不能与字符串“https://www.tensorflow.org/”（不含引号）匹配？（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "[a-z]+://[a-z.]+/",
          "B": "https[://]www[.]tensorflow[.]org[/]",
          "C": "[htps]+://www.tensorflow.org/",
          "D": "[a-zA-Z.:/]+"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "一个长度为 n 的正整数数列，先递减再递增，如果要找到数列中最小的正整数，最优算法的平均时间复杂度是：（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "O(n)",
          "B": "O(nlog(n))",
          "C": "O(log(n^2))",
          "D": "O(log(n))"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 33,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "创新工场DeeCamp2018年人工智能训练营在线笔试卷", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 12,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":0
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "有关机器学习分类算法的Precision和Recall，以下定义中正确的是（假定tp = true positive, tn = true negative, fp = false positive, fn = false negative）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "Precision= tp / (tp + fp), Recall = tp / (tp + fn)",
          "B": "Precision = tp / (tn + fp), Recall = tp /(tp + fn)",
          "C": "Precision = tp / (tn + fn), Recall = tp /(tp + fp)",
          "D": "Precision = tp / (tp + fp), Recall = tp /(tn + fn)"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面有关计算机基本原理的说法中，正确的一项是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "堆栈（stack）在内存中总是由高地址向低地址方向增长的。",
          "B": "发生函数调用时，函数的参数总是通过压入堆栈（stack）的方式来传递的。",
          "C": "在64位计算机上，Python3代码中的int类型可以表示的最大数值是2^64-1。",
          "D": "在任何计算机上，Python3代码中的float类型都没有办法直接表示[0,1]区间内的所有实数。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有关矩阵运算，以下说法中正确的是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "矩阵运算可以在并行或分布式系统上以并发方式执行。",
          "B": "矩阵乘法运算在任何时候都不满足交换律。",
          "C": "m*n的矩阵在内存或文件中存储时，需要的字节数总是与 m*n 成正比。",
          "D": "空矩阵是指所有元素都为0的矩阵。"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "有关 TensorFlow API，以下说法中正确的是：（）",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "tf.Variable和一般编程语言中“变量（Variable）”的含义完全相同。",
          "B": "tf.placeholder定义的对象，对应于深度神经网络中的“超参数（Hyperparameter）”。",
          "C": "通过tf.constant定义的对象，因为是常量，所以，在session.run()运行前就可以用eval()方法获得对象的值。",
          "D": "session.run()运行一个训练过程时，TensorFlow会使用符号执行（SymbolicExecution）对计算图进行优化。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪一个正则表达式不能与字符串“https://www.tensorflow.org/”（不含引号）匹配？（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "[a-z]+://[a-z.]+/",
          "B": "https[://]www[.]tensorflow[.]org[/]",
          "C": "[htps]+://www.tensorflow.org/",
          "D": "[a-zA-Z.:/]+"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "一个长度为 n 的正整数数列，先递减再递增，如果要找到数列中最小的正整数，最优算法的平均时间复杂度是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "O(n)",
          "B": "O(nlog(n))",
          "C": "O(log(n^2))",
          "D": "O(log(n))"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "假设可以不考虑计算机运行资源（如内存）的限制，以下 python3 代码的预期运行结果是：（）\nimport math\ndef sieve(size):\n     sieve= [True] * size\n    sieve[0] = False\n    sieve[1] = False\n    for i in range(2, int(math.sqrt(size)) + 1):\n        k= i * 2\n         while k < size:\n           sieve[k] = False\n           k += i\n    return sum(1 for x in sieve if x)\nprint(sieve(10000000000))",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "455052510",
          "B": "455052511",
          "C": "455052512",
          "D": "455052513"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "有关机器学习分类算法的Precision和Recall，以下定义中正确的是（假定tp = true positive, tn = true negative, fp = false positive, fn = false negative）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "Precision= tp / (tp + fp), Recall = tp / (tp + fn)",
          "B": "Precision = tp / (tn + fp), Recall = tp /(tp + fn)",
          "C": "Precision = tp / (tn + fn), Recall = tp /(tp + fp)",
          "D": "Precision = tp / (tp + fp), Recall = tp /(tn + fn)"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面有关计算机基本原理的说法中，正确的一项是：（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "堆栈（stack）在内存中总是由高地址向低地址方向增长的。",
          "B": "发生函数调用时，函数的参数总是通过压入堆栈（stack）的方式来传递的。",
          "C": "在64位计算机上，Python3代码中的int类型可以表示的最大数值是2^64-1。",
          "D": "在任何计算机上，Python3代码中的float类型都没有办法直接表示[0,1]区间内的所有实数。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "有关 TensorFlow API，以下说法中正确的是：（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "tf.Variable和一般编程语言中“变量（Variable）”的含义完全相同。",
          "B": "tf.placeholder定义的对象，对应于深度神经网络中的“超参数（Hyperparameter）”。",
          "C": "通过tf.constant定义的对象，因为是常量，所以，在session.run()运行前就可以用eval()方法获得对象的值。",
          "D": "session.run()运行一个训练过程时，TensorFlow会使用符号执行（SymbolicExecution）对计算图进行优化。"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪一个正则表达式不能与字符串“https://www.tensorflow.org/”（不含引号）匹配？（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "[a-z]+://[a-z.]+/",
          "B": "https[://]www[.]tensorflow[.]org[/]",
          "C": "[htps]+://www.tensorflow.org/",
          "D": "[a-zA-Z.:/]+"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "一个长度为 n 的正整数数列，先递减再递增，如果要找到数列中最小的正整数，最优算法的平均时间复杂度是：（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "O(n)",
          "B": "O(nlog(n))",
          "C": "O(log(n^2))",
          "D": "O(log(n))"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 34,
    "industry": "Java", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招Java开发工程师客观题（一）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 13,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":6
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "二叉排序树的链表节点定义如下：\ntypedef struct BiTnode{\n    int key_value;\n     struct BiTnode *L,*R;/*节点的左、右树指针*/\n}\n\n请补充完整查找键值key的函数。\nBSTree lookup_key(BSTree root,int key)\n{\n    if() return NULL;\n    else \n        if(key == root->key_value)\n            return root;\n        else if(key > root->key_value)\n            return (1);\n        else\n            return (2);\n} ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "(1)lookup_key(root->R,key)\n(2)lookup_key(NULL,key)",
          "B": "(1)lookup_key(root->R,root.key_value)\n(2)lookup_key(root->L,root.key_value)",
          "C": "(1)lookup_key(root->L,key)\n(2)lookup_key(root->R,key)",
          "D": "(1)lookup_key(root->R,key)\n(2)lookup_key(root->L,key)"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对序列（12,18,22,38,39,49,79,89）进行排序，最不适合的算法是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "冒泡排序",
          "B": "快速排序",
          "C": "归并排序",
          "D": "插入排序"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "调用函数时，入参及返回地址使用了（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "队列",
          "B": "多维数组",
          "C": "顺序表",
          "D": "栈"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "设有递归算法如下，最终打印结果是（）\n#include<stido.h>\n int foo(int a ,int b)\n {\n     if (b %2 == 0) return foo(a+a,b/2);\n     return foo(a+a,b/2)+a;    \n }\n void main()\n { \n   printf(“%d”，foo(1,3));\n }",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "3",
          "B": "4",
          "C": "5",
          "D": "6"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "请指出堆排序、选择排序、冒泡排序、快速排序、的时间复杂度（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "nlogn、n^2、n^2、nlogn",
          "B": "n^2、n^2、n^2、nlogn",
          "C": "nlogn、nlogn、n^2、nlogn",
          "D": "nlogn、n^2、n^2、n^2"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "What is Static Method in Java（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "It is a method which belongs to the class and not to the object(instance)",
          "B": "A static method can access only static data. It can not access non-static data (instance variables)",
          "C": "A static method can call only other static methods and can not call a non-static method from it.",
          "D": "A static method can not be accessed directly by the class name and doesn’t need any object"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "public class CharToString {\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n  System.out.println(“String is: ”+myStr);\n  myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n}\n}\n此代码片段输出正确的值是（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "String is: g\nString is: g",
          "B": "String is: 103\nString is: g",
          "C": "String is: g\nString is: 103",
          "D": "String is: 103\nString is: 103"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "一个空栈，如果有顺序输入：a1，a2，a3。。。an（个数大于3），而且输出第一个为an-1,那么所有都出栈后，（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "输出的最后元素一定为an",
          "B": "输出的最后元素一定为a1",
          "C": "不能确定元素a1~an-2在输出顺序",
          "D": "an-2一定比an-3先出"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "利用栈完成数制转换，将十进制的169转换为八进制，出栈序列为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "251",
          "B": "521",
          "C": "215",
          "D": "152"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "主机IP为200.15.13.13/23,其子网掩码是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "255.255.249.0",
          "B": "255.255.2410",
          "C": "255.255.253.0",
          "D": "255.255.254.0"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "总部给某分公司分配的网络地址是172.16.2.0/24,该分公司有三个部门，每个部门计算机不多于30台,在网络配置时，进行子网划分，可以使用的子网掩码是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "255.255.255.128",
          "B": "255.255.255.192",
          "C": "255.255.255.224",
          "D": "255.255.255.240"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下叙述中，不正确的有（ ）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "单元测试对源程序中每一个程序单元进行测试，检查各个模块是否正确实现规定的功能，从而发现模块在编码中或算法中的错误。该阶段涉及编码和详细设计文档。",
          "B": "集成测试是基于软件需求说明书的黑盒测试，是对已经集成好的软件系统进行彻底的测试，以验证软件系统的正确性和性能等满足其规约所指定的要求，检查软件的行为和输出是否正确",
          "C": "确认测试主要是检查已实现的软件是否满足需求规格说明书中确定了的各种需求。",
          "D": "系统测试的主要目的是检查软件单位之间的接口是否正确，主要是针对程序内部结构进行测试，特别是对程序之间的接口进行测试。"
        },
        "correct_answer": [ 
          "B",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于链表，正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "无需实现估计空间",
          "B": "支持随机访问",
          "C": "增删不必挪动元素",
          "D": "所需空间与线性表长度成正比，并且地址连续",
          "E": "插入一个元素所需挪动元素的平均个数为n/2"
        },
        "correct_answer": [
          "A",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下关于链表和数组说法正确的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "数组从栈中分配空间，链表从堆中分配空间",
          "B": "数组插入或删除元素的时间复杂度O(n)，链表的时间复杂度O(1)",
          "C": "数组利用下标定位，时间复杂度为O(1)，链表定位元素时间复杂度O(n)",
          "D": "对于add和remove，ArrayList要比LinkedList快"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "甲乙丙3个进程对某类资源的需求分别是7个、8个、3个。且目前已分别得到了3个、3个和2个资源，若系统还至少能提供（ ）个资源，则系统是安全的。", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "1",
          "B": "4",
          "C": "2",
          "D": "8"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "32位处理器是指处理器的（）是32位的",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 16,
        "options": {
          "A": "控制总线",
          "B": "数据总线",
          "C": "地址总线",
          "D": "所有的总线"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下关于TCP和UDP说法正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 17, 
        "options": {
          "A": "TCP数据传输慢，UDP数据传输快",
          "B": "TCP通过滑动窗口机制进行拥塞控制",
          "C": "UDP缓冲区小于报文长度，则会丢失报文",
          "D": "DNS协议用于域名解析，默认23端口"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 18, 
        "options": {
          "A": "insert into seniordrivers\ndrivedistanced>=5000 from drivers where",
          "B": "insert seniordrivers (drivedistanced) values from drivers where drivedistanced>=5000",
          "C": "insert into seniordrivers\n(drivedistanced)values>=5000 from drivers where",
          "D": "select * into seniordrivers from drivers where drivedistanced >=5000"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 19,
        "options": {
          "A": "SpringMVC的核心入口是DispatcherServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [ 
          "B",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 35,
    "industry": "Java", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招Java开发工程师客观题（二）", 
    "limit_time": "60", 
    "wrongList": [], 
    "chooseValue": [], 
    "accuracy": { 
      "radio": 0,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 0 
    },
    "questionTypeNum": { 
      "radio": 10,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady":5
    },
    "status": {
      "done": false,
      "doing": true,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "文法G[E]：\nE-> T|E+T|E - T\nT-> F|T*F|T/F\nF ->(E)|i\n以下论述正确的是（）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "该文法的开始符号是E",
          "B": "该文法的终结符号集合为{+、-、*、/、(、)}",
          "C": "该文法的非终结符号集合为{E、T、F}",
          "D": "句型T+T*F+I的简单短语为i、T*F、第一个T"
        },
        "correct_answer": [
          "A",
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "关于SpringMVC，以下说法错误的是？（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "SpringMvc的核心入口是DispatchServlet",
          "B": "@RequestMapping注解既可以用在类上也可以用在方法上",
          "C": "@PathVariable作用是取出url中的模板变量作为参数",
          "D": "controller默认是单例，通过@Scope(“prototype”)注解改为多例，成员变量共享"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "off-heap是指那种内存（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "JVM GC能管理的内存",
          "B": "JVM进程管理的内存",
          "C": "在JVM老年代内存区",
          "D": "在JVM新生代内存"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面程序的运行结果（）\n        List<String> aa = new ArrayList<String>();\n        aa.add(“F1”);\n        aa.add(“F2”);\n        aa.add(“F3”);\n         for (String temp : aa) {\n            if (“F3”.equals(temp)) {\n                aa.remove(temp);\n            }\n         }\n         \n        for (String temp : aa){\n             System.out.println(temp);\n        }\n",
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "抛异常",
          "B": "F1F2",
          "C": "F1F2F3",
          "D": "F1"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面程序的运行结果（）\n        Object obj=new Object();\n        List aList=new ArrayList();\n        List bList=new LinkedList();\n         \n        long t1=System.currentTimeMillis();\n         for(int i=0;i<50000;i++){\n            aList.add(0,obj);\n        }\n        long t2=System.currentTimeMillis()-t1;\n         \n        t1=System.currentTimeMillis();\n        for(int i=0;i<50000;i++){\n            bList.add(0,obj);\n        }\n        long t3=System.currentTimeMillis()-t1; ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "t2",
          "B": "t2=t3",
          "C": "不确定",
          "D": "t2>t3"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下那个不属于Spring Scope（作用域）的范围（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "prototype",
          "B": "request",
          "C": "application",
          "D": "session"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "开闭原则相关的面向对象设计原则（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "里氏代换原则(Liskov Substitution Principle LSP)",
          "B": "依赖倒转原则（Dependence Inversion Principle）",
          "C": "接口隔离原则（Interface Segregation Principle）",
          "D": "复用原则"
        },
        "correct_answer": [
          "A",
          "B",
          "C"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "AOP技术优势在于（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "通过接口、抽象及组合增强对象内部能力",
          "B": "将核心关注点与横切关注点完全隔离",
          "C": "有利增强业务安全性",
          "D": "让一些公共逻辑更好的分布在对象核心逻辑中"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "以下程序输出（）\npublic static void main(String[] args) {\n   int num = 2;\n   switch (num) {\n   case 1:\n        ++num;\n   case 2:\n        ++num;\n   case 3:\n        ++num;\n    default:\n        ++num;\n   break;\n    }\n   System.out.println(num);\n}\n}\n",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "分析以下代码，说法正确的是（）\n public static void main(String[] args) {\n     System.out.println(val());\n }\n  \n public static int val() {\n     int num = 5;\n     try {\n     num = num / 0;\n } catch (Exception e) {\n     num = 10;\n } finally {\n     num = 15;\n }\nreturn num;\n} ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "运行时报错",
          "B": "程序正常运行，输出值为5",
          "C": "程序正常运行，输出值为10",
          "D": "程序正常运行，输出值为15"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪些内存区域属于JVM规范？（　　）", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "方法区",
          "B": "实例变量",
          "C": "静态变量",
          "D": "程序计数器",
          "E": "虚拟机栈"
        },
        "correct_answer": [
          "A",
          "D",
          "E"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "下面的选项中哪些属于工厂模式()",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "静态工厂模式",
          "B": "工厂方法模式",
          "C": "抽象工厂模式",
          "D": "简单工厂模式"
        },
        "correct_answer": [ 
          "B",
          "C",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关系模式如R=({A,B,C,D,E},{AB→CE,E→AB,C→D})属于第几范式（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
        "options": {
          "A": "1NF",
          "B": "2NF",
          "C": "3NF",
          "D": "4NF"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "已知tm_employee表中具有默认约束df_adress，删除该约束的语句为（）",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 14,
        "options": {
          "A": "alter talbe tm_employee drop constraint df_adress",
          "B": "alter talbe tm_employee remove constraint df_adress",
          "C": "alter talbe tm_employee delete constraint df_adress",
          "D": "remove constraint df_adress from talbe tm_employee"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "关于数据库三级模式结构说法正确的是()", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
        "options": {
          "A": "三级模式包括外模式，内模式，物理模式",
          "B": "内模式对应的是物理级",
          "C": "外模式是某个或某几个用户所看到的数据库的数据视图，是与某一应用有关的数据的逻辑表示",
          "D": "物理模式又称存储模式，对应于物理级"
        },
        "correct_answer": [
          "B",
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      }
    ]
  },
]