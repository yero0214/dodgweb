<template>
    <div class="bg-img"></div>
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

    z-index: -1;

    filter: blur(10px);
    -webkit-filter: blur(10px);
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>