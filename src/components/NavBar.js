import Link from "next/link";

export default function NavBar(){
    return <>
        <nav>
            <li><Link href={{
                pathname : '/home',
                query: {
                    q:13,
                }
            }}>Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog/1">Blog 1</Link></li>
            <li><Link href="/blog/100">Blog 100</Link></li>
        </nav>
    </>
}