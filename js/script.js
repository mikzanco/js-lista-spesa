// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).



const listaSpesa = ['carote', 'biscotti', 'nuetella', 'banane', 'pasta',];

console.log(listaSpesa);
const li = document.createElement("li");





li.innerHTML = listaSpesa;

document.body.append(li);