import Meta from "components/meta";
import Hero from "components/hero";
import Container from "components/container";
export default function Home() {
    return (
        <Container>
            <Meta />
            <Hero title='Ryota' subtitle='【Next.js】を使用し静的サイトを作成しています。' imageOn />
        </Container>
    );
}

