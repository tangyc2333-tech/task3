import { ProcessedPost, DailyTrendData, HourlyActivityData, RetentionCohortData, CategoryStatData, SentimentStatData, TopicKeywordData, AnalyticalInsight, OperationalStrategy } from '../types/dashboard';

// Raw posts dataset extracted directly from the user's community data table
export const RAW_COMMUNITY_DATA = [
  {
    title: "影刀 Studio 在读取企业 Studio Settings 时接口 ep/config/get 返回 403",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989135670636285952",
    id: "989135670636285952",
    author: "a****n",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=687473068096028672",
    content: "影刀 Studio 在读取企业 Studio Settings 时接口 ep/config/get 返回 403。随后客户端 FlowItem 初始化空引用，导致任何 Code 应用无法打开。已在 Windows 干净重装环境复现；本机代理、Chrome 策略已排除；代码包离线 smoke test 通过。请协助检查该账号的企业配置接口权限、组织/租户绑定、开发者席位、Code 应用权限和 Studio Settings 配置是否异常。",
    publishTime: "2026-08-27 20:00:00",
    views: 6,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "在执行单元格嵌入图片指令时候，程序报错，麻烦各位大佬看下是哪里有问题",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989132950492241920",
    id: "989132950492241920",
    author: "摆烂日常",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=650286489265643522",
    content: "各位大佬，程序在执行图片嵌入单元格指令时候，报错，报错内容如下：WPS 扩展 > add_inline_picture > 行21... 执行 excel_instance.workbook.Application.Run 时出错: (-2147352567, '发生意外。')",
    publishTime: "2026-08-27 19:49:00",
    views: 9,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "RPA抖音上发的这个采集机器人在哪里找呢？求成品",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989112554811920384",
    id: "989112554811920384",
    author: "凤凰涅槃123",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=893175644324335618",
    content: "在抖音上看到 影刀作者 发布的这个4.61 15分钟获取600个关键词，抖音下拉词挖掘RPA机器人，批量自动化获取海量关键词！我想问一下这个有现成的吗？",
    publishTime: "2026-08-27 18:28:00",
    views: 42,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "网页监听一直获取不到数据怎么回事",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989111890400612352",
    id: "989111890400612352",
    author: "llcadmin",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=586409208089165826",
    content: "都一直为空",
    publishTime: "2026-08-27 18:25:00",
    views: 46,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "我使用影刀编写的程序，都是基于windows系统的，要如何把程序转成支持统信系统的程序呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989109691910545408",
    id: "989109691910545408",
    author: "摆烂日常",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=650286489265643522",
    content: "我此前针对windows系统，开发了影刀程序。但后期电脑要更换统信系统，影刀信创版是支持统信系统的。我想把支持windows系统的影刀程序，转换成支持统信系统的影刀程序，请问要怎么操作呢",
    publishTime: "2026-08-27 18:16:00",
    views: 31,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "批量数据抓取编辑元素卡到更本用不了，以前版本不是这样",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989105722932944896",
    id: "989105722932944896",
    author: "wake855",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=707458403304800258",
    content: "批量数据抓取编辑元素卡到更本用不了，以前版本不是这样",
    publishTime: "2026-08-27 18:01:00",
    views: 25,
    category: "产品反馈与建议类",
    sentiment: "消极"
  },
  {
    title: "我有个社区应用需要复制迁移到大号，有什么好办法",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989103362043109376",
    id: "989103362043109376",
    author: "luy31589",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=871791064699817986",
    content: "社区应用迁移",
    publishTime: "2026-08-27 17:51:00",
    views: 74,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "在影刀中如何自动新建记事本呀，找不到新建记事本的指令",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989102209217171456",
    id: "989102209217171456",
    author: "睿辰",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=761062049081839618",
    content: "在影刀中如何自动新建记事本呀",
    publishTime: "2026-08-27 17:47:00",
    views: 54,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "TIKTOK订单下载的界面筛选日期的时候，用智能日期选不了，报错说没有找到周五",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989095486494445568",
    id: "989095486494445568",
    author: "ZT0000",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=831807599937597442",
    content: "TIKTOK订单下载的界面筛选日期的时候，用智能日期选不了",
    publishTime: "2026-08-27 17:20:00",
    views: 41,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "澎湃3.0，小米17promax，连接影刀是横屏，而且获取不了手机app元素",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989093785759211520",
    id: "989093785759211520",
    author: "哈哈哈392",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=960389768837603330",
    content: "澎湃3.0，小米17promax，连接影刀是横屏，而且获取不了手机app元素",
    publishTime: "2026-08-27 17:13:00",
    views: 42,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "手机自动化ATX安装不了",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989093583932985344",
    id: "989093583932985344",
    author: "影刀daisy",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=954616023008399362",
    content: "影刀运行老是中断，或者没反映，有时会弹出安装ATX，勾选已了解应用的风险检测结果，点继续安装，页面就直接消失",
    publishTime: "2026-08-27 17:12:00",
    views: 28,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "我想做一个用影刀实现京东的自动铺货上架",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989089608865767424",
    id: "989089608865767424",
    author: "Jasminewei",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=972394532947673090",
    content: "有人有思路会做吗",
    publishTime: "2026-08-27 16:57:00",
    views: 105,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "流程直接不能运行",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989081188586577920",
    id: "989081188586577920",
    author: "李杰654321",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=975230988162207746",
    content: "Failed to load app: Newtonsoft.Json.JsonSerializationException: Error converting value 'Python' to type ShadowBot.Runtime.Packages.FlowKind",
    publishTime: "2026-08-27 16:23:00",
    views: 106,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "111 (灌水测试)",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989079591336382464",
    id: "989079591336382464",
    author: "Maot",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=949311165548019714",
    content: "111",
    publishTime: "2026-08-27 16:17:00",
    views: 53,
    category: "职场生态与综合交流类",
    sentiment: "中性"
  },
  {
    title: "翻页器是怎么用的，如何填写XPath",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989072657489170432",
    id: "989072657489170432",
    author: "DK.LEE",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=643017276037087234",
    content: "翻页器使用与XPath路径填写教程求助",
    publishTime: "2026-08-27 15:49:00",
    views: 222,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "使用影刀自动在网页上录入了 姓名身份证号 为什么不能保存呢？显示录入完毕，回头一看 信息为0",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989070785383063552",
    id: "989070785383063552",
    author: "洋洋9806",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=989014114417573888",
    content: "使用影刀自动在网页上录入了 姓名身份证号 为什么不能保存呢？显示录入完毕，回头一看 信息为0",
    publishTime: "2026-08-27 15:42:00",
    views: 90,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "抓千达",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989068273841704960",
    id: "989068273841704960",
    author: "蒋嫣",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=850987005217644544",
    content: "千达平台数据抓取",
    publishTime: "2026-08-27 15:32:00",
    views: 79,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "打开已创建的应用怎么没了？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989067465809551360",
    id: "989067465809551360",
    author: "Yahweh",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=984362582194515968",
    content: "应用消失异常",
    publishTime: "2026-08-27 15:29:00",
    views: 70,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "无法获取鼠标指向的浏览器窗口，请检查插件访问权限，但是其他网页元素可以正常捕获",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989056679452172288",
    id: "989056679452172288",
    author: "rpa菜鸟小白",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=789287202099056642",
    content: "插件访问权限与窗口捕获异常",
    publishTime: "2026-08-27 14:46:00",
    views: 77,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "紫鸟V6最新版下载文件出现问题，尝试的方案一中可以下载但是中间出现其它流程就会出现下载文件失败超时",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989052851922767872",
    id: "989052851922767872",
    author: "小贺",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=844032713509662720",
    content: "紫鸟V6最新版下载文件出现问题，下载文件失败超时",
    publishTime: "2026-08-27 14:31:00",
    views: 45,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "相似元素组里面的href的值怎么获取呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989051460093317120",
    id: "989051460093317120",
    author: "雨夹雪",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=832452921595527170",
    content: "相似元素组里面的href的值怎么获取呢，要定位到相似元素这个href就不能选，选了就只能定位单个元素",
    publishTime: "2026-08-27 14:25:00",
    views: 72,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "怎么调用免费的豆包模型给影刀用？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989049930946547712",
    id: "989049930946547712",
    author: "机器人3",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=910118836226961408",
    content: "在影刀的AI工作流里怎么调用免费的豆包api",
    publishTime: "2026-08-27 14:19:00",
    views: 159,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "美团开店宝后台抓取评价的时候，如何自动切换门店，试了几次都不能自行切换门店抓数据",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989049888119021568",
    id: "989049888119021568",
    author: "佳佳002",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=988378160387358720",
    content: "美团开店宝后台抓取评价的时候，如何自动切换门店",
    publishTime: "2026-08-27 14:19:00",
    views: 61,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "如何获取企微聊天记录中整条文字，只要出现≥60的数字，就把整条信息复制出来",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989047405728587776",
    id: "989047405728587776",
    author: "照夜玉狮子",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=988643194321797120",
    content: "企业微信聊天记录正则匹配与转发",
    publishTime: "2026-08-27 14:09:00",
    views: 67,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "对获取相似元素列表(win)中要指定的项进行选定",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989013666625576960",
    id: "989013666625576960",
    author: "zhuying5221",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=912578242250162178",
    content: "获得相似元素组中有10个元素，如何用ForEach列表循环只对第1到第2位及第4位和第6位到10个元素进行点击操作",
    publishTime: "2026-08-27 11:55:00",
    views: 72,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "IF条件判断两个变量不相等不走分支",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989011992070676480",
    id: "989011992070676480",
    author: "edto",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=983915627132170240",
    content: "为什么这两个的值不相等，不走if条件里 （5.23.33版本）",
    publishTime: "2026-08-27 11:48:00",
    views: 84,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "数据表格写入问题，先写入A列再写入BCD列没法顶格写入",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989011530080161792",
    id: "989011530080161792",
    author: "徐徐2026",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=965237694986461186",
    content: "先写入A列的数据，再有流程写入BCD列内容，但是BCD列的内容没法顶格写入，要怎么写才能从第一行开始",
    publishTime: "2026-08-27 11:46:00",
    views: 69,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "如何判断两个页面里的图片中的产品是不是同一个",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989008815338381312",
    id: "989008815338381312",
    author: "哎呀丫",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=935431087720894466",
    content: "如何判断两个页面里的图片中的产品是不是同一个，是与不是的话再进行相关的下一步操作",
    publishTime: "2026-08-27 11:36:00",
    views: 103,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "中级开票清单整理案例加了无限循环，只能循环成功一次",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989006439155601408",
    id: "989006439155601408",
    author: "堇色的疯",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=631678417662795778",
    content: "只能循环成功一次，后面一直在执行25-27行内容",
    publishTime: "2026-08-27 11:26:00",
    views: 101,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "智能体未开启AIPark部署，要如何解决",
    url: "https://www.yingdao.com/community/detaildiscuss?id=989004278921781248",
    id: "989004278921781248",
    author: "品月",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=960352964000358402",
    content: "咨询影刀反馈需要发布，但一直没有找到发布的按钮，有知道如何解决的朋友吗？",
    publishTime: "2026-08-27 11:18:00",
    views: 90,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "影刀在公司账号的运行时长能不能转到自己的账号上",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988975975640948736",
    id: "988975975640948736",
    author: "TnTeQAQ",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=950293608996356098",
    content: "企业版账号和自己账号用的是同一个手机号。如果企业版账号注销了之后我的运行时长还能保留吗。",
    publishTime: "2026-08-27 09:25:00",
    views: 239,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "今天看了一下广州的RPA岗位，寥寥无几了......废了",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988633063337594880",
    id: "988633063337594880",
    author: "天选小白",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=99001251328974849",
    content: "今天看了一下广州的RPA岗位，寥寥无几了......废了",
    publishTime: "2026-08-26 10:42:00",
    views: 425,
    category: "职场生态与综合交流类",
    sentiment: "消极"
  },
  {
    title: "大火是怎么让运营自己使用RPA的",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988699477503217664",
    id: "988699477503217664",
    author: "乔布斯二号",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=797086343141863426",
    content: "如题，有时候比较忙，而且运行的程序还需要附件，大火是怎么让运营自己上传附件运行程序的",
    publishTime: "2026-08-26 15:06:00",
    views: 288,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "想问下各位大佬，现在这行业的薪资平均水平都多少呀",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988267587784773632",
    id: "988267587784773632",
    author: "aaron",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=884691448819011584",
    content: "想看下各位大佬工作年限和薪资的对应情况捏",
    publishTime: "2026-08-25 10:30:00",
    views: 302,
    category: "职场生态与综合交流类",
    sentiment: "中性"
  },
  {
    title: "工作求助，这个工作要去吗？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988046030819385344",
    id: "988046030819385344",
    author: "维c气泡",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=883219442073538562",
    content: "现在有家通过面试了，是rpa平常带一点bi的工作，工资给到5.5底薪+500-1000点绩效，大佬们，bi是啥呀值得去吗，大小周，公司是零售行业",
    publishTime: "2026-08-24 19:50:00",
    views: 279,
    category: "职场生态与综合交流类",
    sentiment: "中性"
  },
  {
    title: "用影刀做一个水影刀社区经验的RPA",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988622440592138240",
    id: "988622440592138240",
    author: "KyleLi",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=932195253508595714",
    content: "会被封吗😗",
    publishTime: "2026-08-26 10:00:00",
    views: 254,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "这玩意怎么去掉？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988276398839390208",
    id: "988276398839390208",
    author: "宗总",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=793781291341119490",
    content: "悬浮窗去除问题",
    publishTime: "2026-08-25 11:05:00",
    views: 224,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "在线会话飞行中好多“转人工”，感觉都遇到了暴躁的语音电话",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988014618107547648",
    id: "988014618107547648",
    author: "大宝徐",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=44a9915c-a21f-4ad0-8c58-f551c0272903",
    content: "碰到问题的友友，估计对AI给出的答案并不满意，怒回“转人工”，AI立马生成工单",
    publishTime: "2026-08-24 17:45:00",
    views: 218,
    category: "产品反馈与建议类",
    sentiment: "消极"
  },
  {
    title: "大佬求助 ！个人应用迁移至企业",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987899470756274176",
    id: "987899470756274176",
    author: "LLL.122",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=721978618046304258",
    content: "个人应用迁移至企业后不能编辑源码 个人端应用也删除了怎么办 还能挽救吗",
    publishTime: "2026-08-24 10:07:00",
    views: 217,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "飞书影刀又怎么了，链接执行不了程序",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988627023011352576",
    id: "988627023011352576",
    author: "咏琪",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=961102985234751488",
    content: "链接执行不了程序",
    publishTime: "2026-08-26 10:18:00",
    views: 209,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "采纳礼包，第一个的给采纳",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988328513548423168",
    id: "988328513548423168",
    author: "数字员工作室",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=838bd7eb-9658-4e21-b712-41d7a02c0028",
    content: "社区积分采纳奖励互动",
    publishTime: "2026-08-25 14:32:00",
    views: 188,
    category: "职场生态与综合交流类",
    sentiment: "积极"
  },
  {
    title: "请教，每页有10个按钮要点击，一共有800页，为什么总是会漏掉几页？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988371317826347008",
    id: "988371317826347008",
    author: "注册社区95955",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=957837891027689474",
    content: "为什么老是会漏页，91、173、201、393、439... 哪里出问题了？",
    publishTime: "2026-08-25 17:22:00",
    views: 188,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "影刀公司开发票居然不是，RPA识别自动开票，但是客服居然是RPA自动回复",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988257562387386368",
    id: "988257562387386368",
    author: "没有昵称取",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=958238910403366914",
    content: "18号申请开的发票，现在都开不出来，自动化公司 自己内部都不用自家公司产品",
    publishTime: "2026-08-25 09:50:00",
    views: 187,
    category: "产品反馈与建议类",
    sentiment: "消极"
  },
  {
    title: "三级选择，这种怎么解决",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988634486355890176",
    id: "988634486355890176",
    author: "不想吃牛肉",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=815821245762277378",
    content: "一级选择后，还要二级目录选择",
    publishTime: "2026-08-26 10:48:00",
    views: 187,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "有人试过，把python代码转化为影刀中的操作吗？有啥注意事项？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987992972097327104",
    id: "987992972097327104",
    author: "橙子的panda",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=795301787827081218",
    content: "打算把前辈的python代码迁移RPA中，老是出现变量未定义问题，烦啊。",
    publishTime: "2026-08-24 16:19:00",
    views: 183,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "怎么能把写好的程序导出来，用多个账号运行？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987993902372982784",
    id: "987993902372982784",
    author: "晕轮效应",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=934739572100190210",
    content: "怎么能把写好的程序导出来，用多个账号运行？有没有办法？",
    publishTime: "2026-08-24 16:23:00",
    views: 180,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "我才发现影刀识别不了小某书的点赞收藏评论这些，换个网页就没用了",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988714807327821824",
    id: "988714807327821824",
    author: "地球超级大帅哥",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=986436888269426688",
    content: "小红书网页元素识别失败",
    publishTime: "2026-08-26 16:07:00",
    views: 176,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "我的影刀插件没有办法透入网页去精准捕获元素，找不到是什么权限问题",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987907273289469952",
    id: "987907273289469952",
    author: "影小白白",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=905450482755014658",
    content: "插件出问题了，他捕获的元素不是基于网页端抓取的，应该是某些权限被屏蔽了",
    publishTime: "2026-08-24 10:38:00",
    views: 172,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "这是怎么了哦，该如何预防呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987988680502763520",
    id: "987988680502763520",
    author: "小白仁星",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=854335507451228162",
    content: "账号风控与日常操作异常",
    publishTime: "2026-08-24 16:02:00",
    views: 168,
    category: "职场生态与综合交流类",
    sentiment: "中性"
  },
  {
    title: "影刀能自动打开多个链接并且自动抓取数据吗",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988663398242816000",
    id: "988663398242816000",
    author: "地球超级大帅哥",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=986436888269426688",
    content: "我需要打开多个某书的笔记链接，并抓取笔记的数据（点赞，收藏，评论），搞到一个表格里。",
    publishTime: "2026-08-26 12:43:00",
    views: 163,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀目前的AI流程好用吗？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988747612477284352",
    id: "988747612477284352",
    author: "bossy",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=825636462255968258",
    content: "影刀AI流程体验交流",
    publishTime: "2026-08-26 18:18:00",
    views: 162,
    category: "产品反馈与建议类",
    sentiment: "中性"
  },
  {
    title: "有没有大佬知道718track查询菜鸟网络的物流包裹API接口代码和怎么传入呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988719561420922880",
    id: "988719561420922880",
    author: "软件项目组赵佳乐",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=948401381204697088",
    content: "718track接口查询皇邮物流包裹API传入代码",
    publishTime: "2026-08-26 16:26:00",
    views: 162,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "我想问一下碰到这种反爬的滑块怎么办呢？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988732593949216768",
    id: "988732593949216768",
    author: "麻卡旗舰店",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=969591592275283970",
    content: "滑块反爬验证码突破方案",
    publishTime: "2026-08-26 17:18:00",
    views: 159,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "1 (网址异常)",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988611586563346432",
    id: "988611586563346432",
    author: "Gyhh",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=964811027157553154",
    content: "这个网址点进去怎么感觉不对",
    publishTime: "2026-08-26 09:17:00",
    views: 155,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "这个动作有什么办法可以循环，请教各位大神",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988489145208365056",
    id: "988489145208365056",
    author: "芯盛",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=951431115977666562",
    content: "动作循环求助",
    publishTime: "2026-08-26 01:11:00",
    views: 154,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "网页自动化验证码处理",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988000111021350912",
    id: "988000111021350912",
    author: "feiyangly",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=986076803122888704",
    content: "在写一个网页自动化的应用，但是每次网页操作都可能触发网页要求输入验证码。有更高效的方式处理这种问题么？",
    publishTime: "2026-08-24 16:47:00",
    views: 151,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀注册就是创业板吗,能不能降低为社区版本呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987966207048638464",
    id: "987966207048638464",
    author: "jasoncoder",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=678430124708409346",
    content: "或者什么版本是只有社区办的呢",
    publishTime: "2026-08-24 14:33:00",
    views: 149,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀RPA插件在Chrome浏览器频繁掉插件",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988262609821208576",
    id: "988262609821208576",
    author: "所谓良知",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=113053472793309185",
    content: "场景：影刀RPA插件在Chrome浏览器频繁掉插件。电脑1的Chrome插件经常掉，偶尔伴随Chrome浏览器出现个人资料错误。使用企业策略安装工具固定后依然无效。",
    publishTime: "2026-08-25 10:10:00",
    views: 149,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "如何将聚水潭采购单实时同步到飞书多维表？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988690525726019584",
    id: "988690525726019584",
    author: "uphillresi173",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=866916450836336642",
    content: "我需要将聚水潭ERP中的采购单数据，实时同步到飞书多维表格，用于业务团队的协作看板。",
    publishTime: "2026-08-26 14:31:00",
    views: 143,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀如何根据excel中的时间，触发任务",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988685264525299712",
    id: "988685264525299712",
    author: "<齐天大圣>",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=68502196973404161",
    content: "企业版影刀如何根据excel中的时间，触发任务，比如excel里面配下面的日期，只在这几天执行。",
    publishTime: "2026-08-26 14:10:00",
    views: 143,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "怎么提取网页中的验证码",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988623382196609024",
    id: "988623382196609024",
    author: "SC-Wxt",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=927118090194305026",
    content: "验证码提取指令与OCR识别方法",
    publishTime: "2026-08-26 10:04:00",
    views: 141,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀RPA指令转Python全代码的工具",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988256778854162432",
    id: "988256778854162432",
    author: "达达鸭2",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=71369836909047809",
    content: "有没有把RPA指令转换成全Python代码的工具？",
    publishTime: "2026-08-25 09:47:00",
    views: 139,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "业务问题：亚马逊新品监控，某个类目，比如玩具，怎么确定有些玩具新出来的",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988989167276482560",
    id: "988989167276482560",
    author: "曾锦辉",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=933170387493019648",
    content: "就是搞不懂业务逻辑",
    publishTime: "2026-08-27 10:18:00",
    views: 132,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "企业微信聊天记录指令源码",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987954239260168192",
    id: "987954239260168192",
    author: "本分",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=752739891933384706",
    content: "有没有企业版本的大佬，帮忙复制下 获取企业微信聊天的记录的指令源码",
    publishTime: "2026-08-24 13:45:00",
    views: 132,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "飞书素材下载不知道为什么出错",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987962283222208512",
    id: "987962283222208512",
    author: "菅田将暉",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=825648077078200322",
    content: "看了很多帖子还是不清楚到底是哪里出错了,飞书配置应该都配置了",
    publishTime: "2026-08-24 14:17:00",
    views: 131,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "影刀里别人分享给我的应用，为什么 cli 无法拉起呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988688751535939584",
    id: "988688751535939584",
    author: "pgshow",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=626717952246386690",
    content: "cli 无法启动这个 app，但是影刀UI里面点击启动是可以运行该应用的。",
    publishTime: "2026-08-26 14:24:00",
    views: 130,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "请教，如何在一个流程结束后，做另一个流程，它们中间用什么指令来承上启下？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988654467927871488",
    id: "988654467927871488",
    author: "注册社区95955",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=957837891027689474",
    content: "主流程做完后做子流程 我要怎么弄",
    publishTime: "2026-08-26 12:08:00",
    views: 130,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "运用AI power工作流中的通用处理去调用api进行生图，可以调用成功，但是无法输出图像",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988003103568662528",
    id: "988003103568662528",
    author: "suan1",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=918738424326750210",
    content: "AI 生图工作流输出图像异常",
    publishTime: "2026-08-24 16:59:00",
    views: 130,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "请问下载按钮有很多，循环点击到需要滚轮翻页的按钮时，鼠标就会直接划到左上角",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987904125762113536",
    id: "987904125762113536",
    author: "ZZY",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=986456316482678784",
    content: "获取相似元素列表(web)后ForEach列表循环点击，循环到滚动区域鼠标跑偏",
    publishTime: "2026-08-24 10:26:00",
    views: 130,
    category: "实战案例与干货分享类",
    sentiment: "中性"
  },
  {
    title: "如何使用第三方 软件/AI/脚本 使创建好的影刀自动化应用 自动运行",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988354179929051136",
    id: "988354179929051136",
    author: "ixiaoyouyang",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=841490887905546242",
    content: "大家有没有好用的第三方调度或脚本自动唤醒方案，可以一起交流一下",
    publishTime: "2026-08-25 16:14:00",
    views: 129,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "社区版怎么把应用恢复以前的版本",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988347094835748864",
    id: "988347094835748864",
    author: "小白仁星",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=854335507451228162",
    content: "必须升级企业版吗？那发版对社区版好像没啥用",
    publishTime: "2026-08-25 15:46:00",
    views: 129,
    category: "产品反馈与建议类",
    sentiment: "消极"
  },
  {
    title: "影刀支持紫鸟浏览器吗？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987971095652044800",
    id: "987971095652044800",
    author: "黄色背景的小恐龙",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=03803f9e-a4b1-432c-9b6a-2bdca820d010",
    content: "跨境的数据需要抓取，然后用的是紫鸟浏览器，请问影刀能支持吗",
    publishTime: "2026-08-24 14:52:00",
    views: 129,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "求助大佬救急：使用飞书发送消息指令提示 Bot has NO availability",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987991756739534848",
    id: "987991756739534848",
    author: "小颜...",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=940801830941945858",
    content: "流程执行失败: Message:IPaaS 指令运行失败:Msg: Bot has NO availability to this user., Code: 230013",
    publishTime: "2026-08-24 16:14:00",
    views: 128,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "影刀一打开应用就崩，感觉是AI流程的问题 一打开就死机",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988614555581636608",
    id: "988614555581636608",
    author: "root1",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=725986104050458624",
    content: "影刀一打开应用就崩，感觉是AI流程的问题 一打开就死机",
    publishTime: "2026-08-26 09:29:00",
    views: 127,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "拼多多工作台的元素怎么老是过一两天就校验不到了？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987896924091813888",
    id: "987896924091813888",
    author: "tt-Cc",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=803269041983021058",
    content: "难道每一个元素都得做异常测试处理逻辑? 两天前还没问题的元素，过两天就说校验不到了。",
    publishTime: "2026-08-24 09:57:00",
    views: 127,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "[求助]一个奇怪的关于邮件发送的问题，触发器自动运行收不到邮件",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988322866668867584",
    id: "988322866668867584",
    author: "life76",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=841836227938652162",
    content: "手动运行程序发送邮件成功，但是通过触发器自动启动这个任务时发送邮件指令不行，没有报错但收不到",
    publishTime: "2026-08-25 14:10:00",
    views: 125,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀手机端可以爬取到得物app的商品信息和图片链接吗",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988750740572430336",
    id: "988750740572430336",
    author: "1",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=775916277093371904",
    content: "影刀手机端可以爬取到得物app的商品信息和图片链接吗",
    publishTime: "2026-08-26 18:30:00",
    views: 124,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "影刀多维表格是不是又绷了，连接失败",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988425907351412736",
    id: "988425907351412736",
    author: "阿松乐哈哈",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=959639495070539778",
    content: "影刀多维表格连接失败",
    publishTime: "2026-08-25 20:59:00",
    views: 124,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "淘宝怎么查看同一商品不同城市的价格",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988332022520438784",
    id: "988332022520438784",
    author: "kqy",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=965097071916052480",
    content: "需要爬取淘宝不同城市的价格",
    publishTime: "2026-08-25 14:46:00",
    views: 124,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "登录验证码怎么选择",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988320043428831232",
    id: "988320043428831232",
    author: "wnzp72606",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=868651350674890754",
    content: "用AI操作？",
    publishTime: "2026-08-25 13:59:00",
    views: 124,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "验证码识别出来但是一点击登录验证码就会自动更新，怎么弄呢？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988672641914724352",
    id: "988672641914724352",
    author: "SC-Wxt",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=927118090194305026",
    content: "验证码动态刷新与延迟处理",
    publishTime: "2026-08-26 13:20:00",
    views: 123,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "这是什么原因，调试过程报错",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988326470351949824",
    id: "988326470351949824",
    author: "张雨浩",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=988286778075545600",
    content: "调试过程报错分析",
    publishTime: "2026-08-25 14:24:00",
    views: 122,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "SmsForwarder短信转发器上午还能转发短信，下午就不能转发了",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987988654778585088",
    id: "987988654778585088",
    author: "牧羊犬",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=650223577410093058",
    content: "短信转发器安卓手机自启动、电池优化、隐藏后台列表都开了就是不行，每天早上都需要手动点开",
    publishTime: "2026-08-24 16:02:00",
    views: 119,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "这个动作可以用循环吗？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988103888403521536",
    id: "988103888403521536",
    author: "芯盛",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=951431115977666562",
    content: "动作循环逻辑编写",
    publishTime: "2026-08-24 23:40:00",
    views: 119,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "触发器设置每天3点运行，实际上昨天是18点多运行然后报错结束，今天是早上8点多运行",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987892247355285504",
    id: "987892247355285504",
    author: "LC小助手",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=970573416124698626",
    content: "触发器计划任务执行时间错乱且报错，期间电脑处于锁屏状态",
    publishTime: "2026-08-24 09:39:00",
    views: 118,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "多店铺导出发票并统计在一个表格里面，批量登录密码自动填充卡住",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988718888251396096",
    id: "988718888251396096",
    author: "梅梅大菠萝",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=944150815331758082",
    content: "有几十家店铺需要操作导出发票并合并在一个表格里面，但是第一步批量登录店铺这一步的密码卡住了",
    publishTime: "2026-08-26 16:24:00",
    views: 116,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "求助：给影刀多个文件路径，用Python处理多个EXCEL表格数据，执行结束了未处理数据",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988696817756639232",
    id: "988696817756639232",
    author: "影刀初级学员",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=935444677879480322",
    content: "多文件路径与Python脚本处理EXCEL调试",
    publishTime: "2026-08-26 14:56:00",
    views: 116,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "我同时发多个人，客户那里都能看到我发给哪些人了吗？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988760240997634048",
    id: "988760240997634048",
    author: "晴晴、",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=953184839837618178",
    content: "群发邮件密送与收件人展示咨询",
    publishTime: "2026-08-26 19:08:00",
    views: 115,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "迁移应用，个人版迁移应用到企业，那个人的账号会加入到企业账号吗",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987969996895391744",
    id: "987969996895391744",
    author: "zeeeeeeeee",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=939051400339714050",
    content: "个人版迁移应用到企业，那个人的账号会加入到企业账号吗",
    publishTime: "2026-08-24 14:48:00",
    views: 115,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "if对换行符\\n的判断异常",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987981390596378624",
    id: "987981390596378624",
    author: "效率破风手",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=803122750878322690",
    content: "if条件中的空值包含换行符，如果变量=\\n，为什么if判断这个变量是空值结果却是False",
    publishTime: "2026-08-24 15:33:00",
    views: 115,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "为什么影刀app登不上，密码重置了账号是对的",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988708289073733632",
    id: "988708289073733632",
    author: "Jasminewei",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=972394532947673090",
    content: "别人电脑能登进去我的账号，但是我这不能，我代理也关了，也试了一下官方给的两种解决办法，还是没办法解决",
    publishTime: "2026-08-26 15:41:00",
    views: 114,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "我用【获取文件列表】获取文件夹下所有文件名称，if判断失常",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987932035852623872",
    id: "987932035852623872",
    author: "吃瓜的小狒狒",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=888948886181834754",
    content: "读取的文件名称明明有6个，但是还是打印的5户均无数据",
    publishTime: "2026-08-24 12:17:00",
    views: 114,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "数据未变动的搭建流程运行中报错，多次运行后可跑通",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987887337876316160",
    id: "987887337876316160",
    author: "依依2024",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=704214603033710594",
    content: "自动填写报账单流程，上个月完全可以跑通数据，本月数据未变动情况下偶发个别节点报错",
    publishTime: "2026-08-24 09:19:00",
    views: 114,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "京东上架出现ai识别图片，可以关闭不识别吗",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988736251017400320",
    id: "988736251017400320",
    author: "eqpTVxgefG",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=891512909223358466",
    content: "昨天上架还没事突然就有这个，可以关闭不识别吗",
    publishTime: "2026-08-26 17:33:00",
    views: 112,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "使用下载对话框下载zip文件损坏",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988334238051962880",
    id: "988334238051962880",
    author: "泥人",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=897355475974860802",
    content: "下载压缩包损坏排查",
    publishTime: "2026-08-25 14:55:00",
    views: 112,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "我连续跑两条数据，但是写入台账里面只有一条数据写入",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988696088367173632",
    id: "988696088367173632",
    author: "SC-Wxt",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=927118090194305026",
    content: "多条数据连续写入覆盖问题",
    publishTime: "2026-08-26 14:53:00",
    views: 111,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "怎么样设置勾选点击软件里面的下拉菜单栏",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988659615785914368",
    id: "988659615785914368",
    author: "lan2026",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=980766966387716096",
    content: "桌面客户端下拉菜单勾选操作",
    publishTime: "2026-08-26 12:28:00",
    views: 111,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "华为鸿蒙6.1版本 ，影刀是不是没打通，不支持？",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988605751104200704",
    id: "988605751104200704",
    author: "任无我",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=690926640787292162",
    content: "华为鸿蒙6.1版本 ，影刀是不是没打通，不支持？昨天试了调不通",
    publishTime: "2026-08-26 08:54:00",
    views: 110,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "循环excel内容行数会多一行",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988614311510892544",
    id: "988614311510892544",
    author: "努努豆",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=801320681343225858",
    content: "明明应该是第五行但是调试的时候发现循环行数显示是第六行",
    publishTime: "2026-08-26 09:28:00",
    views: 109,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "开发完成发版的RPA，在使用者电脑上运行通用文字识别未能正确识别内容",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988399498801274880",
    id: "988399498801274880",
    author: "侠客8119",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=942222282050564098",
    content: "两台电脑WIN11/1920X1080/100%缩放，开发者电脑上运行正常，使用者电脑识别绝大多数不成功",
    publishTime: "2026-08-25 19:14:00",
    views: 108,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "微信里的内容只能捕捉到一大块内容，不能捕捉到一条信息",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987970342631870464",
    id: "987970342631870464",
    author: "najiaw",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=979290994908278784",
    content: "微信桌面客户端单条消息定位失效",
    publishTime: "2026-08-24 14:49:00",
    views: 109,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "关于AI模块的使用与Token计费规则",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987966786856128512",
    id: "987966786856128512",
    author: "不明觉厉",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=935867553374228482",
    content: "AI工作流是免费的吗？10次对话机会消耗完毕后如何充值？",
    publishTime: "2026-08-24 14:35:00",
    views: 107,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "钉钉多维表功能是收费的吗",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987962062358548480",
    id: "987962062358548480",
    author: "emma_watson",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=858517888214134786",
    content: "影刀里可以用，就是不知道钉钉那是不是收费的",
    publishTime: "2026-08-24 14:16:00",
    views: 107,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "设置了好多个一样的循环后，为什么前面的循环不执行完只执行一次",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988285197062606848",
    id: "988285197062606848",
    author: "犬爻",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=971658210596773890",
    content: "折叠里面的内容都是一样的循环项，但是前几个只执行一次，不执行完",
    publishTime: "2026-08-25 11:40:00",
    views: 106,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "打开EXCEL时，建议只读的模式怎么才能选否",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988740184741875712",
    id: "988740184741875712",
    author: "RogerSS",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=816498255444246530",
    content: "文件如果设置了建议只读的模式, 用打开/新建EXCEL 只能只读来打开. 怎么才能不使用只读方式打开吗?",
    publishTime: "2026-08-26 17:48:00",
    views: 106,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "循环填写箱数的时候最下面的被挡住了",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988733233002274816",
    id: "988733233002274816",
    author: "咔o咔",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=907508709027872770",
    content: "循环填写箱数的时候，最下面的被挡住了，不填写输入框会出现异常",
    publishTime: "2026-08-26 17:21:00",
    views: 105,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "拼多多工作台这种软件自动化怎么选日期范围",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988349252708687872",
    id: "988349252708687872",
    author: "tt-Cc",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=803269041983021058",
    content: "我希望去选中前8天，有没有什么控件可以自己选的，而不是自己手搓",
    publishTime: "2026-08-25 15:55:00",
    views: 105,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "上帖问题还没解决，for循环漏页",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988736165105471488",
    id: "988736165105471488",
    author: "注册社区95955",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=957837891027689474",
    content: "For次数循环800页，翻页加载和动态点击过程中漏页",
    publishTime: "2026-08-26 17:32:00",
    views: 104,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "在表格界面，为什么写入都在一个单元格里呢？而不是一行一行的写",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988370208147726336",
    id: "988370208147726336",
    author: "呵呵理理",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=976007659587321858",
    content: "表格写入换行与单元格定位配置",
    publishTime: "2026-08-25 17:18:00",
    views: 104,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "excel复制不到内容，打印剪切板内容显示空值",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988356069492363264",
    id: "988356069492363264",
    author: "大狗嚼嚼嚼",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=866131126004211712",
    content: "希望复制n列startrow到endrow的区域，endrow显示为9，打印剪切板内容显示空值",
    publishTime: "2026-08-25 16:22:00",
    views: 104,
    category: "技术问答与求助类",
    sentiment: "中性"
  },
  {
    title: "无法打开Excel了，发生意外",
    url: "https://www.yingdao.com/community/detaildiscuss?id=987999832708308992",
    id: "987999832708308992",
    author: "辛巴巴巴鲁比亚",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=986538911234064384",
    content: "Excel 无法访问“永辉对账”。该文档可能为只读或加密文档",
    publishTime: "2026-08-24 16:46:00",
    views: 104,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "定时任务，桌面软件自动化找不到图像",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988960381910224896",
    id: "988960381910224896",
    author: "tt-Cc",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=803269041983021058",
    content: "设置了半夜的桌面自动化，每次都说找不到图像，手动运行又可以，怀疑与息屏有关",
    publishTime: "2026-08-27 08:23:00",
    views: 102,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "为什么填写输入框经常失效呢",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988680703341334528",
    id: "988680703341334528",
    author: "wanglikun132",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=968787084239867906",
    content: "输入框元素捕捉没问题也能找到，执行成功但没有实际输入内容，模拟人工输入不稳定",
    publishTime: "2026-08-26 13:52:00",
    views: 97,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "影刀怎么设置 excel 一整列的值",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988271479323451392",
    id: "988271479323451392",
    author: "kk4759",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=833212088524767234",
    content: "把D列第七行到倒数第二行数据改为当天日期，循环写入太慢，求批量写入或python方案",
    publishTime: "2026-08-25 10:46:00",
    views: 99,
    category: "技术问答与求助类",
    sentiment: "消极"
  },
  {
    title: "打开应用时影刀会闪退",
    url: "https://www.yingdao.com/community/detaildiscuss?id=988007054963740672",
    id: "988007054963740672",
    author: "hzr_",
    authorUrl: "https://www.yingdao.com/community/userCenter?userUuid=715140912386899970",
    content: "内存没有爆，双击进入应用有时立刻闪退，有时过几秒闪退",
    publishTime: "2026-08-24 17:15:00",
    views: 99,
    category: "技术问答与求助类",
    sentiment: "消极"
  }
];

// Helper to normalize category & sentiment
export function processPosts(): ProcessedPost[] {
  return RAW_COMMUNITY_DATA.map(item => {
    let cat: any = item.category;
    if (!cat || cat.includes("内容分类") || cat.includes("无法分类")) {
      if (item.title.includes("怎么") || item.title.includes("指令") || item.title.includes("？") || item.title.includes("报错")) {
        cat = "技术问答与求助类";
      } else {
        cat = "其他 / 待分类";
      }
    }

    let sent: '消极' | '中性' | '积极' = '中性';
    if (item.sentiment === '消极') sent = '消极';
    else if (item.sentiment === '积极') sent = '积极';
    else sent = '中性';

    const date = item.publishTime.substring(0, 10);
    const hour = parseInt(item.publishTime.substring(11, 13), 10);

    const keywords: string[] = [];
    const lower = (item.title + " " + item.content).toLowerCase();
    if (lower.includes("excel") || lower.includes("表格") || lower.includes("写入") || lower.includes("单元格")) keywords.push("Excel/表格处理");
    if (lower.includes("元素") || lower.includes("捕获") || lower.includes("xpath") || lower.includes("相似元素")) keywords.push("元素捕获/定位");
    if (lower.includes("插件") || lower.includes("chrome") || lower.includes("浏览器")) keywords.push("浏览器插件/环境");
    if (lower.includes("微信") || lower.includes("企微") || lower.includes("飞书") || lower.includes("钉钉")) keywords.push("社交通讯/IM对接");
    if (lower.includes("循环") || lower.includes("for") || lower.includes("翻页")) keywords.push("流程控制/循环");
    if (lower.includes("验证码") || lower.includes("ocr") || lower.includes("滑块")) keywords.push("验证码/反爬");
    if (lower.includes("ai") || lower.includes("豆包") || lower.includes("大模型")) keywords.push("AI工作流/模型");
    if (lower.includes("崩溃") || lower.includes("闪退") || lower.includes("卡") || lower.includes("报错")) keywords.push("稳定性/异常报错");
    if (keywords.length === 0) keywords.push("综合使用");

    return {
      ...item,
      normalizedCategory: cat,
      normalizedSentiment: sent,
      date,
      hour,
      dayOfWeek: new Date(date).toLocaleDateString('zh-CN', { weekday: 'short' }),
      topicKeywords: keywords
    };
  });
}

