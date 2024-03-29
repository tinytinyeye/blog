import Link from 'next/link';

export const Header = () => (
    <nav>
        <h1>Frankie&apos;s Blog</h1>
        <div>
            <Link href="/">
                <a>Blog</a>
            </Link>
            <Link href="/">
                <a>About</a>
            </Link>
            <Link href="/app/wordle-solver">
                <a>Wordle Solver</a>
            </Link>
        </div>
        <style jsx>{`
            nav {
                background: #444;
                width: auto;
                padding: 0 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 1rem;
            }
            nav a {
                margin-right: 1rem;
                text-decoration: none;
            }
            nav a:hover {
                text-decoration: underline;
            }
        `}</style>
    </nav>
);
