<template>
    <div class="row">
        <div class="col-12 header mt-3"> 
            <h1 class="header-title px-xl-4 px-lg-4 px-md-4 px-sm-2"> {{ mainTitle }} </h1>
            <h5 class="header-subtitle px-xl-4 px-lg-4 px-md-4 px-sm-2"> {{ subTitle }} </h5>
        </div>
    </div>
</template>

<script>
export default {
    name: "Title", 
    props: [
           'mainTitle', 'subTitle' 
    ]
     
}
</script>