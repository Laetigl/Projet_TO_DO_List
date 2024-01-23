let btnAdd = document.querySelector("button")
let liste = document.querySelector("ul")
let input=document.querySelector(".inputUser")

//Enter new task 
btnAdd.addEventListener('click', ()=>{
        newTask()  
})

//Button enter
input.addEventListener('keypress',function(event) {
    if (event.key === "Enter") {
        event.preventDefault()
        newTask()  
    } 
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
    liste.innerHTML += `<li> ${userTask} <button class="teamThree valid">Check OK</button><button class="teamThree change">Change</button><button class="teamThree delete">Delete</button> </li> `

    console.log(liste);


    //Button "delete" inside the function (created meanwhile)
    let btnDelete = document.querySelectorAll(".delete")

    Array.from(btnDelete).forEach(element => { //converting the variable of all the button "delete" into an array acces all of them with a loop. When we click on one element thant the button will delete his parent so the entire list
        element.addEventListener('click', () =>{
            console.log(btnDelete);
            element.parentNode.remove()
        })
    });

    //Button "valid"
    let btnValidate = document.querySelectorAll(".valid")

    Array.from(btnValidate).forEach(element => {
        element.addEventListener('click', ()=>{
            element.setAttribute("class","okValidate")
            element.style.background="rgb(148, 216, 148)"
            element.style.borderRadius="20px"
            element.style.color="white"
            element.style.width="100px"
        })
    })


    let btnValider = document.querySelectorAll(".tri button")[2]

    btnValider.addEventListener('click', ()=>{
        
    })





     //Button "change"
     let btnChange = document.querySelectorAll(".change")

     Array.from(btnChange).forEach(element => {
         element.addEventListener('click', ()=>{
            liste.forEach(element => {
                element.innerHTML = input.textContent
            });
         })
     })

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
    allLi.innerHTML = arrayList
})


//Bouton DONE : Display of the task validated 
// let btnDoneValid= document.querySelectorAll(".tri button")[2]
// // console.log(btnDone);
// let taskAllDone = document.querySelectorAll(".okValidate")
// console.log(taskAllDone);
// let cloneTask 

// btnDoneValid.addEventListener('click', ()=>{
//     cloneTask = taskAllDone.cloneNode(true)
//     cloneTask.innerHTML
//     console.log(cloneTask);
// })



//Bouton DONE : Delete of the task finished  => OK
let btnDone = document.querySelectorAll(".tri button")[2]
console.log(btnDone);

btnDone.addEventListener('click', ()=>{
    arrayList.push(liste.innerHTML)
    console.log(liste.children);

    // arrayList.innerText = btnDone.innerHTML
    // console.log(allTaskDone);
    // liste.remove()
})

















//Essai enter keypress
// userTask.addEventListener('keypress', (clickEnter)=>{
//     function clickEnter(event) {
//         if (event.key === "Enter") {
//             document.querySelector("button").click()
//         } 
//     }
// })

