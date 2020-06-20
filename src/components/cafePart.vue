<template>
  <div class="cafe">
    <div class="cafePart">
      <div class="cafePart__img">
        <!--MUSIME PRIDAT DYNAMICKY ${imgSrc}-->
        <img
          class="cafePart__bg"
          v-bind:src="`./assets/img/caffe/orient.jpg`" 
          alt="kavarna"
        /> 
        
        <h2 class="cafePart__title">{{ title }}</h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cafe",
  props: ["id", "title", "src"],
  methods: {},
};
</script>

<style>
/* .cafe {
  display: flex;
  flex-direction: column;
  align-items: center;
} */
.cafePart {
  width: 100%;
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
@media only screen and (min-width: 720px) {
  /* .cafe {
    flex: 2;
    margin-right: 1rem;
  } */
  /* .cafePart {
    flex: 2;
    margin-right: 1rem;
  } */
  .cafePart__img {
    margin-top: 0;
  }
}
</style>
