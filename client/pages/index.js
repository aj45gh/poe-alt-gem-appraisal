export async function getStaticProps() {
    const res = await fetch("http://localhost:8000/altGems");
    const gems = await res.json();

    return { props: { gems } };
}


export default function MyPage() {
    return (
        <div>Under Construction</div>
    )
}