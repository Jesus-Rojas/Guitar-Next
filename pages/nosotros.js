import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/pages/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosostros</h2>
        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' />
          <div>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo sint voluptatum, quisquam, repudiandae velit reiciendis tempore voluptate quas voluptas rem provident adipisci blanditiis, dignissimos ipsa dolorem. Odit, eius fuga!
            </p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illo sint voluptatum, quisquam, repudiandae velit reiciendis tempore voluptate quas voluptas rem provident adipisci blanditiis, dignissimos ipsa dolorem. Odit, eius fuga!
            </p>
          </div>

        </div>
      </main>
    </Layout>
  )
}

export default Nosotros