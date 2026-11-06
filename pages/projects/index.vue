<template>
    <div class="projects-page">
        <div class="toolbar">
            <NuxtLink to="/" class="back">← 返回首页</NuxtLink>
        </div>

        <article class="sheet">
            <header class="head">
                <h1>我的项目</h1>
                <p class="subtitle">做过的东西都在这里，点开任意一个看详细介绍；有公开站点的，详情页里有直达链接。</p>
            </header>

            <NuxtLink v-for="p in projects" :key="p.slug" :to="`/projects/${p.slug}`" class="proj-item">
                <span class="dot" :style="{ 'background-color': p.color }"></span>
                <span class="main">
                    <span class="name">{{ p.name }}</span>
                    <span class="tagline">{{ p.tagline }}</span>
                    <span class="meta">{{ p.role }} · {{ p.status }}</span>
                </span>
                <span class="arrow">→</span>
            </NuxtLink>
        </article>
    </div>
</template>

<script setup lang="ts">
import { projects } from '~/assets/projects'

useHead({ title: '我的项目 · Times' })
</script>

<style scoped>
.projects-page {
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
    padding: 40px 44px 30px;
    box-sizing: border-box;
}

.head h1 {
    font-size: 30px;
    margin: 0 0 8px;
}

.head .subtitle {
    color: #5a6570;
    font-size: 15px;
    line-height: 1.7;
    margin: 0 0 14px;
}

.proj-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 18px 12px;
    margin: 0 -12px;
    border-top: 1px solid #e7e2d9;
    color: inherit;
    text-decoration: none;
    transition: background-color 0.2s;
}

.proj-item:hover {
    background-color: rgba(0, 0, 0, 0.035);
}

.proj-item .dot {
    flex: none;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    margin-top: 10px;
}

.proj-item .main {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
}

.proj-item .name {
    font-size: 19px;
    font-weight: 700;
}

.proj-item .tagline {
    font-size: 14.5px;
    color: #3d4650;
}

.proj-item .meta {
    font-size: 12.5px;
    color: #8a93a0;
}

.proj-item .arrow {
    margin-left: auto;
    font-size: 18px;
    opacity: 0.4;
    flex: none;
}

@media (max-width: 640px) {
    .sheet {
        padding: 28px 20px 18px;
    }
}
</style>
