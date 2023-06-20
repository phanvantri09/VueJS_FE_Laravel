<template>
    <Header/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3 d-none d-sm-flex">
                đay là side bar
            </div>
            <div class="col-12 col-sm-9">
                đay là conytent
            </div>
        </div>
    </div>
    <router-view></router-view>
</template>
<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>