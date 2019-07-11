<template>
    <div class="area"></div>
</template>

<script>
export default {
    props:['mode','area'],
    created(){
        console.log("mode",this.mode);
        console.log("area",this.area);
    }
}
</script>