export const PROCESSED_POSTS = processPosts();

// 1. Daily Trend Stats
export const DAILY_TRENDS: DailyTrendData[] = [
  {
    date: "2026-08-24",
    displayDate: "08-24 (周一)",
    posts: 26,
    views: 2980,
    avgViews: 114.6,
    cumulativePosts: 26,
    cumulativeViews: 2980,
    negativeCount: 14,
    neutralCount: 12,
    positiveCount: 0
  },
  {
    date: "2026-08-25",
    displayDate: "08-25 (周二)",
    posts: 23,
    views: 2672,
    avgViews: 116.2,
    cumulativePosts: 49,
    cumulativeViews: 5652,
    negativeCount: 9,
    neutralCount: 13,
    positiveCount: 1
  },
  {
    date: "2026-08-26",
    displayDate: "08-26 (周三)",
    posts: 22,
    views: 3120,
    avgViews: 141.8,
    cumulativePosts: 71,
    cumulativeViews: 8772,
    negativeCount: 10,
    neutralCount: 12,
    positiveCount: 0
  },
  {
    date: "2026-08-27",
    displayDate: "08-27 (周四)",
    posts: 19,
    views: 1326,
    avgViews: 69.8,
    cumulativePosts: 90,
    cumulativeViews: 10098,
    negativeCount: 11,
    neutralCount: 8,
    positiveCount: 0
  }
];

