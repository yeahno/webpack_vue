<template>
   <Menu ref="topMenu" mode="horizontal" theme="dark" @on-select="handleSelect">
        <MenuItem v-for="(menu,index) in menus" :name="index" :key="index">
            <Icon :type="menu.icon"></Icon>
            {{ menu.name }}
        </MenuItem>
    </Menu>
</template>
<script>
    export default {
        data () {
            return {
                menus:[]
            }
        },
        mounted (){
            /*this.$ajax({
                method: 'get',
                url: '/user',
                data: {
                    name: 'wise',
                    info: 'wrong'
                }
            });*/
            this.menus= [
                {name:"系统管理",icon:"ios-home",sub_menus:[
                    {name:"消息管理",icon:"ios-information-outline",sub_menus:[
                        {name:"公告列表",href:"/one"},
                        {name:"消息列表",href:"/two"}
                    ]},
                    {name:"系统设置",key:"supply_manage",icon:"ios-cog",sub_menus:[
                        {name:"网站设置",href:"/three"},
                        {name:"模板设置",href:"/four"}
                    ]},

                ]},
                {name:"内容管理",icon:"ios-keypad",sub_menus:[
                    {name:"公司管理",icon:"ios-navigate",sub_menus:[
                        {name:"公司列表1",href:"/five"},
                        {name:"公司初始化1",href:"/six"}
                    ]},
                    {name:"统计",key:"supply_manage",icon:"stats-bars",sub_menus:[
                        {name:"昨日销量",href:"/seven"},
                        {name:"今日访客",href:"/eight"}
                    ]},
                ]},
            ];
            this.$nextTick(()=>{
                this.handleSelect(0);
            })
        },
        methods:{
            handleSelect(index){
                if(this.menus[index]){
                    this.$root.$emit('top-menu-selected', this.menus[index].sub_menus,this.menus[index].name);
                }
            }
        }
    }
</script>
<style>
</style>