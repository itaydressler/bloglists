
import {Blog, Blogs} from "./Blog";
export class DataStore {
    public static getBlogs() : Blog[] {
        return [
            Blogs.StartuPiko,
            Blogs.Hashavua,
            Blogs.Hasolidit,
            Blogs.ChayotKis,
            Blogs.Mamony,
            Blogs.Startuping
        ];
    }
}