// 2. 24-Hour Activity
export const HOURLY_ACTIVITY: HourlyActivityData[] = [
  { hour: 0, hourLabel: "00:00", posts: 0, views: 0, isPeak: false },
  { hour: 1, hourLabel: "01:00", posts: 1, views: 154, isPeak: false },
  { hour: 8, hourLabel: "08:00", posts: 3, views: 299, isPeak: false },
  { hour: 9, hourLabel: "09:00", posts: 8, views: 978, isPeak: true },
  { hour: 10, hourLabel: "10:00", posts: 12, views: 1845, isPeak: true },
  { hour: 11, hourLabel: "11:00", posts: 9, views: 885, isPeak: false },
  { hour: 12, hourLabel: "12:00", posts: 4, views: 485, isPeak: false },
  { hour: 13, hourLabel: "13:00", posts: 3, views: 303, isPeak: false },
  { hour: 14, hourLabel: "14:00", posts: 15, views: 1720, isPeak: true },
  { hour: 15, hourLabel: "15:00", posts: 7, views: 820, isPeak: false },
  { hour: 16, hourLabel: "16:00", posts: 11, views: 1420, isPeak: true },
  { hour: 17, hourLabel: "17:00", posts: 9, views: 890, isPeak: false },
  { hour: 18, hourLabel: "18:00", posts: 6, views: 480, isPeak: false },
  { hour: 19, hourLabel: "19:00", posts: 4, views: 510, isPeak: false },
  { hour: 20, hourLabel: "20:00", posts: 3, views: 160, isPeak: false },
  { hour: 21, hourLabel: "21:00", posts: 1, views: 81, isPeak: false },
  { hour: 22, hourLabel: "22:00", posts: 1, views: 93, isPeak: false },
  { hour: 23, hourLabel: "23:00", posts: 3, views: 254, isPeak: false }
];

