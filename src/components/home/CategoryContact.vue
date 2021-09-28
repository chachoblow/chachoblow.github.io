<template>
    <category-frame :title="'Contact'">
        <div class="category-content">
            <ul>
                <li>
                    <a
                        href="https://github.com/chachoblow"
                        title="My Github"
                        target="_blank"
                    >
                        <span>Github</span>
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
                        target="_blank"
                    >
                        <span>Instagram</span>
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
                        target="_blank"
                    >
                        <span>LinkedIn</span>
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

@Options({
    components: {
        CategoryFrame,
    },
})
export default class CategoryContact extends Vue {}
</script>

<style scoped lang="scss">
span {
    background-color: white;
}
</style>
