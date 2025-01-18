<template>
    <li :class="classLink">
        <!-- <li :class="header__item"> -->
        <!-- <div :class="classItem"></div> -->
        <a :href="link">{{ text }}</a>

    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        classLink: {
            type: String,
            required: false,
        },
    }
}

</script>


// <!-- <script>
//   export default {
//     props: {
//       name: {
//         type: String,
//         required: true,
//       },
//       price: {
//         type: Number,
//         required: true,
//       },
//       image: {
//         type: String,
//         required: true,
//       },
//       classItem: {
//         type: String,
//         required: false,
//       },
//     },
//   };
//   </script>  -->