let saldo = 3000

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement 

if (elementoSaldo) {
    
    elementoSaldo.textContent = saldo.toString()

}