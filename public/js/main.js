let btnAdd = document.querySelector("button")
let liste = document.querySelector("ul")
let input=document.querySelector(".inputUser")

//Enter new task 
btnAdd.addEventListener('click', ()=>{
        newTask()  
})


let addTask
let userText
let showingThree

let arrayList =[] //array of all the task pushed

let buttonListe = document.querySelector("#threeBtnTask")
let btnDelete 

//Function for adding new task
function newTask() {
    // addTask = document.createElement("li")
    userTask = document.querySelector(".inputUser").value
    console.log(userTask); //input écrit dans le HTML, la "liste"

    arrayList.push(userTask) //push la valeur de l'input dans un tableau
    console.log(arrayList);

    //Create list of task : adding the input and button into the list converted in text with innerHTML
    liste.innerHTML += `<li> ${userTask} <button class="teamThree">Check OK</button><button class="teamThree">Change</button><button class="teamThree delete">Delete</button> </li> `

    console.log(liste);


    //Button "delete" inside the function (created meanwhile)
    let btnDelete = document.querySelectorAll(".delete")

    Array.from(btnDelete).forEach(element => { //converting the variable of all the button "delete" into an array acces all of them with a loop. When we click on one element thant the button will delete his parent so the entire list
        element.addEventListener('click', () =>{
            console.log(btnDelete);
            element.parentNode.remove()
        })
        console.log(btnDelete);
    });
    liste.style.display="flex"
    liste.style.gap="10px"
    liste.style.flexDirection="column"
    liste.style.width="400px"

    input.value="" //clear the value placeholder to the initial one
}

//Bouton ALL : Display all the li
let allLi 
let btnAll = document.querySelectorAll(".tri button")[0]

btnAll.addEventListener("click", ()=>{
    allLi.innerHTML=arrayList
})


//Bouton DONE : Delete of the task finished  => OK
let btnDone = document.querySelectorAll(".tri button")[2]
console.log(btnDone);

btnDone.addEventListener('click', ()=>{
    liste.remove()
})




















//Essai enter keypress
// userTask.addEventListener('keypress', (clickEnter)=>{
//     function clickEnter(event) {
//         if (event.key === "Enter") {
//             document.querySelector("button").click()
//         } 
//     }
// })

