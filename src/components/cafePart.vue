<template>
  <div class="container">
    <div class="cafePart">
      <div class="cafePart__img">
        <img class="cafePart__bg" src="../assets/img/caffe/cohledajmeno.jpg" alt="kavarna" />
        <h2 class="cafePart__title">Co hleda jmeno</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cafe",
  props: ["id", "name", "src"],
  methods: {
    
  
};
</script>
<style>
.cafePart {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cafePart__img {
  width: 100%;
  margin: 10px 0;
  position: relative;
}
.cafePart__bg {
  width: 100%;
  filter: brightness(50%);
  object-fit: cover;
}
.cafePart__title {
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0%, -50%);
  color: #eff0f4;
}
</style>