const STAT_LABELS = {
  logic: "邏輯",
  creativity: "創意",
  communication: "溝通",
  execution: "執行",
  business: "商業"
};

const questions = [
  {
    stage: "童年｜興趣萌芽",
    title: "放學後，你最容易忘記時間的是什麼？",
    description: "最早期的投入，往往會成為日後能力樹的根。",
    choices: [
      {
        title: "拆東西、研究規則",
        text: "喜歡知道機器、遊戲或數學題為什麼能運作。",
        effects: { logic: 18, execution: 6 },
        education: "自主探索科學、數學與基礎程式邏輯",
        keywords: ["好奇心", "系統思考"],
        track: "tech"
      },
      {
        title: "畫圖、寫故事",
        text: "習慣用圖像、文字與想像力整理內在世界。",
        effects: { creativity: 18, communication: 7 },
        education: "長期累積繪畫、敘事與視覺表達作品",
        keywords: ["敘事", "美感"],
        track: "creative"
      },
      {
        title: "帶大家一起玩",
        text: "擅長發起活動、協調意見，也常成為團體中心。",
        effects: { communication: 18, business: 7 },
        education: "參與社團與活動企劃，培養協作能力",
        keywords: ["領導", "協作"],
        track: "people"
      },
      {
        title: "做小生意、交換物品",
        text: "很早就對價值、交換與怎麼讓人買單感到好奇。",
        effects: { business: 18, execution: 7 },
        education: "透過小型交易與企劃理解價值交換",
        keywords: ["價值感", "行動力"],
        track: "business"
      }
    ]
  },
  {
    stage: "求學｜路徑選擇",
    title: "升學時，你會優先選擇哪種環境？",
    description: "教育不只是一張文憑，也會決定你接觸到的人與方法。",
    choices: [
      {
        title: "理工與資訊導向",
        text: "重視可驗證的知識、專題與解題能力。",
        effects: { logic: 14, execution: 8 },
        education: "資訊工程學程｜主修軟體開發與資料結構",
        skills: ["程式設計", "資料分析", "系統拆解"],
        track: "tech"
      },
      {
        title: "設計與藝術導向",
        text: "透過作品、視覺語言與創作方法建立專業。",
        effects: { creativity: 15, communication: 6 },
        education: "視覺傳達設計學程｜聚焦品牌、介面與敘事",
        skills: ["視覺設計", "UI/UX", "內容企劃"],
        track: "creative"
      },
      {
        title: "商管與社會導向",
        text: "理解市場、人群、組織與資源配置。",
        effects: { business: 14, communication: 8 },
        education: "企業管理學程｜專注行銷、策略與專案管理",
        skills: ["市場分析", "專案管理", "簡報提案"],
        track: "business"
      },
      {
        title: "先工作，再決定",
        text: "以實際經驗交換方向感，邊做邊學。",
        effects: { execution: 16, communication: 5 },
        education: "實務導向自學路徑｜以線上課程與專案累積能力",
        skills: ["自我管理", "快速學習", "實務執行"],
        track: "practical"
      }
    ]
  },
  {
    stage: "技能｜能力投資",
    title: "你願意花一年，把哪一項能力練到能接案？",
    description: "能被市場辨識的技能，會開始改變你的人生選項。",
    choices: [
      {
        title: "網站與應用程式開發",
        text: "把想法轉成真正可以操作的工具。",
        effects: { logic: 12, execution: 12 },
        skills: ["JavaScript", "HTML/CSS", "Python", "產品原型"],
        experience: "完成多個互動網站與自動化工具原型",
        projectType: "app",
        track: "tech"
      },
      {
        title: "品牌與視覺設計",
        text: "建立一致的風格，讓內容被看見也被記住。",
        effects: { creativity: 14, communication: 8 },
        skills: ["品牌識別", "排版", "Figma", "視覺敘事"],
        experience: "為個人品牌與小型團隊完成視覺系統設計",
        projectType: "brand",
        track: "creative"
      },
      {
        title: "教學與知識轉譯",
        text: "把複雜概念說清楚，設計讓人真正學會的體驗。",
        effects: { communication: 14, creativity: 8 },
        skills: ["課程設計", "知識轉譯", "教學腳本", "學習體驗"],
        experience: "設計並測試多套互動教材與學習活動",
        projectType: "education",
        track: "people"
      },
      {
        title: "銷售與商業企劃",
        text: "學會辨識需求、設計方案並推動成交。",
        effects: { business: 15, communication: 8 },
        skills: ["商業提案", "銷售溝通", "市場定位", "營運規劃"],
        experience: "協助小型專案完成定位、提案與客戶開發",
        projectType: "business",
        track: "business"
      }
    ]
  },
  {
    stage: "第一份工作｜起點",
    title: "第一份正式工作，你最在意什麼？",
    description: "第一站不會決定終點，但會建立你對職場的基本模型。",
    choices: [
      {
        title: "進入成熟公司打基礎",
        text: "學流程、品質標準與跨部門協作。",
        effects: { execution: 13, communication: 6 },
        experience: "加入成熟團隊，負責核心流程與跨部門專案",
        keywords: ["流程", "穩定成長"],
        role: "專案執行專員"
      },
      {
        title: "加入新創快速成長",
        text: "身兼多職，在高變動中快速累積實戰。",
        effects: { execution: 13, business: 9 },
        experience: "於新創團隊從零建立產品與營運流程",
        keywords: ["敏捷", "從零到一"],
        role: "產品營運專員"
      },
      {
        title: "自由接案累積作品",
        text: "直接面對客戶與市場，用成果換取下一個機會。",
        effects: { business: 10, creativity: 7, execution: 7 },
        experience: "以自由接案形式完成多項客製化專案",
        keywords: ["自主", "客戶導向"],
        role: "自由工作者"
      },
      {
        title: "進入教育或非營利領域",
        text: "把工作與影響力連在一起。",
        effects: { communication: 12, creativity: 6 },
        experience: "參與教育推廣專案，設計活動與學習內容",
        keywords: ["影響力", "同理"],
        role: "學習體驗企劃"
      }
    ]
  },
  {
    stage: "轉折｜危機處理",
    title: "三年後，你遇到瓶頸，會怎麼做？",
    description: "真正拉開差距的，通常不是順境，而是你如何使用逆境。",
    choices: [
      {
        title: "進修，補齊專業深度",
        text: "系統化學習，取得更高階的技術或方法。",
        effects: { logic: 10, execution: 8 },
        education: "完成進階專業培訓與跨領域專題研究",
        keywords: ["深度", "長期主義"]
      },
      {
        title: "換環境，挑戰更大的題目",
        text: "用新的場域與責任逼自己升級。",
        effects: { execution: 11, communication: 7 },
        experience: "轉任高複雜度專案，承擔整合與交付責任",
        keywords: ["突破", "承擔"]
      },
      {
        title: "做自己的產品",
        text: "把累積的技能變成可被反覆使用的資產。",
        effects: { business: 12, creativity: 8 },
        experience: "發起個人產品計畫，完成驗證、迭代與上線",
        projectType: "product",
        keywords: ["產品化", "複利"]
      },
      {
        title: "暫停，重新整理人生",
        text: "先恢復狀態，再重新定義成功。",
        effects: { creativity: 7, communication: 7, logic: 4 },
        education: "透過自主研究與生活實驗重新建立工作方法",
        keywords: ["反思", "韌性"]
      }
    ]
  },
  {
    stage: "成熟期｜專業定位",
    title: "當你已經有能力，你想成為哪一種人？",
    description: "這個選擇會決定履歷上最突出的核心定位。",
    choices: [
      {
        title: "深度專家",
        text: "處理別人解不了的問題，建立方法與標準。",
        effects: { logic: 15, execution: 8 },
        role: "資深解決方案專家",
        skills: ["問題診斷", "架構設計", "品質標準"],
        keywords: ["專業深度"]
      },
      {
        title: "跨域整合者",
        text: "連接技術、設計、商業與人。",
        effects: { communication: 11, business: 8, creativity: 6 },
        role: "跨域產品經理",
        skills: ["跨部門協作", "需求整合", "產品策略"],
        keywords: ["整合"]
      },
      {
        title: "創作者與品牌主理人",
        text: "持續產出作品，讓風格與價值被辨識。",
        effects: { creativity: 14, business: 7 },
        role: "創意總監／品牌主理人",
        skills: ["創意方向", "內容系統", "個人品牌"],
        keywords: ["風格", "持續輸出"]
      },
      {
        title: "教育者與帶領者",
        text: "把自己會的，變成別人也能掌握的方法。",
        effects: { communication: 14, execution: 6 },
        role: "課程設計師／團隊教練",
        skills: ["人才培育", "引導設計", "知識系統化"],
        keywords: ["賦能", "傳承"]
      }
    ]
  },
  {
    stage: "現在｜人生作品",
    title: "最後，你希望別人怎麼記得你的工作？",
    description: "人生不是職稱集合，而是你反覆留下的價值。",
    choices: [
      {
        title: "把複雜問題變簡單",
        text: "建立清楚、可靠、可被使用的解法。",
        effects: { logic: 8, communication: 6 },
        keywords: ["清晰", "可靠"],
        legacy: "擅長把複雜問題拆成可執行方案"
      },
      {
        title: "創造讓人感動的作品",
        text: "讓美感、故事與體驗留在人心裡。",
        effects: { creativity: 10, communication: 4 },
        keywords: ["共鳴", "作品感"],
        legacy: "用作品建立情感連結與辨識度"
      },
      {
        title: "讓團隊與使用者都更好",
        text: "重視關係、合作與長期影響。",
        effects: { communication: 9, execution: 5 },
        keywords: ["共創", "長期影響"],
        legacy: "讓團隊與使用者在過程中一起成長"
      },
      {
        title: "把想法變成持續運轉的系統",
        text: "讓成果不只完成一次，而能持續產生價值。",
        effects: { business: 9, execution: 7 },
        keywords: ["系統化", "可持續"],
        legacy: "把想法轉化為可持續運作的產品與系統"
      }
    ]
  }
];

