<script setup></script>

<template>
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
</template>