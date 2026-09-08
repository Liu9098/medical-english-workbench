/* ========================================
   课程核心数据 — 高职英语（三）涉外体检职场英语
   ======================================== */

const COURSE_DATA = {
  name: "高职英语（三）涉外体检职场英语",
  type: "公共英语拓展课程",
  totalHours: 18,
  taskCount: 9,
  methodology: "POA产出导向教学法",
  evaluationScope: "仅评价英语语言交际能力，不评判医学专业知识",
  className: "英语拓展班A班",
  studentCount: 36,
  semester: "2025-2026学年第二学期"
};

const TASKS = [
  {
    id: 1,
    name: "客户接待",
    fullName: "任务1：涉外客户接待",
    output: "涉外接待口头交际表达（口头产出）",
    outputType: "口头产出",
    color: "#3182ce",
    icon: "🏥",
    hours: 3,
    progress: 85,
    submitted: 32,
    pending: 4,
    keywords: ["reception", "registration", "greeting", "guiding"],
    templates: {
      pre: ["词汇闯关：接待高频词", "句式游戏：问候与引导句型", "预习微课：涉外体检流程"],
      in: ["AI情景口语：虚拟外籍客户接待", "角色扮演录音：前台接待对话", "线上抽签：接待情景分组"],
      post: ["口头产出任务：接待场景模拟录音", "同伴互评：接待表达观测表"]
    }
  },
  {
    id: 2,
    name: "检前告知",
    fullName: "任务2：检前告知准备",
    output: "检前告知与注意事项说明（口头产出）",
    outputType: "口头产出",
    color: "#e53e3e",
    icon: "📢",
    hours: 3,
    progress: 70,
    submitted: 25,
    pending: 11,
    keywords: ["pre-check", "fasting", "preparation", "reminder"],
    templates: {
      pre: ["词汇闯关：检前准备词汇", "句式游戏：告知与提醒句型", "预习微课：体检前注意事项"],
      in: ["AI情景口语：检前告知对话", "角色扮演录音：检前指导", "线上抽签：检前情景分组"],
      post: ["口头产出任务：检前告知录音", "同伴互评：告知表达观测表"]
    }
  },
  {
    id: 3,
    name: "信息问询",
    fullName: "任务3：健康信息问询",
    output: "英文健康信息记录单（表单书面产出）",
    outputType: "表单书面产出",
    color: "#38a169",
    icon: "📋",
    hours: 3,
    progress: 72,
    submitted: 28,
    pending: 8,
    keywords: ["inquiry", "medical history", "lifestyle", "form filling"],
    templates: {
      pre: ["词汇闯关：健康问询词汇", "句式游戏：信息采集句型", "预习微课：英文健康记录单结构"],
      in: ["AI情景口语：模拟问询对话", "角色扮演录音：护士-客户问询", "线上抽签：问询情景分组"],
      post: ["书面产出任务：填写英文健康信息记录单", "AI批改：表单语法与用词检查"]
    }
  },
  {
    id: 4,
    name: "流程引导",
    fullName: "任务4：现场流程引导",
    output: "现场流程引导与陪同说明（口头产出）",
    outputType: "口头产出",
    color: "#5a67d8",
    icon: "🚶",
    hours: 3,
    progress: 55,
    submitted: 20,
    pending: 16,
    keywords: ["guidance", "department", "escort", "queue"],
    templates: {
      pre: ["词汇闯关：流程引导词汇", "句式游戏：引导与陪同句型", "预习微课：体检中心科室分布"],
      in: ["AI情景口语：现场引导对话", "角色扮演录音：陪同引导", "线上抽签：引导情景分组"],
      post: ["口头产出任务：流程引导模拟录音", "同伴互评：引导表达观测表"]
    }
  },
  {
    id: 5,
    name: "报告解读",
    fullName: "任务5：体检报告解读",
    output: "体检报告口语转述录音（长篇口语产出）",
    outputType: "长篇口语产出",
    color: "#dd6b20",
    icon: "📊",
    hours: 3,
    progress: 55,
    submitted: 22,
    pending: 14,
    keywords: ["report interpretation", "explanation", "summary", "oral presentation"],
    templates: {
      pre: ["词汇闯关：体检报告高频词", "句式游戏：报告转述句型支架", "预习微课：报告口语转述技巧"],
      in: ["AI情景口语：报告解读模拟", "角色扮演录音：健康管理师转述报告", "线上抽签：报告转述分组"],
      post: ["口语产出任务：体检报告转述录音", "AI质检：三维口语评价报告"]
    }
  },
  {
    id: 6,
    name: "目标协商",
    fullName: "任务6：健康目标协商",
    output: "健康目标协商与行动方案（口头+书面复合产出）",
    outputType: "协商复合产出",
    color: "#0ea5e9",
    icon: "🎯",
    hours: 3,
    progress: 50,
    submitted: 18,
    pending: 18,
    keywords: ["goal", "target", "negotiation", "action plan"],
    templates: {
      pre: ["词汇闯关：目标协商词汇", "句式游戏：协商与承诺句型", "预习微课：SMART 健康目标"],
      in: ["AI情景口语：目标协商对话", "角色扮演录音：健康管理师-客户协商", "线上抽签：协商情景分组"],
      post: ["复合产出任务：健康目标与行动计划", "同伴互评：协商沟通观测表"]
    }
  },
  {
    id: 7,
    name: "膳食指导",
    fullName: "任务7：康养膳食指导",
    output: "中华康养膳食科普英文海报（翻译+口语复合产出）",
    outputType: "翻译+口语复合产出",
    color: "#805ad5",
    icon: "🥗",
    hours: 3,
    progress: 40,
    submitted: 16,
    pending: 20,
    keywords: ["dietary advice", "TCM diet", "poster design", "cultural translation"],
    templates: {
      pre: ["词汇闯关：膳食康养词汇", "句式游戏：膳食建议句型", "预习微课：中华康养膳食文化英译"],
      in: ["AI情景口语：膳食指导模拟对话", "角色扮演录音：营养师-客户指导", "线上抽签：膳食主题分组"],
      post: ["复合产出任务：英文膳食科普海报+口语解说", "AI批改：翻译质量与口语表达", "思政融入：中华康养文化输出"]
    }
  },
  {
    id: 8,
    name: "运动建议",
    fullName: "任务8：养生运动建议",
    output: "养生科普英文宣传文案（科普书面产出）",
    outputType: "科普书面产出",
    color: "#319795",
    icon: "🏃",
    hours: 3,
    progress: 20,
    submitted: 8,
    pending: 28,
    keywords: ["exercise advice", "wellness", "brochure", "health promotion"],
    templates: {
      pre: ["词汇闯关：运动养生词汇", "句式游戏：运动建议句型", "预习微课：科普文案写作规范"],
      in: ["AI情景口语：运动指导模拟", "角色扮演录音：教练-客户对话", "线上抽签：运动主题分组"],
      post: ["书面产出任务：养生科普英文宣传文案", "AI批改：语法、中式英语、用词检查"]
    }
  },
  {
    id: 9,
    name: "健康随访",
    fullName: "任务9：健康随访维持",
    output: "外籍客户健康随访英文提醒邮件（正式应用文产出）",
    outputType: "正式应用文产出",
    color: "#d69e2e",
    icon: "📧",
    hours: 3,
    progress: 0,
    submitted: 0,
    pending: 36,
    keywords: ["follow-up", "email writing", "reminder", "health maintenance"],
    templates: {
      pre: ["词汇闯关：随访邮件词汇", "句式游戏：正式邮件句型", "预习微课：英文商务/医疗邮件格式"],
      in: ["AI情景口语：随访沟通模拟", "角色扮演录音：电话随访对话", "线上抽签：随访情景分组"],
      post: ["书面产出任务：健康随访英文提醒邮件", "AI批改：邮件格式、语气、语法检查"]
    }
  }
];

/* AI角色扮演质检固定指令（完整版）— 存入素材库永久复用 */
const AI_QUALITY_CHECK_FULL = `你是高职公共英语课堂分析助手，分析健康管理师与外籍客户体检报告角色扮演英文对话，生成课堂AI质检参考报告。

【评价范围限定】
仅评价英语语言交际能力（听说读写译），不评判医学指标、诊疗方案的专业对错，不评判健康知识准确性。所有分析聚焦语言表达质量。

【三大评价维度】
1. 指标柔和专业表达
   - 体检指标英文表述是否准确、柔和、专业
   - 避免生硬直译，注意委婉语和专业术语使用
   - 数值描述是否规范、易懂

2. 人文共情问诊沟通
   - 是否体现关怀、耐心、尊重
   - 倾听与回应是否自然
   - 是否有安抚性语言和共情表达

3. 自然传播中式康养文化
   - 中华康养理念英文表达是否地道
   - 文化输出是否自然融入、不生硬
   - 中医/养生概念翻译是否准确且易懂

【输出格式】（适合教室大屏投影展示）

━━━━━━━━━━━━━━━━━━━━━━━━
  课堂AI质检参考报告
  （仅评英语表达 · 不评医学内容 · 不打分）
━━━━━━━━━━━━━━━━━━━━━━━━

一、表演亮点
  （列出3-5条语言表达方面的亮点）

二、待优化原句
  原句：[学生原话]
  问题：[语言问题说明，如语法/中式英语/用词不当/语气生硬等]

三、岗位标准替换句式
  替换句：[地道专业表达]
  说明：[替换理由及语言知识点]

【排版要求】
- 排版清晰、分块明确，适配教室大屏投影
- 中文说明为主，英文例句加粗突出
- 每条优化建议控制在2-3行以内，避免信息过载`;

