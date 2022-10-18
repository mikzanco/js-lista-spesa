// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).


// creo un array che contiene le cose che dovrò poi comprare
const listaSpesa = ['carote', 'biscotti', 'nuetella', 'banane', 'pasta'];

// console.log(listaSpesa);

// creatElement e append vanno inseiriti nel ciclo perchè questo crei un li per ogni elemento dell'array

// Stampo in pagina gli elemnti della lista indivisualemnet con il ciclo for

for (let i = 0; i < listaSpesa.length; i++) {
    // creo l'eleemnto li
    const li = document.createElement("li");
    // cre la lista "spesa" utilizzando il ciclo for e quindi l'elemento i
    let spesa = listaSpesa[i];
    console.log(spesa);
    // con innerHTML posiziono la mia lista spesa nell'elemnto li che ho creato
    li.innerHTML = spesa;
    // con append attacco gli li creati alla pagina web
    document.body.append(li);
}

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








