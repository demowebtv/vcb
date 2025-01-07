// import "../styles/global.css";
import Link from 'next/link'

function Home() {
  return (
    <ul>
      <li>
        <Link href="/Login">Login</Link>
      </li>
        <li>
            <Link href="/Home">Home</Link>
        </li>
    </ul>
  )
}

export default Home
