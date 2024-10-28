// const btn = document.getElementById('button');
// const title = document.getElementsByClassName('title');
// const list = document.getElementsByTagName('ul')
// // const listItem = document.getElementsByTagName('li')
// const listItems = document.querySelectorAll('.list-items')
// const link = document.getElementById('link')

// console.log(btn)
// console.log(title)
// console.log(list)
// console.log(listItems[0])
// console.log(link.setAttribute('href', 'https://jld-i.com'))
// link.textContent = 'JLD-I'

// btn.addEventListener('click', function () {
//     // alert('Hello')
// })

// Afficher un message selon la valeur saisie
// ● Énoncé : Crée un champ de saisie <input id="userInput"
// placeholder="Tapez quelque chose...">, un élément <p
// id="message"></p> pour afficher un message et un bouton. Lorsque
// l'utilisateur tape un mot précis "Bonjour" et clique sur le bouton, affiche
// le message "Bonne journée !" Dans ces cas-là, la couleur du message
// doit être vert. S'il tape "Au revoir", affiche "À la prochaine !". Pour toute
// autre saisie, affiche "Je ne comprends pas" en rouge.

const user = document.getElementById('userInput') ;
const paragraph = document.getElementById ('message');
const btn = document.getElementById('button');

btn.addEventListener ('click', function () {
    const text = user.value
    if ( text === "Bonjour") {
        user.style.background="green";
        paragraph.textContent = 'Bonne journée !'
    } else if ( text === "Au revoir") {
        user.style.background="green";
        paragraph.textContent = 'À la prochaine !'
    }
    else {
        user.style.background='red';
        paragraph.innerHTML = '<p>Je ne comprend pas ¯\_(ツ)_/¯ </p>'
    }
    
})


