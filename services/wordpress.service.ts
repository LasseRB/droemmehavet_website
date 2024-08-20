import type { BlogPost } from "~/model/model.ts";
import { postToBlogindlaeg } from "~/utils/wordpressMapper";
const baseurl = 'https://blog.droemmehavet.dk/wp-json/wp/v2/'
export async function fetchAllBlogindlaeg(): Promise<BlogPost[]> {
    const response =
        await fetch(`${baseurl}posts/?_fields=author,id,date,title,link,content,featured_media,excerpt`)
    const blogIndlaeg = await response.json();
    const mediaResponse = await getAllMedia();
    const userResponse = await getAllUsers();

    return blogIndlaeg
        .map((json: JSON) => {
            const media = mediaResponse.find(m => m.id == json.featured_media)
            const user = userResponse.find(u => u.id == json.author)
            return postToBlogindlaeg(json,
                media,
                user)
        })
}

export async function getAllMedia(): Promise<any | null> {
    try {
        const mediaResponse = await fetch(`${baseurl}media`)
        return await mediaResponse.json()
    } catch (error) {
        return null;
    }
}

export async function getAllUsers(): Promise<any | null> {
    try {
        const mediaResponse = await fetch(`${baseurl}users`)
        return await mediaResponse.json()
    } catch (error) {
        return null;
    }
}
