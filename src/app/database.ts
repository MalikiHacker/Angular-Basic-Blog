export interface Post {  
    title: string,  
    content: string,  
    loveIts: number,  
    created_at: Date
} 
const lastUpdate = new Date("2017/04/13 11:30 AM");
export const posts = [
    {
        title : "Mon premier post",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, repellat quo ipsa modi recusandae nulla assumenda eius officiis!",
        loveIts : 3,
        created_at : lastUpdate
    },
    {
        title : "Mon deuxième post",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, repellat quo ipsa modi recusandae nulla assumenda eius officiis!",
        loveIts : 3,
        created_at : lastUpdate
    },
    {
        title : "Mon troisième post",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, repellat quo ipsa modi recusandae nulla assumenda eius officiis!",
        loveIts : 3,
        created_at : lastUpdate
    },
    {
        title : "Mon quatrième post",
        content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi cumque, repellat quo ipsa modi recusandae nulla assumenda eius officiis!",
        loveIts : 3,
        created_at : lastUpdate
    }
]