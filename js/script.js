let newEmail;
axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (resp){
        console.log("fatto!");
        newEmail = resp.data;
        console.log(newEmail.response);
    });