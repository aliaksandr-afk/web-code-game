import React from "react"
import styles from "./CodeBar.module.css"

const Codebar = () => {
    return (
        <div className={styles.codebar}>
            <nav className={styles.tab}>
                <button
                    className={styles.item}
                >
                    HTML
                </button>
                <button
                    className={styles.item}
                >
                    CSS
                </button>
                <button
                    className={styles.item}
                >
                    JS
                </button>
            </nav>

        </div>
    )
}

export default Codebar;