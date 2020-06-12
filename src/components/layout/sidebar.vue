<template>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  items = [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', link: 'about' },
    { title: 'Photos', icon: 'mdi-image' },
    { title: 'About', icon: 'mdi-help-box' },
  ];

  @Prop() drawer!: Boolean;
}
</script>
