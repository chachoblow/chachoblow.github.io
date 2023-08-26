<template>
    <div class="about-container">
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
                        <span>{{ github.label }}</span>,&nbsp;</a>
                </li>
                <li>
                    <a :href="instagram.link" target="_blank">
                        <span>{{ instagram.label }}</span>,&nbsp;</a>
                </li>
                <li>
                    <a :href="linkedin.link" target="_blank">
                        <span>{{ linkedin.label }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
interface ContactConfig {
    link: string;
    label: string;
}

const github: ContactConfig = {
    link: "https://github.com/chachoblow",
    label: "Github",
};

const instagram: ContactConfig = {
    link: "https://www.instagram.com/chachoblow",
    label: "Instagram",
};

const linkedin: ContactConfig = {
    link: "https://www.linkedin.com/in/wesleyklein/",
    label: "LinkedIn",
};
</script>

<style scoped lang="scss">
@import "@/scss/mixins.scss";

.about-container {
    display: flex;
    flex-direction: column;
}

.information-container {
    padding-bottom: 8px;

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
            font-style: italic;
        }
    }
}
</style>
