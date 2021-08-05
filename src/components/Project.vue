<template>
  <div class="project-container">
    <div class="project-image">
      <img :src="url"/>
    </div>
    <div class="project-info-container">
      <div class="project-title">
        {{ title }}
      </div>
      <span>-</span>
      <div class="project-description">{{ description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { ProjectConfig } from "@/model/Project";

class Props {
  projectConfig!: ProjectConfig;
}

export default class Project extends Vue.with(Props) {
  private get title(): string {
    return this.projectConfig.title;
  }

  private get tags(): string[] {
    return this.projectConfig.tags;
  }

  private get description(): string {
    return this.projectConfig.description;
  }
  
  private get url(): string {
    return this.projectConfig.image;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.project-container {
  display: flex;
  justify-content: center;
  height: 350px;
  max-width: 1000px;
  text-align: left;
  padding: 20px 0;
  margin: auto;
}

.project-info-container {
  display: flex;
  flex-direction: column;
  width: 25%;
}

.project-title {
  font-size: 1.5rem;
  word-wrap: break-word;
  padding-bottom: 20px;
}

.project-image {
  padding: 10px 30px;
  background-color: white;
}

.project-description {
  font-size: 1rem;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  mix-blend-mode: difference;
}
</style>