// actions.js

//adicionar contato
export const adicionarContato = (contato) => ({
  type: 'ADICIONAR_CONTATO',
  payload: contato,
});


//limpar tabela
export const limparTabela = () => ({
  type: 'LIMPAR_TABELA',
});


//editar contato
export const editarContato = (indice) => ({
  type: 'EDITAR_CONTATO',
  payload: indice,
});

// actions.js
export const atualizarFormulario = (campo, valor) => ({
  type: 'ATUALIZAR_FORMULARIO',
  payload: { campo, valor },
});

export const editarTabela = (indice) => ({
  type: 'EDITAR_TABELA',
  payload: indice,
})