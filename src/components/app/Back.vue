<template>
<div>
    <div class="background-image"></div>
</div>
</template>
<script>
export default {
}
</script>
<style scoped>
.background-image {
    background-image:url('../../assets/Abyss Blur.png');
    /* background-color: rgb(248, 248, 248); */
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    width:100%;
    height:100%;
    position: fixed;
    z-index: -10;
}
</style>