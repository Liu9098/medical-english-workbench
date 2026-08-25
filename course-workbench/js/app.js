/* ========================================
   应用主逻辑 — 课程工作台
   ======================================== */

// ======== 全局状态 ========
let currentPage = 'overview';
let charts = {};

// ======== 页面配置 ========
const PAGES = {
  overview:    { name: '课程总览',       icon: '📊', render: renderOverview },
  tasks:       { name: '任务发布中心',   icon: '📋', render: renderTasks },
  review:      { name: '作业批阅&AI评价', icon: '✍️', render: renderReview },
  data:        { name: '学情数据中心',   icon: '📈', render: renderDataCenter },
  resources:   { name: '课程资源素材库', icon: '📚', render: renderResources },
  grades:      { name: '成绩综合管理',   icon: '🎓', render: renderGrades },
  toolkit:     { name: '课堂互动工具箱', icon: '🧰', render: renderToolkit }
};

// ======== 初始化 ========
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  navigateTo('overview');
});

// ======== 侧边栏渲染 ========
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  let html = '';
  for (const [key, page] of Object.entries(PAGES)) {
    const badge = key === 'review' ? `<span class="nav-badge">${CLASS_STATS.pendingReview}</span>` : '';
    html += `
      <div class="nav-item ${key === currentPage ? 'active' : ''}" data-page="${key}" onclick="navigateTo('${key}')">
        <span class="nav-icon">${page.icon}</span>
        <span>${page.name}</span>
        ${badge}
      </div>
    `;
  }
  nav.innerHTML = html;

  document.getElementById('course-name-display').textContent = COURSE_DATA.name;
  document.getElementById('poa-tag').textContent = COURSE_DATA.methodology;
}

// ======== 页面导航 ========
function navigateTo(pageKey) {
  currentPage = pageKey;
  // 更新导航高亮
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === pageKey);
  });
  // 更新页面标题
  document.getElementById('page-title').textContent = PAGES[pageKey].name;
  // 渲染页面内容
  const content = document.getElementById('page-content');
  content.innerHTML = '';
  PAGES[pageKey].render(content);
  // 滚动到顶部
  content.scrollTop = 0;
}

