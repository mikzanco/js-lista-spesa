// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).



const listaSpesa = ['carote', 'biscotti', 'nuetella', 'banane', 'pasta'];

// console.log(listaSpesa);

// creatElement e append vanno inseiriti nel ciclo perchè questo crei un li per ogni elemento dell'array

// Stampo in pagina gli elemnti della lista indivisualemnet con il ciclo for

// for (let i = 0; i < listaSpesa.length; i++) {
//     const li = document.createElement("li");
//     let spesa = listaSpesa[i];
//     console.log(spesa);
//     li.innerHTML = spesa;
//     document.body.append(li);
// }

// -----------------------------------------------------------------------------------------------



// Stampo in pagina gli elemnti della lista indivisualemnet con il ciclo while


let c = 0;
let spesa = 0;

// il ciclo while mi permette di stampare in pagina tutti gli elementi del mio array
while (c < listaSpesa.length) {
    const li = document.createElement("li");
    let spesa = listaSpesa[c];
    console.log(spesa);
    li.innerHTML = spesa;
    
    c++;
    document.body.append(li);

}








