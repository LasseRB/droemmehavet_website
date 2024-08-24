import type {BlogPost} from "~/model/model";
import {formaterDato} from "~/utils/dato";

export const fetchAllBlogindlaeg = async () => {
    const baseurl = 'https://blog.droemmehavet.dk/wp-json/wp/v2/'

    const postResponse = await useAsyncData('indlaeg', () => $fetch(`${baseurl}posts/?_fields=author,id,date,title,link,content,featured_media,excerpt`))
    const mediaResponse = await useAsyncData('media', () => $fetch(`${baseurl}media`))
    const userResponse = await useAsyncData('users', () => $fetch(`${baseurl}users`))

    return {
        postResponse: postResponse,
        mediaResponse: mediaResponse,
        userResponse: userResponse,
        user: userResponse
    }

}

export const postToBlogindlaeg = (postJson: JSON, mediaJSON: JSON, userJSON: JSON): BlogPost => {
    return {
        id: postJson?.id,
        overskrift: postJson?.title?.rendered,
        indhold: postJson?.content?.rendered,
        featuredMedia: mediaJSON ? mediaJSON?.media_details?.sizes?.medium_large?.source_url : null,
        link: formaterLink(postJson?.link),
        dato: formaterDato(postJson?.date),
        forfatter: userJSON.name,
        uddrag: postJson?.excerpt.rendered
    }
}

const formaterLink = (link: string): string => {
    if (!link) return '#'
    return link?.replace('https://blog.droemmehavet.dk/', '');
}