const state = {
  current: 0,
  started: false,
  completed: false,
  stats: { logic: 20, creativity: 20, communication: 20, execution: 20, business: 20 },
  education: [],
  experience: [],
  skills: [],
  keywords: [],
  tracks: [],
  projectTypes: [],
  roles: [],
  legacy: "",
  selections: []
};

const els = {
  playerName: document.getElementById("playerName"),
  lifeGoal: document.getElementById("lifeGoal"),
  statusName: document.getElementById("statusName"),
  statusTitle: document.getElementById("statusTitle"),
  avatar: document.getElementById("avatar"),
  stageLabel: document.getElementById("stageLabel"),
  stats: document.getElementById("stats"),
  progressBar: document.getElementById("progressBar"),
  progressText: document.getElementById("progressText"),
  introScreen: document.getElementById("introScreen"),
  questionScreen: document.getElementById("questionScreen"),
  resultScreen: document.getElementById("resultScreen"),
  questionNumber: document.getElementById("questionNumber"),
  questionStage: document.getElementById("questionStage"),
  questionTitle: document.getElementById("questionTitle"),
  questionDescription: document.getElementById("questionDescription"),
  choices: document.getElementById("choices"),
  outputSection: document.getElementById("outputSection")
};

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function clamp(value, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function showScreen(target) {
  [els.introScreen, els.questionScreen, els.resultScreen].forEach(el => el.classList.remove("active"));
  target.classList.add("active");
}

function renderStats() {
  els.stats.innerHTML = Object.entries(STAT_LABELS).map(([key, label]) => {
    const value = clamp(state.stats[key]);
    return `
      <div class="stat-row">
        <div class="stat-label"><span>${label}</span><strong>${value}</strong></div>
        <div class="stat-track"><div class="stat-fill" style="width:${value}%"></div></div>
      </div>`;
  }).join("");
}

function updateIdentity() {
  const name = els.playerName.value.trim() || "無名旅人";
  const title = state.roles[state.roles.length - 1] || els.lifeGoal.value || "尚未定義的人生";
  els.statusName.textContent = name;
  els.statusTitle.textContent = title;
  els.avatar.textContent = name.slice(0, 1);
}

function updateProgress() {
  const done = state.completed ? questions.length : state.current;
  const pct = Math.round((done / questions.length) * 100);
  els.progressBar.style.width = `${pct}%`;
  els.progressText.textContent = `${done} / ${questions.length}`;
}

function renderQuestion() {
  const q = questions[state.current];
  els.questionNumber.textContent = String(state.current + 1).padStart(2, "0");
  els.questionStage.textContent = q.stage;
  els.questionTitle.textContent = q.title;
  els.questionDescription.textContent = q.description;
  els.stageLabel.textContent = q.stage.split("｜")[0];
  els.choices.innerHTML = "";

  q.choices.forEach((choice, index) => {
    const effects = Object.entries(choice.effects || {})
      .map(([key, value]) => `${STAT_LABELS[key]} +${value}`)
      .join(" · ");
    const button = document.createElement("button");
    button.className = "choice-card";
    button.innerHTML = `
      <strong>${choice.title}</strong>
      <span>${choice.text}</span>
      <span class="choice-effects">${effects}</span>`;
    button.addEventListener("click", () => choose(index));
    els.choices.appendChild(button);
  });

  updateProgress();
}

function choose(index) {
  const choice = questions[state.current].choices[index];
  state.selections.push({ question: questions[state.current].title, choice: choice.title });

  Object.entries(choice.effects || {}).forEach(([key, value]) => {
    state.stats[key] = clamp(state.stats[key] + value);
  });

  if (choice.education) state.education.push(choice.education);
  if (choice.experience) state.experience.push(choice.experience);
  if (choice.skills) state.skills.push(...choice.skills);
  if (choice.keywords) state.keywords.push(...choice.keywords);
  if (choice.track) state.tracks.push(choice.track);
  if (choice.projectType) state.projectTypes.push(choice.projectType);
  if (choice.role) state.roles.push(choice.role);
  if (choice.legacy) state.legacy = choice.legacy;

  renderStats();
  updateIdentity();

  state.current += 1;
  if (state.current >= questions.length) {
    state.completed = true;
    els.stageLabel.textContent = "完成";
    updateProgress();
    showScreen(els.resultScreen);
  } else {
    renderQuestion();
  }
}

function startGame() {
  state.started = true;
  showScreen(els.questionScreen);
  renderQuestion();
}

function resetGame() {
  state.current = 0;
  state.started = false;
  state.completed = false;
  state.stats = { logic: 20, creativity: 20, communication: 20, execution: 20, business: 20 };
  state.education = [];
  state.experience = [];
  state.skills = [];
  state.keywords = [];
  state.tracks = [];
  state.projectTypes = [];
  state.roles = [];
  state.legacy = "";
  state.selections = [];
  els.outputSection.classList.add("hidden");
  els.stageLabel.textContent = "序章";
  showScreen(els.introScreen);
  renderStats();
  updateIdentity();
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function dominantStats() {
  return Object.entries(state.stats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key]) => key);
}

