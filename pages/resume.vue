<template>
    <div class="resume-page">
        <div class="toolbar">
            <NuxtLink to="/" class="back">← 返回首页</NuxtLink>
            <button class="print-btn" @click="printPage">打印 / 保存 PDF</button>
        </div>

        <article class="sheet">
            <header class="head">
                <h1>罗佳晨</h1>
                <p class="subtitle">西南交通大学 · 通信工程 本科在读（2025 级）</p>
                <div class="chips">
                    <span>综合排名 10 / 149</span>
                    <span>平均分 90.23</span>
                    <span>CET-4 · 605 分</span>
                    <span>蓝桥杯省三等奖</span>
                </div>
            </header>

            <section>
                <h2>教育背景</h2>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2025.09 – 2029.06（预计）</span><span class="org">西南交通大学</span><span class="major">通信工程 · 本科</span></div>
                    </div>
                    <ul>
                        <li>综合排名 10/149 · 平均分 90.23</li>
                        <li>相关课程：线性代数 B（99）、大学物理（96）、计算机程序设计实验（96）、概率论与随机过程等</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>活动策划</h2>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2026.10</span><span class="org">CNCC 2026 中国计算机大会 · AI 市集</span></div>
                        <span class="role">参展负责人（MatrixNova）</span>
                    </div>
                    <ul>
                        <li>负责团队展位布展与现场展示，向参会者介绍青少年 AI 共创项目与学客松成果</li>
                        <li>累计讲解接待参会者 100+ 人次，深度链接 10+ 人</li>
                    </ul>
                </div>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2026.10</span><span class="org">学客松 Learnathon（MatrixNova）</span></div>
                        <span class="role">联合创始人 / 活动总负责人</span>
                    </div>
                    <ul>
                        <li>从 0 到 1 策划并落地首场「学客松」公益 AI 创造日，负责活动整体流程设计与现场执行</li>
                        <li>负责物资采购与合作伙伴对接，联合成都鲲鹏会、万物友灵等合作方共同举办</li>
                        <li>担任活动讲师，完成 Agent 使用经验分享，共有 50 多名学生共同参与</li>
                    </ul>
                </div>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2026.10</span><span class="org">GTLC 1024 创想会（MatrixNova × TGO 联合主办）</span></div>
                        <span class="role">核心策划 / 演讲嘉宾</span>
                    </div>
                    <ul>
                        <li>联合主办方核心成员，参与大会整体策划与落地执行</li>
                        <li>发表主题演讲《让想法落地，让成长沉淀》，分享 AI 时代青年把想法做成作品、让成长沉淀下来的实践路径</li>
                        <li>现场到场人数不及预期，临场将活动形式紧急调整为圆桌讨论，保障大会顺利完成</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>科研比赛</h2>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2026.08</span><span class="org">Off Map 黑客松 · 成都站</span><span class="major">最佳商业潜力奖</span></div>
                        <span class="role">产品主创</span>
                    </div>
                    <ul>
                        <li>主导情境音乐产品“情投音合”的构思打磨：针对“有感觉、没歌名”的痛点，融合当下状态、长期偏好与反馈记录做歌曲匹配</li>
                        <li>设计“状态确认 → 3 首候选推荐 → 反馈校准 → 洞察报告”完整闭环，划定 MVP 范围与验收标准</li>
                        <li>制定 72 小时交付节奏与范围纪律，推动团队交付可演示原型，团队最终获得最佳商业潜力奖</li>
                    </ul>
                </div>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2026 – 至今</span><span class="org">基于深度学习的智能拆垛系统（校级 SRTP 项目）</span></div>
                        <span class="role">算法负责人</span>
                    </div>
                    <ul>
                        <li>负责算法部分：数据采集与标注、实例分割模型训练、深度 / 位姿计算</li>
                        <li>推进与机械臂执行环节的联调</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>学生工作</h2>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2025 – 至今</span><span class="org">西南交通大学人工智能协会</span></div>
                        <span class="role">实训部部长</span>
                    </div>
                    <ul>
                        <li>负责协会实训活动策划与组织</li>
                        <li>组织并参与新学年的招新面试</li>
                    </ul>
                </div>
                <div class="entry">
                    <div class="entry-head">
                        <div><span class="date">2025 – 至今</span><span class="org">西南交通大学智能基座社团</span></div>
                        <span class="role">技术部部长</span>
                    </div>
                    <ul>
                        <li>依托华为智能基座产教融合项目，负责社团技术活动的组织</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>获奖情况</h2>
                <div class="entry">
                    <div class="entry-head"><div><span class="org">科创竞赛获奖</span></div></div>
                    <ul>
                        <li><span class="date inline">2026</span>蓝桥杯全国软件和信息技术专业人才大赛 C/C++ 程序设计 大学 A 组 · 省三等奖</li>
                        <li><span class="date inline">2025</span>亚太地区大学生数学建模竞赛（亚太杯） 三等奖</li>
                    </ul>
                </div>
                <div class="entry">
                    <div class="entry-head"><div><span class="org">个人荣誉</span></div></div>
                    <ul>
                        <li><span class="date inline">2025–2026 学年</span>国家励志奖学金</li>
                        <li><span class="date inline">2025–2026 学年</span>三好学生</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2>个人技能</h2>
                <div class="entry">
                    <ul>
                        <li><strong>计算机：</strong>C 语言（蓝桥杯省三）；能够熟练运用 AI 编程工具（如 Claude Code、Codex、ZCode 等）进行 Vibe Coding；已独立开发完成个人网站（voyager06.tech）、「原来如此」科普介绍站（aha.voyager06.tech）等网页项目</li>
                        <li><strong>英语：</strong>已通过四六级考试（其中 CET-4 · 605 分）</li>
                        <li><strong>内容创作：</strong>熟练掌握 AI 生成视频的工作流；独立运营抖音精选科普账号（账号名：Times），近期单条视频（解析 PHP Webshell 漏洞）三天浏览量破 5 万、点赞近 1 千</li>
                    </ul>
                </div>
            </section>

            <footer class="sheet-foot">罗佳晨 · 个人简历 — voyager06.tech</footer>
        </article>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: '罗佳晨 · 个人简历',
    meta: [
        { name: 'description', content: '罗佳晨的个人简历：西南交通大学通信工程本科在读，活动策划、科研比赛与学生工作经历。' }
    ]
})

