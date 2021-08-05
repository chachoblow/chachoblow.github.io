<template>
  <div class="home-container" >
    <projects></projects>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Projects from "@/components/Projects.vue";

@Options({
  components: {
    Projects,
  },
})
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
