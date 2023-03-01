import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src='https://github.com/dereksilva97.png'
                    />
                    <div className={styles.authorInfo}>
                        <strong>Derek Silva</strong>
                        <span>Developer</span>
                    </div>
                </div>

                <time title='31 de Janeiro de 2023' dateTime='2023-01-31 20:08:00'>Publicado há 1h</time>

            </header>

            <div className={styles.content}>

                    <p>Fala galeraa 👋</p>
                    <p>  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                    <p><a href='#'>jane.design/doctorcare</a></p>
                    <p> 
                        <a href='#'>#novoprojeto</a>{' '}
                        <a href='#'>#nlw</a>{' '}
                        <a href='#'>#rocketseat</a>
                    </p>
                    
            </div>

            <form className={styles.commentForm}>             
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
                
        </article>
    );
}