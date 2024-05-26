const App = Vue.createApp({
    data(){
        return{
            showBooks: true,
            url: 'google.com',
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss'},
                {title: 'the way of kings', author: 'brandon sanderson'},
                {title: 'the final empire', author: 'brandon sanderson'}
            ]
        }
    }
}).mount("#app")