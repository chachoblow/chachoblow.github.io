<template>
    <category-frame :title="'Contact'">
        <div class="category-content">
            <ul>
                <li>
                    <a href="https://github.com/chachoblow" title="My Github">
                        <div v-html="perWordSpan('Github')"></div>
                        <img
                            alt="External link"
                            src="../../assets/icons/external-link.jpg"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/chachoblow"
                        title="My Instagram"
                    >
                        <div v-html="perWordSpan('Instagram')"></div>
                        <img
                            alt="External link"
                            src="../../assets/icons/external-link.jpg"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/wesleyklein/"
                        title="My LinkedIn"
                    >
                        <div v-html="perWordSpan('LinkedIn')"></div>
                        <img
                            alt="External link"
                            src="../../assets/icons/external-link.jpg"
                        />
                    </a>
                </li>
            </ul>
        </div>
    </category-frame>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import CategoryFrame from "@/components/home/CategoryFrame.vue";
import { perWordSpan } from "@/helpers/text";

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryContact extends Vue {
    private perWordSpan(text: string): string {
        return perWordSpan(text);
    }
}
</script>

<style scoped lang="scss"></style>
