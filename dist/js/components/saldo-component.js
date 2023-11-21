import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formataData, formataMoeda } from "../utils/formatters.js";
const elementoSaldo = document.querySelector('.saldo-valor .valor');
const elementoDataAcesso = document.querySelector('.block-saldo time');
function renderizarSaldo() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formataMoeda(Conta.getSaldo());
    }
}
renderizarSaldo();
if (elementoDataAcesso !== null) {
    const dataAcesso = Conta.getDataAcesso();
    elementoDataAcesso.textContent = formataData(dataAcesso, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
const SaldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default SaldoComponent;
