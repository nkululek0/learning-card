import BlogImage from './assets/blog-image.png'
import styles from './Card.module.css'

export function Card () {
    return (
        <>
            <article className={ styles.wrapper }>
                <div className={ styles.imageWrapper }>
                    <img className={ styles.image } src={ BlogImage } alt="placeholder" />
                </div>
            </article>
        </>
    )
}