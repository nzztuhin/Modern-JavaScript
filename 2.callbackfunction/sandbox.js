//callback & foreach
const ul = document.querySelector('.people');
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(person =>{
//     console.log(person);
// });

// people.forEach((person, index )=>{
//     console.log(index,person);
// });

// let logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;