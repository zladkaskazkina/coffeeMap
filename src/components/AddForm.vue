<template>
  <div>
    <h1>O projektu</h1>
    <h2>Formulář</h2>
    <form @submit.prevent="addProfile">
      <label for="first-name">
        Jméno
        <input type="text" id="first-name" v-model.trim="firstName" placeholder="Jméno" />
      </label>
      <label for="last-name">
        Příjmení
        <input type="text" id="last-name" v-model.trim="lastName" placeholder="Příjmení" />
      </label>
      <br />
      <label for="branch">
        Obor
        <input type="text" id="branch" v-model.trim="branch" placeholder="Obor" />
      </label>
      <br />
      <label for="institution">
        Instituce
        <input
          type="text"
          id="institution"
          v-model.trim="institution"
          placeholder="Instituce"
        />
      </label>
      <br />
      <label for="offer">
        Nabízím:
        <textarea id="offer" v-model.trim="offer" placeholder="Vysvětlím teorii relativity"></textarea>
      </label>
      <br />
      <label for="whom">
        Pro koho:
        <input
          type="text"
          id="whom"
          v-model.trim="whom"
          placeholder="1.a 2. st. ZŠ, SŠ, dospělý"
        />
      </label>

      <label for="region-select">
        Pro oblast:
        <select name="type" id="region-select" v-model="region">
          <option>--Můžete vybrat i více možností--</option>
          <option>Celá ČR</option>
        </select>
      </label>
      <br />
      <label for="contact">
        Kontakt
        <input
          type="text"
          id="contact"
          v-model.trim="contact"
          placeholder="jmeno.prijmeni@email.cz"
        />
      </label>
      <br />
      <button type="submit" @click="addProfile">Přidej profil</button>
    </form>

    <ul>
      <li v-for="profile in profiles" :key="profile.id">{{ profile }}</li>
    </ul>
  </div>
</template>

<script>
// import Forms from "./Forms.vue";
import { db } from "../utils/db";
export default {
  name: "About",
  data() {
    return {
      coffeeShops: [],
      title: "",
      address: "",
      website: "",
      terrace: "",
      baby: "",
      whom: "",
      region: "",
      contact: ""
    };
  },
  // Ordering the showed profiles by lastName
  firestore: {
    profiles: db.collection("profiles").orderBy("lastName")
  },
  methods: {
    addProfile(event) {
      db.collection("profiles")
        .add({
          firstName: this.firstName,
          lastName: this.lastName,
          branch: this.branch,
          institution: this.institution,
          offer: this.offer,
          whom: this.whom,
          region: this.region,
          contact: this.contact
        })
        .then(docRef => {
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
    }
  }
  name: "About"
};
</script> 