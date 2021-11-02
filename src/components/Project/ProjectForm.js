import Input from '../form/Input'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjecForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input type="text"
                text="Nome do carro"
                name="name"
                placeholder="Insira o modelo do carro" />


            <Input type="text"
                text="Nome da placa"
                name="name"
                placeholder="Insira a placa" />



            <Input type="number"
                text="Ano do carro"
                name="budgte"
                placeholder="Coloque o ano" />



            <Select name="category_id" text="Selecione um Estado">
                <option disabled selecte>Selecine o Estado</option>
            </Select>

            <SubmitButton text={btnText} />
            


        </form>
    )
}

export default ProjecForm