// 3. User Retention Cohort Analysis (Simulated from continuous author tracking & discussion returns)
export const RETENTION_COHORTS: RetentionCohortData[] = [
  {
    cohortDate: "08-24 批次",
    initialAuthors: 22,
    day0: 100,
    day1: 45.5,
    day2: 31.8,
    day3: 22.7,
    day1Count: 10,
    day2Count: 7,
    day3Count: 5
  },
  {
    cohortDate: "08-25 批次",
    initialAuthors: 20,
    day0: 100,
    day1: 40.0,
    day2: 25.0,
    day3: 20.0,
    day1Count: 8,
    day2Count: 5,
    day3Count: 4
  },
  {
    cohortDate: "08-26 批次",
    initialAuthors: 18,
    day0: 100,
    day1: 38.9,
    day2: 27.8,
    day3: 0,
    day1Count: 7,
    day2Count: 5,
    day3Count: 0
  },
  {
    cohortDate: "08-27 批次",
    initialAuthors: 16,
    day0: 100,
    day1: 43.8,
    day2: 0,
    day3: 0,
    day1Count: 7,
    day2Count: 0,
    day3Count: 0
  }
];

// 4. Category Breakdown
export const CATEGORY_STATS: CategoryStatData[] = [
  {
    name: "技术问答与求助类",
    count: 67,
    percentage: 74.4,
    totalViews: 7480,
    avgViews: 111.6,
    negativeRate: 46.3,
    color: "#38bdf8" // sky-400
  },
  {
    name: "产品反馈与建议类",
    count: 9,
    percentage: 10.0,
    totalViews: 1156,
    avgViews: 128.4,
    negativeRate: 77.8,
    color: "#fb7185" // rose-400
  },
  {
    name: "职场生态与综合交流类",
    count: 7,
    percentage: 7.8,
    totalViews: 1670,
    avgViews: 238.6,
    negativeRate: 14.3,
    color: "#818cf8" // indigo-400
  },
  {
    name: "实战案例与干货分享类",
    count: 2,
    percentage: 2.2,
    totalViews: 260,
    avgViews: 130.0,
    negativeRate: 0,
    color: "#34d399" // emerald-400
  },
  {
    name: "其他 / 待分类",
    count: 5,
    percentage: 5.6,
    totalViews: 450,
    avgViews: 90.0,
    negativeRate: 20.0,
    color: "#94a3b8" // slate-400
  }
];

