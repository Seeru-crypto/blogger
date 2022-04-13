import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href="/"><a>First Home</a></Link>
            <Link href="/second"><a>Second page</a></Link>
        </nav>
    )

}
export default Navbar;