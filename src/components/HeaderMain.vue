<template>
    <div id="navigationHeader" class="navigation-header-container">
        <RouterLink to="/" v-slot="{ href, navigate }" custom>
            <div class="name-container">
                <a :href="href" @click="navigate">
                    <img src="@/assets/my-eyes-name-clear.webp" rel="preload" />
                </a>
            </div>
        </RouterLink>
        <div class="about-container">
            <slot>
                <div class="information-container">
                    Based in Seattle, WA. Working as a software engineer. Hold a
                    mathematics and computer science degree from The University
                    of California, Berkeley. Always exploring ways in which to
                    merge more traditional artistic endeavours with modern
                    technologies, such as, microcontrollers, web, virtual
                    reality, and creative coding frameworks.
                </div>
                <div class="links-container">
                    <a
                        :href="github.link"
                        :title="github.linkTitle"
                        target="_blank"
                    >
                        {{ github.label }} </a
                    >,&nbsp;
                    <a
                        :href="instagram.link"
                        :title="instagram.linkTitle"
                        target="_blank"
                    >
                        {{ instagram.label }} </a
                    >,&nbsp;
                    <a
                        :href="linkedin.link"
                        :title="linkedin.linkTitle"
                        target="_blank"
                    >
                        {{ linkedin.label }}
                    </a>
                </div>
            </slot>
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
    @include page-padding;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: $page-padding-medium / 2;
    z-index: 2;
    background: white;

    @media (min-width: $small-device-width) {
        grid-template-columns: 1fr 2fr;
    }

    @media (min-width: $medium-device-width) {
        column-gap: $page-padding-large / 2;
    }
}

.navigation-links {
    display: flex;
}

.name-container {
    img {
        height: 60px;
        padding-bottom: $page-padding-small;

        @media (min-width: $small-device-width) {
            padding-bottom: 0;
        }
    }

    a:hover {
        opacity: 1;
    }
}

.about-container {
    display: flex;
    flex-direction: column;
}

.information-container {
    padding-bottom: 10px;
}

.links-container {
    display: flex;

    a {
        height: fit-content;
    }
}
</style>
