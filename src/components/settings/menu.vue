<template>
<v-list dense two-line class="pt-0 pb-0">
    <template v-for="(item, index) in items">
        <v-list-tile 
            :key="item.id"
            :to="item.id ? {path:'/task/content', query:{id:item.id}} : null"
            @click.stop="select"
            :id="`task--${item.id}`"
        >
            <v-list-tile-avatar>
                <img v-bind:src="item.avatar" style="width:42px;height:42px;">
            </v-list-tile-avatar>
            <v-list-tile-content>
                <v-list-tile-title v-html="item.name" class="menu_title" style="color:#333;"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.title" style="font-size:14px;"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-list-tile-action-text class="menu_title" style="color:#d93d5e;">
                    {{ item.deadline }}
                </v-list-tile-action-text>
            </v-list-tile-action>
        </v-list-tile>
        <v-divider></v-divider>
    </template>
</v-list>
</template>

<script>
export default {
    data () {
        return {
            taskid: '',
            items: [
                {
                    id: '1',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '1天',
                    title: '完成任务模块页面编码',
                },
                {
                    id: '2',
                    name: '范琴（测试工程师）',
                    avatar: '/public/avatar/3.jpg',
                    deadline: '2天',
                    title: '任务模块页面测试及后台数据测试',
                },
                {
                    id: '3',
                    name: '宋海桥（质量工程师）',
                    avatar: '/public/avatar/2.jpg',
                    deadline: '3小时',
                    title: '南车间表冷器检验',
                },
                {
                    id: '4',
                    name: '戴明德（项目经理）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '15天',
                    title: '常州天马空调主机工程施工',
                },
                {
                    id: '5',
                    name: '秦丽娟（采购部经理）',
                    avatar: '/public/avatar/5.jpg',
                    deadline: '4天',
                    title: '南京伏羲工程风机采购',
                },
                {
                    id: '6',
                    name: '钱波（财务部会计）',
                    avatar: '/public/avatar/4.jpg',
                    deadline: '16分钟',
                    title: '财务月报表',
                },
                {
                    id: '7',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '8',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '9',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '10',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '11',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '19天',
                    title: '项目线上部署',
                },
                {
                    id: '12',
                    name: '钱烨（软件工程师）',
                    avatar: '/public/avatar/1.jpg',
                    deadline: '999999天',
                    title: '这个是个测试所以名字要长一点，不然就不能测试文字溢出',
                },
            ],
        }
    },
    methods: {
        select: function(event) {
            let tag = event.currentTarget
            let id = tag.firstChild.id
            if (id == this.taskid) {
                return;
            } else {
                if (this.taskid != '') {
                    let prev = document.getElementById(this.taskid).parentNode
                    if (prev) {
                        prev.style.backgroundColor = "#fff"
                    }
                }

                tag.style.backgroundColor = "#bbdefb"
                this.taskid = id
            }
        }
    }
}
</script>

<style lang="css">

</style>