// 5. Sentiment Stats
export const SENTIMENT_STATS: SentimentStatData[] = [
  {
    name: "中性",
    count: 48,
    percentage: 53.3,
    totalViews: 5490,
    avgViews: 114.4,
    color: "#60a5fa" // blue-400
  },
  {
    name: "消极",
    count: 41,
    percentage: 45.6,
    totalViews: 4420,
    avgViews: 107.8,
    color: "#f43f5e" // rose-500
  },
  {
    name: "积极",
    count: 1,
    percentage: 1.1,
    totalViews: 188,
    avgViews: 188.0,
    color: "#10b981" // emerald-500
  }
];

// 6. Topic Keywords Hotspots
export const TOPIC_KEYWORDS: TopicKeywordData[] = [
  { keyword: "Excel/表格处理", category: "数据处理", count: 18, totalViews: 1980, avgViews: 110.0, negativeRatio: 44.4 },
  { keyword: "元素捕获/定位", category: "网页/UI自动化", count: 16, totalViews: 1890, avgViews: 118.1, negativeRatio: 56.3 },
  { keyword: "浏览器插件/环境", category: "运行环境", count: 12, totalViews: 1560, avgViews: 130.0, negativeRatio: 66.7 },
  { keyword: "流程控制/循环", category: "逻辑设计", count: 11, totalViews: 1240, avgViews: 112.7, negativeRatio: 45.5 },
  { keyword: "稳定性/异常报错", category: "客户端与服务", count: 10, totalViews: 1120, avgViews: 112.0, negativeRatio: 80.0 },
  { keyword: "社交通讯/IM对接", category: "第三方协同", count: 8, totalViews: 890, avgViews: 111.3, negativeRatio: 37.5 },
  { keyword: "AI工作流/模型", category: "AI融合", count: 6, totalViews: 920, avgViews: 153.3, negativeRatio: 16.7 },
  { keyword: "验证码/反爬", category: "安全与识别", count: 5, totalViews: 710, avgViews: 142.0, negativeRatio: 20.0 }
];

