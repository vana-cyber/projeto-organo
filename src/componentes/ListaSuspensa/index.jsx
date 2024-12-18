/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */


const ListaSuspensa = (props) => {
	return (
		<div className="listaSuspensa">
			<label>{props.label}</label>
			<select required={props.required}>
				{props.item.map(item => { //aqui o map serve para captar todos os elementos da lista, inclusive os que foram inseridos, um mapa completo
					return
						<option key={item}>
							{item}
						</option>
					})}
			</select>
		</div>
	)
}

export default ListaSuspensa