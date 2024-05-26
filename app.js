const app = Vue.createApp({
    data(){
        return{
            showBooks: true,
            title: 'Learnig vue',
            author: 'John Doe',
            age: 45
        }
    },
    methods:{
        changeTitle(title){
            this.title = title
        }
    }
});

app.mount('#app');
