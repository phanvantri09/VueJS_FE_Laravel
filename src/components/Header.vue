<template>
    <div class="container-fluid">
        <div class="row align-items-center bg-info">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer()">X</span>
            </div>
            <div class="col-10 d-flex align-items-center justify-content-center justify-content-sm-start p-2 ml-2">
                <img src="../assets/logo.png" alt="" height="50" width="54" />
                <span class="d-none d-sm-flex">Quản trị</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer_user()">X</span>
            </div>
        </div>
    </div>
    <a-drawer v-model:visible="visible" title="Danh mục" placement="left">
        <TheMenu />
    </a-drawer>
    <a-drawer v-model:visible="visible_user" title="Danh mục user" placement="right">
        <TheMenu />
    </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import TheMenu from "../components/TheMenu.vue";

export default defineComponent({
    components: {
        TheMenu,
    },
    setup() {
        const visible = ref<boolean>(false);
        const visible_user = ref<boolean>(false);

        const showDrawer = () => {
            visible.value = true;
        };
        const showDrawer_user = () => {
            visible_user.value = true;
        };
        return {
            visible,
            visible_user,
            showDrawer,
            showDrawer_user,
        };
    },
});
</script>
