import { getPostBySlug } from "lib/api";
import Container from "components/container";
import PostHeader from "components/post-header";
import Image from "next/image";

import postBody from "components/post.body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column";
import ConvertBody from "components/convert-body";

export default function Schedule({ title, publish, content, eyecatch, categories }) {
    return (
        <Container>
            <article>
                <PostHeader title={title} subtitle='Blog Artcle' publish={publish} />

                <figure>
                    <Image src={eyecatch.url} alt='' layout='responsive' width={eyecatch.width} height={eyecatch.height} sizes='(min-width: 1152px) 1152px, 100vw' priority />
                </figure>

                <TwoColumn>
                    <TwoColumnMain>
                        <postBody>
                            <ConvertBody contentHTML={content} />
                        </postBody>
                    </TwoColumnMain>
                    <TwoColumnSidebar></TwoColumnSidebar>
                </TwoColumn>
            </article>
        </Container>
    );
}

export async function getStaticProps() {
    const slug = "schedule";

    const post = await getPostBySlug(slug);

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: post.eyecatch,
            categories: post.categories,
        },
    };
}

