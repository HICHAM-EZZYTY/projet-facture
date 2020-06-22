<template>
    <div>
        <input type="text"  class="forms-sides--group_text" v-model="value" :placeholder="placeholder"/>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: "S_Input", 
    data: function(){
        return {
            value: null 
        }
    }, 
    props:['placeholder'],
    watch: {
        value: _.debounce(
            function() {
                if(this.value != '' ){
                    this.$emit('onInput', this.value)
                }
            }, 1000
        ) 
    }

}
</script>
<style lang="scss" scoped>
    .forms-sides--group_text{
        background: transparent;
        margin: .5em 0em; 
        &:first-child{
            // margin-top: 0em !important;
        }
    }
</style>