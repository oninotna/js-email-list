//! FUNCTION
function listGenerate (listLength, callAPI, func) {

    const promisesArr = [];

    for (let i = 0; i < listLength; i++) {
        const promise = axios.get(callAPI);
        promisesArr.push(promise);       
    };

    // Promise.all([...Array(10)].map(_ => axios.get(callAPI))).then(results => {
    Promise.all(promisesArr).then(results => {
        // const elements = [];
        // for (let i = 0; i < results.length; i++) {
        //     elements.push(results[i].data.response);
        // };

        // func(elements);

        func(results.map(result => result.data.response));
    });
};


function createList (list, domElement) {
    for (element of list) {
        domElement.innerHTML += 
        `<li class="list-group-item">${element}</li>`
    };
};

//TODO###################################################################################################

//! CALL API
const emailRandomGenerate = 'https://flynn.boolean.careers/exercises/api/random/mail';

//! DOM ELEMENT
const emailList = document.getElementById("email-list");
const refreshButton = document.getElementById("refresh-button");

// for (let i = 0; i < 10; i++) {
//    axios.get(emailRandomGenerate).then(response => {
//      emailList.innerHTML += `<li class="list-group-item">${response.data.response}</li>`
//     });
// };

// refreshButton.addEventListener("click", () => {
//     emailList.innerHTML = '';

//     for (let i = 0; i < 10; i++) {
//         axios.get(emailRandomGenerate).then(response => {
//           emailList.innerHTML += `<li class="list-group-item">${response.data.response}</li>`
//          });
//      };
// });

//TODO###################################################################################################


listGenerate(10, emailRandomGenerate, (results) => {
    createList(results, emailList)
});

refreshButton.addEventListener("click", () => {
    emailList.innerHTML = '';

    listGenerate(10, emailRandomGenerate, (results) => {
        createList(results, emailList)
    });
});


// Promise.all([
//     axios.get(emailRandomGenerate),
//     axios.get(emailRandomGenerate),
//     axios.get(emailRandomGenerate),
// ]).then((responses) => {
//     const elements = [];
//     for (let i = 0; i < responses.length; i++) {
//         elements.push(responses[i].data.response);
//     }
//     console.log(elements);
// });