<script setup>
const text = 'Maviator7' // 表示するテキスト
</script>

<template>
  <div>
    <div class="animated-text">
      <span v-for="(char, index) in text" :key="index" :style="{ animationDelay: `${index * 0.1}s` }">
        {{ char }}
      </span>
    </div>
    <v-card
      class="mx-auto"
      prepend-icon="$vuetify"
      subtitle="The #1 Vue UI Library"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">Vuetify表示テスト</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        表示されてますか？
      </v-card-text>
    </v-card>
    <div>
      <img src="@/assets/top.svg" alt="Top SVG" />
    </div>
  </div>
</template>

<style scoped>
.animated-text {
  display: inline-flex;
  font-family: 'Poppins', sans-serif; /* おしゃれなフォント */
  font-size: 40px;
  font-weight: 600;
  color: #4a90e2;
  padding-left: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* シャドウを追加 */
}

.animated-text span {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>