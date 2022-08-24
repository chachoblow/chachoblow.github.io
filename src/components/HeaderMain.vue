<template>
    <div id="navigationHeader" class="navigation-header-container">
        <div class="name-container">Wesley Klein</div>
        <div class="links-container">
            <a :href="github.link" :title="github.linkTitle" target="_blank">
                {{ github.label }},&nbsp;
            </a>
            <a
                :href="instagram.link"
                :title="instagram.linkTitle"
                target="_blank"
            >
                {{ instagram.label }},&nbsp;
            </a>
            <a
                :href="linkedin.link"
                :title="linkedin.linkTitle"
                target="_blank"
            >
                {{ linkedin.label }}
            </a>
        </div>
        <div class="information-container">
            <slot>
                Based in Seattle, WA. Working as a software engineer. Hold a
                mathematics and computer science degree from The University of
                California, Berkeley. Always exploring ways in which to merge
                more traditional artistic endeavours with modern technologies,
                such as, microcontrollers, web, virtual reality, and creative
                coding frameworks.
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
                label: "github",
            } as ContactConfig,
            instagram: {
                link: "https://www.instagram.com/chachoblow",
                linkTitle: "My Instagram",
                label: "instagram",
            } as ContactConfig,
            linkedin: {
                link: "https://www.linkedin.com/in/wesleyklein/",
                linkTitle: "My LinkedIn",
                label: "linkedin",
            } as ContactConfig,
        };
    },
});
</script>

<style scoped lang="scss">
.navigation-header-container {
    display: flex;
    flex-direction: column;
    padding: $page-padding 0 40px 0;
    font-size: 0.9rem;
    z-index: 2;
    background: white;

    @media (min-width: $small-device-width) {
        position: sticky;
        top: 0;
        flex-direction: row;

        .information-container {
            width: 50%;
        }

        .name-container,
        .links-container {
            width: 25%;
        }

        .links-container,
        .information-container {
            padding-left: 0;
        }

        > div + div {
            padding-top: 0;
        }
    }

    > div {
        width: 100%;

        + div {
            padding-top: 5px;
        }
    }

    .name-container,
    .links-container,
    .information-container {
        padding-left: $page-padding;
    }
}

.links-container {
    display: flex;

    a {
        height: fit-content;
    }
}
</style>
