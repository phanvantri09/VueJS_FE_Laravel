<template>
    <Header />
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-3 d-sm-flex d-none ">
                <a-list bordered style="width: 100%;">
                    <TheMenu />
                    <template #header>
                        <div style="">SideBar</div>
                    </template>
                </a-list>
            </div>
            <div class="col-12 col-sm-9">
                <router-view></router-view>
            </div>
        </div>
    </div>
    
</template>
<script>
import Header from '../components/Header.vue'
import TheMenu from '../components/TheMenu.vue'
export default {
    components: {
        Header, 
        TheMenu
    }
}
</script>