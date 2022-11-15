"use strict"

const { createApp } = Vue

  createApp({
    data() {
      return {
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
    }
  }).mount('#app');