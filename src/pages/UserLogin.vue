<template>
    <div class="userlogin">
        <el-row type="flex" :gutter="20" justify="center">
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="text item">
                         <el-form label-width="80px" >
                                <el-form-item label="账号">
                                        <el-input></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                        <el-input></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">登录</el-button>
                                    <router-link to="/wordpart/todaysummary" @click="onSubmit"><el-button type="primary" >登录</el-button></router-link>
                                    <router-link to="/bar"><el-button >注册</el-button></router-link>
                                </el-form-item>
                        </el-form>
                    </div>  
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
export default {
    name:'UserLogin',
    methods:{
        onSubmit(){
            this.$axios({
            method: "get",
            url: "http://localhost:3000/islogin", // 接口地址
                }).then(response => {
                console.log(response)
                this.$store.commit('getIslogin',response)
            }).then(()=>{
                console.log("ll")
                this.$router.push({
                    path:'/wordpart/todaySummary' 
                })
            })

            
            
            
        }
    }
}
</script>
<style scoped>
    a{
        padding: 10px;
    }
    .userlogin{
        margin-top: 70px;
    }
</style>