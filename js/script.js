//! FUNCTION
function listGenerate (listLength, callAPI) {
    const list = [];
    for (let i = 0; i < listLength; i++) {
        axios.get(callAPI).then(response => {
           emailGenerate = response.data.response;
           list.push(emailGenerate);
        });       
    };

    return list;
};

const emailRandomGenerate = 'https://flynn.boolean.careers/exercises/api/random/mail';

console.log(listGenerate(10, emailRandomGenerate));


