import styles from './cadastro.module.css'
export default function Login() {
  return (
    
      <form action="" method="post" className={styles.flexbox}>
<div className={styles.titulo}>Login</div>
      <input type="text" id="first" name="first" required
       placeholder="Digite seu e-mail" aria-label='E-mail'
       maxLength={50} />
       
      <input type="password" id="last" name="last" required
       placeholder="Digite a sua senha" aria-label='Senha'
       maxLength={10} />
      
      <button type="submit">Submit</button>
    </form>
    
  )
}
