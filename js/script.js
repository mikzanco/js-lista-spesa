// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).



const listaSpesa = ['carote', 'biscotti', 'nuetella', 'banane', 'pasta'];

// console.log(listaSpesa);
const li = document.createElement("li");

for (let i = 0; i < listaSpesa.length; i++) {
    let spesa = listaSpesa[i];
    console.log(spesa);
    li.innerHTML = spesa;
}


// let c = 0;
// let spesa = 0;

// while (c < listaSpesa.length) {
//     let spesa = listaSpesa[c];
//     spesa = 
//     c++;

// }




document.body.append(li);



