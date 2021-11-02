import ProjecForm from '../Project/ProjectForm'
import styles from './Reserva.module.css'


function Reserva() {
    return (
        <div className={styles.reserva_container}>
            <h1>Fazer reservas</h1>
            <p>Reserve um carro de acordo com os dias disponiveis</p>
            <ProjecForm btnText="Confirmar Reserva" />
            

            

        </div>

    )
}

export default Reserva