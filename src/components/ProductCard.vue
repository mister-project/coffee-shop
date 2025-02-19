<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="card.image" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
    <div class="best__item-price">{{ card.price | addCurrensy }}</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      requared: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
