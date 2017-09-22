<template>
<v-list dense class="pt-2">
    <template v-for="item in items">
        <v-list-tile 
            :key="item.title"
            :to="!item.target ? item.href : null"
            :href="item.target && item.href"
            :target="item.target"
        >
            <v-list-tile-action style="min-width:32px;">
                <v-icon style="font-size:20px;color:inherit;">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title class="menu_title">
                    {{ item.title }}
                </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
                <v-list-tile-action-text class="menu_title" style="color:#d93d5e;">
                    {{ item.action }}
                </v-list-tile-action-text>
            </v-list-tile-action>
        </v-list-tile>
    </template>
</v-list>
</template>

<script>
export default {
    data () {
        return {
            items: [
                { 
                    title: '任务',
                    href: '/task',
                    icon: 'layers',
                    action: 99
                },
                { 
                    title: '项目',
                    href: '/project',
                    icon: 'dashboard'
                },
                { 
                    title: '团队',
                    href: '/group',
                    icon: 'group' 
                },
                { 
                    title: '产品',
                    href: '/product',
                    icon: 'camera' 
                },
                { 
                    title: '客户',
                    href: '/custom',
                    icon: 'language' 
                },
                { 
                    title: '供应商',
                    href: '/supplier',
                    icon: 'unarchive', 
                    action: 8 
                },
                { 
                    title: '设备',
                    href: '/equip',
                    icon: 'iso' 
                },
                { 
                    title: '库存',
                    href: '/stock',
                    icon: 'dns',
                    action: 12
                },
                { 
                    title: '报表',
                    href: '/report',
                    icon: 'assessment' 
                },
                { 
                    title: '设置',
                    href: '/settings',
                    icon: 'settings' 
                },
                { 
                    title: '帮助',
                    href: '/help',
                    icon: 'school' 
                },

                /*
                { title: '任务', icon: 'casino' },
                { title: '任务', icon: 'apps' },
                { title: '任务', icon: 'widgets' },
                { title: '任务', icon: 'border_all' },
                { title: '任务', icon: 'add_box' },
                { title: '任务', icon: 'font_download' },
                { title: '报表', icon: 'archive' },
                { title: '报表', icon: 'account_box' },
                */
            ],
        }
    }
}
</script>
