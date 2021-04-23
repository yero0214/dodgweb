<template>
    <div class="back">
        
    </div>
</template>

<script>
export default {
    props:['type'],
    computed:{
        data(){
            return this.$store.getters.getTier[this.type];
        },
    }
}
</script>

<style scoped>
.back{
    background-color: white;
    width: 350px;
    height:335px;
    border-radius: 0.4rem;
    color: black;
    font-family: 'Gothic A1';
}
.back div{
    font-size: 20px;
}
.tier img{
    width:200px;
}
</style>