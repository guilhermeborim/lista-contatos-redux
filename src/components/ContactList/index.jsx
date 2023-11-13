/* eslint-disable react/prop-types */
import { TableContact } from './style'
const ContactList = ({dados, editar}) => {

  return (
		<TableContact>
			<thead>
				<tr>
					<th>Nome</th>
					<th>Email</th>
					<th>Telefone</th>
				</tr>
			</thead>
			<tbody>
			{dados.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.telefone}</td>
              <td>
                <button onClick={() => editar(index)}>Editar</button>
              </td>
            </tr>
          ))}
			</tbody>
		</TableContact>
  )
}

export default ContactList