<style scoped>
.wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 200px;
    padding-bottom: 200px;
}
.wrapper h1{
  text-align: center;
  vertical-align: middle;
  margin-bottom: 20px;
  color: #000;
}
.login {
    margin: 0 auto;
    padding: 200px auto;
    width: 200px;
    height: 100%;
}
</style>
<template>
    <div class="wrapper">
        <h1>后台管理系统</h1>
        <div class="login">
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="username">
                    <Input v-model="formInline.username" placeholder="用户名"></Input>
                </FormItem>
                <FormItem prop="password">
                    <Input v-model="formInline.password" type="password" placeholder="密码"></Input>
                </FormItem>
                <FormItem>
                    <Button type="success" @click.native="handleSubmit('formInline')" long>登录</Button>
                </FormItem>
            </Form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formInline: {
                username: '',
                password: '',
            },
            ruleInline: {
                username: [{
                    required: true,
                    message: '用户名不能为空'
                }],
                password: [{
                    required: true,
                    message: '密码不能为空'
                }, {
                    type: 'string',
                    min: 6,
                    message: '密码长度不能小于6位'
                }]
            }
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('登录成功!');
                    this.$router.push('/index');
                } else {
                //    this.$Message.error('登录失败!');
                }
            })
        }
    }
}

</script>

