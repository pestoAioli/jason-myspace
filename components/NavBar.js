import styles from '../styles/Home.module.css'

export default function NavBar() {
  return (
    <nav>
      <div className={styles.top}>
        <div><a href="">MySpace.com</a> | <a href="">Home</a></div>
        <div>
          The Web
          <input type="radio" defaultChecked />
          MySpace
          <input type="radio" />
          <input type="text" />
          <input type="submit" value="Search" />
        </div>
        <div>Help | Sign Up</div>
      </div>
      <ul className={styles.links}>
        <li>Home</li>
        <li>Browse</li>
        <li>Search</li>
        <li>Messages</li>
        <li>Blog</li>
        <li>Bulletins</li>
        <li>Forum</li>
        <li>Groups</li>
        <li>Layouts</li>
        <li>Favorites</li>
        <li>Mail</li>
        <li>Film</li>
        <li>Music</li>
        <li>Forum</li>
        <li>About</li>
      </ul>
    </nav>

  )
}
