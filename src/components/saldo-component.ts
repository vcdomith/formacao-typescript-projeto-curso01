import { FormatoData } from "../types/FormatoData.js"
import { formataData, formataMoeda } from "../utils/formatters.js"

let saldo: number = 3000

const elementoSaldo = document.querySelector('.saldo-valor .valor') as HTMLElement 

const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement

export function getSaldo(): number {

    return saldo

}

export function atualizaSaldo(novoSaldo: number): void {

    saldo = novoSaldo

    if (elementoSaldo) {
    
        elementoSaldo.textContent = formataMoeda(saldo)
    
    }

}
atualizaSaldo(saldo)

if (elementoDataAcesso) {
    
    const dataAcesso = new Date()

    elementoDataAcesso.textContent = formataData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO)

}