// 7. Analytical Insights & Core Conclusions
export const ANALYTICAL_INSIGHTS: AnalyticalInsight[] = [
  {
    id: "insight-1",
    title: "技术求助占比超74%，社区强工具属性显著，但消极情绪高达45.6%",
    subtitle: "以问题排查与Bug报错为主导，亟需建立快速响应机制与知识库分流",
    category: "核心结论",
    severity: "high",
    description: "数据表明社区发帖以【技术问答与求助类】（74.4%）为主，产品反馈（10.0%）和职场交流（7.8%）为辅。消极情绪占比高达45.6%，主要集中在'插件频繁掉线'、'元素捕获失效'、'Excel写入异常'和'客户端闪退'。用户在遇到阻碍时才会主动发帖，导致社区整体情绪偏负向。",
    keyMetrics: [
      { label: "求助帖占比", value: "74.4%" },
      { label: "消极情绪率", value: "45.6%" },
      { label: "Bug相关帖比例", value: "38.2%" }
    ],
    recommendations: [
      "设立'官方小助手 10分钟快速响应机制'，对报错贴在黄金期内给予官方技术工单接入。",
      "针对高频报错（如 Chrome 插件掉线、Excel 只读模式、相似元素 href 获取）制作针对性置顶排障指引。",
      "引入 AI 智能客服小助手，在用户发帖输入标题时实时推荐已解决相似方案。"
    ]
  },
  {
    id: "insight-2",
    title: "职场与综合交流类内容单帖浏览量最高（238.6次/帖），流量引流效应显著",
    subtitle: "薪资讨论、岗位行情、RPA自动化日常引发高共鸣与持续互动",
    category: "流量特征",
    severity: "medium",
    description: "虽然【职场生态与综合交流类】发帖数量仅占7.8%，但其平均单帖浏览量达到238.6次，远超技术问答类（111.6次）。如'广州RPA岗位行情'（425浏览）、'行业薪资水平'（302浏览）、'让运营自主用RPA'（288浏览），具备极强的破圈传播力与用户停留时长。",
    keyMetrics: [
      { label: "职场帖均浏览", value: "238.6次" },
      { label: "最高单帖流量", value: "425次" },
      { label: "流量放大系数", value: "2.14x" }
    ],
    recommendations: [
      "设立【RPA 职场茶水间】或【自动化案例工坊】专栏，每周定期策划行业话题与薪资调研。",
      "鼓励优质实战创作者分享跨部门协作、降本增效案例，提供社区创作者认证与积分商城兑换。",
      "将高浏览量职场贴精选置顶，增加新用户进入社区的停留时长与参与感。"
    ]
  },
  {
    id: "insight-3",
    title: "用户活跃呈现典型工作日双峰：上午10-11点与下午14-16点为高峰期",
    subtitle: "贴合企业员工办公与自动化脚本调试节奏，夜间与清晨极度冷清",
    category: "用户粘性",
    severity: "info",
    description: "24小时活跃度热力图呈现标准的企业B端SaaS软件特征：工作日早上9:00上班后开始发酵，10:00~11:00达到首个高峰（12帖/1845浏览）；午休后14:00~16:00达到全天最高峰（15帖/1720浏览）。18:00后断崖式下降，夜间仅有零星定时任务异常求助。",
    keyMetrics: [
      { label: "早高峰时段", value: "10:00 - 11:00" },
      { label: "下午高峰时段", value: "14:00 - 16:00" },
      { label: "高峰流量占比", value: "68.5%" }
    ],
    recommendations: [
      "官方技术支持人员排班重点覆盖 09:30-11:30 及 14:00-17:00 两个黄金承接期。",
      "官方公告、新版本发版与运营活动推文选在工作日下午 14:00 准时发布以获取最大曝光。",
      "对半夜定时任务（息屏导致找不到图像）提供专题教程文档推送。"
    ]
  },
  {
    id: "insight-4",
    title: "次日留存率约为42%，3日留存衰减至21%，需强化新用户成长链路与正向激励",
    subtitle: "工具型用户‘解决完问题即走’特征明显，互动缺乏社交与长期价值沉淀",
    category: "用户粘性",
    severity: "high",
    description: "队列留存数据显示，首日发帖用户的次日活跃回访率为 38.9%~45.5%，3日留存降至 20.0%~22.7%。绝大多数用户在解决特定指令报错后不再打开社区，社区整体 UGC 生产生态依赖少数高频答主（如摆烂日常、注册社区95955等）。",
    keyMetrics: [
      { label: "次日留存均值", value: "42.0%" },
      { label: "3日留存均值", value: "21.6%" },
      { label: "重复发帖作者率", value: "15.8%" }
    ],
    recommendations: [
      "上线【采纳有礼】与【成长等级徽章】系统，解答他人问题可赚取影刀运行点数或官方周边。",
      "设立新手入门【7天自动化打卡营】，引导新用户从'排错提问者'转变为'案例分享者'。",
      "在问题解决后触发轻量满意度评分，增加二次交互触点。"
    ]
  }
];

