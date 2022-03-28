import styles from './cadastro.module.css'
export default function Cadastro() {
  return (
    
      <form action="" method="post" className={styles.flexbox}>
<div className={styles.titulo}>Cadastro</div>
      <input type="text" id="first" name="first" required
       placeholder="Digite seu nome" aria-label='Nome'
       maxLength={50} />
     
      <input type="text" id="last" name="last" required 
       placeholder="Digite o seu sobrenome" aria-label='Sobrenome'
       maxLength={50}/>
      
       <input type="text" id="first" name="first" required
       placeholder="Digite seu email" aria-label='E-mail'
       maxLength={50} />

      <input type="password" id="last" name="last" required
       placeholder="Digite a sua senha" aria-label='Senha'
       maxLength={10} />
      
      <button type="submit">Submit</button>
    </form>
    
  )
}
