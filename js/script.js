const { createApp } = Vue;

createApp({
    data() {
        return {
            emailsList: [],
        };
    },
    methods: {
        getEmails() {
            for(let i = 0; i < 10; i++){
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) =>{
                        this.emailsList.push(resp.data.response);
                    });
            }
        },
    },
    created(){
        this.getEmails()
    }
}).mount("#app");


















// let newEmail;
// axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then(function (resp){
//         console.log("fatto!");
//         newEmail = resp.data;
//         console.log(newEmail.response);
//     });