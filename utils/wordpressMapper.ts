import { formaterDato } from "~/utils/dato";

export const postToBlogindlaeg = (postJson: JSON, mediaJSON: JSON | null, userJSON: JSON) => {
    return {
        id: postJson?.id,
        overskrift: postJson?.title?.rendered,
        indhold: postJson?.content?.rendered,
        link: formaterLink(postJson?.link),
        dato: formaterDato(postJson?.date),
        featuredMedia: mediaJSON ? mediaJSON?.media_details?.sizes?.medium_large?.source_url : null,
        forfatter: userJSON.name,
        uddrag: postJson?.excerpt.rendered
    }
}

const formaterLink = (link: string): string => {
    if (!link) return '#'
    return import.meta.dev ? link?.replace('https://blog.droemmehavet.dk', 'http://localhost:3000/blog') : link;
}