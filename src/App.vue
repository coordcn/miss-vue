<template>
<v-app style="background-color:#fff;width:100%;height:100%;overflow:hidden;">
    <div class="column">
        <div class="tool">
            <Toolbar></Toolbar>
        </div>
        <div class="main">
            <div class="row">
                <div class="menu" style="width:180px">
                    <MainMenu></MainMenu>
                </div>
                <div class="content">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</v-app>
</template>

<script>
import Toolbar from './components/toolbar/toolbar'
import Menu from './components/menu/menu'

export default {
    components: {
        "Toolbar": Toolbar,
        "MainMenu": Menu
    }
}
</script>

<style lang="css">
#toolbar {
    width:100%;
    height:50px;
    display:flex;
    flex:0 0 auto;
}

#main {
    width:100%;
    height:100%;
    flex:1;
    overflow:hidden;
}
</style>
