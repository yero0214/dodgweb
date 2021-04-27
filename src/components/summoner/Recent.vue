<template>
    <div class="back">
        <chart class="chart" :pieData="winRate" />
        <div class="ratio">{{$store.getters.getRecent}}%</div>
    </div>
</template>

<script>
import Chart from '@/components/widget/Chart'

export default {
    components: {
      chart: Chart
    },
    data(){
      return {
        
      };
    },
    computed:{
            winRate(){
                const winRate= [
                        { color: "#2aaaff", value: this.$store.getters.getRecent },
                        { color: "#ff4242", value: 100 }
                    ]
                return winRate;
            },
        }
    }
</script>

<style scoped>
.back{
    background-color: white;
    width: 650px;
    height:190px;
    border-radius: 0.4rem;
    color: black;
    font-family: 'Gothic A1';
}
.chart{
    position: absolute;
    top:15px;
    left:15px;
    width: 160px;
    height: 160px;
}
.ratio{
    position: absolute;
    top:35px;
    left: 35px;

    background-color: white;
    width: 120px;
    height:120px;
    border-radius: 50%;
    text-align: center;
    padding-top: 45px;


    font-size: 25px;
}

</style>