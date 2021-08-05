<template>
  <div class="projects-container">
    <project
      v-for="project in projects"
      :key="project.title"
      :project-config="project"
    >
    </project>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Project from "@/components/Project.vue";
import { ProjectConfig } from "@/model/Project";

@Options({
  components: {
    Project,
  },
})
export default class Projects extends Vue {
  private projects: ProjectConfig[] = [
    {
      title: "Cyclux",
      tags: [ "analog", "illustration", "comic" ],
      description: "Various short-form comics.",
      image: require("../assets/menu/comics-invert.jpg")
    },
    {
      title: "Branches",
      tags: [ "digital", "video game" ],
      description: "Various short-form comics.",
      image: require("../assets/menu/branches-invert.jpg")
    },
    {
      title: "Illustrations",
      tags: [ "analog", "digital", "illustration" ],
      description: "A collection of illustrations done over the years that are both analog and digital.",
      image: require("../assets/menu/illustrations-invert.jpg")
    },
    {
      title: "Animations",
      tags: [ "digital" ],
      description: "A series of animations done digitally using Photoshop.",
      image: require("../assets/menu/animation-invert.jpg")
    },
    {
      title: "Virtual Fixtures",
      tags: [ "digital", "video game" ],
      description: "A rogue-like video game made using Java that is done in the style of ascii art.",
      image: require("../assets/menu/virtual-fixtures-invert.jpg")
    },
    {
      title: "Find NEO",
      tags: [ "digital", "video game" ],
      description: "Find information about current near Earth objects.",
      image: require("../assets/menu/find-neo-invert.jpg")
    },
    {
      title: "Line Collection",
      tags: [ "digital", "video game" ],
      description: "Art making program made entirely of lines.",
      image: require("../assets/menu/line-collection-invert.jpg")
    },
    {
      title: "Photography",
      tags: [ "digital", "video game" ],
      description: "Photgraphy captured over the years",
      image: require("../assets/menu/photo-invert.jpg")
    },
    {
      title: "Creative Coding",
      tags: [ "digital", "video game" ],
      description: "Creative coding sketches made mainly with P5.js.",
      image: require("../assets/menu/processing-sketches-invert.jpg")
    }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projects-container {
  padding-top: 125px;
}
</style>
