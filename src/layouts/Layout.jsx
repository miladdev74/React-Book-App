import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p><a href="#">Milad library </a>| React full course</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Develop by milad with ♥</p>
      </footer>
    </>

  )
}

export default Layout