const printPage = () => {
    window.print()
}
</script>

<style scoped>
.resume-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #232a31 0%, #1d1e1e 55%, #18222c 100%);
    padding: 28px 16px 64px;
    user-select: text;
    font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif;
    box-sizing: border-box;
}

.toolbar {
    max-width: 880px;
    margin: 0 auto 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.back {
    color: #cfd8e3;
    font-size: 14px;
    letter-spacing: 0.02em;
}

.back:hover {
    color: #ffffff;
}

.print-btn {
    background: #31597f;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    font-family: inherit;
}

.print-btn:hover {
    background: #3d6b99;
}

.sheet {
    max-width: 880px;
    margin: 0 auto;
    background: #fdfcf9;
    color: #22282e;
    border-radius: 10px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    padding: 52px 60px 36px;
    box-sizing: border-box;
}

.head {
    text-align: left;
    border-bottom: 3px solid #31597f;
    padding-bottom: 20px;
    margin-bottom: 8px;
}

.head h1 {
    font-size: 38px;
    margin: 0 0 8px;
    letter-spacing: 0.12em;
    color: #1c2b3a;
}

.subtitle {
    margin: 0 0 16px;
    font-size: 16px;
    color: #4a5866;
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chips span {
    background: #eef3f8;
    color: #31597f;
    border: 1px solid #d3e0ee;
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 13px;
    font-weight: 600;
}

section {
    margin-top: 26px;
}

h2 {
    font-size: 19px;
    color: #31597f;
    margin: 0 0 14px;
    padding-bottom: 6px;
    border-bottom: 1.5px solid #d9e2ec;
    letter-spacing: 0.08em;
}

.entry {
    margin-bottom: 16px;
}

.entry-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    flex-wrap: wrap;
}

.date {
    color: #7a8794;
    font-size: 13.5px;
    margin-right: 14px;
    white-space: nowrap;
}

.date.inline {
    margin-right: 10px;
}

.org {
    font-weight: 700;
    font-size: 15.5px;
    color: #1c2b3a;
}

.major {
    margin-left: 10px;
    font-size: 14.5px;
    color: #4a5866;
}

.role {
    font-size: 13.5px;
    font-weight: 600;
    color: #31597f;
    white-space: nowrap;
}

ul {
    margin: 6px 0 0;
    padding-left: 20px;
}

li {
    font-size: 14.5px;
    line-height: 1.75;
    color: #333c45;
    margin: 2px 0;
}

li::marker {
    color: #31597f;
    font-size: 11px;
}

.sheet-foot {
    margin-top: 34px;
    padding-top: 14px;
    border-top: 1px solid #e3e8ee;
    text-align: center;
    font-size: 12.5px;
    color: #93a1af;
}

@media (max-width: 640px) {
    .sheet {
        padding: 34px 22px 26px;
    }

    .head h1 {
        font-size: 30px;
    }

    .role {
        white-space: normal;
    }
}

@media print {
    .resume-page {
        background: #fff;
        padding: 0;
    }

    .toolbar {
        display: none;
    }

    .sheet {
        box-shadow: none;
        border-radius: 0;
        max-width: none;
        padding: 8px 4px;
    }
}
</style>