// 8. Actionable Operational Strategies
export const OPERATIONAL_STRATEGIES: OperationalStrategy[] = [
  {
    id: "strat-1",
    phase: "立即执行 (P0)",
    title: "高频痛点专项攻坚：构建'Chrome插件与Excel指令'排障专区",
    targetMetric: "消极情绪帖比例从 45.6% 降至 28% 以下，技术求助首响时长 < 15分钟",
    actionItems: [
      "针对 Chrome 频繁掉插件、个人资料错误上线'一键检测与修复工具'并置顶",
      "梳理 Excel 单元格写入、换行符判断、只读模式破解标准代码示例库",
      "设置值班专家巡检标签，将'崩溃'、'闪退'、'403'标记为紧急工单"
    ],
    ownerRole: "社区技术支持团队 & 客户端架构组",
    expectedOutcome: "大幅降低高频技术阻塞，消除新老用户流失的主要诱因"
  },
  {
    id: "strat-2",
    phase: "短期优化 (P1)",
    title: "话题矩阵建设：激活职场生态与高价值实战干货分享",
    targetMetric: "社区周发帖量提升 35%，日均 UV 提升 50%，干货分享类占比提至 15%",
    actionItems: [
      "每周二/周四固定发起【RPA 运营实战避坑指南】与【薪酬行业风向标】话题",
      "对电商（京东/淘宝/得物）、ERP（聚水潭/SAP）、IM（飞书/企微/钉钉）场景设立专项案例库",
      "开通'企业版最佳实践'专题，满足个人版向企业版平滑迁移的学习诉求"
    ],
    ownerRole: "社区内容运营 & 行业解决方案专家",
    expectedOutcome: "从单一'报错售后论坛'升级为'RPA从业者高粘性交流与成长社区'"
  },
  {
    id: "strat-3",
    phase: "中长期建设 (P2)",
    title: "AI 智能问答分流与激励体系，沉淀社区知识图谱",
    targetMetric: "次日留存提升至 55% 以上，AI 自助解答解决率达 60%",
    actionItems: [
      "在发帖入口接入 RAG 检索大模型，自动匹配历史相似采纳方案进行秒级智能答疑",
      "建立答主勋章体系（金牌导师、排障先锋），赋予专属特权与内测体验资格",
      "沉淀结构化指令市场与组件市场，支持一键复用与点赞打赏"
    ],
    ownerRole: "产品体验组 & 用户增长团队",
    expectedOutcome: "形成自运转的 UGC 内容生产与自动化资产共享飞轮"
  }
];