function dominantTrack() {
  const counts = state.tracks.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "practical";
}

function buildSummary(name, headline) {
  const [first, second, third] = dominantStats().map(key => STAT_LABELS[key]);
  const legacy = state.legacy || "把想法轉化為具體成果";
  return `${name} 是一位以${first}、${second}與${third}為核心能力的${headline}。經歷涵蓋自主學習、專案實作與跨領域協作，能從問題定義一路推進到成果交付。職涯特質是${unique(state.keywords).slice(0, 4).join("、") || "持續學習與主動實踐"}，並希望${legacy}。`;
}

function makeTimelineItems(items, type) {
  const cleaned = unique(items);
  if (!cleaned.length) {
    cleaned.push(type === "education" ? "自主學習與跨領域專題實作" : "完成多項個人專案與團隊協作任務");
  }

  const startYear = 2014;
  return cleaned.map((item, index) => {
    const year = startYear + index * 2;
    const description = type === "education"
      ? "以實作與反思累積方法，建立可轉移到不同題目的學習能力。"
      : "負責問題拆解、執行推進與成果整理，將模糊需求轉化為具體交付。";
    return `
      <div class="resume-item">
        <div class="resume-item-top"><strong>${item}</strong><time>${year} — ${year + 1}</time></div>
        <p>${description}</p>
      </div>`;
  }).join("");
}

