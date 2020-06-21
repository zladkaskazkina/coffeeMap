<template>
  <div>
    <h1>Suggest new coffee point</h1>
    <form @submit.prevent="addProfile">
      <label for="title">
        Name
        <input
          type="text"
          id="title"
          v-model.trim="title"
          placeholder="Name of coffeeshop"
        />
      </label>
      <label for="Address">
        Address
        <input
          type="text"
          id="addresss"
          v-model.trim="address"
          placeholder="Addresss"
        />
      </label>
      <br />
      <label for="City">
        City
        <input type="text" id="city" v-model.trim="city" placeholder="City" />
      </label>
      <br />
      <label for="Web">
        Website
        <input type="text" id="web" v-model.trim="web" placeholder="Website" />
      </label>
      <br />

      <label for="filters">
        Filters:
        <input type="checkbox" v-model="decaf" />
        <label for="decaf">Decaf coffee</label>

        <input type="checkbox" v-model="milk" />
        <label for="milk">Alternative milk</label>

        <input type="checkbox" v-model="food" />
        <label for="food">Hot Food</label>

        <input type="checkbox" v-model="barrier" />
        <label for="barrier">Barrier-free</label>

        <input type="checkbox" v-model="freelance" />
        <label for="freelance">Freelance Friendly</label>

        <input type="checkbox" v-model="baby" />
        <label for="baby">Family Friendly</label>

        <input type="checkbox" v-model="pet" />
        <label for="pet">Pet Friendly</label>

        <input type="checkbox" v-model="terrace" />
        <label for="terrace">Outside seating</label>
      </label>
      <br />
      <label for="contact">
        Contact
        <input
          type="text"
          id="contact"
          v-model.trim="contact"
          placeholder="yourname@gmail.com"
        />
      </label>
      <br />
      <button type="submit" @click="addProfile">Add coffeeshop</button>
    </form>
  </div>
</template>

<script>
// import Forms from "./Forms.vue";
import { db } from "../utils/db";
export default {
  name: "About",
  data() {
    return {
      profiles: [],
      title: "",
      address: "",
      city: "",
      website: "",
      terrace: "",
      baby: "",
      decaf: "",
      milk: "",
      pet: "",
      barrier: "",
      food: "",
      freelance: "",
      contact: "",
    };
  },
  // Ordering the showed profiles by lastName
  firestore: {
    profiles: db.collection("coffeeShops").orderBy("title"),
  },
  methods: {
    addProfile(event) {
      db.collection("coffeeShops")
        .add({
          title: this.title,
          address: this.address,
          branch: this.branch,
          institution: this.institution,
          offer: this.offer,
          whom: this.whom,
          region: this.region,
          contact: this.contact,
        })
        .then((docRef) => {
          docRef.update({ id: docRef.id });
        });
      // Clearing the input value
      this.firstName = "";
      this.lastName = "";
      this.branch = "";
      this.institution = "";
      this.offer = "";
      this.whom = "";
      this.region = "";
      this.contact = "";
      event.preventDefault();
    },
  },
};
</script>
