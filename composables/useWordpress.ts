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
        posts.value = await fetchAllBlogindlaeg()
    } catch (e) {
        error.value = e;
    }

    return { posts, error }
}