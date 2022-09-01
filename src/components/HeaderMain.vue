<template>
    <div id="navigationHeader" class="navigation-header-container">
        <div class="name-container">
            <img src="@/assets/my-eyes-name-clear.png" rel="preload" />
        </div>
        <div class="navigation-links">
            <div class="links-container">Work</div>
            <div class="information-container">
                <slot> Information </slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ContactConfig {
    link: string;
    linkTitle: string;
    label: string;
}

export default defineComponent({
    data() {
        return {
            github: {
                link: "https://github.com/chachoblow",
                linkTitle: "My Github",
                label: "Github",
            } as ContactConfig,
            instagram: {
                link: "https://www.instagram.com/chachoblow",
                linkTitle: "My Instagram",
                label: "Instagram",
            } as ContactConfig,
            linkedin: {
                link: "https://www.linkedin.com/in/wesleyklein/",
                linkTitle: "My LinkedIn",
                label: "LinkedIn",
            } as ContactConfig,
        };
    },
});
</script>

<style scoped lang="scss">
.navigation-header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: $page-padding;
    font-size: 0.9rem;
    z-index: 2;
    background: white;
}

.navigation-links {
    display: flex;
}

.name-container img {
    height: 60px;
}

.links-container {
    display: flex;
    padding-right: $page-padding;

    a {
        height: fit-content;
    }
}
</style>
