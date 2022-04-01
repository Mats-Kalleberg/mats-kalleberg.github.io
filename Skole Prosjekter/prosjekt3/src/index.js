import { db } from "./config.js"
import { collection, addDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const colRef = collection(db, 'Politikere',)
var table = document.querySelector('tbody')
var check = document.getElementById('title').textContent


//Fetching the database
// getDocs(colRef)
//     .then((snapshot) => {
//         console.log(snapshot.docs)
//         let politikere = []
//         snapshot.docs.forEach((doc) => {
//             politikere.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(politikere)
//     })
//     .catch(err => {
//         console.log(err.message)
//     })
if (check == "Politiker liste"){
    // let TableDT = document.createElement('tr')
    // let TableDTF = document.createElement('th');
    // let TableDTE = document.createElement('th'); 
    // let TableDTFOR = document.createElement('th');
    // TableDTF.innerHTML = 'Fornavn';
    // TableDTE.innerHTML = 'Etternavn';
    // TableDTFOR.innerHTML = 'Forkortelse';
    // TableDT.appendChild(TableDTF);
    // TableDT.appendChild(TableDTE);
    // TableDT.appendChild(TableDTFOR);
    // table.appendChild(TableDT)



    // console.log(elem)
    // table.appendChild(table.innerHTML = '<tr> </tr>')
    onSnapshot(colRef, (snapshot) => {
        
        // let politikere = []
        snapshot.docs.forEach((doc) => {
            // politikere.push({ ...doc.data(), id: doc.id })
            let tableF = doc.get('Fornavn');
            let tableE = doc.get ('Etternavn');
            let tableFo = doc.get('Forkort');
            
            let row = document.createElement('tr');
            let rowF = document.createElement('td');
            let rowE = document.createElement('td');
            let rowFor = document.createElement('td');
        
            row.setAttribute('class', 'delete')

            rowF.innerHTML = tableF;
            rowE.innerHTML = tableE;
            rowFor.innerHTML = tableFo;

            row.appendChild(rowF);
            row.appendChild(rowE);
            row.appendChild(rowFor);
        
            table.appendChild(row);
            

        })
        
    });
} else {
const addPolitikerForm = document.querySelector('.add');

// Adding data to Firebase
addPolitikerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // window.alert(addPolitikerForm.Fornavn.value + " "+ addPolitikerForm.Etternavn.value + " " + "er lagt til");
    addDoc(colRef, {
        Fornavn: addPolitikerForm.Fornavn.value,
        Etternavn: addPolitikerForm.Etternavn.value,
        Forkort: addPolitikerForm.Forkort.value
    })
    .then(() => {
        addPolitikerForm.reset()
        
    })
    
})
}




