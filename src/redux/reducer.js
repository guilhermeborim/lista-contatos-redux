// reducers.js
const initialState = {
  formulario: {
    nome: '',
    email: '',
    telefone: '',
  },
  tabelaDados: [],
  indiceEditando: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADICIONAR_CONTATO':
      if (
        state.formulario.nome.trim() === '' &&
        state.formulario.email.trim() === '' &&
        state.formulario.telefone.trim() === ''
      ) {
        return state;
      }
      return {
        ...state,
        tabelaDados: [...state.tabelaDados, state.formulario],
        formulario: { nome: '', email: '', telefone: '' },
        indiceEditando: null,
      };

    case 'LIMPAR_TABELA':
      return {
        ...state,
        tabelaDados: [],
      };
      case 'EDITAR_TABELA':
      return {
        ...state,
        tabelaDados: [],
        indiceEditando: null,
      };

    case 'EDITAR_CONTATO':
      return {
        ...state,
        formulario: { ...state.tabelaDados[action.payload] },
        indiceEditando: action.payload,
      };
      case 'ATUALIZAR_FORMULARIO':
      return {
        ...state,
        formulario: {
          ...state.formulario,
          [action.payload.campo]: action.payload.valor,
        },
      };

    default:
      return state;
  }
};

export default reducer;
