<template>
    <div class="navbar">
        <img src="@/assets/menu.png">
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.navbar{
    position: fixed;
    height:100%;
    width:45px;
    backdrop-filter: blur(5px);
    z-index: 2;
    border-right: solid rgba(255, 255, 255, 0.116) thin;
}
.navbar img{
    position: fixed;
    top: 50%;
    left:2px;
}
</style>