<template>
    <header>
        <RouterLink to="/" v-slot="{ href, navigate }" custom>
            <div class="name-container">
                <a :href="href" @click="navigate">
                    <img
                        src="@/assets/my-eyes-name-clear-small.webp"
                        title="Website logo"
                        rel="preload"
                    />
                </a>
            </div>
        </RouterLink>
        <div class="about-container">
            <slot>
                <div class="information-container">
                    <p>
                        Based in Seattle, WA. Working as a software engineer.
                        Hold a mathematics and computer science degree from The
                        University of California, Berkeley. Always exploring
                        ways in which to merge more traditional artistic
                        endeavours with modern technologies, such as,
                        microcontrollers, web, virtual reality, and creative
                        coding frameworks.
                    </p>
                </div>
                <div class="links-container">
                    <ul>
                        <li>
                            <a :href="github.link" target="_blank">
                                <span>{{ github.label }}</span
                                >,&nbsp;</a
                            >
                        </li>
                        <li>
                            <a :href="instagram.link" target="_blank">
                                <span>{{ instagram.label }}</span
                                >,&nbsp;</a
                            >
                        </li>
                        <li>
                            <a :href="linkedin.link" target="_blank">
                                <span>{{ linkedin.label }}</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </slot>
        </div>
    </header>
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
                label: "Github",
            } as ContactConfig,
            instagram: {
                link: "https://www.instagram.com/chachoblow",
                label: "Instagram",
            } as ContactConfig,
            linkedin: {
                link: "https://www.linkedin.com/in/wesleyklein/",
                label: "LinkedIn",
            } as ContactConfig,
        };
    },
});
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

header {
    @include page-padding;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    column-gap: calc($page-padding-medium / 2);
    z-index: 2;
    background: white;

    @media (min-width: $small-device-width) {
        grid-template-columns: 1fr 2fr;
    }

    @media (min-width: $medium-device-width) {
        column-gap: calc($page-padding-large / 2);
    }
}

.name-container {
    img {
        height: 60px;
        width: auto;
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

    p {
        margin: 0;
    }
}

.links-container {
    ul {
        display: flex;
    }

    a {
        height: fit-content;
        text-decoration: none;

        span {
            text-decoration: underline;
        }
    }
}
</style>
