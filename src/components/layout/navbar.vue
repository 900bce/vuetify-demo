<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="toggleSidebar"></v-app-bar-nav-icon>
    <v-toolbar-title>Title</v-toolbar-title>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'

@Component
export default class Navbar extends Vue {
  @Emit('toggle-drawer')
  toggleSidebar() {
    return;
  }
}
</script>