import {ref} from 'vue'
import {fetchAllBlogindlaeg, postToBlogindlaeg} from "~/services/wordpress.service";

export async function useWordpress() {
    const posts = ref()
    if (posts.value && posts.value?.length > 0) {
        return { posts }
    }
    const { postResponse, mediaResponse, userResponse} = await fetchAllBlogindlaeg()

    posts.value = postResponse.data?.value?.map((post: JSON) => {
            const media = mediaResponse?.data?.value?.find(m => m.id == post.featured_media)
            const user = userResponse?.data?.value?.find(u => u.id == post.author)
            return postToBlogindlaeg(
                post,
                media,
                user)
        })

    return { posts }
}