<template>
    <div class="navigation-header-container">
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
import { Vue } from "vue-class-component";

interface ContactConfig {
    link: string;
    linkTitle: string;
    label: string;
}

export default class HeaderMainHea extends Vue {
    private github: ContactConfig = {
        link: "https://github.com/chachoblow",
        linkTitle: "My Github",
        label: "github",
    };
    private instagram: ContactConfig = {
        link: "https://www.instagram.com/chachoblow",
        linkTitle: "My Instagram",
        label: "instagram",
    };
    private linkedin: ContactConfig = {
        link: "https://www.linkedin.com/in/wesleyklein/",
        linkTitle: "My LinkedIn",
        label: "linkedin",
    };
}
</script>

<style scoped lang="scss">
.navigation-header-container {
    display: flex;
    flex-direction: column;
    padding: 0 0 40px 0;
    font-size: 0.9rem;

    > div {
        width: 100%;

        + div {
            padding-top: 5px;
        }
    }

    @media (min-width: $small-device-width) {
        justify-content: space-between;
        flex-direction: row;

        > div {
            width: 33%;

            + div {
                padding-top: 0;
            }
        }
    }
}

.links-container {
    display: flex;

    a {
        height: fit-content;
    }
}
</style>
