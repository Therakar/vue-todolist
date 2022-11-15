"use strict"

const { createApp } = Vue

  createApp({
    data() {
      return {
        newElement: '',
        elementsList: [
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare l\'esercizio',
                done: false
            },
            {
                text: 'Riordinare la casa',
                done: false
            },
        ]
      }
    },
    methods: {
        addElement() {
            this.elementsList.push(this.newElement); //pusha il nuovo elemento
            this.newElement= ''; //svuota la variabile new element
        }
    }
  }).mount('#app');