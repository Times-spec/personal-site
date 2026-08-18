<template>
  <Transition name="visitor-greeting">
    <aside v-if="visible" class="visitor-greeting" role="status" aria-live="polite">
      <span class="visitor-greeting__dot" aria-hidden="true" />
      <span>{{ message }}</span>
      <button class="visitor-greeting__close" type="button" aria-label="关闭欢迎提示" @click="visible = false">
        ×
      </button>
    </aside>
  </Transition>
</template>

<script setup lang="ts">
const visible = ref(false)
const city = ref('')

const message = computed(() => city.value ? `👋 嗨，欢迎来自 ${city.value} 的朋友！` : '👋 嗨，欢迎来到我的个人网站！')

onMounted(async () => {
  try {
    const location = await $fetch<{ city?: string }>('/api/visitor-location')
    city.value = location.city || ''
  } catch {
    // 位置服务不可用时仍显示通用欢迎语。
  }

  window.setTimeout(() => {
    visible.value = true
  }, 450)
})

onBeforeUnmount(() => {
  visible.value = false
})
</script>

<style scoped>
.visitor-greeting {
  position: fixed;
  z-index: 100;
  right: 24px;
  bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: min(360px, calc(100vw - 48px));
  padding: 13px 14px 13px 16px;
  color: #f7fbff;
  font-size: 14px;
  line-height: 1.5;
  background: linear-gradient(135deg, rgba(177, 96, 55, 0.94), rgba(126, 65, 48, 0.94));
  border: 1px solid rgba(255, 220, 184, 0.42);
  border-radius: 14px;
  box-shadow: 0 12px 35px rgba(102, 48, 28, 0.3);
  backdrop-filter: blur(14px);
}

.visitor-greeting__dot {
  flex: 0 0 8px;
  width: 8px;
  height: 8px;
  background: #ffd49c;
  border-radius: 50%;
  box-shadow: 0 0 12px #ffd49c;
}

.visitor-greeting__close {
  flex: 0 0 auto;
  margin-left: 4px;
  padding: 0 2px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 20px;
  line-height: 1;
  background: none;
  border: 0;
  cursor: pointer;
}

.visitor-greeting__close:hover {
  color: #fff;
}

.visitor-greeting-enter-active,
.visitor-greeting-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.visitor-greeting-enter-from,
.visitor-greeting-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

@media (max-width: 600px) {
  .visitor-greeting {
    right: 12px;
    bottom: 12px;
    max-width: calc(100vw - 24px);
  }
}
</style>
