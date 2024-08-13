import {type Ref, ref} from 'vue'
import { useAsyncData } from 'nuxt/app'
import {fetchAllBlogindlaeg, getMedia} from "~/services/wordpress.service";
import type {BlogPost} from "~/model/model";
import {postToBlogindlaeg} from "~/utils/wordpressMapper";

const baseurl = 'https://blog.droemmehavet.dk/wp-json/wp/v2'

export async function useWordpress() {
    const posts = ref()
    const error = ref()

    try {
        // const response = await fetch(`${baseurl}/posts/?_fields=author,id,date,title,link,content,featured_media`)
        // const blogIndlaeg = await response.json();
        // const indlaeg: BlogIndlaeg[] = blogIndlaeg
        //     .map( (json: JSON) => {
        //         // todo: dette skal ske inde i servicemetoden.
        //         return postToBlogindlaeg(json,
        //             null,
        //             [{name: 'Esther Rützou'}])
        //
        //     })
        posts.value = await fetchAllBlogindlaeg()
    } catch (e) {
        error.value = e;
    }

    return { posts, error }
}