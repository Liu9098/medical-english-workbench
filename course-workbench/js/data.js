/* ========================================
   课程核心数据 — 高职英语（三）涉外体检职场英语
   ======================================== */

const COURSE_DATA = {
  name: "高职英语（三）涉外体检职场英语",
  type: "公共英语拓展课程",
  totalHours: 18,
  taskCount: 6,
  methodology: "POA产出导向教学法",
  evaluationScope: "仅评价英语语言交际能力，不评判医学专业知识",
  className: "英语拓展班A班",
  studentCount: 36,
  semester: "2025-2026学年第二学期"
};

const TASKS = [
  {
    id: 1,
    name: "体检接待",
    fullName: "任务1：涉外体检接待",
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
    name: "信息问询",
    fullName: "任务2：健康信息问询",
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
    id: 3,
    name: "报告转述",
    fullName: "任务3：体检报告转述",
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
    id: 4,
    name: "膳食指导",
    fullName: "任务4：康养膳食指导",
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
    id: 5,
    name: "运动建议",
    fullName: "任务5：养生运动建议",
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
    id: 6,
    name: "健康维持",
    fullName: "任务6：健康随访维持",
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

/* 示例AI质检报告（任务3报告转述） */
const SAMPLE_AI_REPORT = {
  task: "任务3：体检报告转述",
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

/* 示例学生数据 */
const SAMPLE_STUDENTS = [
  { id: "S001", name: "李明", avatar: "李", task1: 92, task2: 88, task3: 85, task4: 78, task5: 0, task6: 0, total: 68, status: "active", weakness: "中式英语", strength: "口语流利" },
  { id: "S002", name: "王芳", avatar: "王", task1: 95, task2: 90, task3: 88, task4: 82, task5: 0, task6: 0, total: 71, status: "active", weakness: "词汇量", strength: "语法准确" },
  { id: "S003", name: "张伟", avatar: "张", task1: 78, task2: 82, task3: 70, task4: 65, task5: 0, task6: 0, total: 58, status: "warning", weakness: "口语紧张", strength: "书面表达" },
  { id: "S004", name: "刘洋", avatar: "刘", task1: 88, task2: 85, task3: 90, task4: 80, task5: 0, task6: 0, total: 68, status: "active", weakness: "发音", strength: "互动积极" },
  { id: "S005", name: "陈静", avatar: "陈", task1: 90, task2: 92, task3: 87, task4: 85, task5: 0, task6: 0, total: 70, status: "active", weakness: "语速过快", strength: "词汇丰富" },
  { id: "S006", name: "赵磊", avatar: "赵", task1: 72, task2: 75, task3: 68, task4: 60, task5: 0, task6: 0, total: 54, status: "warning", weakness: "基础薄弱", strength: "态度认真" },
  { id: "S007", name: "孙丽", avatar: "孙", task1: 85, task2: 88, task3: 82, task4: 78, task5: 0, task6: 0, total: 66, status: "active", weakness: "听力", strength: "表达清晰" },
  { id: "S008", name: "周强", avatar: "周", task1: 82, task2: 80, task3: 75, task4: 72, task5: 0, task6: 0, total: 61, status: "active", weakness: "语法", strength: "积极参与" }
];

/* 词汇闯关题库 */
const VOCAB_QUESTIONS = [
  { word: "blood pressure", phonetic: "/blʌd ˈpreʃər/", options: ["血压", "血糖", "血型", "脉搏"], correct: 0, task: 1 },
  { word: "cholesterol", phonetic: "/kəˈlestərɒl/", options: ["胆固醇", "甘油三酯", "血红蛋白", "白细胞"], correct: 0, task: 3 },
  { word: "registration", phonetic: "/ˌredʒɪˈstreɪʃn/", options: ["挂号", "出院", "转诊", "复诊"], correct: 0, task: 1 },
  { word: "dietary", phonetic: "/ˈdaɪətəri/", options: ["饮食的", "药物的", "运动的", "心理的"], correct: 0, task: 4 },
  { word: "follow-up", phonetic: "/ˈfɒləʊ ʌp/", options: ["随访", "急救", "手术", "住院"], correct: 0, task: 6 },
  { word: "vital signs", phonetic: "/ˈvaɪtl saɪnz/", options: ["生命体征", "过敏史", "家族史", "手术史"], correct: 0, task: 2 },
  { word: "wellness", phonetic: "/ˈwelnəs/", options: ["健康养生", "疾病治疗", "康复训练", "心理辅导"], correct: 0, task: 5 },
  { word: "herbal medicine", phonetic: "/ˈhɜːbl ˈmedsn/", options: ["草药", "西药", "疫苗", "抗生素"], correct: 0, task: 4 }
];

/* 句式游戏题库 */
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
    task: 3,
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
    task: 4,
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
      { title: "任务1 体检接待 PPT", type: "PPT", task: 1, desc: "含涉外接待流程、高频句型、情景对话" },
      { title: "任务2 信息问询 PPT", type: "PPT", task: 2, desc: "英文健康记录单结构、问询技巧" },
      { title: "任务3 报告转述 PPT", type: "PPT", task: 3, desc: "体检报告口语转述方法与句型支架" },
      { title: "任务4 膳食指导 PPT", type: "PPT", task: 4, desc: "中华康养膳食文化英译技巧" },
      { title: "任务5 运动建议 PPT", type: "PPT", task: 5, desc: "科普文案写作规范与范文" },
      { title: "任务6 健康维持 PPT", type: "PPT", task: 6, desc: "英文随访邮件格式与写作要点" }
    ]
  },
  {
    id: "sentence_scaffolds",
    name: "句型支架",
    icon: "🔤",
    color: "#38a169",
    items: [
      { title: "接待引导句型卡", type: "PDF", task: 1, desc: "问候、引导、登记高频句型" },
      { title: "问询信息句型卡", type: "PDF", task: 2, desc: "个人信息、病史、生活方式问询句型" },
      { title: "报告转述句型卡", type: "PDF", task: 3, desc: "指标描述、建议给出、安抚句型" },
      { title: "膳食指导句型卡", type: "PDF", task: 4, desc: "饮食建议、文化解释句型" },
      { title: "运动建议句型卡", type: "PDF", task: 5, desc: "运动处方、养生科普句型" },
      { title: "随访邮件句型卡", type: "PDF", task: 6, desc: "邮件开头、提醒、结尾句型" }
    ]
  },
  {
    id: "samples",
    name: "范文模板",
    icon: "📝",
    color: "#dd6b20",
    items: [
      { title: "英文健康信息记录单范本", type: "DOC", task: 2, desc: "完整填写示范，含注释" },
      { title: "体检报告口语转述范文", type: "DOC", task: 3, desc: "3分钟转述稿范文" },
      { title: "中华膳食科普海报范文", type: "IMG", task: 4, desc: "含排版设计与英文文案" },
      { title: "养生科普宣传文案范文", type: "DOC", task: 5, desc: "200词科普短文范文" },
      { title: "健康随访英文邮件范文", type: "DOC", task: 6, desc: "正式邮件格式范文" }
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
      { title: "中华膳食文化英译素材", type: "DOC", task: 4, desc: "药食同源、四气五味等文化概念" },
      { title: "传统运动养生英文介绍", type: "DOC", task: 5, desc: "太极、八段锦等英文科普材料" },
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
  taskCompletion: [89, 78, 61, 44, 22, 0],
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
    { word: "vital signs", phonetic: "/ˈvaɪtl saɪnz/", options: ["生命体征", "过敏史", "家族史", "手术史"], correct: 0 },
    { word: "medical history", phonetic: "/ˈmedɪkl ˈhɪstri/", options: ["病史", "体检报告", "化验单", "处方"], correct: 0 },
    { word: "allergy", phonetic: "/ˈælədʒi/", options: ["过敏", "感染", "炎症", "肿瘤"], correct: 0 },
    { word: "medication", phonetic: "/ˌmedɪˈkeɪʃn/", options: ["用药", "手术", "康复", "住院"], correct: 0 },
    { word: "lifestyle", phonetic: "/ˈlaɪfstaɪl/", options: ["生活方式", "饮食习惯", "运动习惯", "睡眠习惯"], correct: 0 },
    { word: "symptom", phonetic: "/ˈsɪmptəm/", options: ["症状", "病因", "诊断", "治疗"], correct: 0 }
  ],
  3: [
    { word: "cholesterol", phonetic: "/kəˈlestərɒl/", options: ["胆固醇", "甘油三酯", "血红蛋白", "白细胞"], correct: 0 },
    { word: "within normal range", phonetic: "/wɪˈðɪn ˈnɔːml reɪndʒ/", options: ["在正常范围内", "超出正常", "低于正常", "临界值"], correct: 0 },
    { word: "slightly elevated", phonetic: "/ˈslaɪtli ˈelɪveɪtɪd/", options: ["轻微偏高", "严重偏高", "正常", "下降"], correct: 0 },
    { word: "BMI", phonetic: "/ˌbiː em ˈaɪ/", options: ["体质指数", "血压指数", "血糖指数", "心率指数"], correct: 0 },
    { word: "indication", phonetic: "/ˌɪndɪˈkeɪʃn/", options: ["指标", "症状", "诊断", "处方"], correct: 0 },
    { word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", options: ["全面的", "部分的", "特定的", "初步的"], correct: 0 }
  ],
  4: [
    { word: "dietary", phonetic: "/ˈdaɪətəri/", options: ["饮食的", "药物的", "运动的", "心理的"], correct: 0 },
    { word: "herbal medicine", phonetic: "/ˈhɜːbl ˈmedsn/", options: ["草药/中药", "西药", "疫苗", "抗生素"], correct: 0 },
    { word: "warm-natured", phonetic: "/wɔːm ˈneɪtʃəd/", options: ["温性的", "寒性的", "平性的", "热性的"], correct: 0 },
    { word: "balanced diet", phonetic: "/ˈbælənst ˈdaɪət/", options: ["均衡饮食", "清淡饮食", "流食", "素食"], correct: 0 },
    { word: "nutrition", phonetic: "/njuˈtrɪʃn/", options: ["营养", "水分", "纤维", "热量"], correct: 0 },
    { word: "dampness", phonetic: "/ˈdæmpnəs/", options: ["湿气", "寒气", "热气", "火气"], correct: 0 }
  ],
  5: [
    { word: "wellness", phonetic: "/ˈwelnəs/", options: ["健康养生", "疾病治疗", "康复训练", "心理辅导"], correct: 0 },
    { word: "moderate exercise", phonetic: "/ˈmɒdərət ˈeksəsaɪz/", options: ["适度运动", "剧烈运动", "静态拉伸", "力量训练"], correct: 0 },
    { word: "aerobics", phonetic: "/eəˈrəʊbɪks/", options: ["有氧运动", "无氧运动", "伸展运动", "平衡训练"], correct: 0 },
    { word: "Tai Chi", phonetic: "/taɪ tʃiː/", options: ["太极", "瑜伽", "普拉提", "气功"], correct: 0 },
    { word: "endurance", phonetic: "/ɪnˈdjʊərəns/", options: ["耐力", "速度", "力量", "柔韧"], correct: 0 },
    { word: "Baduanjin", phonetic: "/bɑːˈdwɑːndʒɪn/", options: ["八段锦", "五禽戏", "易筋经", "六字诀"], correct: 0 }
  ],
  6: [
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
  3: [
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
  4: [
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
  5: [
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
  6: [
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
  3: {
    title: "体检报告转述模拟",
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
  4: {
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
  5: {
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
  6: {
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
    title: "AI情景口语 — 健康问询",
    setting: "你正在为外籍客户 Mary 做健康信息登记，她 40 岁，来自美国。请采集她的健康信息。",
    opening: "Hi, I'm Mary. The nurse said I need to fill in some forms before the check-up?",
    scaffolds: [
      "Yes, Mrs. Smith. I'll ask you a few questions about your health history.",
      "Do you have any history of high blood pressure or diabetes?",
      "Are you allergic to any medications or foods?"
    ]
  },
  3: {
    title: "AI情景口语 — 报告转述",
    setting: "外籍客户 Sarah 刚做完体检，正在等待报告解读。请用英语向她转述体检结果。",
    opening: "Hi, I'm Sarah. Could you tell me about my results?",
    scaffolds: [
      "Of course, Sarah. Overall, your results look quite positive.",
      "Your cholesterol level is slightly above the recommended range.",
      "I'd suggest some dietary adjustments and regular exercise."
    ]
  },
  4: {
    title: "AI情景口语 — 膳食指导",
    setting: "外籍客户 David 对中医感兴趣，希望了解中华康养膳食建议。请用英语为他提供指导。",
    opening: "I've heard a lot about Chinese dietary therapy. Could you give me some advice based on my body type?",
    scaffolds: [
      "In Traditional Chinese Medicine, we focus on balancing warm and cool foods.",
      "Based on your condition, I'd recommend more warm-natured foods.",
      "For example, ginger tea in the morning can help improve your circulation."
    ]
  },
  5: {
    title: "AI情景口语 — 运动建议",
    setting: "外籍客户 Lisa 是久坐白领，想了解适合的运动方案。请用英语为她推荐。",
    opening: "I sit at a desk all day and feel tired. What kind of exercise would you suggest?",
    scaffolds: [
      "For your lifestyle, I'd recommend moderate aerobic exercise 3-5 times a week.",
      "Tai Chi is also a wonderful option — it's gentle and great for stress relief.",
      "Even a 30-minute walk during lunch break can make a big difference."
    ]
  },
  6: {
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
    task: "任务1：体检接待",
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
    task: "任务2：信息问询",
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
  3: SAMPLE_AI_REPORT,  // 复用原有示例
  4: {
    task: "任务4：膳食指导",
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
  5: {
    task: "任务5：运动建议",
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
  6: {
    task: "任务6：健康随访",
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
