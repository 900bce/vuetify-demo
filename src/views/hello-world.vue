<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import { VApp, VContent, VBtn } from 'vuetify/lib';
@Component({
  components: {
    'v-app': VApp,
    'v-content': VContent,
    'v-btn': VBtn
  },
})
export default class App extends Vue {
  hello: string = 'Hello World!!!';

  click() {
    console.log('123');
  }

  render() {
    return (
      <div id='app'>
       <span style={{ 'color': 'red'} }>123456</span>
        <v-app>
          <v-content>
            <p>{ this.hello }</p>
            <v-btn color="primary" small onClick={this.click}>123</v-btn>
          </v-content>
        </v-app>
      </div>
    );
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
