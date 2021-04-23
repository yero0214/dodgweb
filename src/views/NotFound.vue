<template>
<div>
    <div class="title">
        Sorry<br>
        404 - The page cannot be found<br>
        <font class="goto">Go to </font><router-link to="/" class="homeLink">home page</router-link>
    </div>
</div>

</template>

<script>
export default {
  
}
</script>
<style scoped>
.title{
    position: absolute;
    left: 50%;
    top: 275px;
    transform: translate(-50%, -50%);
    color: #ffffff;
    font-size: 40px;
    text-align: center;
}
.goto{
    font-size: 30px;
}
.homeLink{
    font-size: 30px;
    border-bottom: 2px solid rgb(255, 255, 255);
}
</style>
