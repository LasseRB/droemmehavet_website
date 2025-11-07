import type {BlogPost} from "~/model/model";
import {formaterDato} from "~/utils/dato";

const baseurl = 'https://blog.droemmehavet.dk/wp-json/wp/v2/'
export const fetchAllBlogindlaeg = async () => {
    const posts = $fetch(`${baseurl}posts/?_fields=author,id,date,title,link,content,featured_media,excerpt`)
    const media = $fetch(`${baseurl}media`)
    const users = $fetch(`${baseurl}users`)

    const resp = await useAsyncData(async () => {
        return Promise.all([posts, media, users]).then(data => {
                return {posts: data[0], media: data[1], users: data[2]}
            }
        )
    })

    return { postResponse: resp.data.value!.posts, mediaResponse: resp.data.value!.media, userResponse: resp.data.value!.users}
}

export const postToBlogindlaeg = (postJson: JSON, mediaJSON: JSON, userJSON: JSON): BlogPost => {
    return {
        id: postJson?.id,
        overskrift: postJson?.title?.rendered,
        indhold: postJson?.content?.rendered,
        featuredMedia: mediaJSON ? mediaJSON?.media_details?.sizes?.medium_large?.source_url : null,
        mediaCaption: mediaJSON ? mediaJSON.caption?.rendered : null,
        link: formaterLink(postJson?.link),
        dato: formaterDato(postJson?.date),
        forfatter: userJSON.name,
        uddrag: postJson?.excerpt.rendered
    }
}

export const fetchAllSider = () => {
    return useFetch(`${baseurl}pages`);

}
const formaterLink = (link: string): string => {
    if (!link) return '#'
    return link?.replace('https://blog.droemmehavet.dk/', '');
}