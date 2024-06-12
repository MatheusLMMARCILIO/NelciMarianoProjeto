import styles from './index.module.css';

function TitleSection({ children }) {
    return (
        <div className={styles.title}>
            <h1> {children} </h1>
            <hr />
        </div>
    )
}

export default TitleSection;