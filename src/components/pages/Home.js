
import styles  from './Home.module.css'
import saving from '../../img/saving.png'
function Home() {

    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Stock Car</span></h1>
            <p>Venha e escolha o melhor carro para você viajar!!</p>
            <img src={saving} alt="Stock"/>
        </section>
    )
}

export default Home