<template>
    <Menu ref="leftMenu" width="auto" :active-name="active_name" @on-select="handleSelect" :accordion="false">
        <Submenu v-for="(menu,index) in menus" :name="index" :key="index">
            <template slot="title">
                <Icon :type="menu.icon"></Icon>
                {{ menu.name }}
            </template>
            <MenuItem v-for="(sub_menu,sub_index) in menu.sub_menus" :name="index+'-'+sub_index" :key="index+'-'+sub_index">
                <router-link :to="sub_menu.href">{{ sub_menu.name }}</router-link>
            </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>
    export default {
        data(){
            return {
                menus:[],
                open_index:0,
                active_name:"",
                current_top_menu:""
            }
        },
        mounted (){
            var _this=this;
            this.$root.$on('top-menu-selected',(menus,top_menu_name)=>{ 
                _this.menus=menus;
                _this.open_index=0;
                _this.active_name="";
                _this.current_top_menu=top_menu_name;
                out:
                for(var i in menus){
                    for(var j in menus[i].sub_menus){
                        if(menus[i].sub_menus[j].href == _this.$route.path){
                            _this.open_index=i;
                            _this.active_name=i+'-'+j;
                            break out;
                        }
                    }
                }
                _this.$nextTick(()=>{
                    this.$refs.leftMenu.$children.forEach((item,index) => {
                        item.opened = index==_this.open_index;
                    })
                    //_this.$refs.leftMenu.updateOpened();
                    _this.$refs.leftMenu.updateActiveName();  
                })
                if(_this.active_name){
                    this.handleSelect(_this.active_name)    
                }
                
            })
        },
        methods:{
            handleSelect(index){
                var ids=index.split('-')
                if(ids.length==2){
                    if(this.menus[ids[0]] && this.menus[ids[0]].sub_menus[ids[1]]){
                        this.$root.$emit("left-menu-selected",this.current_top_menu,this.menus[ids[0]].name,this.menus[ids[0]].sub_menus[ids[1]].name);
                    }
                }
                /*if(this.menus[index]){
                    this.$root.$emit('top-menu-selected', this.menus[index].sub_menus,this.menus[index].name);
                }*/
            }
        }
    }
</script>
<style scope>
    .ivu-menu-item a{
        color:#495060;
        display:block;
        width:100%;
        height:100%;
    }
</style>
