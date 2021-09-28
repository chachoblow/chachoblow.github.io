<template>
    <category-frame :title="'Contact'">
        <div class="category-content">
            <ul>
                <li v-for="contact in contacts" :key="contact.label">
                    <a
                        :href="contact.link"
                        :title="contact.linkTitle"
                        target="_blank"
                    >
                        <span>{{ contact.label }}</span>
                        <img alt="External link" :src="linkIcon" />
                    </a>
                </li>
            </ul>
        </div>
    </category-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CategoryFrame from "@/components/home/CategoryFrame.vue";

interface Contact {
    link: string;
    linkTitle: string;
    label: string;
}

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryContact extends Vue {
    private linkIcon = require("../../assets/icons/external-link.jpg");
    private contacts: Contact[] = [
        {
            link: "https://github.com/chachoblow",
            linkTitle: "My Github",
            label: "Github",
        },
        {
            link: "https://www.instagram.com/chachoblow",
            linkTitle: "My Instagram",
            label: "Instagram",
        },
        {
            link: "https://www.linkedin.com/in/wesleyklein/",
            linkTitle: "My LinkedIn",
            label: "LinkedIn",
        },
    ];
}
</script>

<style scoped lang="scss">
span {
    background-color: white;
}

img {
    height: 15px;
    margin-left: 10px;
    background-color: white;
}
</style>
