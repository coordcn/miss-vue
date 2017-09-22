<template>
<v-tabs dark v-model="active" :scrollable="false" style="height:100%">
    <v-tabs-bar class="cyan">
        <v-tabs-slider class="yellow"></v-tabs-slider>
        <v-tabs-item
            v-for="item in items"
            :key="item.key"
            :href="item.href"
            class="menu_title"
        >
            {{ item.title }}
        </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items style="height:100%;">
        <v-tabs-content
            v-for="item in items"
            :key="item.key"
            :id="item.id"
            style="height:100%;transition:0s;"
            :transition="false"
        >
            <div style="height:100%;overflow-y:auto">
                {{ item.title }}
                {{ id }}
                <br>
                project
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                <br>
                {{ text }}
            </div>
        </v-tabs-content>
    </v-tabs-items>
</v-tabs>
</template>

<script>
export default {
    data () {
        return {
            active: 'tab-news',
            id: "1",
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            items: [
                {
                    title: '高级搜索',
                    key: 'search',
                    href: '#tab-search',
                    id: 'tab-search'
                },
                {
                    title: '新建',
                    key: 'create',
                    href: '#tab-create',
                    id: 'tab-create'
                },
                {
                    title: '动态',
                    key: 'news',
                    href: '#tab-news',
                    id: 'tab-news'
                },
                {
                    title: '详情',
                    key: 'profile',
                    href: '#tab-profile',
                    id: 'tab-profile'
                },
                {
                    title: '进度',
                    key: 'progress',
                    href: '#tab-progress',
                    id: 'tab-progress'
                }
            ]
        }
    },
    created () {
        this.fetchData()
    },
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
            //do ajax request
            this.id = this.$route.query.id
        }
    }
}
</script>

<style lang="css">

</style>
