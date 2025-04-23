const emailRandomGenerate = 'https://flynn.boolean.careers/exercises/api/random/mail';

axios.get(emailRandomGenerate).then(response => {
    emailGenerate = response.data.response;
  console.log(emailGenerate);  
});


