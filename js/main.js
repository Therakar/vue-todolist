"use strict";

const { createApp } = Vue;

createApp({
  data() {
    return {
      // oggetto vuoto che viene riempito dall'input dell'utente
      newElement: {
        text: "",
        done: false,
      },

      // array di oggetti che contiene le tasks
      elementsList: [],
    };
  },

  methods: {
    // funzione che pusha l'oggetto inserito dall'utente e poi svuota la variabile in modo che possa essere riutilizzata
    addElement() {
      this.elementsList.push(this.newElement); // pusha il nuovo elemento
      console.log(this.newElement);
      this.newElement = {
        text: "",
        done: false,
      }; // svuota la variabile newElement
      this.saveDataLocalStorage(); // salva i dati nello storage locale
    },
    removeElement(i) {
      this.elementsList.splice(i, 1);
      this.saveDataLocalStorage(); // salva i dati nello storage locale dopo la rimozione di un elemento
    },
    completedTask(i) {
      if (this.elementsList[i].done === false) {
        // SE l'elemento done ha valore false al momento del click
        this.elementsList[i].done = true; // il valore viene cambiato a true
      } else {
        this.elementsList[i].done = false; // ALTRIMENTI viene cambiato a false
      }
      this.saveDataLocalStorage(); // salva i dati nello storage locale dopo l'aggiornamento di un elemento
    },
    // Funzione per salvare i dati nello storage locale
    saveDataLocalStorage() {
      localStorage.setItem("toDoList", JSON.stringify(this.elementsList));
    },
    // Funzione per caricare i dati dallo storage locale
    uploadDataLocalStorage() {
      const dati = localStorage.getItem("toDoList");
      this.elementsList = dati ? JSON.parse(dati) : [];
    },
  },
  mounted() {
    // Carica i dati della to-do list dallo storage locale al momento del montaggio del componente
    this.uploadDataLocalStorage();
  },
}).mount("#app");