/* 单次临时生成质检报告简易指令（课堂快速调取） */
const AI_QUALITY_CHECK_QUICK = `基于三大评价维度分析以下健康管理师与外籍客户角色扮演对话，生成简洁课堂质检参考。

评价维度：
1. 指标柔和专业表达
2. 人文共情问诊沟通
3. 自然传播中式康养文化

要求：
- 不打分
- 分亮点、待优化句子、地道替换句式三块
- 仅评价英语表达，不评判医学专业内容
- 排版简洁，适合大屏快速展示

对话文本：
【粘贴对话】`;

/* 示例AI质检报告（任务5报告解读） */
const SAMPLE_AI_REPORT = {
  task: "任务5：体检报告解读",
  student: "李明（健康管理师）& Sarah（外籍客户）",
  date: "2025-03-15",
  dimensions: [
    { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
    { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
    { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
  ],
  highlights: [
    "使用 'Your results look generally positive' 开场，语气柔和，避免了直报数据带来的紧张感",
    "在转述血压指标时运用 'slightly above the normal range' 表述，既专业又不引起恐慌",
    "结尾主动询问 'Do you have any questions about the results?'，体现了良好的服务意识"
  ],
  optimizations: [
    {
      original: "Your cholesterol is 6.2, it is too high, you must eat less.",
      issue: "表述过于直接生硬，缺乏专业柔和度；用词口语化（too high, eat less），不够专业"
    },
    {
      original: "I think you should do more exercise and don't eat oily food.",
      issue: "句式单调（I think you should...），指令性语气过强；'don't eat oily food' 中式英语痕迹明显"
    },
    {
      original: "Chinese medicine says you are wet inside, so you need to remove dampness.",
      issue: "'wet inside' 和 'remove dampness' 直译痕迹重，外籍客户难以理解中医'湿气'概念"
    }
  ],
  replacements: [
    {
      sentence: "Your cholesterol level is 6.2 mmol/L, which is slightly above the recommended range. We'd suggest making some dietary adjustments to help bring it back to a healthier level.",
      note: "用 'slightly above' 替代 'too high'，用 'dietary adjustments' 替代 'eat less'，体现专业柔和"
    },
    {
      sentence: "It might be beneficial to incorporate regular physical activity into your routine and opt for lighter, less oily options in your meals.",
      note: "用 'It might be beneficial' 弱化指令语气；'incorporate...into routine' 和 'opt for' 是更地道的健康建议表达"
    },
    {
      sentence: "In Traditional Chinese Medicine, there's a concept called 'internal dampness' (湿气), which is believed to be related to fatigue and digestion. Dietary adjustments can help restore your body's balance.",
      note: "先解释概念再关联症状，'restore your body's balance' 比 'remove dampness' 更易懂"
    }
  ]
};

/* 示例学生数据（旧 task1-6 成绩迁移到新任务编号：旧2→新3、旧3→新5、旧4→新7、旧5→新8、旧6→新9；新增 T2/T4/T6 暂记 0） */
const SAMPLE_STUDENTS = [
  { id: "S001", name: "李明", avatar: "李", task1: 92, task2: 0, task3: 88, task4: 0, task5: 85, task6: 0, task7: 78, task8: 0, task9: 0, total: 68, status: "active", weakness: "中式英语", strength: "口语流利" },
  { id: "S002", name: "王芳", avatar: "王", task1: 95, task2: 0, task3: 90, task4: 0, task5: 88, task6: 0, task7: 82, task8: 0, task9: 0, total: 71, status: "active", weakness: "词汇量", strength: "语法准确" },
  { id: "S003", name: "张伟", avatar: "张", task1: 78, task2: 0, task3: 82, task4: 0, task5: 70, task6: 0, task7: 65, task8: 0, task9: 0, total: 58, status: "warning", weakness: "口语紧张", strength: "书面表达" },
  { id: "S004", name: "刘洋", avatar: "刘", task1: 88, task2: 0, task3: 85, task4: 0, task5: 90, task6: 0, task7: 80, task8: 0, task9: 0, total: 68, status: "active", weakness: "发音", strength: "互动积极" },
  { id: "S005", name: "陈静", avatar: "陈", task1: 90, task2: 0, task3: 92, task4: 0, task5: 87, task6: 0, task7: 85, task8: 0, task9: 0, total: 70, status: "active", weakness: "语速过快", strength: "词汇丰富" },
  { id: "S006", name: "赵磊", avatar: "赵", task1: 72, task2: 0, task3: 75, task4: 0, task5: 68, task6: 0, task7: 60, task8: 0, task9: 0, total: 54, status: "warning", weakness: "基础薄弱", strength: "态度认真" },
  { id: "S007", name: "孙丽", avatar: "孙", task1: 85, task2: 0, task3: 88, task4: 0, task5: 82, task6: 0, task7: 78, task8: 0, task9: 0, total: 66, status: "active", weakness: "听力", strength: "表达清晰" },
  { id: "S008", name: "周强", avatar: "周", task1: 82, task2: 0, task3: 80, task4: 0, task5: 75, task6: 0, task7: 72, task8: 0, task9: 0, total: 61, status: "active", weakness: "语法", strength: "积极参与" }
];

/* 词汇闯关题库（首页快速版） */
const VOCAB_QUESTIONS = [
  { word: "blood pressure", phonetic: "/blʌd ˈpreʃər/", options: ["血压", "血糖", "血型", "脉搏"], correct: 0, task: 1 },
  { word: "cholesterol", phonetic: "/kəˈlestərɒl/", options: ["胆固醇", "甘油三酯", "血红蛋白", "白细胞"], correct: 0, task: 5 },
  { word: "registration", phonetic: "/ˌredʒɪˈstreɪʃn/", options: ["挂号", "出院", "转诊", "复诊"], correct: 0, task: 1 },
  { word: "dietary", phonetic: "/ˈdaɪətəri/", options: ["饮食的", "药物的", "运动的", "心理的"], correct: 0, task: 7 },
  { word: "follow-up", phonetic: "/ˈfɒləʊ ʌp/", options: ["随访", "急救", "手术", "住院"], correct: 0, task: 9 },
  { word: "vital signs", phonetic: "/ˈvaɪtl saɪnz/", options: ["生命体征", "过敏史", "家族史", "手术史"], correct: 0, task: 3 },
  { word: "wellness", phonetic: "/ˈwelnəs/", options: ["健康养生", "疾病治疗", "康复训练", "心理辅导"], correct: 0, task: 8 },
  { word: "herbal medicine", phonetic: "/ˈhɜːbl ˈmedsn/", options: ["草药", "西药", "疫苗", "抗生素"], correct: 0, task: 7 }
];

/* 句式游戏题库（首页快速版） */
const SENTENCE_QUESTIONS = [
  {
    scenario: "接待外籍客户时，你想说'请这边走，我先带您去登记处'",
    options: [
      "Please go this way, I take you to register first.",
      "This way, please. Let me guide you to the registration desk first.",
      "You go here, registration is there.",
      "Walk this way, register desk is ahead."
    ],
    correct: 1,
    task: 1,
    explanation: "使用 'This way, please' 更礼貌；'guide you to' 比 'take you to' 更专业"
  },
  {
    scenario: "转述体检报告时，你想说'您的血压稍微偏高'",
    options: [
      "Your blood pressure is too high, very dangerous.",
      "Your blood pressure is a bit high.",
      "Your blood pressure is slightly above the normal range.",
      "You have high blood pressure problem."
    ],
    correct: 2,
    task: 5,
    explanation: "'slightly above the normal range' 最专业柔和，避免引起恐慌"
  },
  {
    scenario: "给膳食建议时，你想说'建议您多吃些温性食物'",
    options: [
      "You should eat more warm food, Chinese medicine says so.",
      "It might be helpful to include more warm-natured foods in your diet.",
      "Eat warm food, good for your body.",
      "Chinese doctor says eat warm things."
    ],
    correct: 1,
    task: 7,
    explanation: "'It might be helpful to...' 语气委婉；'warm-natured foods' 是中医'温性食物'的标准英译"
  }
];

/* 资源素材库分类 */
const RESOURCE_CATEGORIES = [
  {
    id: "courseware",
    name: "课件资源",
    icon: "📑",
    color: "#3182ce",
    items: [
      { title: "任务1 客户接待 PPT", type: "PPT", task: 1, desc: "含涉外接待流程、高频句型、情景对话" },
      { title: "任务2 检前告知 PPT", type: "PPT", task: 2, desc: "体检前注意事项、空腹与证件准备说明" },
      { title: "任务3 信息问询 PPT", type: "PPT", task: 3, desc: "英文健康记录单结构、问询技巧" },
      { title: "任务4 现场引导 PPT", type: "PPT", task: 4, desc: "中心科室分布、陪同引导话术" },
      { title: "任务5 报告解读 PPT", type: "PPT", task: 5, desc: "体检报告口语转述方法与句型支架" },
      { title: "任务6 目标协商 PPT", type: "PPT", task: 6, desc: "SMART 健康目标与行动方案制定" },
      { title: "任务7 膳食指导 PPT", type: "PPT", task: 7, desc: "中华康养膳食文化英译技巧" },
      { title: "任务8 运动建议 PPT", type: "PPT", task: 8, desc: "科普文案写作规范与范文" },
      { title: "任务9 健康随访 PPT", type: "PPT", task: 9, desc: "英文随访邮件格式与写作要点" }
    ]
  },
  {
    id: "sentence_scaffolds",
    name: "句型支架",
    icon: "🔤",
    color: "#38a169",
    items: [
      { title: "接待引导句型卡", type: "PDF", task: 1, desc: "问候、引导、登记高频句型" },
      { title: "检前告知句型卡", type: "PDF", task: 2, desc: "注意事项、提醒告知句型" },
      { title: "问询信息句型卡", type: "PDF", task: 3, desc: "个人信息、病史、生活方式问询句型" },
      { title: "现场引导句型卡", type: "PDF", task: 4, desc: "陪同、楼层、叫号引导句型" },
      { title: "报告解读句型卡", type: "PDF", task: 5, desc: "指标描述、建议给出、安抚句型" },
      { title: "目标协商句型卡", type: "PDF", task: 6, desc: "目标提议、征询承诺句型" },
      { title: "膳食指导句型卡", type: "PDF", task: 7, desc: "饮食建议、文化解释句型" },
      { title: "运动建议句型卡", type: "PDF", task: 8, desc: "运动处方、养生科普句型" },
      { title: "随访邮件句型卡", type: "PDF", task: 9, desc: "邮件开头、提醒、结尾句型" }
    ]
  },
  {
    id: "samples",
    name: "范文模板",
    icon: "📝",
    color: "#dd6b20",
    items: [
      { title: "检前告知说明范文", type: "DOC", task: 2, desc: "检前注意事项告知稿范本" },
      { title: "英文健康信息记录单范本", type: "DOC", task: 3, desc: "完整填写示范，含注释" },
      { title: "现场流程引导范文", type: "DOC", task: 4, desc: "陪同引导讲解稿范本" },
      { title: "体检报告口语转述范文", type: "DOC", task: 5, desc: "3分钟转述稿范文" },
      { title: "健康目标协商范文", type: "DOC", task: 6, desc: "目标协商与行动计划范本" },
      { title: "中华膳食科普海报范文", type: "DOC", task: 7, desc: "含排版设计与英文文案" },
      { title: "养生科普宣传文案范文", type: "DOC", task: 8, desc: "200词科普短文范文" },
      { title: "健康随访英文邮件范文", type: "DOC", task: 9, desc: "正式邮件格式范文" }
    ]
  },
  {
    id: "rubrics",
    name: "互评观测表",
    icon: "✅",
    color: "#805ad5",
    items: [
      { title: "口语互评观测表（通用）", type: "XLS", task: 0, desc: "三维评价维度，课堂同伴互评用" },
      { title: "书面互评观测表（通用）", type: "XLS", task: 0, desc: "语法、用词、结构互评表" },
      { title: "角色扮演互评表", type: "XLS", task: 0, desc: "健康管理师-客户角色扮演评价" }
    ]
  },
  {
    id: "ai_prompts",
    name: "AI评测指令",
    icon: "🤖",
    color: "#319795",
    items: [
      { title: "AI角色扮演质检指令（完整版）", type: "TXT", task: 0, desc: "永久复用，三大维度评价，适合大屏展示" },
      { title: "AI质检快速调取指令", type: "TXT", task: 0, desc: "课堂快速生成简洁质检报告" },
      { title: "书面作业AI批改指令", type: "TXT", task: 0, desc: "语法、中式英语、用词缺陷检查" }
    ]
  },
  {
    id: "cultural",
    name: "中华康养思政素材",
    icon: "🌿",
    color: "#d69e2e",
    items: [
      { title: "中医养生理念英文表述集", type: "DOC", task: 0, desc: "阴阳、气血、经络等概念标准英译" },
      { title: "中华膳食文化英译素材", type: "DOC", task: 7, desc: "药食同源、四气五味等文化概念" },
      { title: "传统运动养生英文介绍", type: "DOC", task: 8, desc: "太极、八段锦等英文科普材料" },
      { title: "中医药文化对外传播案例", type: "DOC", task: 0, desc: "中医药国际传播成功案例" }
    ]
  }
];

/* 班级整体学情数据 */
const CLASS_STATS = {
  totalStudents: 36,
  activeStudents: 30,
  warningStudents: 6,
  totalSubmissions: 134,
  pendingReview: 18,
  avgScore: 68.5,
  taskCompletion: [89, 70, 78, 55, 61, 50, 44, 22, 0],
  weaknessDistribution: {
    "中式英语": 12,
    "词汇量不足": 8,
    "语法错误": 10,
    "口语紧张": 6,
    "发音问题": 5,
    "听力理解": 4
  },
  weeklyActivity: [12, 18, 22, 15, 28, 20, 19]
};

/* ===== 按任务组织的工具内容（用于工具箱任务选择器） ===== */

/* 词汇闯关题库（按任务分类） */
const VOCAB_BY_TASK = {
  1: [
    { word: "registration", phonetic: "/ˌredʒɪˈstreɪʃn/", options: ["挂号", "出院", "转诊", "复诊"], correct: 0 },
    { word: "reception desk", phonetic: "/rɪˈsepʃn desk/", options: ["接待前台", "药房", "手术室", "病房"], correct: 0 },
    { word: "appointment", phonetic: "/əˈpɔɪntmənt/", options: ["预约", "急诊", "住院", "转院"], correct: 0 },
    { word: "ID card", phonetic: "/aɪ diː kɑːd/", options: ["身份证件", "病历本", "检查单", "医保卡"], correct: 0 },
    { word: "blood pressure", phonetic: "/blʌd ˈpreʃər/", options: ["血压", "血糖", "血型", "脉搏"], correct: 0 },
    { word: "guide", phonetic: "/ɡaɪd/", options: ["引导", "阻拦", "离开", "等待"], correct: 0 }
  ],
  2: [
    { word: "fasting", phonetic: "/ˈfɑːstɪŋ/", options: ["空腹", "饱腹", "进食", "饮水"], correct: 0 },
    { word: "pre-check", phonetic: "/ˈpriː tʃek/", options: ["检前准备", "检后", "复查", "体检"], correct: 0 },
    { word: "questionnaire", phonetic: "/ˌkwestʃəˈneə(r)/", options: ["问卷", "处方", "报告", "账单"], correct: 0 },
    { word: "preparation", phonetic: "/ˌprepəˈreɪʃn/", options: ["准备", "恢复", "治疗", "手术"], correct: 0 },
    { word: "reminder", phonetic: "/rɪˈmaɪndə(r)/", options: ["提醒", "警告", "通知", "建议"], correct: 0 },
    { word: "appointment", phonetic: "/əˈpɔɪntmənt/", options: ["预约", "急诊", "挂号", "缴费"], correct: 0 }
  ],
  3: [
    { word: "vital signs", phonetic: "/ˈvaɪtl saɪnz/", options: ["生命体征", "过敏史", "家族史", "手术史"], correct: 0 },
    { word: "medical history", phonetic: "/ˈmedɪkl ˈhɪstri/", options: ["病史", "体检报告", "化验单", "处方"], correct: 0 },
    { word: "allergy", phonetic: "/ˈælədʒi/", options: ["过敏", "感染", "炎症", "肿瘤"], correct: 0 },
    { word: "medication", phonetic: "/ˌmedɪˈkeɪʃn/", options: ["用药", "手术", "康复", "住院"], correct: 0 },
    { word: "lifestyle", phonetic: "/ˈlaɪfstaɪl/", options: ["生活方式", "饮食习惯", "运动习惯", "睡眠习惯"], correct: 0 },
    { word: "symptom", phonetic: "/ˈsɪmptəm/", options: ["症状", "病因", "诊断", "治疗"], correct: 0 }
  ],
  4: [
    { word: "department", phonetic: "/dɪˈpɑːtmənt/", options: ["科室", "病房", "药房", "前台"], correct: 0 },
    { word: "waiting area", phonetic: "/ˈweɪtɪŋ ˈeəriə/", options: ["等候区", "手术室", "检查室", "诊室"], correct: 0 },
    { word: "escort", phonetic: "/ˈeskɔːt/", options: ["陪同引导", "阻拦", "离开", "等待"], correct: 0 },
    { word: "queue", phonetic: "/kjuː/", options: ["排队", "插队", "离开", "休息"], correct: 0 },
    { word: "floor", phonetic: "/flɔː(r)/", options: ["楼层", "房间", "电梯", "楼梯"], correct: 0 },
    { word: "registration desk", phonetic: "/ˌredʒɪˈstreɪʃn desk/", options: ["登记台", "药房", "收费处", "咨询台"], correct: 0 }
  ],
  5: [
    /* ===== 难度一（初级）：缩写 ↔ 全称 / 中文 对应（20 题） ===== */
    { word: "TC 的全称是？", phonetic: "", options: ["Total Calcium", "Total Cholesterol", "Triglyceride Count", "Target Cholesterol"], correct: 1, level: 1, explain: "TC 是 Total Cholesterol（总胆固醇）的缩写，为血脂核心指标之一，升高提示血脂异常。" },
    { word: "LDL-C 的中文是？", phonetic: "", options: ["高密度脂蛋白胆固醇", "低密度脂蛋白胆固醇", "总胆固醇", "甘油三酯"], correct: 1, level: 1, explain: "LDL-C = Low-Density Lipoprotein Cholesterol，俗称“坏胆固醇”，过高易致动脉粥样硬化。" },
    { word: "FBG 代表？", phonetic: "", options: ["Fasting Blood Glucose", "Full Blood Group", "Free Body Growth", "Fast Breathing Grade"], correct: 0, level: 1, explain: "FBG = Fasting Blood Glucose（空腹血糖），是糖尿病筛查的基础指标。" },
    { word: "UA 是哪项指标？", phonetic: "", options: ["Uric Acid", "Urine Album", "Upper Arm", "Unit Assay"], correct: 0, level: 1, explain: "UA = Uric Acid（尿酸），升高与痛风密切相关。" },
    { word: "BP 的英文全称是？", phonetic: "", options: ["Blood Protein", "Blood Pressure", "Body Pulse", "Breath Power"], correct: 1, level: 1, explain: "BP = Blood Pressure（血压），常以 收缩压/舒张压 表示，如 120/80 mmHg。" },
    { word: "HDL-C 的中文是？", phonetic: "", options: ["低密度脂蛋白胆固醇", "高密度脂蛋白胆固醇", "血红蛋白", "血尿素氮"], correct: 1, level: 1, explain: "HDL-C = High-Density Lipoprotein Cholesterol，俗称“好胆固醇”，有助清除血管脂质。" },
    { word: "TG 代表？", phonetic: "", options: ["Total Glucose", "Triglyceride", "Thyroid Gland", "Target Group"], correct: 1, level: 1, explain: "TG = Triglyceride（甘油三酯），过高会增加胰腺炎与心血管风险。" },
    { word: "HbA1c 的中文是？", phonetic: "", options: ["糖化血红蛋白", "血红蛋白", "空腹血糖", "总胆固醇"], correct: 0, level: 1, explain: "HbA1c = Glycated Hemoglobin（糖化血红蛋白），反映近 2–3 个月平均血糖。" },
    { word: "ALT 是？", phonetic: "", options: ["谷草转氨酶", "丙氨酸氨基转移酶（谷丙转氨酶）", "肌酐", "尿酸"], correct: 1, level: 1, explain: "ALT = Alanine Aminotransferase（谷丙转氨酶），主要存在于肝脏，升高提示肝细胞损伤。" },
    { word: "AST 的全称是？", phonetic: "", options: ["Aspartate Aminotransferase", "Alanine Transfer", "Artery Stiffness", "Active Sugar Test"], correct: 0, level: 1, explain: "AST = Aspartate Aminotransferase（谷草转氨酶），与 ALT 同用于评估肝功能。" },
    { word: "Cr 代表？", phonetic: "", options: ["Creatinine", "Calcium", "Cholesterol", "Count"], correct: 0, level: 1, explain: "Cr = Creatinine（肌酐），经肾脏排泄，是评估肾功能的关键指标。" },
    { word: "BUN 的中文是？", phonetic: "", options: ["血尿素氮", "血糖", "胆红素", "总蛋白"], correct: 0, level: 1, explain: "BUN = Blood Urea Nitrogen（血尿素氮），与 Cr 同看可判断肾损程度。" },
    { word: "WBC 是？", phonetic: "", options: ["白细胞", "红细胞", "血小板", "血红蛋白"], correct: 0, level: 1, explain: "WBC = White Blood Cell（白细胞），参与免疫，计数异常提示感染或血液病。" },
    { word: "RBC 的中文是？", phonetic: "", options: ["红细胞", "白细胞", "血小板", "血糖"], correct: 0, level: 1, explain: "RBC = Red Blood Cell（红细胞），负责携氧，减少致贫血。" },
    { word: "Hb / Hgb 代表？", phonetic: "", options: ["Hemoglobin", "Hormone", "Hepatitis", "Hematology"], correct: 0, level: 1, explain: "Hb / Hgb = Hemoglobin（血红蛋白），降低即贫血。" },
    { word: "PLT 是？", phonetic: "", options: ["血小板", "血浆", "蛋白", "胰酶"], correct: 0, level: 1, explain: "PLT = Platelet（血小板），参与凝血，过低易出血、过高易血栓。" },
    { word: "BMI 的全称是？", phonetic: "", options: ["Body Mass Index", "Blood Mass Indicator", "Basic Metabolic Index", "Body Measurement Item"], correct: 0, level: 1, explain: "BMI = Body Mass Index（体重指数）= 体重(kg) / 身高(m)²，用于判断超重肥胖。" },
    { word: "HR 的中文是？", phonetic: "", options: ["心率", "呼吸", "体温", "血压"], correct: 0, level: 1, explain: "HR = Heart Rate（心率），正常约 60–100 次/分。" },
    { word: "Temp 代表？", phonetic: "", options: ["Temperature", "Tension", "Tendon", "Tenancy"], correct: 0, level: 1, explain: "Temp = Temperature（体温），腋下正常约 36–37℃。" },
    { word: "Glu 是？", phonetic: "", options: ["Glucose", "Globulin", "Glutamate", "Glucagon"], correct: 0, level: 1, explain: "Glu = Glucose（葡萄糖），即血糖。" },
    /* ===== 难度二（中级）：语境、搭配与判断（20 题） ===== */
    { word: "报告中 'LDL-C is elevated' 意思是？", phonetic: "", options: ["低密度脂蛋白胆固醇正常", "低密度脂蛋白胆固醇升高", "高密度脂蛋白胆固醇升高", "总胆固醇降低"], correct: 1, level: 2, explain: "elevated 意为“升高的”；LDL-C 升高是血脂异常的核心表现。" },
    { word: "'FBG is within the normal range' 表示空腹血糖？", phonetic: "", options: ["偏高", "偏低", "在正常范围内", "无法检测"], correct: 2, level: 2, explain: "within the normal range 即“在正常范围内”，属理想结果。" },
    { word: "想说'您的血压偏高'，正确英文是？", phonetic: "", options: ["Your blood pressure is low.", "Your blood pressure is slightly high.", "Your BP is normal.", "Your pressure is good."], correct: 1, level: 2, explain: "slightly high 表“略高”，是门诊常用的委婉表达。" },
    { word: "下列哪项属于'血脂'类指标？", phonetic: "", options: ["ALT", "TC", "WBC", "Temp"], correct: 1, level: 2, explain: "TC、TG、LDL-C、HDL-C 均属血脂（blood lipids）；ALT 为肝酶，WBC 属血常规，Temp 为体温。" },
    { word: "体检报告中 'borderline' 通常指？", phonetic: "", options: ["正常", "异常", "临界（接近异常但未超标）", "危急"], correct: 2, level: 2, explain: "borderline 指介于正常与异常之间，需关注但尚未超标。" },
    { word: "提示患者'生活方式调整优先'，正确表达是？", phonetic: "", options: ["Medicine comes first.", "Lifestyle changes come first.", "Surgery is needed.", "No action needed."], correct: 1, level: 2, explain: "Lifestyle changes come first 用于指标轻度异常时，首选生活方式干预而非用药。" },
    { word: "HbA1c 主要用于评估？", phonetic: "", options: ["肝功能", "近 2–3 个月血糖控制", "肾功能", "血脂"], correct: 1, level: 2, explain: "HbA1c 不受单次进餐影响，反映近 2–3 个月血糖控制。" },
    { word: "'reference range' 的中文是？", phonetic: "", options: ["参考范围", "报告范围", "固定正常范围", "无意义数值"], correct: 0, level: 2, explain: "reference range 即“参考范围”，报告据此判读高低。" },
    { word: "哪项指标升高常提示痛风风险？", phonetic: "", options: ["UA", "HR", "RBC", "PLT"], correct: 0, level: 2, explain: "尿酸（UA）过高会在关节析出结晶，诱发痛风。" },
    { word: "'These results are essentially normal.' 意思是？", phonetic: "", options: ["结果完全异常", "结果基本正常", "需要立即治疗", "无法判断"], correct: 1, level: 2, explain: "essentially 意为“基本上”，比 completely 更地道且留有余地。" },
    { word: "ALT、AST 升高最常见提示？", phonetic: "", options: ["肾功能异常", "肝功能异常", "血糖异常", "血常规异常"], correct: 1, level: 2, explain: "二者为肝酶，升高常见于肝炎、脂肪肝等肝功能异常。" },
    { word: "想说'三个月后复查'，正确英文是？", phonetic: "", options: ["Check now.", "Recheck in three months.", "Never check.", "Check tomorrow."], correct: 1, level: 2, explain: "recheck 即“复查”，用于随访轻度异常指标。" },
    { word: "下列哪组都是'血常规'指标？", phonetic: "", options: ["WBC, RBC, Hb, PLT", "TC, TG, LDL-C", "ALT, AST", "Cr, BUN"], correct: 0, level: 2, explain: "WBC、RBC、Hb、PLT 同属血常规（CBC），分别评估感染、贫血与凝血。" },
    { word: "'Your BMI indicates overweight.' 意思是？", phonetic: "", options: ["体重正常", "体重过轻", "体重指数提示超重", "肌肉量高"], correct: 2, level: 2, explain: "indicate 表“提示/表明”，overweight 即超重。" },
    { word: "指标后标 'H'（如 TC H）通常表示？", phonetic: "", options: ["High（偏高）", "Low（偏低）", "Normal", "Hint"], correct: 0, level: 2, explain: "报告用 H（High）标注指标偏高，L（Low）标注偏低。" },
    { word: "指标后标 'L' 通常表示？", phonetic: "", options: ["High", "Low（偏低）", "Level", "Limit"], correct: 1, level: 2, explain: "L 代表 Low，提示该指标低于参考下限。" },
    { word: "想说'请减少高盐高脂食物'，正确表达是？", phonetic: "", options: ["Eat more salt.", "Please reduce salty and fatty food.", "Drink more oil.", "No diet change."], correct: 1, level: 2, explain: "reduce 表“减少”，salty and fatty food 即高盐高脂饮食。" },
    { word: "下列哪项与'肾功能'直接相关？", phonetic: "", options: ["Cr", "HR", "Temp", "WBC"], correct: 0, level: 2, explain: "Cr、BUN 直接反映肾脏滤过与排泄功能。" },
    { word: "'abnormal' 的反义词是？", phonetic: "", options: ["normal", "high", "low", "borderline"], correct: 0, level: 2, explain: "abnormal（异常的）反义词是 normal（正常的）。" },
    { word: "体检报告中 'flag' 一般指？", phonetic: "", options: ["异常标记", "国旗", "单位", "参考值"], correct: 0, level: 2, explain: "flag 在体检报告中指异常项的醒目标记。" },
    /* ===== 难度三（高级）：报告解读与临床表达（20 题） ===== */
    { word: "患者报告：BP 152/94 mmHg，BMI 28.4，LDL-C 4.3。最恰当的总结是？", phonetic: "", options: ["All results are normal.", "He has stage 2 hypertension, overweight and high LDL cholesterol.", "Only sugar is high.", "Kidney problem only."], correct: 1, level: 3, explain: "152/94 属 2 级高血压，BMI≥28 为肥胖，LDL-C 4.3 偏高，三者并列需综合干预。" },
    { word: "向患者解释 LDL-C 升高，最合适的一句话是？", phonetic: "", options: ["Your good cholesterol is high.", "Your LDL (bad) cholesterol is elevated; we should cut fatty food.", "Your blood pressure is fine.", "You need no change."], correct: 1, level: 3, explain: "直接点明“坏胆固醇”升高并给出饮食建议，沟通最有效。" },
    { word: "报告：FBG 6.9 mmol/L，HbA1c 6.5%。最可能是？", phonetic: "", options: ["正常", "糖尿病前期（prediabetes）", "低血糖", "肝功能异常"], correct: 1, level: 3, explain: "空腹血糖 6.1–6.9、HbA1c 5.7–6.4% 属 prediabetes（糖尿病前期）。" },
    { word: "'No medicine for now; lifestyle change comes first.' 适用情境是？", phonetic: "", options: ["指标严重异常需立刻用药", "尚不需用药、先调生活方式", "已痊愈", "需手术"], correct: 1, level: 3, explain: "适用于轻度异常、尚未达到用药指征时，先调生活方式。" },
    { word: "患者问 'Is my cholesterol OK?'，报告 TC 5.8（参考上限 5.2）、HDL-C 1.0。应如何回答？", phonetic: "", options: ["Yes, perfectly fine.", "Total cholesterol is a bit high; HDL is at the low end—let's watch diet.", "No problem at all.", "You need insulin."], correct: 1, level: 3, explain: "总胆固醇略超上限、HDL 处低位，应建议注意饮食而非断言正常。" },
    { word: "报告 UA 480 µmol/L（参考上限 420），男性患者。应提醒？", phonetic: "", options: ["多喝水、少饮酒、控嘌呤，防痛风", "立即手术", "无事项", "只补蛋白"], correct: 0, level: 3, explain: "男性尿酸>420 为升高，420–480 需饮食控制（少酒、控嘌呤）防痛风。" },
    { word: "'Your liver enzymes ALT and AST are mildly elevated.' 提示？", phonetic: "", options: ["肝功能轻度异常", "肾功能异常", "血糖高", "血压高"], correct: 0, level: 3, explain: "mildly elevated 即“轻度升高”，提示肝细胞轻度损伤。" },
    { word: "想向患者说明'这些异常主要源于不健康生活方式'，正确表达是？", phonetic: "", options: ["They come from a healthy lifestyle.", "All three problems come from an unhealthy lifestyle.", "They are genetic only.", "No cause."], correct: 1, level: 3, explain: "用 unhealthy lifestyle 概括饮食与运动不足等共因。" },
    { word: "报告：Cr 正常、BUN 正常。可总结为？", phonetic: "", options: ["肾功能基本正常", "肾衰竭", "肾炎", "无法判断"], correct: 0, level: 3, explain: "两项肾功指标正常，提示肾脏滤过功能基本正常。" },
    { word: "向患者解释 'borderline high' 最清楚的是？", phonetic: "", options: ["正常", "略高于上限、需关注但暂未确诊异常", "危急", "越低越好"], correct: 1, level: 3, explain: "比“异常”轻一档，强调略超上限、需随访观察。" },
    { word: "患者 BMI 28.4，最恰当的健康建议开头是？", phonetic: "", options: ["You should lose weight with regular exercise.", "Eat more sugar.", "Rest all day.", "No advice."], correct: 0, level: 3, explain: "You should lose weight with regular exercise 是标准体重管理建议开场。" },
    { word: "'Recheck blood pressure and lipid profile in 3 months.' 的中文是？", phonetic: "", options: ["立即住院", "三个月后复查血压和血脂", "永不复查", "只查血糖"], correct: 1, level: 3, explain: "lipid profile 即“血脂谱”，涵盖 TC/TG/LDL/HDL。" },
    { word: "报告中 'within normal limits' 与下列哪项意思最接近？", phonetic: "", options: ["abnormal", "normal range", "critical", "borderline"], correct: 1, level: 3, explain: "与 normal range 同义，均指“在正常范围内”。" },
    { word: "患者 TC、TG、LDL-C 均高，HDL-C 低。最贴切的总结是？", phonetic: "", options: ["血脂多项异常（高总胆固醇/甘油三酯/低密度、低高密度）", "全部正常", "仅血压高", "仅血糖高"], correct: 0, level: 3, explain: "综合判读为血脂紊乱（dyslipidemia）。" },
    { word: "用英语提醒'太极是不错的开始（运动）'，正确的是？", phonetic: "", options: ["Tai Chi is a good start.", "Sleep is a good start.", "Sugar is a good start.", "Surgery is a good start."], correct: 0, level: 3, explain: "Tai Chi（太极）是低强度运动，适合作为运动干预起点。" },
    { word: "报告标注多个 'H'，你应优先告诉患者？", phonetic: "", options: ["全部正常", "有几项指标偏高，需要关注生活方式", "无需理会", "立刻住院"], correct: 1, level: 3, explain: "多个 H 提示多项指标偏高，优先生活方式干预。" },
    { word: "'Hemoglobin A1c' 的常用缩写是？", phonetic: "", options: ["HbA1c", "Hgb-A", "HC1", "HBA"], correct: 0, level: 3, explain: "糖化血红蛋白英文全称的通用缩写即 HbA1c。" },
    { word: "患者担心 'high cholesterol'，你看到 HDL-C 高、LDL-C 正常，应？", phonetic: "", options: ["说全部坏", "解释 HDL 是'好'胆固醇，目前 LDL 正常，总体不错", "开药", "说严重"], correct: 1, level: 3, explain: "应区分好/坏胆固醇，避免误读为全面异常。" },
    { word: "想表达'需要规律运动，每周约 150 分钟中等强度'，正确的是？", phonetic: "", options: ["150 min/week of moderate exercise.", "No exercise needed.", "Sleep 150 min.", "Eat 150 min."], correct: 0, level: 3, explain: "moderate exercise 即中等强度运动，是权威推荐运动量。" },
    { word: "给'超重 + 高血压 + 高血脂'患者的综合结语，最合适的是？", phonetic: "", options: ["Medicine first, no lifestyle.", "Cut salty/fatty food, lose weight, exercise regularly; recheck in 3 months.", "Do nothing.", "Surgery now."], correct: 1, level: 3, explain: "综合生活方式处方：低盐低脂饮食、减重、规律运动、3 月后复查。" }
  ],
  6: [
    { word: "goal", phonetic: "/ɡəʊl/", options: ["目标", "问题", "症状", "诊断"], correct: 0 },
    { word: "target", phonetic: "/ˈtɑːɡɪt/", options: ["目标值", "指标", "限值", "范围"], correct: 0 },
    { word: "negotiate", phonetic: "/nɪˈɡəʊʃieɪt/", options: ["协商", "命令", "拒绝", "忽视"], correct: 0 },
    { word: "commitment", phonetic: "/kəˈmɪtmənt/", options: ["承诺", "犹豫", "放弃", "拖延"], correct: 0 },
    { word: "action plan", phonetic: "/ˈækʃn plæn/", options: ["行动方案", "随意计划", "空想", "等待"], correct: 0 },
    { word: "follow-up", phonetic: "/ˈfɒləʊ ʌp/", options: ["随访", "急救", "手术", "住院"], correct: 0 }
  ],
  7: [
    { word: "dietary", phonetic: "/ˈdaɪətəri/", options: ["饮食的", "药物的", "运动的", "心理的"], correct: 0 },
    { word: "herbal medicine", phonetic: "/ˈhɜːbl ˈmedsn/", options: ["草药/中药", "西药", "疫苗", "抗生素"], correct: 0 },
    { word: "warm-natured", phonetic: "/wɔːm ˈneɪtʃəd/", options: ["温性的", "寒性的", "平性的", "热性的"], correct: 0 },
    { word: "balanced diet", phonetic: "/ˈbælənst ˈdaɪət/", options: ["均衡饮食", "清淡饮食", "流食", "素食"], correct: 0 },
    { word: "nutrition", phonetic: "/njuˈtrɪʃn/", options: ["营养", "水分", "纤维", "热量"], correct: 0 },
    { word: "dampness", phonetic: "/ˈdæmpnəs/", options: ["湿气", "寒气", "热气", "火气"], correct: 0 }
  ],
  8: [
    { word: "wellness", phonetic: "/ˈwelnəs/", options: ["健康养生", "疾病治疗", "康复训练", "心理辅导"], correct: 0 },
    { word: "moderate exercise", phonetic: "/ˈmɒdərət ˈeksəsaɪz/", options: ["适度运动", "剧烈运动", "静态拉伸", "力量训练"], correct: 0 },
    { word: "aerobics", phonetic: "/eəˈrəʊbɪks/", options: ["有氧运动", "无氧运动", "伸展运动", "平衡训练"], correct: 0 },
    { word: "Tai Chi", phonetic: "/taɪ tʃiː/", options: ["太极", "瑜伽", "普拉提", "气功"], correct: 0 },
    { word: "endurance", phonetic: "/ɪnˈdjʊərəns/", options: ["耐力", "速度", "力量", "柔韧"], correct: 0 },
    { word: "Baduanjin", phonetic: "/bɑːˈdwɑːndʒɪn/", options: ["八段锦", "五禽戏", "易筋经", "六字诀"], correct: 0 }
  ],
  9: [
    { word: "follow-up", phonetic: "/ˈfɒləʊ ʌp/", options: ["随访", "急救", "手术", "住院"], correct: 0 },
    { word: "reminder", phonetic: "/rɪˈmaɪndər/", options: ["提醒", "通知", "警告", "建议"], correct: 0 },
    { word: "appointment", phonetic: "/əˈpɔɪntmənt/", options: ["预约", "急诊", "挂号", "缴费"], correct: 0 },
    { word: "recovery", phonetic: "/rɪˈkʌvəri/", options: ["康复", "复发", "恶化", "感染"], correct: 0 },
    { word: "compliance", phonetic: "/kəmˈplaɪəns/", options: ["依从性", "副作用", "耐药性", "过敏反应"], correct: 0 },
    { word: "lifestyle adjustment", phonetic: "/ˈlaɪfstaɪl əˈdʒʌstmənt/", options: ["生活方式调整", "药物调整", "饮食调整", "运动调整"], correct: 0 }
  ]
};

/* 句式游戏（按任务分类） */
const SENTENCES_BY_TASK = {
  1: [
    {
      scenario: "接待外籍客户时，你想说'请这边走，我先带您去登记处'",
      options: [
        "Please go this way, I take you to register first.",
        "This way, please. Let me guide you to the registration desk first.",
        "You go here, registration is there.",
        "Walk this way, register desk is ahead."
      ],
      correct: 1,
      explanation: "'This way, please' 更礼貌；'guide you to' 比 'take you to' 更专业"
    },
    {
      scenario: "客户到达时，你想说'请问您有预约吗？'",
      options: [
        "You have appointment?",
        "Do you have an appointment with us?",
        "You appointment?",
        "Appointment or not?"
      ],
      correct: 1,
      explanation: "一般疑问句需用助动词 do/does；'with us' 增加礼貌感"
    },
    {
      scenario: "引导客户到等候区时，想说'请您在等候区稍坐片刻'",
      options: [
        "Sit here and wait.",
        "Please take a seat in the waiting area.",
        "You wait here.",
        "Wait there."
      ],
      correct: 1,
      explanation: "'take a seat in the waiting area' 是标准接待用语"
    }
  ],
  2: [
    {
      scenario: "告知客户体检前需空腹，最地道的说法是",
      options: [
        "You must not eat 8 hours before.",
        "Please refrain from eating or drinking for 8 hours before the check-up.",
        "Don't eat, OK?",
        "No food before test."
      ],
      correct: 1,
      explanation: "'refrain from eating or drinking' 正式礼貌；说明时长清晰"
    },
    {
      scenario: "提醒客户携带证件与预约单，想说'请携带您的身份证件和预约单'",
      options: [
        "Bring your card and paper.",
        "Please bring your ID and appointment slip with you.",
        "You take ID.",
        "Card and paper needed."
      ],
      correct: 1,
      explanation: "'appointment slip' 预约单；'with you' 自然"
    },
    {
      scenario: "告知体检流程，想说'我先帮您登记，再引导您到各科室'",
      options: [
        "I register you then go.",
        "Let me help you register first, then guide you to each department.",
        "You register, then follow.",
        "Register and go departments."
      ],
      correct: 1,
      explanation: "'help you register' 服务用语；'each department' 各科室"
    }
  ],
  3: [
    {
      scenario: "询问客户是否有药物过敏时，最地道的表达是",
      options: [
        "You have medicine allergy?",
        "Are you allergic to any medications?",
        "Do you have any medicine allergic?",
        "You allergic medicine?"
      ],
      correct: 1,
      explanation: "'be allergic to...' 是固定搭配；'any medications' 比 'medicine' 更专业"
    },
    {
      scenario: "询问客户的吸烟饮酒史，想说'您吸烟或饮酒吗？'",
      options: [
        "Do you smoke and drink?",
        "Do you smoke or drink alcohol?",
        "You smoke? You drink?",
        "Smoking and drinking?"
      ],
      correct: 1,
      explanation: "'drink alcohol' 比 'drink' 更正式；问句结构完整"
    },
    {
      scenario: "询问家族病史时，想说'您的家人有高血压病史吗？'",
      options: [
        "Your family have high blood pressure?",
        "Do you have any family history of high blood pressure?",
        "Your family sick with blood pressure?",
        "Family have high blood pressure?"
      ],
      correct: 1,
      explanation: "'family history of...' 是医学专业表达"
    }
  ],
  4: [
    {
      scenario: "引导客户到抽血室，最地道的说法是",
      options: [
        "You go blood room.",
        "This way, please. I'll walk you to the blood draw room.",
        "Blood room there.",
        "Follow to blood."
      ],
      correct: 1,
      explanation: "'walk you to' 陪同引导；'blood draw room' 专业"
    },
    {
      scenario: "请客户在等候区稍候，想说'请在此等候，医生会叫号'",
      options: [
        "Wait here.",
        "Please wait in the waiting area. The doctor will call your number.",
        "You sit.",
        "Wait, doctor call."
      ],
      correct: 1,
      explanation: "'waiting area' 等候区；'call your number' 叫号"
    },
    {
      scenario: "说明楼层分布，想说'超声检查在3楼，我带您乘电梯'",
      options: [
        "Ultrasound is floor 3, elevator.",
        "The ultrasound is on the 3rd floor. Let me take you up by elevator.",
        "3 floor ultrasound.",
        "Go 3rd floor."
      ],
      correct: 1,
      explanation: "'on the 3rd floor'；'take you up by elevator' 陪同"
    }
  ],
  5: [
    {
      scenario: "转述体检报告时，你想说'您的血压稍微偏高'",
      options: [
        "Your blood pressure is too high, very dangerous.",
        "Your blood pressure is a bit high.",
        "Your blood pressure is slightly above the normal range.",
        "You have high blood pressure problem."
      ],
      correct: 2,
      explanation: "'slightly above the normal range' 最专业柔和，避免引起恐慌"
    },
    {
      scenario: "给出饮食建议时，想说'建议您少吃高盐食物'",
      options: [
        "You should not eat salt food.",
        "Try to avoid foods high in salt.",
        "Stop eating salty things.",
        "No salt food for you."
      ],
      correct: 1,
      explanation: "'try to avoid' 委婉建议；'foods high in salt' 比 'salty food' 更专业"
    },
    {
      scenario: "安抚客户情绪时，想说'不用担心，这种情况是可控的'",
      options: [
        "Don't worry, it's not serious.",
        "There's no need to worry. This is manageable with proper care.",
        "No worry, OK.",
        "Don't afraid, it's fine."
      ],
      correct: 1,
      explanation: "'There's no need to worry' 比 'Don't worry' 更柔和；'manageable with proper care' 专业"
    }
  ],
  6: [
    {
      scenario: "与客户协商减重目标，最委婉的说法是",
      options: [
        "You must lose 5kg.",
        "Shall we aim for a 5 kg weight loss over three months?",
        "Lose 5kg now.",
        "You need 5kg less."
      ],
      correct: 1,
      explanation: "'Shall we aim for...' 协商语气；给出时间框架"
    },
    {
      scenario: "确认客户承诺，想说'您愿意每周运动三次吗？'",
      options: [
        "You exercise three times.",
        "Would you be willing to exercise three times a week?",
        "Exercise 3 times.",
        "Three times exercise."
      ],
      correct: 1,
      explanation: "'Would you be willing to...' 征询承诺，尊重客户"
    },
    {
      scenario: "制定行动方案，想说'我们把它写进健康行动计划'",
      options: [
        "Write in plan.",
        "Let's put it into your health action plan.",
        "Plan it.",
        "Action plan write."
      ],
      correct: 1,
      explanation: "'put it into your action plan' 正式落地"
    }
  ],
  7: [
    {
      scenario: "给膳食建议时，想说'建议您多吃些温性食物'",
      options: [
        "You should eat more warm food, Chinese medicine says so.",
        "It might be helpful to include more warm-natured foods in your diet.",
        "Eat warm food, good for your body.",
        "Chinese doctor says eat warm things."
      ],
      correct: 1,
      explanation: "'It might be helpful to...' 语气委婉；'warm-natured foods' 是中医'温性食物'的标准英译"
    },
    {
      scenario: "向客户解释中医'祛湿'概念，最地道的表达是",
      options: [
        "You need to remove dampness from body.",
        "In TCM, removing excess dampness can be achieved through dietary adjustments.",
        "Get rid of wet inside you.",
        "TCM says body has wet, must clean."
      ],
      correct: 1,
      explanation: "用 'In TCM' 引出文化概念；'excess dampness' 是专业表达；'dietary adjustments' 给具体建议"
    },
    {
      scenario: "建议客户少喝冷饮时，最柔和的表达是",
      options: [
        "Don't drink cold water.",
        "You might want to reduce your intake of cold beverages.",
        "Stop cold drinks.",
        "Cold drinks are bad for you."
      ],
      correct: 1,
      explanation: "'might want to' 建议性弱，礼貌度高；'reduce intake of' 比 'stop' 更易接受"
    }
  ],
  8: [
    {
      scenario: "推荐运动时，想说'建议您每周进行3-5次适度运动'",
      options: [
        "You should do exercise 3-5 times every week.",
        "We'd recommend engaging in moderate exercise 3 to 5 times per week.",
        "Exercise 3-5 times weekly.",
        "Do exercise more, like 3-5 times per week."
      ],
      correct: 1,
      explanation: "'We'd recommend' 委婉建议；'engaging in moderate exercise' 正式专业"
    },
    {
      scenario: "介绍太极时，想说'太极是一种柔和的运动'",
      options: [
        "Tai Chi is a slow exercise.",
        "Tai Chi is a gentle, low-impact exercise that promotes both physical and mental balance.",
        "Tai Chi moves slow.",
        "Tai Chi is Chinese slow sport."
      ],
      correct: 1,
      explanation: "'gentle, low-impact exercise' 专业表达；'physical and mental balance' 体现康养理念"
    },
    {
      scenario: "建议客户运动前后注意事项，想说'运动前后注意补充水分'",
      options: [
        "Drink water before and after exercise.",
        "Remember to stay hydrated before and after your workout.",
        "Water before exercise, water after.",
        "Don't forget water when exercise."
      ],
      correct: 1,
      explanation: "'stay hydrated' 健身专业表达；'workout' 比 'exercise' 更口语化亲切"
    }
  ],
  9: [
    {
      scenario: "撰写随访邮件开头，最地道的表达是",
      options: [
        "Hi, I write to you about your check-up.",
        "I hope this email finds you well. I'm writing to follow up on your recent health check-up.",
        "Hello, this is about your body check.",
        "Dear, how are you? About your check."
      ],
      correct: 1,
      explanation: "正式邮件标准开头；'follow up on' 专业表达"
    },
    {
      scenario: "提醒客户复诊时，最柔和的表达是",
      options: [
        "You must come back next month.",
        "We'd like to remind you that a follow-up appointment is scheduled for next month.",
        "Come back next month, remember!",
        "Don't forget to come next month."
      ],
      correct: 1,
      explanation: "'We'd like to remind you' 委婉提醒；'is scheduled' 比 'you must come' 礼貌"
    },
    {
      scenario: "邮件结尾表达祝愿，最专业的表达是",
      options: [
        "Bye, take care.",
        "Wishing you continued health and well-being. Best regards.",
        "Good luck with your health.",
        "Hope you feel better soon."
      ],
      correct: 1,
      explanation: "'continued health and well-being' 健康类邮件标准祝福；'Best regards' 正式结尾"
    }
  ]
};

/* 角色扮演情景（按任务分类） */
const ROLE_PLAY_BY_TASK = {
  1: {
    title: "前台接待模拟",
    scene: "健康管理中心前台",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Tom（来自英国，首次体检）",
    duration: "2-3 分钟",
    requirements: [
      "礼貌问候，主动介绍自己和中心",
      "询问是否有预约，引导出示证件",
      "引导客户至登记处，介绍等候流程",
      "使用'Could you...?' 'Would you please...?'等委婉句型"
    ]
  },
  2: {
    title: "检前告知模拟",
    scene: "健康管理中心咨询台",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Tom（首次体检，对流程不熟悉）",
    duration: "2-3 分钟",
    requirements: [
      "核对预约信息，确认客户身份",
      "说明体检前注意事项（空腹、携带证件等）",
      "告知整体流程与时长",
      "使用 'Please remember to...' 'Make sure you...' 等提醒句型"
    ]
  },
  3: {
    title: "健康信息问询模拟",
    scene: "健康管理师办公室",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Mary（来自美国，40岁）",
    duration: "3-5 分钟",
    requirements: [
      "采集基本信息（年龄、职业、联系方式）",
      "询问既往病史、家族病史、过敏史",
      "询问生活方式（吸烟、饮酒、运动、饮食）",
      "使用 'Do you have any history of...?' 'How often do you...?' 等句型"
    ]
  },
  4: {
    title: "现场流程引导模拟",
    scene: "体检中心各楼层",
    roleA: "导诊健康管理师（学生）",
    roleB: "外籍客户 Mary（需要陪同引导）",
    duration: "3-5 分钟",
    requirements: [
      "根据检查项目引导至对应科室",
      "说明等候与叫号规则",
      "使用电梯/楼梯引导",
      "使用 'This way, please' 'The X is on...' 等引导句型"
    ]
  },
  5: {
    title: "体检报告解读模拟",
    scene: "健康管理咨询室",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Sarah（来自加拿大，体检完成）",
    duration: "3-5 分钟",
    requirements: [
      "柔和转述各项指标（血压、血脂、BMI等）",
      "解释异常指标，避免引起恐慌",
      "给出饮食、运动等具体建议",
      "尝试融入中华康养文化元素（如食疗、太极）"
    ]
  },
  6: {
    title: "健康目标协商模拟",
    scene: "健康管理咨询室",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Sarah（体检后希望制定改善计划）",
    duration: "3-5 分钟",
    requirements: [
      "结合报告结果与客户协商可行目标",
      "确认客户意愿与承诺",
      "制定阶段性行动方案",
      "使用 'Shall we...' 'Would you be willing to...' 等协商句型"
    ]
  },
  7: {
    title: "康养膳食指导模拟",
    scene: "营养咨询室",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 David（来自澳大利亚，对中医感兴趣）",
    duration: "3-5 分钟",
    requirements: [
      "解释中医膳食理念（温热寒凉、药食同源）",
      "推荐适合体质的食物，避免生硬直译",
      "用 'In Traditional Chinese Medicine...' 引出文化概念",
      "给出可操作的饮食方案"
    ]
  },
  8: {
    title: "运动建议咨询模拟",
    scene: "运动指导室",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 Lisa（来自新加坡，久坐白领）",
    duration: "3-5 分钟",
    requirements: [
      "评估当前运动习惯，制定个性化方案",
      "推荐适合的运动类型（太极、瑜伽、慢跑等）",
      "说明运动频率、强度、时长",
      "融入中华传统运动养生理念"
    ]
  },
  9: {
    title: "健康随访模拟",
    scene: "电话/视频随访",
    roleA: "健康管理师（学生）",
    roleB: "外籍客户 James（来自英国，3个月前体检）",
    duration: "3-5 分钟",
    requirements: [
      "问候并确认健康状况",
      "询问生活方式改善执行情况",
      "了解是否有新症状或不适",
      "提醒下次复诊时间，给出持续建议"
    ]
  }
};

/* AI情景口语场景（按任务分类） */
const AI_DIALOG_BY_TASK = {
  1: {
    title: "AI情景口语 — 涉外接待",
    setting: "你是一名健康管理师，Tom 是一位来自英国的外籍客户，今天是他首次到访体检中心。请用英语接待他。",
    opening: "Hello, I have an appointment for 9 AM. My name is Tom Wilson.",
    scaffolds: [
      "Good morning, Mr. Wilson. Welcome to our health center.",
      "May I see your ID card or passport, please?",
      "Please take a seat in the waiting area. The nurse will call you shortly."
    ]
  },
  2: {
    title: "AI情景口语 — 检前告知",
    setting: "外籍客户 Tom 首次体检，对检前准备不清楚。请用英语向他说明注意事项。",
    opening: "Hi, it's my first time here. What should I do before the check-up?",
    scaffolds: [
      "Please refrain from eating or drinking for 8 hours before the check-up.",
      "Make sure to bring your ID and appointment slip with you.",
      "I'll help you with the registration first."
    ]
  },
  3: {
    title: "AI情景口语 — 健康问询",
    setting: "你正在为外籍客户 Mary 做健康信息登记，她 40 岁，来自美国。请采集她的健康信息。",
    opening: "Hi, I'm Mary. The nurse said I need to fill in some forms before the check-up?",
    scaffolds: [
      "Yes, Mrs. Smith. I'll ask you a few questions about your health history.",
      "Do you have any history of high blood pressure or diabetes?",
      "Are you allergic to any medications or foods?"
    ]
  },
  4: {
    title: "AI情景口语 — 现场引导",
    setting: "外籍客户 Mary 需要在中心内走动完成多项检查，请用英语引导她。",
    opening: "Where should I go for the blood test?",
    scaffolds: [
      "This way, please. I'll walk you to the blood draw room.",
      "The ultrasound is on the 3rd floor — let me take you up by elevator.",
      "Please wait in the waiting area until your number is called."
    ]
  },
  5: {
    title: "AI情景口语 — 报告解读",
    setting: "外籍客户 Sarah 刚做完体检，正在等待报告解读。请用英语向她转述体检结果。",
    opening: "Hi, I'm Sarah. Could you tell me about my results?",
    scaffolds: [
      "Of course, Sarah. Overall, your results look quite positive.",
      "Your cholesterol level is slightly above the recommended range.",
      "I'd suggest some dietary adjustments and regular exercise."
    ]
  },
  6: {
    title: "AI情景口语 — 目标协商",
    setting: "外籍客户 Sarah 体检后希望制定健康改善目标，请用英语与她协商。",
    opening: "My report shows high cholesterol. What should I do?",
    scaffolds: [
      "Shall we aim for a 5 kg weight loss over three months?",
      "Would you be willing to exercise three times a week?",
      "Let's put it into your health action plan."
    ]
  },
  7: {
    title: "AI情景口语 — 膳食指导",
    setting: "外籍客户 David 对中医感兴趣，希望了解中华康养膳食建议。请用英语为他提供指导。",
    opening: "I've heard a lot about Chinese dietary therapy. Could you give me some advice based on my body type?",
    scaffolds: [
      "In Traditional Chinese Medicine, we focus on balancing warm and cool foods.",
      "Based on your condition, I'd recommend more warm-natured foods.",
      "For example, ginger tea in the morning can help improve your circulation."
    ]
  },
  8: {
    title: "AI情景口语 — 运动建议",
    setting: "外籍客户 Lisa 是久坐白领，想了解适合的运动方案。请用英语为她推荐。",
    opening: "I sit at a desk all day and feel tired. What kind of exercise would you suggest?",
    scaffolds: [
      "For your lifestyle, I'd recommend moderate aerobic exercise 3-5 times a week.",
      "Tai Chi is also a wonderful option — it's gentle and great for stress relief.",
      "Even a 30-minute walk during lunch break can make a big difference."
    ]
  },
  9: {
    title: "AI情景口语 — 健康随访",
    setting: "你正在对 3 个月前体检的外籍客户 James 进行电话随访，了解他的健康改善情况。",
    opening: "Hello, this is James. I received your email about the follow-up.",
    scaffolds: [
      "Hi James, thanks for taking my call. How have you been feeling lately?",
      "Have you been able to stick to the dietary changes we discussed?",
      "I'd like to schedule a follow-up appointment for next month."
    ]
  }
};

/* AI质检报告（按任务分类） */
const AI_REPORTS_BY_TASK = {
  1: {
    task: "任务1：客户接待",
    student: "王芳 & Tom（外籍客户）",
    date: "2025-03-08",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "开场使用 'Good morning, Mr. Wilson. Welcome to our health center' 礼貌自然，体现专业形象",
      "引导时使用 'This way, please' 和 'May I...' 等委婉句型，沟通柔和",
      "主动询问 'Is there anything else I can help you with?' 体现服务意识"
    ],
    optimizations: [
      { original: "Come here, I take your paper.", issue: "指令性过强；'take your paper' 表述模糊、不专业" },
      { original: "You wait here, doctor will come.", issue: "句式松散，缺少礼貌用语；主谓不完整" }
    ],
    replacements: [
      { sentence: "Could you please fill in this registration form? Thank you.", note: "'Could you please...' 委婉请求；'fill in this form' 清晰明确" },
      { sentence: "Please take a seat in the waiting area. The doctor will see you shortly.", note: "'take a seat in the waiting area' 标准接待用语；'see you shortly' 比 'come' 更专业" }
    ]
  },
  2: {
    task: "任务2：检前告知",
    student: "王芳 & Tom（外籍客户）",
    date: "2025-03-10",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "使用 'Please refrain from...' 清晰说明空腹要求",
      "主动提醒携带证件，体现服务意识",
      "引导登记用语 'Let me help you register first' 自然"
    ],
    optimizations: [
      { original: "You no eat before test.", issue: "缺主语、时态错误；'no eat' 中式英语" },
      { original: "Bring your card quick.", issue: "'quick' 副词误用；缺少礼貌用语" }
    ],
    replacements: [
      { sentence: "Please refrain from eating or drinking for 8 hours before the check-up.", note: "'refrain from' 正式礼貌" },
      { sentence: "Please have your ID and appointment slip ready. Thank you.", note: "'have...ready' 自然；'Thank you' 收尾礼貌" }
    ]
  },
  3: {
    task: "任务3：信息问询",
    student: "陈静 & Mary（外籍客户）",
    date: "2025-03-15",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "使用 'I'd like to ask you a few questions about your health history' 作为开场，专业自然",
      "询问过敏史时用 'Are you allergic to any medications?' 表达准确规范",
      "结束问询时主动告知 'This information will help us provide better care for you'，体现服务意识"
    ],
    optimizations: [
      { original: "Your family have any sick?", issue: "语法错误（主谓一致）；'sick' 用词不当，应为 'illness/disease'" },
      { original: "You smoke how many year?", issue: "中式英语语序；'how many' 后接可数名词应为 'how many years'" }
    ],
    replacements: [
      { sentence: "Do you have any family history of high blood pressure or diabetes?", note: "'family history of...' 医学专业表达；列举常见疾病便于理解" },
      { sentence: "How many years have you been smoking?", note: "完成时表达'已经吸烟多少年'；'how many years' 时间表达正确" }
    ]
  },
  4: {
    task: "任务4：现场引导",
    student: "刘洋 & Mary（外籍客户）",
    date: "2025-04-05",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "使用 'This way, please' 礼貌引导",
      "说明楼层 'on the 3rd floor' 准确",
      "陪同用语 'I'll walk you to...' 体现服务"
    ],
    optimizations: [
      { original: "Blood room there, go.", issue: "句子破碎，缺少引导动词" },
      { original: "You wait, doctor call you.", issue: "主谓缺失；'call you' 不完整" }
    ],
    replacements: [
      { sentence: "This way, please. I'll walk you to the blood draw room.", note: "陪同引导标准表达" },
      { sentence: "Please wait in the waiting area. The doctor will call your number.", note: "'call your number' 叫号专业表达" }
    ]
  },
  5: SAMPLE_AI_REPORT,  // 复用原有示例（任务5 报告解读）
  6: {
    task: "任务6：目标协商",
    student: "李明 & Sarah（外籍客户）",
    date: "2025-05-12",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "使用 'Shall we aim for...' 协商语气柔和",
      "征询承诺 'Would you be willing to...' 尊重客户",
      "落地 'put it into your action plan' 具体"
    ],
    optimizations: [
      { original: "You must lose 5kg.", issue: "'must' 指令性过强，易引起抵触" },
      { original: "Do exercise three times.", issue: "祈使句生硬；缺少协商语气" }
    ],
    replacements: [
      { sentence: "Shall we aim for a 5 kg weight loss over three months?", note: "'Shall we...' 协商式提议" },
      { sentence: "Would you be willing to exercise three times a week?", note: "征询意愿，体现尊重" }
    ]
  },
  7: {
    task: "任务7：膳食指导",
    student: "刘洋 & David（外籍客户）",
    date: "2025-04-10",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "使用 'In Traditional Chinese Medicine, there's a concept called...' 自然引入中医文化概念",
      "推荐温性食物时用 'warm-natured foods' 专业英译，避免中式直译",
      "解释药食同源时举例 'ginger tea for morning circulation' 具体易懂"
    ],
    optimizations: [
      { original: "You have wet inside body, you must eat less cold food.", issue: "'wet inside body' 中式直译；'must' 指令性过强；客户难以理解中医概念" },
      { original: "Chinese medicine says your qi is not good.", issue: "'qi' 直接拼音易造成困惑；'not good' 表述模糊，不专业" }
    ],
    replacements: [
      { sentence: "In TCM, an excess of internal dampness may cause fatigue. Reducing cold beverages can help restore balance.", note: "先解释概念再关联症状；'excess of internal dampness' 专业表达；'restore balance' 自然融入中医理念" },
      { sentence: "Your vital energy (qi) might benefit from some lifestyle adjustments such as gentle exercise and proper rest.", note: "'vital energy (qi)' 拼音加英文解释；'might benefit from' 委婉；'lifestyle adjustments' 给具体建议" }
    ]
  },
  8: {
    task: "任务8：运动建议",
    student: "孙丽 & Lisa（外籍客户）",
    date: "2025-04-22",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "推荐运动方案时用 'moderate aerobic exercise 3-5 times per week' 表述专业规范",
      "介绍太极时用 'gentle, low-impact exercise that promotes both physical and mental balance' 文化输出自然",
      "建议时使用 'We'd recommend' 和 'might want to' 等委婉表达，易于接受"
    ],
    optimizations: [
      { original: "Tai Chi is Chinese old people's exercise.", issue: "'Chinese old people's exercise' 严重中式英语；'old people' 表述不礼貌" },
      { original: "You must do exercise every day.", issue: "'must' 指令性过强；'every day' 过于绝对，不符合运动建议" }
    ],
    replacements: [
      { sentence: "Tai Chi is a traditional Chinese practice that combines gentle movements with mindful breathing, suitable for all ages.", note: "'traditional Chinese practice' 体现文化；'mindful breathing' 引入中医理念；'suitable for all ages' 客观准确" },
      { sentence: "We'd recommend engaging in moderate exercise most days of the week, even a 30-minute walk can be beneficial.", note: "'We'd recommend' 委婉；'most days' 比 'every day' 更实际；'30-minute walk' 具体可操作" }
    ]
  },
  9: {
    task: "任务9：健康随访",
    student: "李明 & James（外籍客户）",
    date: "2025-05-08",
    dimensions: [
      { name: "指标柔和专业表达", icon: "📊", class: "dim-1" },
      { name: "人文共情问诊沟通", icon: "💝", class: "dim-2" },
      { name: "自然传播中式康养文化", icon: "🌿", class: "dim-3" }
    ],
    highlights: [
      "邮件开头使用 'I hope this email finds you well' 正式得体",
      "提醒复诊用 'We'd like to remind you that a follow-up appointment is scheduled' 委婉专业",
      "结尾使用 'Wishing you continued health and well-being' 健康类邮件标准祝福"
    ],
    optimizations: [
      { original: "Remember to come back next month or you will get worse.", issue: "'or you will get worse' 恐吓性语言，不符合医疗沟通规范；'remember to come back' 过于口语化" },
      { original: "You didn't do the exercise I told you, right?", issue: "质问语气，缺乏人文关怀；中式英语 'didn't do' 表达生硬" }
    ],
    replacements: [
      { sentence: "We'd like to remind you that a follow-up appointment has been scheduled for next month. Please let us know if you need to reschedule.", note: "'has been scheduled' 客观事实；'let us know' 给客户自主权，体现尊重" },
      { sentence: "How have you been managing the exercise routine we discussed? Any challenges you'd like support with?", note: "开放式提问，体现关怀；'support with' 体现服务意识，避免质问" }
    ]
  }
};

/* 导出全局变量 */
if (typeof window !== 'undefined') {
  window.COURSE_DATA = COURSE_DATA;
  window.TASKS = TASKS;
  window.AI_QUALITY_CHECK_FULL = AI_QUALITY_CHECK_FULL;
  window.AI_QUALITY_CHECK_QUICK = AI_QUALITY_CHECK_QUICK;
  window.SAMPLE_AI_REPORT = SAMPLE_AI_REPORT;
  window.SAMPLE_STUDENTS = SAMPLE_STUDENTS;
  window.VOCAB_QUESTIONS = VOCAB_QUESTIONS;
  window.SENTENCE_QUESTIONS = SENTENCE_QUESTIONS;
  window.RESOURCE_CATEGORIES = RESOURCE_CATEGORIES;
  window.CLASS_STATS = CLASS_STATS;
  window.VOCAB_BY_TASK = VOCAB_BY_TASK;
  window.SENTENCES_BY_TASK = SENTENCES_BY_TASK;
  window.ROLE_PLAY_BY_TASK = ROLE_PLAY_BY_TASK;
  window.AI_DIALOG_BY_TASK = AI_DIALOG_BY_TASK;
  window.AI_REPORTS_BY_TASK = AI_REPORTS_BY_TASK;
}
