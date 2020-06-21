<template>
  <div class="form">
    <h2 class="form__header">Suggest a new coffee point</h2>
    <form
      class="form__body"
      @submit.prevent="sendEmail"
      method="post"
      enctype="text/plain"
    >
      <textarea name="body" v-model="formData.emailBody" v-show="false" />
      <div class="form__inputs">
        <label for="title">
          <b-form-input
            type="text"
            id="title"
            v-model.trim="formData.title"
            name="title"
            placeholder="Name of a coffeeshop"
          />
        </label>
        <label for="Address">
          <b-form-input
            type="text"
            id="addresss"
            name="address"
            v-model.trim="formData.address"
            placeholder="Addresss"
          />
        </label>

        <label for="City">
          <b-form-input
            type="text"
            id="city"
            name="city"
            v-model.trim="formData.city"
            placeholder="City"
          />
        </label>

        <label for="Web">
          <b-form-input
            type="text"
            id="web"
            name="web"
            v-model.trim="formData.web"
            placeholder="Website"
          />
        </label>
      </div>
      <h4 class="form__part-title">Select features:</h4>
      <div
        class="filterList d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-center"
      >
        <label
          class="form__filter btn btn-light"
          v-for="(filter, index) in state.filterLabels"
          :class="{ selected: formData.filters[filter.key] }"
          :key="index"
        >
          <img class="form__img" :src="`../assets/img/${filter.icon}.png`" />{{
            filter.label
          }}
          <input
            type="checkbox"
            :name="`${formData.filters[filter.key]}`"
            v-model="formData.filters[filter.key]"
            v-show="false"
          />
        </label>
      </div>
      <!-- <div class="form__filters">
  
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="decaf" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />
          <label for="decaf">Decaf coffee</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="milk" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="milk">Alternative milk</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="food" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="food">Hot Food</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="barrier" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="barrier">Barrier-free</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="freelance" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="freelance">Freelance Friendly</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="baby" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="baby">Family Friendly</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="pet" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="pet">Pet Friendly</label>
        </div>
        <div class="form__filter btn btn-light">
          <b-form-checkbox type="checkbox" v-model="terrace" v-show="false" />
          <img class="form__img" src="../assets/img/decaf.png" />

          <label for="terrace">Outside seating</label>
        </div>
        
      </div> -->
      <br />
      <label class="form__contact" for="contact">
        <b-form-input
          type="email"
          id="contact"
          name="email"
          v-model.trim="formData.contact"
          placeholder="youremail@gmail.com"
        />
      </label>
      <br />
      <button class="form__btn btn m-5" type="submit">
        Add coffeeshop
      </button>
    </form>
  </div>
</template>

<script>
// import Forms from "./Forms.vue";
import { db } from "../utils/db";
import { state } from "../utils/state";

let clearData = {
  title: "",
  address: "",
  city: "",
  web: "",
  terrace: "",
  baby: "",
  decaf: "",
  milk: "",
  pet: "",
  barrier: "",
  food: "",
  freelance: "",
  contact: "",
  filters: {
    milkSelected: false,
    decafSelected: false,
    foodSelected: false,
    barrierSelected: false,
    freelanceSelected: false,
    familySelected: false,
    petSelected: false,
    outdoorSelected: false,
  },
};

export default {
  name: "Form",
  data() {
    return {
      formData: {
        title: "",
        address: "",
        city: "",
        web: "",
        terrace: "",
        baby: "",
        decaf: "",
        milk: "",
        pet: "",
        barrier: "",
        food: "",
        freelance: "",
        contact: "",
        emailBody: "",
        filters: {
          milkSelected: false,
          decafSelected: false,
          foodSelected: false,
          barrierSelected: false,
          freelanceSelected: false,
          familySelected: false,
          petSelected: false,
          outdoorSelected: false,
        },
      },

      state,
    };
  },
  // Ordering the showed profiles by lastName
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title"),
  },
  methods: {
    sendEmail: function(e) {
      const self = this;
      this.formData.emailBody = `
              This coffeeshop has these features:
              ${
                this.formData.filters.familySelected
                  ? "Family: yes"
                  : "Family: no"
              }
              |
              ${
                this.formData.filters.decafSelected ? "Decaf: yes" : "Decaf: no"
              }
              |
              ${this.formData.filters.milkSelected ? "Milk: yes" : "Milk: no"}
              |
              ${this.formData.filters.petSelected ? "Pet: yes" : "Pet: no"}
              |
              ${
                this.formData.filters.freelanceSelected
                  ? "Freelance: yes"
                  : "Freelance: no"
              }
              |
              ${
                this.formData.filters.barrierSelected
                  ? "Barrier: yes"
                  : "Barrier: no"
              }
              |
              ${this.formData.filters.foodSelected ? "Food: yes" : "Food: no"}
              |
              ${
                this.formData.filters.outdoorSelected
                  ? "Outdoor: yes"
                  : "Outdoor: no"
              }
              |`;
      setTimeout(() => {
        emailjs
          .sendForm(
            "gmail",
            "template_uEHmIFup",
            e.target,
            "user_ueeaU5dH6cZdfvVasht6D"
          )
          .then(
            (result) => {
              this.formData = {
                ...clearData,
                filters: { ...clearData.filters },
              };
              alert("Thank you for your suggestion, we will chcek it out");
              this.$router.push("/");
            },
            (error) => {
              alert("Sorry, the form wasn't send, try it again later, please");
            }
          );
      }, 1);
    },
  },
};
</script>
<style scoped>
.form {
  padding: 50px;
  text-align: center;
}
.form__header {
  margin: 15px auto;
}
.form__body {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid rgb(230, 225, 225);
  border-radius: 5px;
  background-color: white;
}
.icon {
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 2rem;
  display: flex;
  align-items: center;
}
.form__inputs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 0 0.5rem;
}
.form__part-title {
  margin: 10px;
}
.form__filters {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.form__filter {
  width: 100%;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  flex: 1 40%;
  display: flex !important;
  align-items: center;
}
.form__filter:target {
  background-color: #ffdd8f;
}
.form__img {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  opacity: 0.7;
}
.form__contact {
  width: 100%;
  margin: 0 0.5rem;
}
.form__btn {
  background-color: #cd6e48 !important;
  color: #eff0f4;
}
.form__Btn:hover {
  background-color: #f9be60 !important;
}
.selected {
  background-color: #ffdd8f !important;
}
@media only screen and (min-width: 768px) {
  .form__filter {
    width: 60%;
  }
  /* .form__inputs {
    width: 60%;
  }
  .form__contact {
    width: 60%;
  } */
}
</style>