const projectLibrary = {
  app: {
    label: "INTERACTIVE PRODUCT",
    title: "PathOS 人生決策儀表板",
    description: "將人生選擇、能力成長與目標拆解成可視化儀表板，支援情境模擬與決策紀錄。",
    stack: ["JavaScript", "UI Prototype", "Data Model"],
    result: "完成可操作原型與 7 階段互動流程"
  },
  brand: {
    label: "BRAND SYSTEM",
    title: "Afterglow 個人品牌系統",
    description: "從品牌定位、視覺語言到內容模板，建立一套可以持續輸出的個人創作系統。",
    stack: ["Branding", "Figma", "Visual Storytelling"],
    result: "建立 12 組視覺模板與完整識別規範"
  },
  education: {
    label: "LEARNING EXPERIENCE",
    title: "Zero Fear 數學學習地圖",
    description: "以情境、圖像與即時回饋重新設計基礎數學學習流程，降低挫折與認知負荷。",
    stack: ["Instructional Design", "UX", "Content System"],
    result: "完成三章教材原型與學習回饋設計"
  },
  business: {
    label: "BUSINESS DESIGN",
    title: "Micro Studio 接案營運模型",
    description: "為個人工作室建立服務包、報價、客戶旅程與專案追蹤系統，提升成交與交付效率。",
    stack: ["Business Model", "Sales", "Operations"],
    result: "設計 3 種服務方案與標準化交付流程"
  },
  product: {
    label: "INDEPENDENT PRODUCT",
    title: "Spark Lab 創作者工具箱",
    description: "整合靈感管理、作品進度與公開展示，讓個人創作能從零散輸出轉為持續運作。",
    stack: ["Product Strategy", "Prototype", "Validation"],
    result: "完成 MVP、測試腳本與迭代路線圖"
  }
};

