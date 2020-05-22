let detail1 = [
  {
    "parentId": 12, 
    "industry": "C/C++", 
    "class": "笔试题", 
    "title": "C/C++工程师能力评估", 
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
      "unsteady": 0
    },
    "status": {
      "done": false,
      "doing": false, 
      "collection": false,
      "mistaked": false
    },
    "bank": [ 
      {
        "title": "下面描述正确的是\nint *p1 = new int[10]; \nint *p2 = new int[10]();", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 1, 
        "options": { 
          "A": "p1和p2申请的空间里面的值都是随机值",
          "B": "p1和p2申请的空间里的值都已经初始化",
          "C": "p1申请的空间里的值是随机值，p2申请的空间里的值已经初始化",
          "D": "p1申请的空间里的值已经初始化，p2申请的空间里的值是随机值"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面的程序可以从0....n-1中随机等概率的输出m个不重复的数。（这里我们假设n远大于m）\n 1 knuth(int n, int m)\n 2 { \n 3  srand((unsigned int)time(0)); \n 4  for (int i = 0; i < n; i++) { \n 5        if ( ) { \n 6           cout << i << endl;\n 7            ( );\n 8        }\n 9     }\n10 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 2, 
        "options": { 
          "A": "rand()%(n-i)<=m   m--",
          "B": "rand()%(n-i)<m   m--",
          "C": "rand()%(n-i)>=m   m++",
          "D": "rand()%(n-i)>m   m++"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "以下prim函数的功能是分解质因数。括号内的内容应该为？\n 1 void prim(int m, int n)\n 2 {\n 3    if (m >= n)\n 4      {\n 5        while (        ) n++;\n 6        (     );\n 7        prim(m, n);\n 8        cout << n << endl;\n 9      }\n10 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 3, 
        "options": { 
          "A": "m\n   m/=n",
          "B": "m\n   m%=n",
          "C": "m%n m%=n",
          "D": "m%n m/=n"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "n从2开始\n第一处为m%n，代表取余。当余数是0的时候表示除尽，跳出while循环，即找出一个质因数。此时一个质因数即为n\n然后 m/=n 即让m除去这个质因数，然后再进入求新m质因数的递归。",
        "note": "", 
        "comments": []
      },
      {
        "title": "1 enum string{    \n2     x1,    \n3     x2,    \n4     x3=10,    \n5     x4,    \n6     x5,    \n7 } x;\n函数外部访问x等于什么？", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 4, 
        "options": { 
          "A": "5",
          "B": "12",
          "C": "0",
          "D": "随机值"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "1 unsigned char *p1;\n2 unsigned long *p2;\n3 p1=(unsigned char *)0x801000;\n4 p2=(unsigned long *)0x810000;\n请问p1+5= 什么？\np2+5= 什么？", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 5, 
        "options": { 
          "A": "801005   810005",
          "B": "801010   810014",
          "C": "801005   810014",
          "D": "801010  810015"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "1代表的是一个单位量 \np1+5=p1+5*1=p1+5*sizeof(unsigned char)=p1+5*1=0x801000+ox5=0x801005 \np2+5=p2+5*1=p2+5*sizeof(unsigned long)=p1+5*4=0x810000+20=0x810000+0x14=0x810014 ",
        "note": "", 
        "comments": []
      },
      {
        "title": "在32位机器中，如下代码：\n1 void example(char acWelcome[]){\n2     printf(“%d”,sizeof(acWelcome));\n3     return;\n4 }\n5 void main(){\n6     char acWelcome[]=“Welcome to Huawei Test”;\n7     example(acWelcome);\n8     return;\n9 }\n的输出是?", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 6, 
        "options": { 
          "A": "0",
          "B": "4",
          "C": "23",
          "D": "24"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于虚函数和函数重载的叙述不正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 7, 
        "options": { 
          "A": "虚函数不是类的成员函数",
          "B": "虚函数实现了C++的多态性",
          "C": "函数重载允许非成员函数，而虚函数则不行",
          "D": "函数重载的调用根据参数的个数、序列来确定，而虚函数依据对象确定"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "处理a.html文件时，以下哪行伪代码可能导致内存越界或者抛出异常（）\n 1          int totalBlank = 0;\n 2          int blankNum = 0;\n 3          int taglen = page.taglst.size();\n 4 A       for(int i = 1; i < taglen-1; ++i)\n 5         {\n 6                  //check blank\n 7 B             while(page.taglst[i] == '<br>' && i < taglen)\n 8                {\n 9 C                       ++totalBlank;\n10 D                       ++i;\n11                }\n12 E             if(totalBlank > 10)\n13 F                      blankNum += totalBlank;\n14 G             totalBlank = 0;\n15         }\n注意：以上代码中taglen是html文件中存在元素的个数，a.html中taglen的值是15，page.taglst[i]取的是a.html中的元素，例如page.taglst[1]的值是<html>\na.html的文件如下：\n<html>\n<title>test</title>\n<body>\n<div>aaaaaaa</div>\n</body>\n</html>\n<br>\n<br>\n<br>\n<br>\n<br>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 8, 
        "options": { 
          "A": "A",
          "B": "B",
          "C": "C",
          "D": "D",
          "E": "E",
          "F": "F",
          "G": "G"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "因为while(page.taglst[i] == '<br>' && i < taglen)这个判断，先执行page.taglst[i] == '<br>'这个判断，如果这个判断返回值为false，再执行i < taglen这个判断。当i=taglen的时候，执行page.taglst[i] == '<br>'这个判断就会越界",
        "note": "", 
        "comments": []
      },
      {
        "title": " 1 void Func(char str_arg[100])\n 2 {\n 3        printf(“%d\n”,sizeof(str_arg));\n 4 }\n 5 int main(void)\n 6 {\n 7      char str[]=“Hello”;\n 8      printf(“%d\n”,sizeof(str));\n 9     printf(“%d\n”,strlen(str));\n10     char*p=str;\n11     printf(“%d\n”,sizeof(p));\n12     Func(str);\n13 }\n32位系统下下面程序的输出结果为多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 9, 
        "options": { 
          "A": "5 5 4 4",
          "B": "6 5 4 4",
          "C": "6 5 6 4",
          "D": "5 5 5 100"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面程序运行后的结果为：\n1 char str[] = “glad to test something”;\n2 char *p = str;\n3 p++;\n4 int *p1 = reinterpret_cast<int *>(p);\n5 p1++;\n6 p = reinterpret_cast<char *>(p1); \n7 printf(“result is %s\n”, p);", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 10, 
        "options": { 
          "A": "result is glad to test something",
          "B": "result is ad to test something",
          "C": "result is test something",
          "D": "result is to test something"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "设已经有A,B,C,D4个类的定义，程序中A,B,C,D析构函数调用顺序为？\n1 C c;\n2 void main()\n3 {\n4     A*pa=new A();\n5     B b;\n6     static D d;\n7     delete pa;\n8 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 11, 
        "options": { 
          "A": "A B C D",
          "B": "A B D C",
          "C": "A C D B",
          "D": "A C B D"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "若char是一字节，int是4字节，指针类型是4字节，代码如下：\n 1 class CTest\n 2 {\n 3     public:\n 4         CTest():m_chData(‘\0’),m_nData(0)\n 5         {\n 6         }\n 7         virtual void mem_fun(){}\n 8     private:\n 9         char m_chData;\n10         int m_nData;\n11         static char s_chData;\n12 };\n13 char CTest::s_chData=’\0’;\n问：\n（1）若按4字节对齐sizeof(CTest)的值是多少？\n（2）若按1字节对齐sizeof(CTest)的值是多少？\n请选择正确的答案。", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 12, 
        "options": { 
          "A": "16 4",
          "B": "16 10",
          "C": "12 9",
          "D": "10 10"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "在Java中，以下关于方法重载和方法重写描述正确的是？", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 13, 
        "options": { 
          "A": "方法重载和方法的重写实现的功能相同",
          "B": "方法重载出现在父子关系中，方法重写是在同一类中",
          "C": "方法重载的返回值类型必须一致，参数项必须不同",
          "D": "方法重写的返回值类型必须相同或相容。（或是其子类）"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "方法重载的返回值的类型可以不同，方法重写的返回值类型需要相同。",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面程序的功能是输出数组的全排列。请填空。\n1 void perm(int list[], int k, int m)\n 2 {\n 3     if (    )\n 4     {\n 5         copy(list,list+m,ostream_iterator<int>(cout,“ ”));\n 6         cout<<endl;\n 7         return;\n 8     }\n 9     for (int i=k; i<=m; i++)\n10     {\n11         swap(&list[k],&list[i]);\n12         (    );\n13         swap(&list[k],&list[i]);\n14     }\n15 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 14, 
        "options": { 
          "A": "k!=m 和 perm（list，k+1，m）",
          "B": "k==m 和 perm（list，k+1，m）",
          "C": "k!=m 和 perm（list，k，m）",
          "D": "k==m 和 perm（list，k，m）"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "如下代码输出结果是什么？\n 1 #include<stdio.h>\n 2 char *myString()\n 3 {\n 4     char buffer[6] = {0};\n 5     char *s = “Hello World!”;\n 6     for (int i = 0; i < sizeof(buffer) - 1; i++)\n 7     {\n 8         buffer[i] = *(s + i);\n 9     }\n10     return buffer;\n11 }\n12 int main(int argc, char **argv)\n13 {\n14     printf(“%s\n”, myString());\n15     return 0;\n16 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 15, 
        "options": { 
          "A": "Hello",
          "B": "Hello World!",
          "C": "Well",
          "D": "以上全部不正确"
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
    "parentId": 13,
    "industry": "C/C++", 
    "class": "笔试题", 
    "title": "迅雷2014C++研发笔试卷", 
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
      "unsteady": 4
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "下列运算符中，在C++语言中不能重载的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "*",
          "B": ">=",
          "C": "::",
          "D": "delete"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于多态性的描述，错误的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "C++语言的多态性分为编译时的多态性和运行时的多态性",
          "B": "编译时的多态性可通过函数重载实现",
          "C": "运行时的多态性可通过模板和虚函数实现",
          "D": "实现运行时多态性的机制称为动态绑定"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "A，分编译时多态和运行时多态\nB，编译时多态可以通过函数重载实现，具体表现在根据参数的个数和类型不同选择合适的同名函数\nC，运行时多态通过虚函数实现，就是运行时根据对象类型自动选择正确的调用接口。模板属于编译时多态性，因为编译时自动根据模板生成模板函数。\nD，运行时多态是根据对象类型自动选择正确的调用函数，也叫动态绑定。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于类和对象的描述中，错误的是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "类就是C语言中的结构体类型，对象就是C语言中的结构体变量",
          "B": "类和对象之间的关系是抽象和具体的关系",
          "C": "对象是类的实例，一个对象必须属于一个已知的类",
          "D": "类是具有共同行为的若干对象的统一描述体"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "C的结构体内不允许有函数存在，C++允许有内部成员函数，且允许该函数是虚函数。所以C的结构体是没有构造函数、析构函数、和this指针的。\nC的结构体对内部成员变量的访问权限只能是public，而C++允许public,protected,private三种。\nC语言的结构体是不可以继承的，C++的结构体是可以从其他的结构体或者类继承过来的。\n以上都是表面的区别，实际区别就是面向过程和面向对象编程思路的区别：\nC的结构体只是把数据变量给包裹起来了，并不涉及算法。\n而C++是把数据变量及对这些数据变量的相关算法给封装起来， 并且给对这些数据和类不同的访问权限。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "引用标准库时，下面的说法你认为哪个是正确的：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "语句#include “stdlib.h”是正确的，而且程序编译速度比#include <stdlib.h>要快",
          "B": "语句#include <stdlib.h>是正确的，而且程序编译速度比#include “stdlib.h”要快",
          "C": "语句#include <stdlib.h>和#include “stdlib.h”都是正确的，程序编译速度没有区别",
          "D": "语句#include “stdlib.h”是错误的"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "设a、b、c、d、m、n均为int型变量，且a=5、b=6、c=7、d=8、m=2、n=2,则逻辑表达式（m=a>b）&&(n=c>d)运算后，n的值为：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "0",
          "B": "1",
          "C": "2",
          "D": "7"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "m=a>b后m=0，表达式为假，&&后半部分不会操作，因此n为初始值2", 
        "note": "", 
        "comments": []
      },
      {
        "title": "不能作为重载函数的调用的依据是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "参数个数",
          "B": "参数类型",
          "C": "函数类型",
          "D": "函数名称"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列程序的输出结果为:\n 1 #include<iostream.h>\n 2 int func(int n)\n 3 {\n 4 　　 if(n<1)\n 5        return 1;\n 6     else\n 7        return n+func(n-1);\n 8     return 0;\n 9 }\n10 void main() {\n11     cout<< func(5) <<endl;\n12 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 7, 
        "options": {
          "A": "0",
          "B": "10",
          "C": "15",
          "D": "16"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "建立派生类对象时,3种构造函数分别是a(基类的构造函数)、b(成员对象的构造函数)、c(派生类的构造函数)这3种构造函数的调用顺序为: ", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "abc",
          "B": "acb",
          "C": "cab",
          "D": "cba"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "在继承中派生类的对象调用构造函数的顺序，应该是先调用基类的构造函数，然后是成员中的对象对应类的构造函数，最后是派生类自己的构造函数。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "如果友元函数重载一个运算符时，其参数表中没有任何参数则说明该运算符是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "一元运算符",
          "B": "二元运算符",
          "C": "选项A和选项B都可能",
          "D": "重载错误"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "1 #define F(X,Y)   (X)--, (Y)++, (X)*(Y);\n2 …\n3 int i, a = 3, b = 4;\n4 for( i = 0; i<5; i++)\n5     F(a,b) ;\n6 printf(“%d, %d”, a, b);\n输出结果是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "3, 4",
          "B": "3, 5",
          "C": "-2, 5",
          "D": "-2, 9"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "已知一段文本有1382个字符，使用了1382个字节进行存储，这段文本全部是由a、b、c、d、e这5个字符组成，a出现了354次，b出现了483次，c出现了227次，d出现了96次，e出现了232次，对这5个字符使用哈夫曼（Huffman）算法进行编码，则以下哪些说法正确（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 11,
        "options": {
          "A": "使用哈夫曼算法编码后，用编码值来存储这段文本将花费最少的存储空间",
          "B": "使用哈夫曼算法进行编码，a、b、c、d、e这5个字符对应的编码值是唯一确定的",
          "C": "使用哈夫曼算法进行编码，a、b、c、d、e这5个字符对应的编码值可以有多套，但每个字符编码的位（bit）数是确定的",
          "D": "b这个字符的哈夫曼编码值位数应该最短，d这个字符的哈夫曼编码值位数应该最长"
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
        "title": "下面描述不正确的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 12,
        "options": {
          "A": "while循环语句的循环体至少执行1次",
          "B": "do-while循环可以写成while循环的格式",
          "C": "continue语句可以出现在各种循环体中",
          "D": "break语句不可以出现在循环体内"
        },
        "correct_answer": [
          "A",
          "D"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下面模板声明中，哪些是非法的（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 13,
        "options": {
          "A": "template<class Type>class C1{};",
          "B": "template<class T, U, class V>class C2{};",
          "C": "template<class C1, typename C2>class C3{};",
          "D": "template<typename myT,  class myT>class C4{};"
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
        "title": "拷贝构造函数的特点是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
        "options": {
          "A": "该函数名同类名，也是一种构造函数，该函数返回自身引用",
          "B": "该函数只有一个参数，是对某个对象的引用",
          "C": "每个类都必须有一个拷贝初始化构造函数，如果类中没有说明拷贝构造函数，则编译器系统会自动生成一个缺省拷贝构造函数，作为该类的保护成员",
          "D": "拷贝初始化构造函数的作用是将一个已知对象的数据成员值拷贝给正在创建的另一个同类的对象"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列对函数double add(int a , int b)进行重载，正确的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 15,
        "options": {
          "A": "int add(int a ,int b ,int c)",
          "B": "int add(double a , double b)",
          "C": "double add(double a , double b)",
          "D": "int add(int a , int b)"
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
      }
    ]
  },
  {
    "parentId": 14,
    "industry": "Java", 
    "class": "笔试题", 
    "title": "搜狗2015 JAVA工程师笔试题", 
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
      "radio": 8,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 2
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下程序运行的结果为（）\n 1 public class Example extends Thread{\n 2      @Override\n 3      public void run(){\n 4         try{\n 5              Thread.sleep(1000);\n 6              }catch (InterruptedException e){\n 7              e.printStackTrace();\n 8              }\n 9              System.out.print(“run”);\n10      }\n11      public static void main(String[] args){\n12              Example example=new Example();\n13              example.run();\n14              System.out.print(“main”);\n15      }\n16 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "run main",
          "B": "main run",
          "C": "main",
          "D": "run",
          "E": "不能确定"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "Java中用正则表达式截取字符串中第一个出现的英文左括号之前的字符串。比如：北京市（海淀区）（朝阳区）（西城区），截取结果为：北京市。正则表达式为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "“.*?(?=\\()”",
          "B": "“.*?(?=\()”",
          "C": "“.*(?=\\()”",
          "D": "“.*(?=\()”"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于Java并发的说法中正确的是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "CopyOnWriteArrayList适用于写多读少的并发场景",
          "B": "ReadWriteLock适用于读多写少的并发场景",
          "C": "ConcurrentHashMap的写操作不需要加锁，读操作需要加锁",
          "D": "只要在定义int类型的成员变量i的时候加上volatile关键字，那么多线程并发执行i++这样的操作的时候就是线程安全的了"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "A，CopyOnWriteArrayList适用于写少读多的并发场景\nB，ReadWriteLock即为读写锁，他要求写与写之间互斥，读与写之间互斥，读与读之间可以并发执行。在读多写少的情况下可以提高效率\nC，ConcurrentHashMap是同步的HashMap，读写都加锁\nD，volatile只保证多线程操作的可见性，不保证原子性", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下JAVA程序的输出是什么（）\n 1 public class HelloSogou{\n 2      public static synchronized void main(String[] a){\n 3          Thread t=new Thread(){\n 4              public void run(){Sogou();}\n 5      };\n 6      t.run();\n 7      System.out.print(“Hello”);\n 8      }\n 9      static synchronized void Sogou(){\n10      System.out.print(“Sogou”);\n11     }\n12 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "HelloSogou",
          "B": "SogouHello",
          "C": "Hello",
          "D": "结果不确定"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪段程序能够正确的实现了GBK编码字节流到UTF-8编码字节流的转换：\n1 byte[] src,dst;", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "dst=String.fromBytes(src，“GBK”).getBytes(“UTF-8”)",
          "B": "dst=new String(src，“GBK”).getBytes(“UTF-8”)",
          "C": "dst=new String(“GBK”，src).getBytes()",
          "D": "dst=String.encode(String.decode(src，“GBK”))，“UTF-8” )"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "先通过GBK编码还原字符串，在该字符串正确的基础上得到“UTF-8”所对应的字节串。", 
        "note": "", 
        "comments": []
      },
      {
        "title": "如下代码，执行test()函数后，屏幕打印结果为（）\n 1 public class Test2\n 2 {\n 3     public void add(Byte b)\n 4     {\n 5         b = b++;\n 6     }\n 7     public void test()\n 8     {\n 9         Byte a = 127;\n10         Byte b = 127;\n11         add(++a);\n12         System.out.print(a + “ ”);\n13         add(b);\n14         System.out.print(b + “”);\n15     }\n16 }", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "127 127",
          "B": "128 127",
          "C": "129 128",
          "D": "以上都不对"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "1 static String str0=“0123456789”;\n2 static String str1=“0123456789”;\n3 String str2=str1.substring(5);\n4 String str3=new String(str2);\n5 String str4=new String(str3.toCharArray());\n6 str0=null;\n假定str0,...,str4后序代码都是只读引用。\nJava 7中，以上述代码为基础，在发生过一次FullGC后，上述代码在Heap空间（不包括PermGen）保留的字符数为（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 7, 
        "options": {
          "A": "5",
          "B": "10",
          "C": "15",
          "D": "20"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对于JVM内存配置参数：\n-Xmx10240m -Xms10240m -Xmn5120m -XXSurvivorRatio=3\n其最小内存值和Survivor区总大小分别是（）", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 8, 
        "options": {
          "A": "5120m，1024m",
          "B": "5120m，2048m",
          "C": "10240m，1024m",
          "D": "10240m，2048m"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "-Xmx：最大堆大小\n-Xms：初始堆大小\n-Xmn:年轻代大小\n-XXSurvivorRatio：年轻代中Eden区与Survivor区的大小比值\n年轻代5120m， Eden：Survivor=3，Survivor区大小=1024m（Survivor区有两个，即将年轻代分为5份，每个Survivor区占一份），总大小为2048m。\n-Xms初始堆大小即最小内存值为10240m", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下哪些类是线程安全的（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 9,
        "options": {
          "A": "Vector",
          "B": "HashMap",
          "C": "ArrayList",
          "D": "bStringBuffer",
          "E": "Properties"
        },
        "correct_answer": [
          "A",
          "D",
          "E"
        ],
        "parsing": "A，Vector相当于一个线程安全的List\nB，HashMap是非线程安全的，其对应的线程安全类是HashTable\nC，Arraylist是非线程安全的，其对应的线程安全类是Vector\nD，StringBuffer是线程安全的，相当于一个线程安全的StringBuilder\nE，Properties实现了Map接口，是线程安全的",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "实现或继承了Collection接口的是（）",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 10,
        "options": {
          "A": "Map",
          "B": "List",
          "C": "Vector",
          "D": "Iterator",
          "E": "Set"
        },
        "correct_answer": [
          "B",
          "C",
          "E"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 15,
    "industry": "Python", 
    "class": "笔试题", 
    "title": "Python测试笔试题", 
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
      "blank": 1, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 2
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下哪个代码是正确的读取一个文件？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "f = open(“test.txt”, “read”)",
          "B": "f = open(“r”,“test.txt”)",
          "C": "f = open(“test.txt”, “r”)",
          "D": "f = open(“read”,“test.txt”)"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "以下程序输出为：\ndef test(a,b,*args):\nprint(a)\nprint(b)\nprint(args)\ntest(11,22,33,44,55,66,77,88,99)", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "11 22 (33, 44, 55, 66, 77, 88, 99)",
          "B": "编译错误",
          "C": "运行错误",
          "D": "11 22 (11,22，33, 44, 55, 66, 77, 88, 99)"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "对于以下代码，描述正确的是：\nlist = ['1', '2', '3', '4', '5']\nprint list[10:]", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "导致 IndexError",
          "B": "输出['1', '2', '3', '4', '5']",
          "C": "编译错误",
          "D": "输出[]"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "如下程序会打印多少个数:（）\n1 k = 1000\n2 while k > 1:\n3     print k\n4     k = k/2", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "1000",
          "B": "10",
          "C": "11",
          "D": "9"
        },
        "correct_answer": [ 
          "B"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪个是Python中的不变的数据结构？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "set",
          "B": "list",
          "C": "tuple",
          "D": "dict"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于python socket操作叙述正确的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "使用recvfrom()接收TCP数据",
          "B": "使用getsockname()获取连接套接字的远程地址",
          "C": "使用connect()初始化TCP服务器连接",
          "D": "服务端使用listen()开始TCP监听"
        },
        "correct_answer": [ 
          "C",
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "关于return说法正确的是",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "python函数中必须有return",
          "B": "return可以返回多个值",
          "C": "return没有返回值时，函数自动返回Null",
          "D": "执行到return时，程序将停止函数内return后面的语句"
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
        "title": "下面代码运行结果？\na = 1\ntry:\na += 1\nexcept:\na += 1\nelse:\na += 1\nfinally:\na += 1\nprint a",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "2",
          "B": "3",
          "C": "4",
          "D": "5"
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
        "title": "下列哪种说法是错误的", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "除字典类型外，所有标准对象均可以用于布尔测试",
          "B": "空字符串的布尔值是False",
          "C": "空列表对象的布尔值是False",
          "D": "值为0的任何数字对象的布尔值是False"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下列对协程的理解错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "一个线程可以运行多个协程",
          "B": "协程的调度由所在程序自身控制",
          "C": "Linux中线程的调度由操作系统控制",
          "D": "Linux中协程的调度由操作系统控制"
        },
        "correct_answer": [ 
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "执行下列语句后的显示结果是什么\n1 b = 2*a/ 4\n2 a = “one”\n3 print(a,b)", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
        "options": {
          "A": "10",
          "B": "one0.5",
          "C": "error",
          "D": "one 0"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "断言语句的语法为[填空1]",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 12,
        "correct_answer": [ 
          "assert"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      }
    ]
  },
  {
    "parentId": 16, 
    "industry": "PHP", 
    "class": "笔试题", 
    "title": "PHP工程师综合测试笔试题", 
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
      "radio": 17, 
      "checkbox": 0,
      "blank": 0, 
      "sort": 0,
      "judge": 0, 
      "unsteady": 0
    },
    "status": {
      "done": false,
      "doing": false, 
      "collection": false,
      "mistaked": false
    },
    "bank": [ 
      {
        "title": "请看代码，数据库关闭指令将关闭哪个连接标识？(    )\n1 <?php\n2     $link1 =mysql_connect(“localhost”,“root”,“”);\n3     $link2 = mysql_connect(“localhost”,“root”,“”);\n4     mysql_close();\n5 ?>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 1, 
        "options": { 
          "A": "$link1",
          "B": "$link2",
          "C": "全部关闭",
          "D": "报错"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "关于mysql_pconnect说法正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 2, 
        "options": { 
          "A": "与数据库进行多连接",
          "B": "与mysql_connect功能相同",
          "C": "与＠mysql_connect功能相同",
          "D": "与数据库建立持久连接"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "获得实例化对象所属类名字的函数（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 3, 
        "options": { 
          "A": "get_class()",
          "B": "get_object_vars()",
          "C": "get_class_methods()",
          "D": "get_classname()"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "若$y,$ x为int型变量，则执行以下语句后，$y的值为：\n1 $x=1;\n2 ++$x;\n3 $y = $x++;", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 4, 
        "options": { 
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "0"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪个表达式不能将两个字符串$s1和$s2串联成一个单独的字符串：", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 5, 
        "options": { 
          "A": "$s1+$s2",
          "B": "“{$s1}{$s2}”",
          "C": "$s1.$s2",
          "D": "implode(‘’,array($s1,$s2))"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "getdate()函数返回的值的数据类型是：（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 6, 
        "options": { 
          "A": "整形",
          "B": "浮点型",
          "C": "数组",
          "D": "字符串"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面哪个选项不属于正确的PHP代码的开始和结束标记：（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 7, 
        "options": { 
          "A": "<%  %>",
          "B": "<?   ?>",
          "C": "<!    !>",
          "D": "<?php ?>"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "以下代码执行结果为：\n 1 <?php\n 2        $A=“Hello”; \n 3        functionprint_A() {\n 4               $A= “php mysql !!”;\n 5               global$A; \n 6               echo$A;\n 7        }\n 8        echo$A;\n 9        print_A();\n10 ?>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 8, 
        "options": { 
          "A": "Hello",
          "B": "php mysql !!",
          "C": "Hello Hello",
          "D": "Hello php mysql !!"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "PHP中的错误控制操作符是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 9, 
        "options": { 
          "A": "%",
          "B": "$",
          "C": "#",
          "D": "@"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "定义常量的函数是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 10, 
        "options": { 
          "A": "define( )",
          "B": "constant( )",
          "C": "print( )",
          "D": "echo( )"
        },
        "correct_answer": [
          "A"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "以下程序运行结果：\n1 <?\n2        function total_Sum($c=5, $b=3,$a){\n3             echo$a.“+ ”.$b.“ + ”.$c.“ = ”.($a+$b+$c) ;\n4        }\n5        total_Sum(1);\n6 ?>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 11, 
        "options": { 
          "A": "5+3+1=9",
          "B": "1+5+3 =9",
          "C": "提示错误，并有显示：+3+1 = 4",
          "D": "9"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面的脚本运行以后，$array数组所包含的值是什么\n1 <?php\n2        $array= array('1','1');\n3        foreach($array as $k=>$v){\n4               $v= 2;\n5        }\n6 ?>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 12, 
        "options": { 
          "A": "array (‘2’ , ‘2’)",
          "B": "array (‘1’ , ‘1’)",
          "C": "array (2 , 2)",
          "D": "array (Null , Null)"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "下面的代码的输出是什么\n1 <?php\n2        $s = '12345';\n3        $s[$s[1]]= '2';\n4        echo$s;\n5 ?>", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 13, 
        "options": { 
          "A": "12345",
          "B": "12245",
          "C": "22345",
          "D": "11345"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "假如有个类Person，实例化（new）一个对象$p，那么如何使用对象$p调用Person类中的getInfo方法", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 14, 
        "options": { 
          "A": "$p=>getInfo();",
          "B": "$this->getInfo();",
          "C": "$p->getInfo();",
          "D": "$p::getInfo();"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "在PHP面向对象中有一个通用方法__toString()方法，下面关于此方法描述或定义错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 15, 
        "options": { 
          "A": "此方法是在直接输出对象引用时自动调用的方法。",
          "B": "如果对象中没有定义此方法时，直接使用echo输出此对象，会报如下错误：Catchable fatal error: Object of class A could not be converted to string.",
          "C": "此方法中一定要有一个字符串作为返回值。",
          "D": "此方法用于输出信息的，如下所示：public function __toString( ){ echo “This is Class ....”;}"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "当PDO对象创建成功以后，与数据库的连接已经建立，就可以使用PDO对象了，下面哪个不是PDO对象中的成员方法?", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 16, 
        "options": { 
          "A": "errorInfo()",
          "B": "bindParam()",
          "C": "exec()",
          "D": "prepare()"
        },
        "correct_answer": [
          "B"
        ],
        "parsing": "",
        "note": "", 
        "comments": []
      },
      {
        "title": "以下说法错误的是（ ）", 
        "type": "单选", 
        "mistaked": false,
        "check": false, 
        "id": 17, 
        "options": { 
          "A": "在外部访问静态成员属性时使用类名：：静态成员属性名",
          "B": "在外部访问静态成员属性时使用$实例化对象->静态成员属性名",
          "C": "在外部访问静态方法时使用$实例化对象 ->静态方法名",
          "D": "在外部访问静态方法时使用类名：：静态方法名"
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
    "parentId": 17,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试题(一）", 
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
      "unsteady": 3
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": " 1 public class CharToString{\n 2 public static void main(String[] args)\n 3 {\n 4  char myChar = 'g';\n 5  String myStr = Character.toString(myChar);\n 6  System.out.println(“String is: ”+myStr);\n 7  myStr = String.valueOf(myChar);\n 8  System.out.println(“String is: ”+myStr);\n 9 }\n10 }\n此代码片段输出正确的值是（）", 
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
        "title": "import numpy as np\na = np.repeat(np.arange(5).reshape([1,-1]),10,axis = 0)+10.0 b = np.random.randint(5, size= a.shape)\nc = np.argmin(a*b, axis=1)\nb = np.zeros(a.shape)\nb[np.arange(b.shape[0]), c] = 1\nprint b\n以上函数输出结果为()", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
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
        "title": "已知a = [1, 2, 3]和b = [1, 2, 4]，那么id(a[1])==id(b[1])的执行结果", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "false",
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
        "title": "以下不能在list中添加新元素的方法是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
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
        "title": "下列关于分类器的说法中不正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
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
        "comments": []
      },
      {
        "title": "下列关于线性回归说法错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
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
        "title": "关于机器学习算法正确的是",
        "type": "不定项选",
        "mistaked": false,
        "check": false,
        "id": 7,
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
        "title": "以下说法正确的是",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
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
        "title": "下列关于PCA的说法错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
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
        "title": "EM算法是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
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
        "title": "下列哪项叙述是正确的", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 11, 
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
        "title": "以下方法属于集成方法的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
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
        "comments": []
      },
      {
        "title": "以下排序算法平均时间复杂度和插入排序相同的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
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
        "comments": []
      },
      {
        "title": "丰巢柜中有A、B、C、D、E、F六个人的快递，每个人各有两个快递。现在随机取出5个快递，那么5个快递中至少有2个快递属于同一个人的概率是多少？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
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
        "comments": []
      },
      {
        "title": "假设有三个人同时参加这场笔试，假设满分为1，三个人的得分符合分布U（0，1）。那么三个人最低分的期望为？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 15, 
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
        "comments": []
      }
    ]
  },
  {
    "parentId": 18,
    "industry": "算法工程师", 
    "class": "笔试题", 
    "title": "顺丰科技2019秋招人工智能与机器学习工程师笔试题(二）", 
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
      "radio": 8,
      "checkbox": 0, 
      "blank": 0, 
      "sort": 0, 
      "judge": 0, 
      "unsteady": 6
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "以下函数的时间复杂度是\nvoid foo(int n, int x, int y)\n{\n      int z = 0;\n    if (n <= 0)\n    {\n       z = x + y;\n    }\n    else\n    {\n        foo(n - 1, x + 1, y);\n        foo(n - 1, x, y + 1);\n    }\n}", 
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
        "title": "public class CharToString \n{\npublic static void main(String[] args)\n{\n char myChar = 'g';\n String myStr = Character.toString(myChar);\n System.out.println(“String is: ”+myStr);\n myStr = String.valueOf(myChar);\n System.out.println(“String is: ”+myStr);\n}\n}\n此代码片段输出正确的值是（）", 
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
        "title": "某打车公司将驾驶里程（drivedistanced）超过5000里的司机信息转移到一张称为seniordrivers 的表中,他们的详细情况被记录在表drivers 中，正确的sql为", 
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
        "title": "快件信息表（waybillinfo）中存储了快件的所有操作信息，请找出在中山公园网点，异常派送（optype='异常派件'）次数超过3次的快件(waybillno),正确的sql为", 
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
        "title": "哪些是OSI层（）",
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
        "title": "一个队列只能从右侧入队，左右侧皆可出队。顺序为Ka、Kb、Kc、Kd、Ke的序列入队后，不能得到的输出是", 
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
        "comments": []
      },
      {
        "title": "“abcdefg”中长度2的子串的个数是", 
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
        "title": "关于链表，正确的是", 
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
        "title": "以下叙述中，正确的是", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 12, 
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
        "comments": []
      },
      {
        "title": "用递归算法实现转换，如“uvxyz”转换后为“zyxvu”，请选择合适的语句\nvoid rev_str（char *s，int len）\n{\n    char ch;\n    if ( len > 1)\n        {\n             ch = *s;\n             *s = *(s+len-1);\n             *(s+len-1) = ch;\n             rev_str(?,?);\n        }\n}", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 13, 
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
        "comments": []
      },
      {
        "title": "在有序表( 7, 13, 33, 87, 99, 97, 117, 123,129,131,137)中，使用二分查找算法查找13时需要的关键字比较次数是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 14, 
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
        "comments": []
      }
    ]
  },
  {
    "parentId": 19,
    "industry": "HTML5", 
    "class": "笔试题", 
    "title": "HTML5测试笔试题（一）", 
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
      "unsteady": 3
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "下面哪些是 HTML5 中的标签", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
        "options": {
          "A": "header",
          "B": "center",
          "C": "footer",
          "D": "frame"
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
        "title": "下面哪个类型不是 HTML5 新增的表单类型", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
        "options": {
          "A": "color",
          "B": "date",
          "C": "password",
          "D": "email"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面的html5代码，哪一个可以实现自动填充表单功能", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
        "options": {
          "A": "<input type=“text” name=“movie”/>\n<datalist name=“movie” value=“”>\n    <option>人在囧途</option>\n    <option>美人鱼</option>\n    <option>让子弹飞</option>\n</datalist>",
          "B": "<input type=“text” name=“movie” value=“”/>\n<select name=“movie”>\n    <option>人在囧途</option>\n    <option>美人鱼</option>\n    <option>让子弹飞</option>\n</select>",
          "C": "<input type=“text” list=“movie” value=“”/>\n<datalist id=“movie”>\n    <option>人在囧途</option>\n    <option>美人鱼</option>\n    <option>让子弹飞</option>\n</datalist>",
          "D": "<input type=“text” list=“movie” value=“”/>\n<datalist name=“movie”>\n    <option>人在囧途</option>\n    <option>美人鱼</option>\n    <option>让子弹飞</option>\n</datalist>"
        },
        "correct_answer": [ 
          "C"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "下面关于HTML5中的应用缓存说法错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 4, 
        "options": {
          "A": "应用缓存可以帮助你进行离线浏览",
          "B": "应用缓存可以帮助你指定哪些文件需要缓存，哪些不需要",
          "C": "我们需要指定“manifest”文件，“manifest”文件帮助你定义你的缓存如何工作",
          "D": "网络命令描述需要缓存的文件，例如以下代码中，我们说”home.aspx”需要被缓存或者离线访问。NETWORK:home.aspx"
        },
        "correct_answer": [
          "D"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "HTML5提供的API有", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
        "options": {
          "A": "Pge Visibility API",
          "B": "Fullscreen API",
          "C": "getUserMedia API ",
          "D": "Battery API"
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
        "title": "HTML5 API如何支持链接预加载", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
        "options": {
          "A": "rel=“preload”",
          "B": "rel=“prefetch”",
          "C": "rel=“dns-prefetch”",
          "D": "rel=“dns-preload”"
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
        "title": "HTML5 事件可以触发多少次？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
        "options": {
          "A": "多次",
          "B": "一次",
          "C": "仅两次",
          "D": "UI层",
          "E": "零次"
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
        "title": "HTML5 没有删除哪个元素？",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
        "options": {
          "A": "<strike>",
          "B": "<center>",
          "C": "<small>",
          "D": "<big>"
        },
        "correct_answer": [
          "C"
        ],
        "parsing": "虽然 HTML5 加了新元素，但它也淘汰了一些旧元素，如 <big>、<center>、<font>、<tt>、<strike> 等。\n<small> 标签呈现小号字体效果没有被删除",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "是否可以将 HTML 5 用于移动应用程序？", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
        "options": {
          "A": "可以",
          "B": "不可以"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      },
      {
        "title": "在 HTML5 中，contextmenu 和 spellcheck 是：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
        "options": {
          "A": "HTML 属性",
          "B": "HTML 元素",
          "C": "事件属性",
          "D": "样式属性"
        },
        "correct_answer": [ 
          "A"
        ],
        "parsing": "", 
        "note": "", 
        "comments": []
      }
    ]
  },
  {
    "parentId": 20,
    "industry": "JavaScript", 
    "class": "笔试题", 
    "title": "JavaScript测试笔试题（一）", 
    "limit_time": "30", 
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
      "unsteady": 3
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "JavaScript定时器不包含哪个函数：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "以下单词属于javascript关键字：", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "给网页添加javascript的方式有", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，javascript语言实现继承机制的核心就是[填空1]，而不是Java语言那样的类式继承。Javascript 解析引擎在读取一个Object的属性的值时，会沿着[填空2]向上寻找，如果最终没有找到，则该属性值为[填空3]；如果最终找到该属性的值，则返回结果。与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 4,
        "correct_answer": [ // 填空这里不需要options，只需要有correct_answer就行了，每个空占一个位置
          "prototype",
          "原型链",
          " undefined"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下Javascript中数组数据类型的方法中，不会改变原始数据的方法是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于JavaScript节点操作的函数说明中,错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
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
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在JavaScript中,下列选项中哪项可以得到0至9之间的随机整数",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
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
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "JavaScript中,以下选项哪组代码可以得到字母'a'的ASCII码'97'",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
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
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列选项中,不属于JavaScript弹框的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
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
        "comments": []
      },
      {
        "title": "在JavaScript中,阻止冒泡的方法正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
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
        "comments": []
      }
    ]
  },
  {
    "parentId": 21,
    "industry": "移动web前端", 
    "class": "笔试题", 
    "title": "乐信2020校园招聘前端笔试题", 
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
      "unsteady": 3
    },
    "status": {
      "done": false,
      "doing": false,
      "collection": false, 
      "mistaked": false 
    },
    "bank": [ 
      {
        "title": "JavaScript定时器不包含哪个函数：", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 1, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "以下单词属于javascript关键字：", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 2, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "给网页添加javascript的方式有", 
        "type": "不定项选", 
        "mistaked": false,
        "check": false,
        "id": 3, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "javascript 语言特性中，有很多方面和我们接触的其他编程语言不太一样，比如说，javascript语言实现继承机制的核心就是[填空1]，而不是Java语言那样的类式继承。Javascript 解析引擎在读取一个Object的属性的值时，会沿着[填空2]向上寻找，如果最终没有找到，则该属性值为[填空3]；如果最终找到该属性的值，则返回结果。与这个过程不同的是，当javascript解析引擎执行“给一个Object的某个属性赋值”的时候，如果当前Object存在该属性，则改写该属性的值，如果当前的Object本身并不存在该属性，则赋值该属性的值 。",
        "type": "填空",
        "mistaked": false,
        "check": false,
        "id": 4,
        "correct_answer": [ // 填空这里不需要options，只需要有correct_answer就行了，每个空占一个位置
          "prototype",
          "原型链",
          " undefined"
        ],
        "parsing": "",
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "以下Javascript中数组数据类型的方法中，不会改变原始数据的方法是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 5, 
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
        "note": "", 
        "comments": []
      },
      {
        "title": "下列关于JavaScript节点操作的函数说明中,错误的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 6, 
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
        "note": "", 
        "comments": [
        ]
      },
      {
        "title": "在JavaScript中,下列选项中哪项可以得到0至9之间的随机整数",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 7,
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
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "JavaScript中,以下选项哪组代码可以得到字母'a'的ASCII码'97'",
        "type": "单选",
        "mistaked": false,
        "check": false,
        "id": 8,
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
        "note": "",
        "comments": [
        ]
      },
      {
        "title": "下列选项中,不属于JavaScript弹框的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 9, 
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
        "comments": []
      },
      {
        "title": "在JavaScript中,阻止冒泡的方法正确的是", 
        "type": "单选", 
        "mistaked": false,
        "check": false,
        "id": 10, 
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
        "comments": []
      }
    ]
  },
]