"use strict"

const { createApp } = Vue

    createApp({
        data() {
        return {

            // oggetto vuoto che viene riempito dall'input dell'utente
            newElement: {
                text: '',
                done: false
            },

            // array di oggetti che contiene le tasks
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

            // funzione che pusha l'oggetto inserito dall'utente e poi svuota la variabie in modo che possa essere riutlizzata
            addElement() {
                this.elementsList.push(this.newElement); //pusha il nuovo elemento
                console.log(this.newElement) 
                this.newElement= {
                    text: '',
                    done: false
                }; //svuota la variabile newElement
            },
            removeElement(i){
                this.elementsList.splice(i, 1);  
            },
        }
}).mount('#app')

    