import { Base } from "../base";
import { NewPost, Post } from "./types";

const resource = 'products'
export class Posts extends Base {
    getPostById(id: number): Promise<Post> {
        return this.invoke(`/${resource}/${id}`);
    }
    getPosts():Promise<Post[]>{
        return this.invoke(`/${resource}`)
    }

    createPost(newPost : NewPost):Promise<NewPost>{
        return this.invoke(`/${resource}`,{
            method: "POST",
            body:JSON.stringify(newPost),
        });
    }
}