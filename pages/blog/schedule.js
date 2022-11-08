import { client } from "lib/api";

export async function getStaticProps() {
    const resPromise = client.get({
        endpoint: "blogs",
    });
    console.log(resPromise);
    // try {
    //     const res = await resPromise;
    //     console.log(res);
    // } catch (err) {
    //     console.log(err);
    // }
    return {
        props: {},
    };
}

