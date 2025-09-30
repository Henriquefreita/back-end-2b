import colecaoUf from '../dados/dados.js';

export function buscarUfs() {
    return colecaoUf;
}

export function buscarUfsPorId(id) {
    return colecaoUf.find(uf => uf.id === id);
}

export function buscarUfsPorNome(nome) {
    return colecaoUf.filter(uf =>
        uf.nome.toLowerCase().includes(nome.toLowerCase())
    );
}

export function buscarUfsPorSigla(sigla) {
    return colecaoUf.find(u => u.sigla.toUpperCase() === sigla.toLowerCase());
}

export function buscarUfsPorInicial(letra) {
    return colecaoUf.filter(u => u.nome.toUpperCase().startsWith(letra.toLowerCase()));
}
