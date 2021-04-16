<template>
<div>
    <div class="background-image"></div>
    <div class="background-blur"></div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.background-image {
    background-image:url('../../assets/Howling Abyss.jpg');
    /* background-color: rgb(248, 248, 248); */
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;
    position: fixed;
    z-index: -2;
}
.background-blur{
    backdrop-filter: blur(8px);
    z-index: -1;
    width:100%;
    height:100%;
    position: fixed;
}
</style>