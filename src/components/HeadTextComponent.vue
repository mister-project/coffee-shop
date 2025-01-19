<template>

    <h1 :class="classHeadText">{{ text }}</h1>

</template>

<script>
export default {
    props: {

        text: {
            type: String,
            required: true,
        },
        classHeadText: {
            type: String,
            required: false,
        },
    }
}

</script>
