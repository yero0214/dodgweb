<template>
    <div class="back">
        <div class="bg-img"></div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.bg-img{
    background-image: url("../assets/Shurima.png");
    position: absolute;

    height: 100%;
    width: 100%;

    filter: blur(10px);
    -webkit-filter: blur(8px);
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>