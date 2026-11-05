<template>
    <div class="projects-widget">
        <div class="proj-head">
            <div class="proj-icon">
                <font-awesome icon="layer-group" />
            </div>
            <div class="proj-title">{{ data.title }}</div>
            <div class="proj-count">{{ data.items.length }} 个项目</div>
        </div>
        <div class="proj-list">
            <template v-for="(item, i) in data.items" :key="i">
                <a v-if="item.link" class="proj-row" :href="item.link"
                    :target="item.link.startsWith('/') ? '_self' : '_blank'" data-pointer>
                    <span class="proj-dot" :style="{ 'background-color': item.color }"></span>
                    <span class="proj-main">
                        <span class="proj-name">{{ item.name }}</span>
                        <span class="proj-desc">{{ item.desc }}</span>
                    </span>
                    <span class="proj-arrow">→</span>
                </a>
                <div v-else class="proj-row">
                    <span class="proj-dot" :style="{ 'background-color': item.color }"></span>
                    <span class="proj-main">
                        <span class="proj-name">{{ item.name }}</span>
                        <span class="proj-desc">{{ item.desc }}</span>
                    </span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ProjectItem {
    name: string
    desc: string
    color: string
    link?: string
}

defineProps<{
    data: {
        title: string
        items: ProjectItem[]
    }
}>()
</script>

<style lang="scss">
.projects-widget {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: calc(var(--square-size) * 0.26);
    padding-bottom: calc(var(--square-size) * 0.2);
    box-sizing: border-box;

    .proj-head {
        display: flex;
        align-items: center;
        gap: calc(var(--square-size) * 0.12);
        margin-bottom: calc(var(--square-size) * 0.14);

        .proj-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: calc(var(--square-size) * 0.44);
            height: calc(var(--square-size) * 0.44);
            border-radius: calc(var(--square-size) * 0.13);
            background-color: #31597f;
            flex: none;

            svg {
                color: #ffffff;
                width: calc(var(--square-size) * 0.22);
                height: calc(var(--square-size) * 0.22);
            }
        }

        .proj-title {
            font-size: calc(var(--square-size) * 0.24);
            font-weight: bold;
        }

        .proj-count {
            margin-left: auto;
            font-size: calc(var(--square-size) * 0.16);
            opacity: 0.6;
            flex: none;
        }
    }

    .proj-list {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
    }

    .proj-row {
        display: flex;
        align-items: center;
        gap: calc(var(--square-size) * 0.11);
        color: inherit;
        padding: calc(var(--square-size) * 0.045) calc(var(--square-size) * 0.06);
        margin: 0 calc(var(--square-size) * -0.06);
        border-radius: calc(var(--square-size) * 0.1);
        transition: background-color 0.2s;

        &[href]:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }

        .proj-dot {
            flex: none;
            width: calc(var(--square-size) * 0.1);
            height: calc(var(--square-size) * 0.1);
            border-radius: 50%;
        }

        .proj-main {
            display: flex;
            align-items: baseline;
            gap: calc(var(--square-size) * 0.12);
            min-width: 0;
        }

        .proj-name {
            font-size: calc(var(--square-size) * 0.195);
            font-weight: 700;
            white-space: nowrap;
        }

        .proj-desc {
            font-size: calc(var(--square-size) * 0.155);
            opacity: 0.75;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .proj-arrow {
            margin-left: auto;
            font-size: calc(var(--square-size) * 0.17);
            opacity: 0.45;
            flex: none;
        }
    }
}

html.dark-mode {
    .projects-widget {
        .proj-row[href]:hover {
            background-color: rgba(255, 255, 255, 0.08);
        }
    }
}

/* 覆盖 Content.vue 中 .widget a 的整卡锚点样式（高度/内边距/两端对齐），
   否则项目行会被撑成整卡高度 */
.content .matrix .widget .projects-widget .proj-row {
    height: auto;
    justify-content: flex-start;
    padding: calc(var(--square-size) * 0.045) calc(var(--square-size) * 0.06);
}
</style>
