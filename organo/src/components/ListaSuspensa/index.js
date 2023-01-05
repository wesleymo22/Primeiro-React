import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {props.itens.map(itens => <option key={itens}>{itens}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa