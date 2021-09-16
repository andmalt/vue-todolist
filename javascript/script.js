// Stampare in pagina un item per ogni elemento contenuto in un array

// Ogni item ha una icona "x" associata: cliccando su di essa, l'item viene rimosso dalla lista

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista

let app = new Vue({
    el:'#app',
    data:{
        toDoList:["uova","pane","latte","spaghetti","peperoni","pere","mozzarella di bufala",],
        addToDoList:"",
    },
    methods:{
        removeItem: function(index){
            this.toDoList.splice(index , 1);
        },
        addItem: function(){
            this.toDoList.push(this.addToDoList);
        },
        addKeyUp: function(){
            this.toDoList.push(this.addToDoList);
        },
    }
});