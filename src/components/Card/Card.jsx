import BlogImage from './assets/blog-image.png'
import Avatar from './assets/avatar.png'
import styles from './Card.module.css'

export function Card () {
    return (
        <>
            <article className={ styles.wrapper }>
                <div className={ styles.imageWrapper }>
                    <img className={ styles.image } src={ BlogImage } alt="blog image" />
                </div>
                <article className={ styles.contentWrapper }>
                    <section className={ styles.meta }>
                        <span className={ styles.topic }>Learning</span>
                        <span className={ styles.date }>Published 21 Dec 2023</span>
                    </section>
                    <section className={ styles.content}>
                        <h2 className={ styles.heading }>HTML & CSS foundations</h2>
                        <p>
                            These languages are the backbone of every website, defining structure, content and presentation.
                        </p>
                    </section>
                </article>
                <div className={ styles.publisher }>
                    <div className={ styles.avatar }>
                        <img className={ styles.avatarImage } src={ Avatar } alt="image of publisher" />
                    </div>
                    <p className={ styles.publisherName }>
                        Greg Hopper
                    </p>
                </div>
            </article>
        </>
    )
}