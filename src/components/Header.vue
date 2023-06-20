<template>
    <div class="container-fluid">
        <div class="row align-items-center bg-info">
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer()">X</span>
            </div>
            <div class="col-10 d-flex align-items-center justify-content-center justify-content-sm-start">
                <img src="../assets/logo.png" alt="" height="32" width="34">
                <span class="d-none d-sm-flex">Quản trị</span>
            </div>
            <div class="col-sm-3 d-none d-sm-flex align-items-center justify-content-sm-end">
                <span>Amdin</span>
            </div>
            <div class="col-1 d-flex d-sm-none align-items-center justify-content-center">
                <span @click="showDrawer_user()">X</span>
            </div>
        </div>
    </div>
    <a-drawer
    v-model:visible="visible"
    title="Danh mục"
    placement="left"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
  <a-drawer
    v-model:visible="visible_user"
    title="Danh mục user"
    placement="right"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
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