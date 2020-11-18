import { IBlog } from "../interfaces/blog.interfaces";


class Blog implements IBlog {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public image: string,
        public date: Date,
        public author: string,
    ) { }
}