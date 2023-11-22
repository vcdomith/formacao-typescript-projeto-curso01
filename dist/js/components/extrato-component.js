import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formataData, formataMoeda } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector('.extrato .registro-transacoes');
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = '';
    let htmlRegistroTransacoes = '';
    for (const grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = '';
        for (const transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formataMoeda(transacao.valor)}</strong>
                </div>
                <time class="data">${formataData(transacao.data, FormatoData.DIA_MES)}</time>
            </div>
            `;
            htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
            `;
        }
    }
    if (htmlRegistroTransacoes === '') {
        htmlRegistroTransacoes = `<div>Não há transações registradas.</div>`;
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
renderizarExtrato();
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
