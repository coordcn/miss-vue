<template>
<div class="row">
    <div class="menu" style="width:380px">
        <TaskMenu></TaskMenu>
    </div>
    <div class="content">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import TaskMenu from './menu'

export default {
    components: {
        "TaskMenu": TaskMenu
    }   
}
</script>

<style lang="css">

</style>
