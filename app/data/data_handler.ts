import { client } from "~/config/contentful.config";

export const getabout = async() => { 

        const entries = await client.getEntry("lVZQnrVFmAgOqdJPdqF9J")
        .then((data)=>data.fields).catch(err=>err);
        return entries;
      
 };