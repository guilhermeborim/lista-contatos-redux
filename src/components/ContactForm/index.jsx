import { useDispatch, useSelector } from "react-redux";
import { adicionarContato, editarContato, editarTabela, limparTabela } from '../../redux/actions';
import ContactList from "../ContactList";
import { ContactFormContainer, FormContainer } from "./style";
const ContactForm = () => {
  const dispatch = useDispatch();
  const formulario = useSelector((state) => state.formulario)
  const tabelaDados = useSelector((state) => state.tabelaDados)
  const indiceEditando = useSelector((state) => state.indiceEditando)
  const handleChange = (campo, valor) => {
    dispatch({
      type: 'ATUALIZAR_FORMULARIO',
      payload: { campo, valor }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (
      formulario.nome.trim() === '' &&
      formulario.email.trim() === '' &&
      formulario.telefone.trim() === ''
    ) {
      return;
    }
  
    if (indiceEditando !== null) {
      dispatch(editarContato(indiceEditando));
    } else {
      dispatch(adicionarContato(formulario));
    }
  
    dispatch({
      type: 'LIMPAR_FORMULARIO',
    });
  };
  
  const handleLimparTabela = () => {
    dispatch(limparTabela())
  };

  const handleEditar = (indice) => {
    dispatch(editarContato(indice))
  };
  const HandleEditarTabela = (indice) => {
    dispatch(editarTabela(indice))
  }
  return (
    <ContactFormContainer>
        <h1>Lista De Contatos</h1>
        <FormContainer onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" value={formulario.nome}
            onChange={(e) => handleChange('nome', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formulario.email}
            onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <input type="text" id="phone" name="phone" value={formulario.telefone}
            onChange={(e) => handleChange('telefone', e.target.value)}
            />
          </div>
          <div className="divButton">
            {indiceEditando !== null ? (
              <button onClick={HandleEditarTabela}>Editar</button>
            ) : <button>Enviar</button>}
            <button onClick={handleLimparTabela}>Limpar Tabela</button>
          </div>
        </FormContainer>
        <ContactList dados={tabelaDados} editar={handleEditar}/>
    </ContactFormContainer>
  )
}

export default ContactForm