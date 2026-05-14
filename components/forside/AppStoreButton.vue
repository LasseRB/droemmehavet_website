<script setup lang="ts">
const props = defineProps<{
	shouldGlow?: boolean;
}>();
</script>

<template>
  <a href="https://apple.co/4kb2cCl" class="appstore" :class="{ animate: props.shouldGlow ?? false}">
    <img src="~/assets/appstoreDK.svg" alt="Download i Apple app-store" />
  </a>
</template>


<style scoped>
.appstore {
  img {
    border-radius: 10px;
    width: 150px;
  }
}
.animate {
    animation: appstore-glow 2.6s ease-in-out infinite;
}

@keyframes appstore-glow {
  0%, 100% {
    filter:
      drop-shadow(0 0 6px rgba(255, 180, 80, 0.4))
      drop-shadow(0 0 16px rgba(255, 111, 145, 0.25));
  }
  50% {
    filter:
      drop-shadow(0 0 14px rgba(255, 251, 244, 0.85))
      drop-shadow(0 0 32px rgba(252, 2, 60, 0.55));
  }
}
</style>
