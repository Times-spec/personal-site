<template>
    <div class="footer">
        <div class="footer-inner">
            <div class="bg-info">
                <div class="footer-bgname">
                    Background
                    <a :href="props.url" target="_blank" rel="noreferrer" class="bg-name"
                        :class="{ 'bg-link': props.url }" data-pointer>
                        <TextFlip :words="props.title.replace(/ /g, '&nbsp;')" :widthcrtl="true" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
    title?: string;
    url?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: "",
    url: "",
});


function updateWidth() {
    var Size = 0;
    if (window.innerWidth <= 1300) {
        if (window.innerWidth > 1054) {
            Size = 83.75
        } else if (window.innerWidth > 880) {
            Size = ((window.innerWidth - 384) / 8)
        } else if (window.innerWidth > 528) {
            Size = 101.25
        } else {
            Size = Math.max(((window.innerWidth - 123) / 4), 50)
        }
    } else {
        Size = Math.min(((2 * window.innerWidth / 3 - 369.333) / 8), 69.166)
    }
    document.documentElement.style.setProperty('--square-size', Size.toString() + 'px')
}


onMounted(() => {
    updateWidth()
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
})
</script>

<style lang="scss">
.footer {
    width: 100%;
    height: 15vh;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -35vh;
    user-select: none;
    transition: filter .5s ease;

    .footer-inner {
        text-align: center;
        opacity: 0.65;
        color: color-mix(in srgb, var(--lyntrix-color, #fff), #fff 50%);
        transition: 0.5s ease;
        line-height: 2;

        .bg-info {
            display: flex;

            .footer-bgname {
                display: flex;
            }
        }

        .bg-name {
            color: var(--lyntrix-color-high, #fff);
            transition: color 0.5s linear;
            margin-left: 12px;
        }
    }


}

html.dark-mode {
    .footer {
        .footer-inner {
            opacity: 0.8;

            .bg-info {
                color: #64beff;
                filter: drop-shadow(#64beff 0px 0px 2px);

                .footer-bgname {
                    display: none;
                }
            }
        }
    }
}

html.forcewidget .footer {
    filter: blur(15px);
    pointer-events: none;
}

html.music-fullscr .footer {
    opacity: 0;
}

html.perfotp .footer {
    content-visibility: hidden;
}

</style>
