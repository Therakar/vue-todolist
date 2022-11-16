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
            elementsList: []
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
            completedTask(i){
                if (this.elementsList[i].done === false){ //SE l'elemento done ha valore false al momento del click
                  this.elementsList[i].done = true; //il valore viene cambiato a true
                } else {
                  this.elementsList[i].done = false;//ALTRIMETNI viene cambiato a false
                }
              },
        }
}).mount('#app')

    