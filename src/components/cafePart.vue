<template>
  <div class="cafe" v-on:click="onClick">
    <div class="cafePart">
      <div class="cafePart__img">
        <img
          class="cafePart__bg"
          v-bind:src="`./assets/img/caffe/${src}.jpg`"
          alt="kavarna"
        />

        <h3 class="cafePart__title">{{ title }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cafe",
  props: ["id", "title", "src", "onClick"],
  methods: {},
};
</script>

<style>
.cafePart {
  width: 100%;
  cursor: pointer;
}
.cafePart:hover .cafePart__bg {
  filter: brightness(90%);
}
.cafePart:hover .cafePart__title {
  transform: translate(0%, -50%) scale(1.05);
}

.cafePart__img {
  width: 100%;
  border-bottom: 2px solid #e3f2f7;
  position: relative;
  height: 0;
  padding-bottom: 60%;
  overflow: visible;
}
.cafePart__bg {
  display: block;
  width: 100%;
  height: 100%;
  filter: brightness(50%);
  object-fit: cover;
  position: absolute;
  transition: 150ms filter;
}
.cafePart__title {
  padding: 10px;
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  transform: translate(0%, -50%);
  transition: 100ms transform;
  color: #e3f2f7;
}
@media only screen and (min-width: 480px) {
  .cafePart {
    width: 50%;
    float: left;
    border-left: 2px solid #e3f2f7;
  }
}

@media only screen and (min-width: 768px) {
  .cafePart {
    width: 100%;
    float: none;
    border-left: none;
  }
  .cafePart__img {
    margin-top: 0;
  }
}
</style>
