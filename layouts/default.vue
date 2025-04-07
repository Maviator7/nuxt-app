<script setup>
  const items = [
    { title: 'menu1' },
    { title: 'menu2' },
    { title: 'menu3' },
    { title: 'menu4' },
  ]
</script>

<template>
  <div>
    <v-toolbar title="Maviator7 Page">
      <v-btn icon="mdi-magnify"></v-btn>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon="mdi-menu" variant="text" v-bind="props"></v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <slot />
    </main>
  </div>
</template>