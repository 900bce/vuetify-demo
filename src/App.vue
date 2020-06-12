<template>
  <v-app>
    <sidebar :drawer="drawer"></sidebar>

    <navbar @toggle-drawer="toggleDrawer"></navbar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Sidebar from 'Components/layout/sidebar.vue';
import Navbar from 'Components/layout/navbar.vue';

@Component({
  components: {
    Sidebar,
    Navbar,
  },
})
export default class App extends Vue {
  drawer = true;

  toggleDrawer() {
    this.drawer = !this.drawer;
  }
}
</script>