// ======== 1. 课程总览 ========
function renderOverview(container) {
  container.innerHTML = `
    <!-- 提醒横幅 -->
    <div class="reminder-banner">
      <span class="reminder-icon">📌</span>
      <div class="reminder-text">
        本周待开展：<strong>任务3 体检报告转述</strong> 课堂互动（词汇闯关+角色扮演），
        另有 <strong>${CLASS_STATS.pendingReview}</strong> 份作业待批阅
      </div>
      <button class="btn btn-primary btn-sm" onclick="navigateTo('review')">去批阅</button>
    </div>

    <!-- 统计卡片 -->
    <div class="grid-4 mb-24">
      <div class="stat-card" style="border-left-color: var(--accent-blue)">
        <div class="stat-label">总课时</div>
        <div class="stat-value">${COURSE_DATA.totalHours}<span class="stat-unit">课时</span></div>
        <div class="stat-trend" style="color: var(--accent-green)">已完成 12 课时</div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-green)">
        <div class="stat-label">注册学生</div>
        <div class="stat-value">${CLASS_STATS.totalStudents}<span class="stat-unit">人</span></div>
        <div class="stat-trend" style="color: var(--accent-green)">活跃 ${CLASS_STATS.activeStudents} 人</div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-orange)">
        <div class="stat-label">待批阅</div>
        <div class="stat-value">${CLASS_STATS.pendingReview}<span class="stat-unit">份</span></div>
        <div class="stat-trend" style="color: var(--accent-orange)">口语 12 份 · 书面 6 份</div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-purple)">
        <div class="stat-label">作业提交总数</div>
        <div class="stat-value">${CLASS_STATS.totalSubmissions}<span class="stat-unit">份</span></div>
        <div class="stat-trend" style="color: var(--accent-green)">较上周 +18%</div>
      </div>
    </div>

    <!-- 6任务进度看板 -->
    <div class="card mb-24">
      <div class="card-title">
        <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">📋</div>
        六大任务进度看板
      </div>
      <div class="task-board">
        ${TASKS.map(t => `
          <div class="task-card task-${t.id}-color" onclick="navigateTo('tasks')">
            <div class="task-number">${t.id}</div>
            <div class="task-title">${t.icon} ${t.name}</div>
            <div class="task-output">${t.outputType}</div>
            <div class="task-progress-bar">
              <div class="task-progress-fill" style="width: ${t.progress}%"></div>
            </div>
            <div class="task-stats">
              <span>📈 进度 ${t.progress}%</span>
              <span>✅ 已交 ${t.submitted}/${COURSE_DATA.studentCount}</span>
              <span style="color: var(--accent-red)">⏳ 待交 ${t.pending}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- 班级学情简表 + 课堂提醒 -->
    <div class="grid-2">
      <div class="card">
        <div class="card-title">
          <div class="title-icon" style="background: #f0fff4; color: var(--accent-green)">👥</div>
          班级学情简表
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>学号</th><th>姓名</th><th>已完成任务</th><th>状态</th><th>薄弱点</th>
            </tr>
          </thead>
          <tbody>
            ${SAMPLE_STUDENTS.slice(0, 6).map(s => `
              <tr>
                <td>${s.id}</td>
                <td>${s.name}</td>
                <td>${[s.task1, s.task2, s.task3, s.task4].filter(v => v > 0).length}/6</td>
                <td><span class="tag ${s.status === 'active' ? 'tag-green' : 'tag-orange'}">${s.status === 'active' ? '活跃' : '需关注'}</span></td>
                <td>${s.weakness}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        <div class="mt-8 text-center">
          <button class="btn btn-outline btn-sm" onclick="navigateTo('data')">查看全部学情 →</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">
          <div class="title-icon" style="background: #fffaf0; color: var(--accent-orange)">🔔</div>
          课堂待开展互动提醒
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); border-left: 4px solid var(--accent-orange);">
            <div style="font-weight: 600; font-size: 14px;">任务3 · 课中互动</div>
            <div style="font-size: 13px; color: var(--text-tertiary); margin-top: 4px;">词汇闯关（体检报告高频词）· 角色扮演录音（报告转述）</div>
            <button class="btn btn-warning btn-sm mt-8" onclick="navigateTo('toolkit')">启动互动工具</button>
          </div>
          <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); border-left: 4px solid var(--accent-blue);">
            <div style="font-weight: 600; font-size: 14px;">任务4 · 预习推送</div>
            <div style="font-size: 13px; color: var(--text-tertiary); margin-top: 4px;">需推送：膳食康养词汇闯关 + 中华饮食文化英译微课</div>
            <button class="btn btn-primary btn-sm mt-8" onclick="navigateTo('tasks')">发布预习任务</button>
          </div>
          <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); border-left: 4px solid var(--accent-green);">
            <div style="font-weight: 600; font-size: 14px;">任务3 · 作业催交</div>
            <div style="font-size: 13px; color: var(--text-tertiary); margin-top: 4px;">${TASKS[2].pending} 名学生尚未提交报告转述录音</div>
            <button class="btn btn-success btn-sm mt-8" onclick="showToast('催交提醒已发送')">一键催交</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ======== 2. 任务发布中心 ========
function renderTasks(container) {
  container.innerHTML = `
    <div class="flex-between mb-16">
      <div class="text-sm text-tertiary">
        共 ${TASKS.length} 个岗位任务 · 每任务含课前预习 / 课中互动 / 课后产出三类模板
      </div>
      <div class="flex gap-8">
        <button class="btn btn-outline btn-sm" onclick="showToast('批量导入学生功能')">📥 批量导入学生</button>
        <button class="btn btn-primary btn-sm" onclick="showTaskCreateModal()">➕ 新建任务</button>
      </div>
    </div>

    <div class="task-folder-grid">
      ${TASKS.map(t => `
        <div class="task-folder task-${t.id}-color">
          <div class="task-folder-header">
            <div class="folder-title">${t.icon} ${t.fullName}</div>
            <div class="folder-subtitle">产出：${t.output}</div>
          </div>
          <div class="task-folder-body">
            <div class="template-section">
              <div class="template-section-label">📚 课前预习</div>
              <div class="template-list">
                ${t.templates.pre.map(p => `<span class="template-chip chip-pre" onclick="showTaskTemplate('${t.name}','课前','${p}')">${p}</span>`).join('')}
              </div>
            </div>
            <div class="template-section">
              <div class="template-section-label">🎯 课中互动</div>
              <div class="template-list">
                ${t.templates.in.map(p => `<span class="template-chip chip-in" onclick="showTaskTemplate('${t.name}','课中','${p}')">${p}</span>`).join('')}
              </div>
            </div>
            <div class="template-section">
              <div class="template-section-label">✍️ 课后产出</div>
              <div class="template-list">
                ${t.templates.post.map(p => `<span class="template-chip chip-post" onclick="showTaskTemplate('${t.name}','课后','${p}')">${p}</span>`).join('')}
              </div>
            </div>
            <div class="flex-between mt-8" style="padding-top: 12px; border-top: 1px solid var(--border-color);">
              <span class="text-sm text-tertiary">进度 ${t.progress}% · 已交 ${t.submitted}人</span>
              <div class="flex gap-8">
                <button class="btn btn-outline btn-sm" onclick="showQRModal(${t.id})">📱 分享</button>
                <button class="btn btn-primary btn-sm" onclick="showPublishModal(${t.id})">发布</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ======== 3. 作业批阅 & AI评价 ========
function renderReview(container) {
  container.innerHTML = `
    <div class="tabs" id="review-tabs">
      <div class="tab-item active" data-tab="oral" onclick="switchReviewTab('oral')">🎤 口语作业（12份待批）</div>
      <div class="tab-item" data-tab="written" onclick="switchReviewTab('written')">📝 书面作业（6份待批）</div>
    </div>

    <div id="review-oral" class="review-panel">
      ${renderOralReview()}
    </div>
    <div id="review-written" class="review-panel hidden">
      ${renderWrittenReview()}
    </div>
  `;
}

function renderOralReview() {
  return `
    <div class="card mb-16">
      <div class="card-title">
        <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">🎤</div>
        口语作业列表 — 任务3：体检报告转述录音
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>学生</th><th>任务</th><th>提交时间</th><th>时长</th><th>AI初评</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${SAMPLE_STUDENTS.slice(0, 5).map((s, i) => `
            <tr>
              <td><strong>${s.name}</strong></td>
              <td><span class="tag tag-orange">报告转述</span></td>
              <td>2025-03-${15+i}</td>
              <td>${2 + i * 0.3}分钟</td>
              <td>
                ${i === 0
                  ? '<span class="tag tag-green">AI已评</span>'
                  : '<span class="tag tag-gray">待AI评</span>'}
              </td>
              <td>
                <button class="btn btn-primary btn-sm" onclick="showAIReportModal()">查看报告</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <!-- 示例AI质检报告 -->
    <div class="ai-report">
      <div class="ai-report-header">
        <div>
          <div class="report-title">🤖 课堂AI质检参考报告</div>
          <div class="report-meta">${SAMPLE_AI_REPORT.task} · ${SAMPLE_AI_REPORT.student} · ${SAMPLE_AI_REPORT.date}</div>
        </div>
        <button class="copy-btn" onclick="copyReport()">📋 复制报告</button>
      </div>
      <div class="ai-report-body">
        <div class="no-score-notice">
          ⚠️ 本报告仅评价英语语言交际能力，不评判医学内容对错，不打分
        </div>

        <div style="margin-bottom: 16px;">
          ${SAMPLE_AI_REPORT.dimensions.map(d => `
            <span class="dimension-badge ${d.class}">${d.icon} ${d.name}</span>
          `).join('')}
        </div>

        <div class="report-section">
          <div class="report-section-title">✅ 一、表演亮点</div>
          <div class="report-highlight">
            <ul style="margin: 0; padding-left: 16px;">
              ${SAMPLE_AI_REPORT.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="report-section">
          <div class="report-section-title">⚠️ 二、待优化原句</div>
          ${SAMPLE_AI_REPORT.optimizations.map(o => `
            <div class="report-optimize">
              <div class="original-sentence">"${o.original}"</div>
              <div class="issue-note">问题：${o.issue}</div>
            </div>
          `).join('')}
        </div>

        <div class="report-section">
          <div class="report-section-title">💡 三、岗位标准替换句式</div>
          ${SAMPLE_AI_REPORT.replacements.map(r => `
            <div class="report-replace">
              <div class="replace-sentence">→ ${r.sentence}</div>
              <div class="replace-note">说明：${r.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderWrittenReview() {
  return `
    <div class="card mb-16">
      <div class="card-title">
        <div class="title-icon" style="background: #f0fff4; color: var(--accent-green)">📝</div>
        书面作业列表 — 任务2：英文健康信息记录单
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>学生</th><th>任务</th><th>类型</th><th>提交时间</th><th>AI批改</th><th>操作</th>
          </tr>
        </thead>
        <tbody>
          ${SAMPLE_STUDENTS.slice(0, 6).map((s, i) => `
            <tr>
              <td><strong>${s.name}</strong></td>
              <td><span class="tag tag-green">信息记录单</span></td>
              <td>表单书面</td>
              <td>2025-03-${14+i}</td>
              <td>
                ${i < 3
                  ? `<span class="tag tag-blue">语法${3-i}处</span> <span class="tag tag-orange">中式英语${i+1}处</span>`
                  : '<span class="tag tag-gray">待批改</span>'}
              </td>
              <td>
                <button class="btn btn-primary btn-sm" onclick="showWrittenReviewModal('${s.name}')">查看详情</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="card">
      <div class="card-title">
        <div class="title-icon" style="background: #faf5ff; color: var(--accent-purple)">🤖</div>
        AI书面批改示例 — 王芳 健康信息记录单
      </div>
      <div class="no-score-notice">
        ⚠️ AI批改仅检查英语语言表达（语法、中式英语、用词缺陷），不评判医学信息准确性
      </div>
      <table class="data-table">
        <thead>
          <tr><th>原句</th><th>问题类型</th><th>修改建议</th><th>说明</th></tr>
        </thead>
        <tbody>
          <tr>
            <td style="color: var(--accent-red)">"She have a little fat."</td>
            <td><span class="tag tag-red">语法错误</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"She is slightly overweight."</td>
            <td>主谓一致错误；'have a little fat' 表述不地道</td>
          </tr>
          <tr>
            <td style="color: var(--accent-red)">"He often eats too much oil food."</td>
            <td><span class="tag tag-orange">中式英语</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"He tends to eat foods high in oil."</td>
            <td>'oil food' 中式直译；应为 'oily food' 或更专业表述</td>
          </tr>
          <tr>
            <td style="color: var(--accent-red)">"Do you have any uncomfortable?"</td>
            <td><span class="tag tag-purple">用词缺陷</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"Do you have any discomfort?"</td>
            <td>'uncomfortable' 是形容词，不能作名词；应用 'discomfort'</td>
          </tr>
        </tbody>
      </table>
      <div class="mt-16 flex gap-8">
        <button class="btn btn-success btn-sm" onclick="showToast('批注已保存')">💾 保存批注</button>
        <button class="btn btn-primary btn-sm" onclick="showToast('已发送给学生')">📤 反馈给学生</button>
      </div>
    </div>
  `;
}

function switchReviewTab(tab) {
  document.querySelectorAll('#review-tabs .tab-item').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.getElementById('review-oral').classList.toggle('hidden', tab !== 'oral');
  document.getElementById('review-written').classList.toggle('hidden', tab !== 'written');
}

// ======== 4. 学情数据中心（八按钮枢纽页） ========
// Task 3 报告解读 嵌入的看板地址（部署成公网后替换此常量即可）
const DASHBOARD_URL = 'assets/task3-standalone.html?task=3';

function renderDataCenter(container) {
  container.innerHTML = `
    <div class="card" style="padding: 24px;">
      <div class="card-title mb-16">
        <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">📈</div>
        学情数据中心 · 请选择查看入口
      </div>

      <!-- 六个任务数据入口 -->
      <div class="grid-6 mb-24">
        ${TASKS.map(t => `
          <div class="task-mini-card task-${t.id}-color" onclick="renderTaskDashboard(${t.id})">
            <div class="task-mini-icon">${t.icon}</div>
            <div class="task-mini-tag">Task ${t.id}</div>
            <div class="task-mini-name">${t.name}</div>
          </div>
        `).join('')}
      </div>

      <!-- 两个综合分析入口 -->
      <div class="grid-2">
        <div class="task-mini-card" style="border-top-color: var(--accent-blue); padding: 20px 8px;" onclick="renderCapabilityTrend()">
          <div class="task-mini-icon">📊</div>
          <div class="task-mini-tag">综合分析</div>
          <div class="task-mini-name">能力发展趋势总览</div>
        </div>
        <div class="task-mini-card" style="border-top-color: var(--accent-orange); padding: 20px 8px;" onclick="renderTeachingOpt()">
          <div class="task-mini-icon">🎯</div>
          <div class="task-mini-tag">综合分析</div>
          <div class="task-mini-name">学情导向教学优化</div>
        </div>
      </div>
    </div>
  `;
}

// ======== 4.1 单任务学情视图（Task 3 嵌入报告解读看板） ========
function renderTaskDashboard(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  if (!task) return;

  if (taskId === 3) {
    // Task 3 报告转述：嵌入本地看板
    showModal(`📊 Task 3 ${task.name} · 报告解读看板`, `
      <div class="iframe-modal-wrap">
        <iframe class="iframe-modal-frame" src="${DASHBOARD_URL}" allow="microphone; camera; fullscreen" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="text-sm text-tertiary mt-8">
        看板地址：${DASHBOARD_URL}
      </div>
    `);
    document.querySelector('#modal-overlay .modal')?.classList.add('modal--wide');
    // 右上角添加全屏按钮（教师大屏展示学生评分数据）
    addTask3FullscreenButton();
  } else {
    // 其余任务：占位提示，后续接入数据
    showModal(`${task.icon} Task ${task.id} ${task.name} · 任务学情`, `
      <div style="text-align: center; padding: 48px 16px;">
        <div style="font-size: 40px; margin-bottom: 12px;">🗂️</div>
        <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">该任务学情数据准备中</div>
        <div class="text-sm text-tertiary">Task ${task.id}「${task.name}」的专项学情看板尚未接入，敬请期待。</div>
      </div>
    `);
  }
}

// ======== 4.2 能力发展趋势总览（原学情数据中心全部诊断内容） ========
function renderCapabilityTrend() {
  showModal('📊 能力发展趋势总览', `
    <div class="grid-4 mb-24">
      <div class="stat-card" style="border-left-color: var(--accent-blue)">
        <div class="stat-label">班级平均分</div>
        <div class="stat-value">${CLASS_STATS.avgScore}<span class="stat-unit">分</span></div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-green)">
        <div class="stat-label">活跃学生</div>
        <div class="stat-value">${CLASS_STATS.activeStudents}<span class="stat-unit">/${CLASS_STATS.totalStudents}</span></div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-orange)">
        <div class="stat-label">需关注学生</div>
        <div class="stat-value">${CLASS_STATS.warningStudents}<span class="stat-unit">人</span></div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-purple)">
        <div class="stat-label">本周提交</div>
        <div class="stat-value">${CLASS_STATS.weeklyActivity[4]}<span class="stat-unit">份</span></div>
      </div>
    </div>

    <div class="grid-2 mb-24">
      <div class="chart-container">
        <div class="card-title" style="margin-bottom: 12px;">
          <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">📊</div>
          各任务完成率
        </div>
        <canvas id="chart-task-completion"></canvas>
      </div>
      <div class="chart-container">
        <div class="card-title" style="margin-bottom: 12px;">
          <div class="title-icon" style="background: #fffaf0; color: var(--accent-orange)">🎯</div>
          班级薄弱点分布
        </div>
        <canvas id="chart-weakness"></canvas>
      </div>
    </div>

    <div class="chart-container mb-24">
      <div class="card-title" style="margin-bottom: 12px;">
        <div class="title-icon" style="background: #f0fff4; color: var(--accent-green)">📈</div>
        本周每日提交趋势
      </div>
      <canvas id="chart-weekly" style="max-height: 200px;"></canvas>
    </div>

    <!-- 单人成长档案（原内容保留） -->
    <div class="card">
      <div class="flex-between mb-16">
        <div class="card-title" style="margin-bottom: 0;">
          <div class="title-icon" style="background: #faf5ff; color: var(--accent-purple)">👤</div>
          单人学习档案
        </div>
        <div class="flex gap-8">
          <select class="form-select" style="width: 200px;" id="student-select" onchange="renderStudentProfile()">
            ${SAMPLE_STUDENTS.map(s => `<option value="${s.id}">${s.name}（${s.id}）</option>`).join('')}
          </select>
          <button class="btn btn-outline btn-sm" onclick="showToast('学情数据已导出')">📥 导出</button>
        </div>
      </div>
      <div id="student-profile-area"></div>
    </div>
  `);
  document.querySelector('#modal-overlay .modal')?.classList.add('modal--wide');
  // 弹窗内 canvas / 档案需等 DOM 渲染后再画
  setTimeout(() => { renderCharts(); renderStudentProfile(); }, 120);
}

// ======== 4.3 学情导向教学优化（占位，内容后续接入） ========
function renderTeachingOpt() {
  showModal('🎯 学情导向教学优化', `
    <div style="text-align: center; padding: 48px 16px;">
      <div style="font-size: 40px; margin-bottom: 12px;">🚧</div>
      <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px;">功能建设中</div>
      <div class="text-sm text-tertiary">「学情导向教学优化」模块正在建设中，上线后将基于能力发展趋势总览的学情诊断，自动生成教学优化建议。</div>
    </div>
  `);
}

function renderCharts() {
  // 重新打开子视图时，先销毁旧实例，避免 canvas 复用报错
  ['taskCompletion', 'weakness', 'weekly'].forEach(k => {
    if (charts[k]) { charts[k].destroy(); charts[k] = null; }
  });

  // 各任务完成率
  const ctx1 = document.getElementById('chart-task-completion');
  if (ctx1) {
    charts.taskCompletion = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: TASKS.map(t => `任务${t.id}`),
        datasets: [{
          label: '完成率(%)',
          data: CLASS_STATS.taskCompletion,
          backgroundColor: TASKS.map(t => t.color),
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, max: 100 } }
      }
    });
  }

  // 薄弱点分布
  const ctx2 = document.getElementById('chart-weakness');
  if (ctx2) {
    const w = CLASS_STATS.weaknessDistribution;
    charts.weakness = new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: Object.keys(w),
        datasets: [{
          data: Object.values(w),
          backgroundColor: ['#3182ce', '#38a169', '#dd6b20', '#805ad5', '#319795', '#d69e2e']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'right', labels: { font: { size: 11 } } } }
      }
    });
  }

  // 每周趋势
  const ctx3 = document.getElementById('chart-weekly');
  if (ctx3) {
    charts.weekly = new Chart(ctx3, {
      type: 'line',
      data: {
        labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        datasets: [{
          label: '提交数',
          data: CLASS_STATS.weeklyActivity,
          borderColor: '#3182ce',
          backgroundColor: 'rgba(49,130,206,0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 5,
          pointBackgroundColor: '#3182ce'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } }
      }
    });
  }
}

function renderStudentProfile() {
  const select = document.getElementById('student-select');
  if (!select) return;
  const student = SAMPLE_STUDENTS.find(s => s.id === select.value);
  if (!student) return;

  const area = document.getElementById('student-profile-area');
  const taskScores = [
    { name: '体检接待', score: student.task1, color: '#3182ce' },
    { name: '信息问询', score: student.task2, color: '#38a169' },
    { name: '报告转述', score: student.task3, color: '#dd6b20' },
    { name: '膳食指导', score: student.task4, color: '#805ad5' },
    { name: '运动建议', score: student.task5, color: '#319795' },
    { name: '健康维持', score: student.task6, color: '#d69e2e' }
  ];
  const completed = taskScores.filter(t => t.score > 0).length;
  const avgScore = completed > 0 ? Math.round(taskScores.filter(t => t.score > 0).reduce((a, b) => a + b.score, 0) / completed) : 0;

  area.innerHTML = `
    <div class="student-profile">
      <div class="profile-avatar">
        <div class="avatar-circle">${student.avatar}</div>
        <div style="font-size: 18px; font-weight: 700;">${student.name}</div>
        <div style="font-size: 12px; color: var(--text-tertiary); margin-top: 4px;">${student.id}</div>
        <div class="mt-8">
          <span class="tag ${student.status === 'active' ? 'tag-green' : 'tag-orange'}">${student.status === 'active' ? '● 活跃' : '● 需关注'}</span>
        </div>
        <div class="profile-info mt-16">
          <div class="info-row"><span class="info-label">已完成任务</span><span class="info-value">${completed}/6</span></div>
          <div class="info-row"><span class="info-label">平均分</span><span class="info-value">${avgScore}分</span></div>
          <div class="info-row"><span class="info-label">优势</span><span class="info-value" style="color: var(--accent-green)">${student.strength}</span></div>
          <div class="info-row"><span class="info-label">薄弱点</span><span class="info-value" style="color: var(--accent-red)">${student.weakness}</span></div>
        </div>
      </div>
      <div>
        <div class="card-title" style="margin-bottom: 16px;">
          <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">📊</div>
          各任务成绩
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${taskScores.map(t => `
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 80px; font-size: 13px; color: var(--text-secondary); flex-shrink: 0;">${t.name}</div>
              <div style="flex: 1; height: 24px; background: var(--bg-tertiary); border-radius: 12px; overflow: hidden;">
                <div style="height: 100%; width: ${t.score}%; background: ${t.color}; border-radius: 12px; transition: width 0.6s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 8px; color: white; font-size: 12px; font-weight: 600;">
                  ${t.score > 0 ? t.score + '分' : '未完成'}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mt-16" style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm);">
          <div style="font-size: 13px; font-weight: 600; margin-bottom: 6px;">📋 教师备注</div>
          <div style="font-size: 13px; color: var(--text-secondary);">
            ${student.name}同学${student.strength}，但${student.weakness}方面需要加强。
            建议在后续任务中重点关注${student.weakness}的改进，多进行针对性练习。
          </div>
        </div>
      </div>
    </div>
  `;
}

// ======== 5. 课程资源素材库 ========
function renderResources(container) {
  container.innerHTML = `
    <div class="flex-between mb-16">
      <div class="text-sm text-tertiary">按6个任务分类存储 · 支持上传、下载、复用</div>
      <button class="btn btn-primary btn-sm" onclick="showToast('上传功能')">📤 上传素材</button>
    </div>

    <!-- 资源分类网格 -->
    ${RESOURCE_CATEGORIES.map(cat => `
      <div class="card mb-24">
        <div class="card-title">
          <div class="title-icon" style="background: ${cat.color}20; color: ${cat.color}">${cat.icon}</div>
          ${cat.name}
          <span class="text-sm text-tertiary" style="margin-left: auto;">${cat.items.length} 项</span>
        </div>
        <div class="resource-grid">
          ${cat.items.map(item => `
            <div class="resource-item" onclick="showResourceDetail('${item.title}', '${item.type}')">
              <div class="res-icon">${cat.icon}</div>
              <div class="res-title">${item.title}</div>
              <div class="res-desc">${item.desc}</div>
              <div class="res-tag">
                <span class="tag tag-gray">${item.type}</span>
                ${item.task > 0 ? `<span class="tag tag-blue">任务${item.task}</span>` : '<span class="tag tag-gray">通用</span>'}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('')}
  `;
}

// ======== 6. 成绩综合管理 ========
function renderGrades(container) {
  container.innerHTML = `
    <div class="grid-3 mb-24">
      <div class="stat-card" style="border-left-color: var(--accent-blue)">
        <div class="stat-label">班级平均分</div>
        <div class="stat-value">${CLASS_STATS.avgScore}<span class="stat-unit">分</span></div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-green)">
        <div class="stat-label">最高分</div>
        <div class="stat-value">95<span class="stat-unit">分</span></div>
      </div>
      <div class="stat-card" style="border-left-color: var(--accent-red)">
        <div class="stat-label">最低分</div>
        <div class="stat-value">54<span class="stat-unit">分</span></div>
      </div>
    </div>

    <div class="card mb-24">
      <div class="flex-between mb-16">
        <div class="card-title" style="margin-bottom: 0;">
          <div class="title-icon" style="background: #ebf8ff; color: var(--accent-blue)">🎓</div>
          班级成绩汇总表
        </div>
        <div class="flex gap-8">
          <button class="btn btn-outline btn-sm" onclick="generateComments()">💬 批量生成评语</button>
          <button class="btn btn-success btn-sm" onclick="exportGrades()">📥 导出成绩单</button>
        </div>
      </div>
      <table class="data-table" id="grade-table">
        <thead>
          <tr>
            <th>学号</th><th>姓名</th>
            <th>任务1<br><span class="text-sm text-tertiary">接待</span></th>
            <th>任务2<br><span class="text-sm text-tertiary">问询</span></th>
            <th>任务3<br><span class="text-sm text-tertiary">转述</span></th>
            <th>任务4<br><span class="text-sm text-tertiary">膳食</span></th>
            <th>任务5<br><span class="text-sm text-tertiary">运动</span></th>
            <th>任务6<br><span class="text-sm text-tertiary">随访</span></th>
            <th>过程总分</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          ${SAMPLE_STUDENTS.map(s => {
            const total = Math.round((s.task1 + s.task2 + s.task3 + s.task4 + s.task5 + s.task6) / 6 * 0.9);
            return `
              <tr>
                <td>${s.id}</td>
                <td><strong>${s.name}</strong></td>
                <td>${s.task1 || '-'}</td>
                <td>${s.task2 || '-'}</td>
                <td>${s.task3 || '-'}</td>
                <td>${s.task4 || '-'}</td>
                <td>${s.task5 || '-'}</td>
                <td>${s.task6 || '-'}</td>
                <td><strong style="color: var(--accent-blue)">${total}</strong></td>
                <td>
                  <span class="tag ${s.status === 'active' ? 'tag-green' : 'tag-orange'}">
                    ${s.status === 'active' ? '正常' : '需关注'}
                  </span>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- 评语生成区 -->
    <div class="card">
      <div class="card-title">
        <div class="title-icon" style="background: #faf5ff; color: var(--accent-purple)">💬</div>
        个性化评语生成
      </div>
      <div id="comments-area">
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <div class="empty-text">点击"批量生成评语"按钮，基于过程数据自动生成个性化评语</div>
        </div>
      </div>
    </div>
  `;
}

function generateComments() {
  const area = document.getElementById('comments-area');
  area.innerHTML = SAMPLE_STUDENTS.map(s => {
    const total = Math.round((s.task1 + s.task2 + s.task3 + s.task4) / 4);
    const comment = s.status === 'active'
      ? `${s.name}同学本阶段表现积极，${s.strength}方面尤为突出。建议在${s.weakness}方面继续加强练习，保持良好势头。`
      : `${s.name}同学需加强学习投入，${s.weakness}是目前主要短板。建议利用课前预习和课后练习时间多加巩固基础，教师将提供针对性辅导。`;
    return `
      <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 8px; display: flex; align-items: start; gap: 12px;">
        <div class="avatar-circle" style="width: 36px; height: 36px; font-size: 14px; flex-shrink: 0;">${s.avatar}</div>
        <div style="flex: 1;">
          <div style="font-weight: 600; font-size: 14px;">${s.name}（总分 ${total}）</div>
          <div style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;">${comment}</div>
        </div>
        <button class="btn btn-outline btn-sm" onclick="showToast('评语已复制')">复制</button>
      </div>
    `;
  }).join('');
  showToast('已为 ' + SAMPLE_STUDENTS.length + ' 名学生生成评语');
}

function exportGrades() {
  showToast('成绩单已导出为 Excel 文件');
}

// ======== 7. 课堂互动工具箱 ========
function renderToolkit(container) {
  container.innerHTML = `
    <div class="grid-4 mb-24">
      <div class="tool-card" onclick="showToolWithTaskSelector('vocab')">
        <div class="tool-icon">🔤</div>
        <div class="tool-name">词汇闯关</div>
        <div class="tool-desc">六大任务高频词汇挑战</div>
      </div>
      <div class="tool-card" onclick="showToolWithTaskSelector('sentence')">
        <div class="tool-icon">📝</div>
        <div class="tool-name">句式游戏</div>
        <div class="tool-desc">六大任务岗位场景句型</div>
      </div>
      <div class="tool-card" onclick="showToolWithTaskSelector('ai_dialog')">
        <div class="tool-icon">🎭</div>
        <div class="tool-name">AI情景口语</div>
        <div class="tool-desc">六大任务虚拟外籍客户对话</div>
      </div>
      <div class="tool-card" onclick="startLottery()">
        <div class="tool-icon">🎰</div>
        <div class="tool-name">线上抽签</div>
        <div class="tool-desc">随机抽取学生/分组</div>
      </div>
      <div class="tool-card" onclick="showTaskQRSelector()">
        <div class="tool-icon">📱</div>
        <div class="tool-name">任务二维码</div>
        <div class="tool-desc">生成任务分享二维码</div>
      </div>
      <div class="tool-card" onclick="showToolWithTaskSelector('ai_report')">
        <div class="tool-icon">🤖</div>
        <div class="tool-name">质检报告生成</div>
        <div class="tool-desc">六大任务AI质检报告</div>
      </div>
      <div class="tool-card" onclick="showToolWithTaskSelector('role_play')">
        <div class="tool-icon">🎬</div>
        <div class="tool-name">角色扮演录音</div>
        <div class="tool-desc">六大任务情景模拟</div>
      </div>
      <div class="tool-card" onclick="startTimer()">
        <div class="tool-icon">⏱️</div>
        <div class="tool-name">课堂计时器</div>
        <div class="tool-desc">活动倒计时工具</div>
      </div>
      <a class="tool-card" href="https://workbuddy.link/p/QLXtJ9WqXHrqkIMSBjuEi7" target="_blank" rel="noopener" style="display:block;text-decoration:none;color:inherit;">
        <div class="tool-icon" style="background: rgba(128,90,213,.18); color: #805ad5;">🥗</div>
        <div class="tool-name">膳食闯关游戏</div>
        <div class="tool-desc">Task 4 膳食指导 · 三阶闯关互动</div>
      </a>
    </div>

    <div style="padding: 20px; background: var(--bg-tertiary); border-radius: var(--radius-md); text-align: center; color: var(--text-tertiary); font-size: 14px;">
      💡 点击上方任一工具按钮 → 选择对应的任务（Task 1-6）→ 加载该任务下的课堂活动
    </div>
  `;
}

// ======== 任务选择器（工具箱通用） ========
function showToolWithTaskSelector(toolType) {
  const toolInfo = {
    vocab: { title: '🔤 词汇闯关', desc: '高频专业词汇挑战' },
    sentence: { title: '📝 句式游戏', desc: '岗位场景句型选择' },
    ai_dialog: { title: '🎭 AI情景口语', desc: '虚拟外籍客户对话' },
    ai_report: { title: '🤖 质检报告生成', desc: 'AI三维质检分析' },
    role_play: { title: '🎬 角色扮演录音', desc: '健康管理师-客户模拟' }
  };
  const info = toolInfo[toolType];

  showModal(info.title, `
    <div style="padding: 8px;">
      <div style="text-align: center; padding: 12px 0 20px; color: var(--text-secondary); font-size: 14px;">
        <div style="font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">${info.desc}</div>
        <div>请选择任务，加载对应的课堂活动内容</div>
      </div>
      <div class="task-select-grid">
        ${TASKS.map(t => `
          <div class="task-select-card task-${t.id}-color" onclick="loadToolForTask('${toolType}', ${t.id})">
            <div class="task-select-icon">${t.icon}</div>
            <div class="task-select-tag">Task ${t.id}</div>
            <div class="task-select-name">${t.name}</div>
            <div class="task-select-output">${t.outputType}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `);
}

// 加载任务对应的工具内容
function loadToolForTask(toolType, taskId) {
  switch(toolType) {
    case 'vocab':       startVocabGame(taskId); break;
    case 'sentence':    startSentenceGame(taskId); break;
    case 'ai_dialog':   startAIDialog(taskId); break;
    case 'ai_report':   showAIReportModal(taskId); break;
    case 'role_play':   startRolePlay(taskId); break;
  }
}

// 任务二维码选择器
function showTaskQRSelector() {
  showModal('📱 任务二维码 — 选择任务', `
    <div style="padding: 8px;">
      <div style="text-align: center; padding: 12px 0 20px; color: var(--text-secondary); font-size: 14px;">
        请选择任务，生成对应的学生加入二维码
      </div>
      <div class="task-select-grid">
        ${TASKS.map(t => `
          <div class="task-select-card task-${t.id}-color" onclick="closeModal(); showQRModal(${t.id})">
            <div class="task-select-icon">${t.icon}</div>
            <div class="task-select-tag">Task ${t.id}</div>
            <div class="task-select-name">${t.name}</div>
            <div class="task-select-output">${t.outputType}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `);
}

// 课堂计时器
function startTimer() {
  let totalSeconds = 0;
  let timerInterval = null;
  showModal('⏱️ 课堂计时器', `
    <div class="lottery-container">
      <div class="lottery-display" id="timer-display" style="font-family: 'Consolas', monospace;">00:00</div>
      <div class="flex gap-8" style="justify-content: center;">
        <button class="btn btn-success btn-lg" id="timer-start-btn" onclick="toggleTimer()">▶ 开始</button>
        <button class="btn btn-warning btn-lg" onclick="resetTimer()">↺ 重置</button>
      </div>
      <div class="mt-16 flex gap-8" style="justify-content: center;">
        <button class="btn btn-outline btn-sm" onclick="setPresetTimer(60)">1分钟</button>
        <button class="btn btn-outline btn-sm" onclick="setPresetTimer(180)">3分钟</button>
        <button class="btn btn-outline btn-sm" onclick="setPresetTimer(300)">5分钟</button>
      </div>
    </div>
  `);
  window._timerInterval = null;
  window._timerSeconds = 0;
}

function toggleTimer() {
  const btn = document.getElementById('timer-start-btn');
  if (btn.textContent.includes('开始')) {
    btn.textContent = '⏸ 暂停';
    btn.classList.remove('btn-success');
    btn.classList.add('btn-warning');
    window._timerInterval = setInterval(() => {
      window._timerSeconds++;
      const m = String(Math.floor(window._timerSeconds / 60)).padStart(2, '0');
      const s = String(window._timerSeconds % 60).padStart(2, '0');
      const display = document.getElementById('timer-display');
      if (display) display.textContent = `${m}:${s}`;
    }, 1000);
  } else {
    btn.textContent = '▶ 开始';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-warning');
    clearInterval(window._timerInterval);
  }
}

function resetTimer() {
  clearInterval(window._timerInterval);
  window._timerSeconds = 0;
  const display = document.getElementById('timer-display');
  if (display) display.textContent = '00:00';
  const btn = document.getElementById('timer-start-btn');
  if (btn) {
    btn.textContent = '▶ 开始';
    btn.classList.add('btn-success');
    btn.classList.remove('btn-warning');
  }
}

function setPresetTimer(seconds) {
  resetTimer();
  window._timerSeconds = seconds;
  const display = document.getElementById('timer-display');
  if (display) {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    display.textContent = `${m}:${s}`;
  }
}

// ======== 词汇闯关游戏（按任务） ========
let vocabGameIndex = 0;
let vocabGameScore = 0;
let vocabGameList = [];

function startVocabGame(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  vocabGameList = VOCAB_BY_TASK[taskId] || VOCAB_QUESTIONS;
  vocabGameIndex = 0;
  vocabGameScore = 0;
  showModal(`🔤 词汇闯关 — Task ${taskId} ${task.name}`, `
    <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
      <span class="tag" style="background: ${task.color}20; color: ${task.color};">Task ${taskId}</span>
      <span style="margin-left: 8px;">${task.outputType} · 高频专业词汇</span>
    </div>
    <div id="vocab-game-area" class="vocab-game-area">
      <div style="text-align: center; margin-bottom: 16px;">
        <span class="tag tag-blue">第 <span id="vocab-q-num">1</span>/${vocabGameList.length} 题</span>
        <span class="tag tag-green" style="margin-left: 8px;">得分: <span id="vocab-score">0</span></span>
      </div>
      <div id="vocab-content"></div>
    </div>
  `);
  renderVocabQuestion();
}

function renderVocabQuestion() {
  const q = vocabGameList[vocabGameIndex];
  document.getElementById('vocab-q-num').textContent = vocabGameIndex + 1;
  document.getElementById('vocab-score').textContent = vocabGameScore;
  document.getElementById('vocab-content').innerHTML = `
    <div class="vocab-word-card">
      <div class="word">${q.word}</div>
      <div class="phonetic">${q.phonetic}</div>
    </div>
    <div class="vocab-options">
      ${q.options.map((opt, i) => `
        <div class="vocab-option" onclick="checkVocabAnswer(${i}, ${q.correct})">${opt}</div>
      `).join('')}
    </div>
  `;
}

function checkVocabAnswer(selected, correct) {
  const options = document.querySelectorAll('.vocab-option');
  options.forEach(o => o.style.pointerEvents = 'none');
  if (selected === correct) {
    options[selected].classList.add('correct');
    vocabGameScore += 10;
    document.getElementById('vocab-score').textContent = vocabGameScore;
  } else {
    options[selected].classList.add('wrong');
    options[correct].classList.add('correct');
  }
  setTimeout(() => {
    vocabGameIndex++;
    if (vocabGameIndex < vocabGameList.length) {
      renderVocabQuestion();
    } else {
      document.getElementById('vocab-content').innerHTML = `
        <div class="text-center" style="padding: 30px;">
          <div style="font-size: 48px;">🎉</div>
          <div style="font-size: 24px; font-weight: 700; margin-top: 12px;">闯关完成！</div>
          <div style="font-size: 18px; color: var(--accent-green); margin-top: 8px;">最终得分: ${vocabGameScore} / ${vocabGameList.length * 10}</div>
        </div>
      `;
    }
  }, 1500);
}

// ======== 句式游戏（按任务） ========
let sentenceGameIndex = 0;
let sentenceGameScore = 0;
let sentenceGameList = [];

function startSentenceGame(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  // Task 3 使用健康报告转述口语支架训练器（iframe 嵌入）
  if (taskId === 3) {
    showModal(`📝 句式游戏 — Task 3 ${task.name}`, `
      <div class="iframe-modal-wrap">
        <iframe class="iframe-modal-frame" src="https://liu9098.github.io/health-report-trainer/" allow="microphone; camera; fullscreen" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    `);
    document.querySelector('#modal-overlay .modal')?.classList.add('modal--wide');
    addTask3FullscreenButton();
    return;
  }
  sentenceGameList = SENTENCES_BY_TASK[taskId] || SENTENCE_QUESTIONS;
  sentenceGameIndex = 0;
  sentenceGameScore = 0;
  showModal(`📝 句式游戏 — Task ${taskId} ${task.name}`, `
    <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
      <span class="tag" style="background: ${task.color}20; color: ${task.color};">Task ${taskId}</span>
      <span style="margin-left: 8px;">${task.outputType} · 岗位场景句型</span>
    </div>
    <div id="sentence-game-area" class="vocab-game-area"></div>
  `);
  renderSentenceQuestion();
}

function renderSentenceQuestion() {
  const q = sentenceGameList[sentenceGameIndex];
  document.getElementById('sentence-game-area').innerHTML = `
    <div style="text-align: center; margin-bottom: 16px;">
      <span class="tag tag-green">第 ${sentenceGameIndex + 1}/${sentenceGameList.length} 题</span>
      <span class="tag tag-blue" style="margin-left: 8px;">得分: ${sentenceGameScore}</span>
    </div>
    <div style="padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px; font-size: 15px;">
      <strong>场景：</strong>${q.scenario}
    </div>
    <div class="vocab-options" style="grid-template-columns: 1fr;">
      ${q.options.map((opt, i) => `
        <div class="vocab-option" onclick="checkSentenceAnswer(${i}, ${q.correct}, '${q.explanation.replace(/'/g, "\\'")}')">${opt}</div>
      `).join('')}
    </div>
    <div id="sentence-explanation" class="mt-16"></div>
  `;
}

function checkSentenceAnswer(selected, correct, explanation) {
  const options = document.querySelectorAll('#sentence-game-area .vocab-option');
  options.forEach(o => o.style.pointerEvents = 'none');
  if (selected === correct) {
    options[selected].classList.add('correct');
    sentenceGameScore += 10;
  } else {
    options[selected].classList.add('wrong');
    options[correct].classList.add('correct');
  }
  document.getElementById('sentence-explanation').innerHTML = `
    <div style="padding: 12px; background: #ebf8ff; border-radius: var(--radius-sm); font-size: 13px; color: var(--text-secondary);">
      <strong style="color: var(--accent-blue);">💡 解析：</strong>${explanation}
    </div>
  `;
  setTimeout(() => {
    sentenceGameIndex++;
    if (sentenceGameIndex < SENTENCE_QUESTIONS.length) {
      renderSentenceQuestion();
    } else {
      document.getElementById('sentence-game-area').innerHTML = `
        <div class="text-center" style="padding: 30px;">
          <div style="font-size: 48px;">🎉</div>
          <div style="font-size: 24px; font-weight: 700; margin-top: 12px;">句式游戏完成！</div>
          <div style="font-size: 18px; color: var(--accent-green); margin-top: 8px;">最终得分: ${sentenceGameScore} / ${SENTENCE_QUESTIONS.length * 10}</div>
        </div>
      `;
    }
  }, 3000);
}

// ======== 抽签工具 ========
function startLottery() {
  const names = SAMPLE_STUDENTS.map(s => s.name);
  let rolling = false;
  let interval = null;

  showModal('线上抽签', `
    <div class="lottery-container">
      <div class="lottery-display" id="lottery-display">点击下方按钮开始抽签</div>
      <div class="flex gap-8" style="justify-content: center;">
        <button class="btn btn-primary btn-lg" id="lottery-btn" onclick="rollLottery()">🎰 开始抽签</button>
        <button class="btn btn-success btn-lg" onclick="rollLottery(5)">👥 抽5人</button>
      </div>
      <div id="lottery-result" class="mt-16"></div>
    </div>
  `);
}

function rollLottery(count = 1) {
  const display = document.getElementById('lottery-display');
  const btn = document.getElementById('lottery-btn');
  const names = SAMPLE_STUDENTS.map(s => s.name);
  let rolls = 0;
  const maxRolls = 20;

  display.classList.add('rolling');
  btn.disabled = true;

  const interval = setInterval(() => {
    if (count === 1) {
      display.textContent = names[Math.floor(Math.random() * names.length)];
    } else {
      const picked = [];
      for (let i = 0; i < count; i++) {
        picked.push(names[Math.floor(Math.random() * names.length)]);
      }
      display.textContent = picked.join(' · ');
    }
    rolls++;
    if (rolls >= maxRolls) {
      clearInterval(interval);
      display.classList.remove('rolling');
      btn.disabled = false;
      const result = [];
      for (let i = 0; i < count; i++) {
        result.push(names[Math.floor(Math.random() * names.length)]);
      }
      display.textContent = count === 1 ? `🎉 ${result[0]}` : `🎉 ${result.join(' · ')}`;
    }
  }, 80);
}

// ======== AI情景口语（按任务） ========
let currentDialogTaskId = 1;

function startAIDialog(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  const scenario = AI_DIALOG_BY_TASK[taskId];
  currentDialogTaskId = taskId;
  const taskIcon = task ? task.icon : '🎭';
  const taskColor = task ? task.color : '#3182ce';

  showModal(`${taskIcon} ${scenario.title}`, `
    <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
      <span class="tag" style="background: ${taskColor}20; color: ${taskColor};">Task ${taskId}</span>
      <span style="margin-left: 8px;">${task.outputType} · 虚拟外籍客户对话</span>
    </div>
    <div style="padding: 20px;">
      <div style="padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px;">
        <div style="font-weight: 700; margin-bottom: 8px;">🎭 情景设定</div>
        <div style="font-size: 14px; color: var(--text-secondary);">${scenario.setting}</div>
      </div>
      <div id="chat-area" style="max-height: 280px; overflow-y: auto; margin-bottom: 16px; padding: 8px;">
        <div style="margin-bottom: 12px;">
          <div style="display: flex; gap: 8px; align-items: start;">
            <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--accent-purple); color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0;">C</div>
            <div style="background: var(--bg-tertiary); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 14px; max-width: 80%;">
              ${scenario.opening}
            </div>
          </div>
        </div>
      </div>
      <div class="flex gap-8">
        <input type="text" class="form-input" id="chat-input" placeholder="输入你的英文回复..." onkeypress="if(event.key==='Enter')sendChatMessage()">
        <button class="btn btn-primary" onclick="sendChatMessage()">发送</button>
      </div>
      <div class="mt-16" style="padding: 12px; background: #fffaf0; border-radius: var(--radius-sm); font-size: 13px;">
        <strong>💡 句型支架：</strong>
        <div style="margin-top: 6px; color: var(--text-secondary);">
          ${scenario.scaffolds.map(s => `• ${s}`).join('<br>')}
        </div>
      </div>
    </div>
  `);
  document.getElementById('chat-input').focus();
}

function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (!msg) return;

  const chatArea = document.getElementById('chat-area');
  chatArea.innerHTML += `
    <div style="margin-bottom: 12px; display: flex; gap: 8px; align-items: start; justify-content: flex-end;">
      <div style="background: var(--accent-blue); color: white; padding: 10px 14px; border-radius: var(--radius-sm); font-size: 14px; max-width: 80%;">
        ${msg}
      </div>
      <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--accent-blue); color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0;">我</div>
    </div>
  `;
  input.value = '';
  chatArea.scrollTop = chatArea.scrollHeight;

  // 任务特定的AI回复
  const dialogReplies = {
    1: [
      "Good morning. Yes, I have an appointment for 10 AM.",
      "Here is my passport. What do I need to do next?",
      "Thank you. How long will the check-up take?",
      "Should I fill in any forms before seeing the doctor?"
    ],
    2: [
      "I had high blood pressure for about 5 years.",
      "I'm allergic to penicillin. Other than that, no allergies.",
      "I smoke occasionally, maybe 3-4 cigarettes a week.",
      "I try to exercise twice a week, mostly walking."
    ],
    3: [
      "Thank you for explaining. Is there anything I should be concerned about?",
      "I see. So what would you recommend I do about it?",
      "That's reassuring. Are there any dietary changes I should make?",
      "I've heard about Traditional Chinese Medicine. Could that help?"
    ],
    4: [
      "I often feel tired and cold. What foods would help?",
      "Interesting! Could you recommend some specific recipes?",
      "Where can I find ingredients like ginger and red dates?",
      "How long before I see the benefits?"
    ],
    5: [
      "I sit at a desk all day. What exercises would you recommend?",
      "I've heard Tai Chi is good for stress. Is it suitable for beginners?",
      "How many times a week should I exercise?",
      "Do I need any special equipment?"
    ],
    6: [
      "I've been feeling much better, thanks for asking.",
      "I've been trying to follow the diet, but it's hard sometimes.",
      "I had a few days of mild headaches. Is that normal?",
      "Thank you for the follow-up. When should I come again?"
    ]
  };
  const replies = dialogReplies[currentDialogTaskId] || dialogReplies[3];
  const reply = replies[Math.floor(Math.random() * replies.length)];

  setTimeout(() => {
    chatArea.innerHTML += `
      <div style="margin-bottom: 12px;">
        <div style="display: flex; gap: 8px; align-items: start;">
          <div style="width: 32px; height: 32px; border-radius: 50%; background: var(--accent-purple); color: white; display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0;">C</div>
          <div style="background: var(--bg-tertiary); padding: 10px 14px; border-radius: var(--radius-sm); font-size: 14px; max-width: 80%;">
            ${reply}
          </div>
        </div>
      </div>
    `;
    chatArea.scrollTop = chatArea.scrollHeight;
  }, 1500);
}

// ======== 角色扮演录音（按任务） ========
let currentRolePlayTaskId = 1;

function startRolePlay(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  const scenario = ROLE_PLAY_BY_TASK[taskId];
  currentRolePlayTaskId = taskId;

  showModal(`🎬 角色扮演录音 — Task ${taskId}`, `
    <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
      <span class="tag" style="background: ${task.color}20; color: ${task.color};">Task ${taskId}</span>
      <span style="margin-left: 8px;">${task.outputType} · ${scenario.duration}</span>
    </div>
    <div style="padding: 20px;">
      <div style="padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px;">
        <div style="font-weight: 700; margin-bottom: 8px;">🎬 ${scenario.title}</div>
        <div style="font-size: 14px;">
          <strong>场景：</strong>${scenario.scene}<br>
          <strong>角色A：</strong>${scenario.roleA}<br>
          <strong>角色B：</strong>${scenario.roleB}
        </div>
      </div>
      <div style="padding: 16px; background: #ebf8ff; border-radius: var(--radius-sm); margin-bottom: 16px;">
        <div style="font-weight: 700; margin-bottom: 8px; color: var(--accent-blue);">📋 角色扮演要求</div>
        <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-secondary);">
          ${scenario.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>
      <div style="text-align: center; padding: 30px;">
        <div style="font-size: 60px; margin-bottom: 16px;">🎙️</div>
        <button class="btn btn-danger btn-lg" onclick="toggleRecording(this)" id="record-btn">
          ● 开始录音
        </button>
        <div id="record-timer" style="font-size: 24px; font-weight: 700; margin-top: 16px; color: var(--text-tertiary);">00:00</div>
        <div id="record-status" style="font-size: 13px; color: var(--text-tertiary); margin-top: 8px;">点击按钮开始录音</div>
      </div>
      <div style="padding: 12px; background: #fffaf0; border-radius: var(--radius-sm); font-size: 13px; margin-top: 16px;">
        <strong>💡 提示：</strong>录音结束后将自动跳转到 Task ${taskId} 对应的AI质检报告页。
      </div>
    </div>
  `);
}

let recordTimer = null;
let recordSeconds = 0;

function toggleRecording(btn) {
  if (btn.textContent.includes('开始')) {
    btn.textContent = '■ 停止录音';
    btn.style.background = 'var(--accent-gray)';
    document.getElementById('record-status').textContent = '正在录音...';
    recordSeconds = 0;
    recordTimer = setInterval(() => {
      recordSeconds++;
      const m = String(Math.floor(recordSeconds / 60)).padStart(2, '0');
      const s = String(recordSeconds % 60).padStart(2, '0');
      document.getElementById('record-timer').textContent = `${m}:${s}`;
    }, 1000);
  } else {
    clearInterval(recordTimer);
    btn.textContent = '● 开始录音';
    btn.style.background = 'var(--accent-red)';
    document.getElementById('record-status').textContent = `录音完成（${recordSeconds}秒）`;
    setTimeout(() => {
      closeModal();
      showAIReportModal(currentRolePlayTaskId);
    }, 1000);
  }
}

// ======== 二维码生成 ========
function showQRModal(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  if (!task) return;
  const url = taskId === 3 ? 'https://tranquil-meerkat-9de0a1.netlify.app/' : `https://course.example.com/join?task=${taskId}&class=eng-a`;

  showModal(`${task.icon} ${task.name} — 任务二维码`, `
    <div class="qr-display">
      <div id="qr-canvas-area" style="display: flex; justify-content: center; margin-bottom: 12px;"></div>
      <div class="qr-label">${task.fullName}</div>
      <div class="qr-url">${url}</div>
      <div style="margin-top: 16px;">
        <button class="btn btn-outline btn-sm" onclick="showToast('链接已复制')">📋 复制链接</button>
        <button class="btn btn-primary btn-sm" onclick="showToast('二维码已保存')">💾 保存图片</button>
      </div>
      <div style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); font-size: 13px; text-align: left;">
        <strong>📱 学生扫码后：</strong>
        <ul style="margin: 6px 0 0 16px; color: var(--text-secondary);">
          <li>自动加入 ${task.fullName} 任务</li>
          <li>查看课前/课中/课后任务清单</li>
          <li>提交作业并获取AI评价</li>
        </ul>
      </div>
    </div>
  `);

  // 生成二维码
  setTimeout(() => {
    const area = document.getElementById('qr-canvas-area');
    if (area && typeof QRCode !== 'undefined') {
      area.innerHTML = '';
      new QRCode(area, {
        text: url,
        width: 200,
        height: 200,
        colorDark: '#1a202c',
        colorLight: '#ffffff'
      });
    } else {
      area.innerHTML = '<div style="width: 200px; height: 200px; background: var(--bg-tertiary); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 14px; color: var(--text-tertiary);">二维码生成中...</div>';
    }
  }, 100);
}

// ======== AI质检报告弹窗（按任务） ========
function showAIReportModal(taskId) {
  const task = TASKS.find(t => t.id === taskId);

  // Task 3：嵌入独立「角色扮演质检工作台」网页（iframe，保留原页面全部交互）
  if (taskId === 3) {
    const taskColor = task ? task.color : '#3182ce';
    showModal(`🎬 角色扮演质检工作台 — Task 3 报告转述`, `
      <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
        <span class="tag" style="background: ${taskColor}20; color: ${taskColor};">Task 3</span>
        <span style="margin-left: 8px;">${task ? task.outputType : ''} · 独立质检工作台（选小组 → 查看报告）</span>
      </div>
      <div class="iframe-modal-wrap">
        <iframe class="iframe-modal-frame" src="task3-report/teacher-workstation.html" title="角色扮演质检工作台"></iframe>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="closeModal()">关闭</button>
      </div>
    `);
    // 放大弹窗以适配完整工作台
    document.querySelector('#modal-overlay .modal').classList.add('modal--wide');
    // 右上角添加全屏按钮（最大化展示教学内容）
    addTask3FullscreenButton();
    return;
  }

  const report = AI_REPORTS_BY_TASK[taskId] || SAMPLE_AI_REPORT;
  const taskColor = task ? task.color : '#3182ce';

  showModal(`🤖 AI质检报告 — Task ${taskId}`, `
    <div style="padding: 4px 0 12px; color: var(--text-secondary); font-size: 14px;">
      <span class="tag" style="background: ${taskColor}20; color: ${taskColor};">Task ${taskId}</span>
      <span style="margin-left: 8px;">${task ? task.outputType : ''} · AI三维质检</span>
    </div>
    <div class="ai-report" style="box-shadow: none;">
      <div class="ai-report-header">
        <div>
          <div class="report-title">课堂AI质检参考报告</div>
          <div class="report-meta">${report.task} · ${report.student} · ${report.date}</div>
        </div>
        <button class="copy-btn" onclick="copyReportByTask(${taskId})">📋 复制报告</button>
      </div>
      <div class="ai-report-body">
        <div class="no-score-notice">
          ⚠️ 本报告仅评价英语语言交际能力，不评判医学内容对错，不打分
        </div>
        <div style="margin-bottom: 16px;">
          ${report.dimensions.map(d => `
            <span class="dimension-badge ${d.class}">${d.icon} ${d.name}</span>
          `).join('')}
        </div>
        <div class="report-section">
          <div class="report-section-title">✅ 一、表演亮点</div>
          <div class="report-highlight">
            <ul style="margin: 0; padding-left: 16px;">
              ${report.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="report-section">
          <div class="report-section-title">⚠️ 二、待优化原句</div>
          ${report.optimizations.map(o => `
            <div class="report-optimize">
              <div class="original-sentence">"${o.original}"</div>
              <div class="issue-note">问题：${o.issue}</div>
            </div>
          `).join('')}
        </div>
        <div class="report-section">
          <div class="report-section-title">💡 三、岗位标准替换句式</div>
          ${report.replacements.map(r => `
            <div class="report-replace">
              <div class="replace-sentence">→ ${r.sentence}</div>
              <div class="replace-note">说明：${r.note}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">关闭</button>
    </div>
  `);
}

// 按任务复制AI质检报告
function copyReportByTask(taskId) {
  const report = AI_REPORTS_BY_TASK[taskId] || SAMPLE_AI_REPORT;
  let text = `课堂AI质检参考报告 — Task ${taskId}\n`;
  text += `任务：${report.task}\n`;
  text += `学生：${report.student}\n`;
  text += `日期：${report.date}\n\n`;
  text += `评价维度：\n`;
  report.dimensions.forEach(d => text += `- ${d.name}\n`);
  text += '\n一、表演亮点\n';
  report.highlights.forEach(h => text += `- ${h}\n`);
  text += '\n二、待优化原句\n';
  report.optimizations.forEach(o => text += `- 原句: "${o.original}"\n  问题: ${o.issue}\n`);
  text += '\n三、岗位标准替换句式\n';
  report.replacements.forEach(r => text += `- ${r.sentence}\n  说明: ${r.note}\n`);
  text += '\n⚠️ 本报告仅评价英语语言交际能力，不评判医学内容对错，不打分';
  copyToClipboard(text);
}

// ======== 完整指令查看弹窗 ========
function showFullInstructionModal() {
  showModal('AI角色扮演质检固定指令（完整版）', `
    <div style="background: #1a202c; padding: 20px; border-radius: var(--radius-sm); margin-bottom: 16px;">
      <pre style="color: #a0aec0; font-size: 13px; line-height: 1.8; white-space: pre-wrap; word-break: break-word; font-family: Consolas, Monaco, monospace;">${AI_QUALITY_CHECK_FULL}</pre>
    </div>
    <div class="modal-footer">
      <button class="copy-btn" onclick="copyAIInstruction('full')">📋 复制指令</button>
      <button class="btn btn-primary" onclick="closeModal()">关闭</button>
    </div>
  `);
}

// ======== 任务模板弹窗 ========
function showTaskTemplate(taskName, phase, templateName) {
  showModal(`${templateName}`, `
    <div style="padding: 8px;">
      <div style="padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px;">
        <strong>所属任务：</strong>${taskName}　|　<strong>阶段：</strong>${phase}
      </div>
      <div style="padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <div style="font-weight: 700; margin-bottom: 8px;">📋 任务详情</div>
        <div style="font-size: 14px; color: var(--text-secondary); line-height: 1.8;">
          ${templateName}
        </div>
        <div style="margin-top: 12px;">
          <label class="form-label">截止时间</label>
          <input type="datetime-local" class="form-input" value="2025-03-20T23:59">
        </div>
        <div style="margin-top: 12px;">
          <label class="form-label">分层要求</label>
          <select class="form-select">
            <option>全体学生</option>
            <option>A层（基础较好）</option>
            <option>B层（基础一般）</option>
            <option>C层（基础薄弱）</option>
          </select>
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0;">
        <button class="btn btn-primary" onclick="closeModal(); showToast('任务已发布')">📤 发布任务</button>
        <button class="btn btn-outline" onclick="closeModal()">取消</button>
      </div>
    </div>
  `);
}

// ======== 发布任务弹窗 ========
function showPublishModal(taskId) {
  const task = TASKS.find(t => t.id === taskId);
  showModal(`发布任务 — ${task.fullName}`, `
    <div style="padding: 8px;">
      <div class="form-group">
        <label class="form-label">任务名称</label>
        <input type="text" class="form-input" value="${task.fullName} - 课后产出任务">
      </div>
      <div class="form-group">
        <label class="form-label">任务类型</label>
        <select class="form-select">
          <option>课前预习</option>
          <option>课中互动</option>
          <option selected>课后产出</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">产出要求</label>
        <textarea class="form-textarea">${task.output}</textarea>
      </div>
      <div class="form-group">
        <label class="form-label">截止时间</label>
        <input type="datetime-local" class="form-input" value="2025-03-20T23:59">
      </div>
      <div class="form-group">
        <label class="form-label">分层要求</label>
        <select class="form-select">
          <option>全体学生</option>
          <option>A层（基础较好）</option>
          <option>B层（基础一般）</option>
          <option>C层（基础薄弱）</option>
        </select>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0;">
        <button class="btn btn-primary" onclick="closeModal(); showToast('任务已发布给 ${COURSE_DATA.studentCount} 名学生')">📤 确认发布</button>
        <button class="btn btn-outline" onclick="closeModal()">取消</button>
      </div>
    </div>
  `);
}

// ======== 书面作业详情弹窗 ========
function showWrittenReviewModal(studentName) {
  showModal(`书面作业详情 — ${studentName}`, `
    <div style="padding: 8px;">
      <div style="padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px;">
        <div style="font-weight: 700; margin-bottom: 8px;">📄 学生提交内容</div>
        <div style="font-size: 14px; line-height: 1.8; color: var(--text-secondary);">
          <strong>Patient Name:</strong> John Smith<br>
          <strong>Age:</strong> 35<br>
          <strong>Blood Pressure:</strong> 130/85 mmHg<br>
          <strong>Medical History:</strong> She have a little fat. He often eats too much oil food.<br>
          <strong>Lifestyle:</strong> Do you have any uncomfortable?<br>
          <strong>Allergies:</strong> No known allergies
        </div>
      </div>
      <div style="padding: 16px; border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
        <div style="font-weight: 700; margin-bottom: 8px;">🤖 AI批改结果</div>
        <table class="data-table" style="font-size: 13px;">
          <tr>
            <td style="color: var(--accent-red);">"She have a little fat."</td>
            <td><span class="tag tag-red">语法</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"She is slightly overweight."</td>
          </tr>
          <tr>
            <td style="color: var(--accent-red);">"eats too much oil food"</td>
            <td><span class="tag tag-orange">中式英语</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"tends to eat foods high in oil"</td>
          </tr>
          <tr>
            <td style="color: var(--accent-red);">"Do you have any uncomfortable?"</td>
            <td><span class="tag tag-purple">用词</span></td>
            <td style="color: var(--accent-blue); font-weight: 600;">"Do you have any discomfort?"</td>
          </tr>
        </table>
      </div>
      <div class="form-group mt-16">
        <label class="form-label">教师批注</label>
        <textarea class="form-textarea" placeholder="添加你的批注..."></textarea>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0;">
        <button class="btn btn-success" onclick="closeModal(); showToast('批注已保存')">💾 保存批注</button>
        <button class="btn btn-primary" onclick="closeModal(); showToast('已反馈给学生')">📤 反馈给学生</button>
      </div>
    </div>
  `);
}

// ======== 资源详情弹窗 ========
function showResourceDetail(title, type) {
  showModal(`${title}`, `
    <div style="padding: 8px;">
      <div style="padding: 16px; background: var(--bg-tertiary); border-radius: var(--radius-sm); margin-bottom: 16px;">
        <strong>文件类型：</strong>${type}　|　<strong>状态：</strong>已上传
      </div>
      <div style="text-align: center; padding: 40px;">
        <div style="font-size: 60px; margin-bottom: 16px;">📄</div>
        <div style="font-size: 16px; font-weight: 600;">${title}</div>
        <div style="font-size: 13px; color: var(--text-tertiary); margin-top: 8px;">点击下方按钮预览或下载</div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0;">
        <button class="btn btn-outline" onclick="showToast('预览功能')">👁️ 预览</button>
        <button class="btn btn-primary" onclick="showToast('文件已下载')">📥 下载</button>
      </div>
    </div>
  `);
}

// ======== 任务创建弹窗 ========
function showTaskCreateModal() {
  showModal('新建任务', `
    <div style="padding: 8px;">
      <div class="form-group">
        <label class="form-label">任务名称</label>
        <input type="text" class="form-input" placeholder="请输入任务名称">
      </div>
      <div class="form-group">
        <label class="form-label">所属岗位任务</label>
        <select class="form-select">
          ${TASKS.map(t => `<option>${t.fullName}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">任务类型</label>
        <select class="form-select">
          <option>课前预习</option>
          <option>课中互动</option>
          <option>课后产出</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">任务模板</label>
        <select class="form-select">
          <option>词汇闯关</option>
          <option>句式游戏</option>
          <option>AI情景口语</option>
          <option>角色扮演录音</option>
          <option>书面文案写作</option>
        </select>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0;">
        <button class="btn btn-primary" onclick="closeModal(); showToast('任务已创建')">创建</button>
        <button class="btn btn-outline" onclick="closeModal()">取消</button>
      </div>
    </div>
  `);
}

// ======== 通用弹窗 ========
function showModal(title, bodyHTML) {
  const overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').innerHTML = bodyHTML;
  overlay.classList.add('active');
}

// ======== Task 3 全屏按钮（方案A：iframe 原生全屏） ========
let task3FsHandler = null;

function addTask3FullscreenButton() {
  // 每次打开弹窗前先清理上一次的监听
  removeTask3FsListener();

  const actions = document.querySelector('#modal-overlay .modal-header__actions');
  const iframe = document.querySelector('#modal-overlay iframe.iframe-modal-frame');
  if (!actions || !iframe) return;

  // 移除可能残留的旧按钮
  actions.querySelectorAll('.modal-fs').forEach(b => b.remove());

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'modal-fs';
  btn.title = '全屏展示教学内容（Esc 退出）';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>全屏';

  function setBtnFullscreen(on) {
    btn.classList.toggle('modal-fs--active', on);
    btn.innerHTML = on
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>退出全屏'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>全屏';
  }

  // 伪全屏降级（移动端 Safari 等不支持 iframe 原生全屏）
  function pseudoFullscreen(on) {
    const modal = document.querySelector('#modal-overlay .modal');
    const frame = document.querySelector('#modal-overlay iframe.iframe-modal-frame');
    if (!modal || !frame) return;
    if (on) {
      modal.classList.add('modal--fs');
    } else {
      modal.classList.remove('modal--fs');
    }
  }

  function isFsActive() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement);
  }

  btn.onclick = function() {
    const frame = document.querySelector('#modal-overlay iframe.iframe-modal-frame');
    if (!frame) return;

    if (isFsActive()) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) exit.call(document);
      return;
    }

    const req = frame.requestFullscreen || frame.webkitRequestFullscreen;
    if (req) {
      // 原生全屏；若浏览器不支持（如 iOS Safari）则降级为伪全屏
      try {
        const p = req.call(frame);
        if (p && p.catch) p.catch(() => pseudoFullscreen(true));
      } catch (e) {
        pseudoFullscreen(true);
      }
    } else {
      pseudoFullscreen(true);
    }
  };

  // 全屏状态变化：同步按钮样式；退出原生全屏时取消伪全屏
  task3FsHandler = function() {
    if (isFsActive()) {
      setBtnFullscreen(true);
    } else {
      setBtnFullscreen(false);
      pseudoFullscreen(false);
    }
  };
  document.addEventListener('fullscreenchange', task3FsHandler);
  document.addEventListener('webkitfullscreenchange', task3FsHandler);

  actions.insertBefore(btn, actions.firstChild);
}

function removeTask3FsListener() {
  if (task3FsHandler) {
    document.removeEventListener('fullscreenchange', task3FsHandler);
    document.removeEventListener('webkitfullscreenchange', task3FsHandler);
    task3FsHandler = null;
  }
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
  // 移除放大/全屏弹窗类，避免影响其他弹窗
  document.querySelector('#modal-overlay .modal')?.classList.remove('modal--wide', 'modal--fs');
  // 清理全屏监听与按钮
  removeTask3FsListener();
  if (recordTimer) {
    clearInterval(recordTimer);
    recordTimer = null;
  }
}

// ======== 复制功能 ========
function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = '✅ 已复制';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = originalText;
        btn.classList.remove('copied');
      }, 2000);
    }
    showToast('已复制到剪贴板');
  });
}

function copyAIInstruction(version) {
  const text = version === 'full' ? AI_QUALITY_CHECK_FULL : AI_QUALITY_CHECK_QUICK;
  copyToClipboard(text);
}

function copyReport() {
  let text = '课堂AI质检参考报告\n';
  text += `任务：${SAMPLE_AI_REPORT.task}\n`;
  text += `学生：${SAMPLE_AI_REPORT.student}\n\n`;
  text += '一、表演亮点\n';
  SAMPLE_AI_REPORT.highlights.forEach(h => text += `- ${h}\n`);
  text += '\n二、待优化原句\n';
  SAMPLE_AI_REPORT.optimizations.forEach(o => text += `- 原句: "${o.original}"\n  问题: ${o.issue}\n`);
  text += '\n三、岗位标准替换句式\n';
  SAMPLE_AI_REPORT.replacements.forEach(r => text += `- ${r.sentence}\n  说明: ${r.note}\n`);
  copyToClipboard(text);
}

// ======== Toast 提示 ========
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>✅</span><span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ======== 全局快捷操作 ========
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
