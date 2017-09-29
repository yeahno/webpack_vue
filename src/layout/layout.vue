<template>
    <div id="app">
        <Row>
            <Col span="3" class="layout-logo">
                <img src="../image/logo.png" alt="logo">
            </Col>
            <Col span="16">
                <top-menu></top-menu>
            </Col>
            <Col span="5" class="layout-top-right">
                <a href="#">帮助</a>
                <Dropdown trigger="click" style="margin-left: 20px" @on-click="handleClick">
                    <a href="javascript:void(0)">
                        <Badge count="0">
                            <Avatar icon="person" />
                        </Badge>
                        admin
                        <Icon type="arrow-down-b"></Icon>
                    </a>
                    <DropdownMenu slot="list">
                        <DropdownItem>注销</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
        <Row class="layout-second-row">
            <Col span="3" class="layout-left-menu">
                <left-menu></left-menu>
            </Col>
            <Col span="21" class="layout-main">
                <div class="layout-bread-crumb">
                    <Breadcrumb separator=">">
                        <BreadcrumbItem v-if="breadcrumb_top_menu">{{ breadcrumb_top_menu }}</BreadcrumbItem>
                        <BreadcrumbItem v-if="breadcrumb_left_menu">{{ breadcrumb_left_menu }}</BreadcrumbItem>
                        <BreadcrumbItem v-if="breadcrumb_left_submenu">{{ breadcrumb_left_submenu }}</BreadcrumbItem>
                        <BreadcrumbItem v-if="breadcrumb_detail_page">{{ breadcrumb_detail_page }}</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <router-view></router-view>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
import leftMenu from '../component/left_menu.vue'
import topMenu from '../component/top_menu.vue'
export default {
    data () {
        return {
            breadcrumb_top_menu:"首页",
            breadcrumb_left_menu:"",
            breadcrumb_left_submenu:"",
            breadcrumb_detail_page:"",
        }
    },
    components:{
        topMenu,
        leftMenu,
    },
    mounted (){
        var _this=this;
        this.$root.$on('left-menu-selected',(top_menu_name,left_menu_name,left_submenu_name)=>{
            _this.breadcrumb_top_menu=top_menu_name;
            _this.breadcrumb_left_menu=left_menu_name;
            _this.breadcrumb_left_submenu=left_submenu_name;
        })
    },
    methods:{
        handleClick(){
            alert("click");
        }
    }
}
</script>
<style>
    html,body,#app{
        height:100%;
    }
    .layout-left-menu{
        margin-right:-1px;
        padding-bottom:1px;
    }
    .layout-logo{
        height:60px;
        background:#495060;
        text-align:left;
        padding:5px;
    }
    .layout-logo img{
        height:100%;
        margin-left:10px;
 
    }
    .layout-top-right{
        z-index:99;
        text-align:right;
        padding-right:40px;
        line-height:60px;
        margin:0px;
        height:60px;
        background:#495060;
        color:rgba(255,255,255,.7);
        font-size:14px;
    }
    .layout-top-right a{
        color: #9ba7b5;
    }
    .layout-second-row{
        padding-top:60px;
        margin-top:-60px;
        height:100%;
    }
    .layout-main{
        border-left:1px solid #dddee1;
        height:auto;
        min-height: 100%;
    }

    .layout-bread-crumb{
        padding:10px 20px;
        border-bottom:1px solid #dddee1;
    }
    .layout-content{
        padding:20px;
    }
    .layout-height{
        height:100%;
        min-height:100%;
    }
</style>
