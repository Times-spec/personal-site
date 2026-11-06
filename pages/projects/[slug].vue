<template>
    <div class="project-page">
        <div class="toolbar">
            <NuxtLink to="/projects" class="back">← 全部项目</NuxtLink>
            <NuxtLink to="/" class="back">返回首页</NuxtLink>
        </div>

        <article class="sheet" v-if="project">
            <header class="head">
                <div class="title-row">
                    <span class="dot" :style="{ 'background-color': project.color }"></span>
                    <h1>{{ project.name }}</h1>
                </div>
                <p class="tagline">{{ project.tagline }}</p>
                <div class="chips">
                    <span>{{ project.role }}</span>
                    <span>{{ project.status }}</span>
                </div>
            </header>

            <section class="intro">
                <p v-for="(para, i) in project.intro" :key="i">{{ para }}</p>
            </section>

            <section class="points">
                <h2>要点</h2>
                <ul>
                    <li v-for="(pt, i) in project.points" :key="i">{{ pt }}</li>
                </ul>
            </section>

            <a v-if="project.link" class="visit" :href="project.link" target="_blank" rel="noopener">
                访问站点 →
            </a>
        </article>
    </div>
</template>

<script setup lang="ts">
import { getProject } from '~/assets/projects'

const route = useRoute()
const project = getProject(String(route.params.slug))

if (!project) {
    throw createError({ statusCode: 404, statusMessage: '项目不存在' })
}

useHead({ title: `${project.name} · 我的项目 · Times` })
</script>

<style scoped>
.project-page {
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
    text-decoration: none;
}

.back:hover {
    color: #ffffff;
}

.sheet {
    max-width: 880px;
    margin: 0 auto;
    background: #fdfcf9;
    color: #22282e;
    border-radius: 10px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
    padding: 40px 44px 36px;
    box-sizing: border-box;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 12px;
}

.title-row .dot {
    flex: none;
    width: 13px;
    height: 13px;
    border-radius: 50%;
}

.head h1 {
    font-size: 30px;
    margin: 0;
}

.head .tagline {
    color: #5a6570;
    font-size: 16px;
    margin: 10px 0 14px;
}

.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.chips span {
    background: #eef1f4;
    color: #3d4650;
    border-radius: 999px;
    padding: 4px 12px;
    font-size: 13px;
}

.intro {
    margin-top: 26px;
    border-top: 1px solid #e7e2d9;
    padding-top: 8px;
}

.intro p {
    font-size: 15.5px;
    line-height: 1.9;
    color: #2c343c;
    margin: 14px 0;
}

.points h2 {
    font-size: 17px;
    margin: 26px 0 10px;
}

.points ul {
    margin: 0;
    padding-left: 20px;
}

.points li {
    font-size: 15px;
    line-height: 1.85;
    color: #2c343c;
}

.visit {
    display: inline-block;
    margin-top: 30px;
    background: #31597f;
    color: #fff;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 14.5px;
    text-decoration: none;
}

.visit:hover {
    background: #3d6b99;
}

@media (max-width: 640px) {
    .sheet {
        padding: 28px 20px 26px;
    }
}
</style>