function fallbackProjects(track) {
  const map = {
    tech: ["app", "product", "education"],
    creative: ["brand", "product", "app"],
    business: ["business", "product", "brand"],
    people: ["education", "brand", "business"],
    practical: ["app", "business", "product"]
  };
  return map[track] || map.practical;
}

function generateProjects() {
  const projectKeys = unique([...state.projectTypes, ...fallbackProjects(dominantTrack())]).slice(0, 3);
  return projectKeys.map((key, index) => {
    const p = projectLibrary[key];
    return `
      <article class="project-card">
        <div class="project-cover">
          <span>0${index + 1} / ${p.label}</span>
          <strong>${p.title}</strong>
        </div>
        <div class="project-body">
          <p>${p.description}</p>
          <div class="project-meta">${p.stack.map(item => `<span>${item}</span>`).join("")}</div>
          <div class="project-result">${p.result}</div>
        </div>
      </article>`;
  }).join("");
}

function generateResume() {
  const name = els.playerName.value.trim() || "無名旅人";
  const headline = state.roles[state.roles.length - 1] || els.lifeGoal.value;
  const allSkills = unique([
    ...state.skills,
    ...dominantStats().map(key => `${STAT_LABELS[key]}導向`),
    "專案推進",
    "問題解決"
  ]).slice(0, 10);
  const keywords = unique([...state.keywords, els.lifeGoal.value, "持續學習"]).slice(0, 10);

  document.getElementById("resumeName").textContent = name;
  document.getElementById("resumeHeadline").textContent = `${headline}｜${els.lifeGoal.value}`;
  document.getElementById("resumeSummary").textContent = buildSummary(name, headline);
  document.getElementById("educationList").innerHTML = makeTimelineItems(state.education, "education");
  document.getElementById("experienceList").innerHTML = makeTimelineItems(state.experience, "experience");
  document.getElementById("skillTags").innerHTML = allSkills.map(skill => `<span>${skill}</span>`).join("");
  document.getElementById("keywordTags").innerHTML = keywords.map(word => `<span>${word}</span>`).join("");
  document.getElementById("resumeStats").innerHTML = Object.entries(STAT_LABELS).map(([key, label]) => `
    <div class="resume-stat-row">
      <span>${label}</span>
      <div class="resume-stat-track"><i style="width:${state.stats[key]}%"></i></div>
      <strong>${state.stats[key]}</strong>
    </div>`).join("");
  document.getElementById("portfolioGrid").innerHTML = generateProjects();

  els.outputSection.classList.remove("hidden");
  setTimeout(() => els.outputSection.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
}

function exportData() {
  const payload = {
    name: els.playerName.value.trim() || "無名旅人",
    goal: els.lifeGoal.value,
    generatedAt: new Date().toISOString(),
    ...state,
    stats: { ...state.stats }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "life-simulator-profile.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

document.getElementById("startBtn").addEventListener("click", startGame);
document.getElementById("resetBtn").addEventListener("click", resetGame);
document.getElementById("restartInlineBtn").addEventListener("click", resetGame);
document.getElementById("viewResumeBtn").addEventListener("click", generateResume);
document.getElementById("printBtn").addEventListener("click", () => window.print());
document.getElementById("exportBtn").addEventListener("click", exportData);
els.playerName.addEventListener("input", updateIdentity);
els.lifeGoal.addEventListener("change", updateIdentity);

renderStats();
updateIdentity();
updateProgress();
