import axios from 'axios';

export default class PostService{
    static async getAll(limit =10,page=1){
        try{
            const response= await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit:limit,
                    _page:page
                },
            })
            return response;
        }catch (e){
            console.log(e)
        }

    }
    static async getById(id){
            const response= await axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
            return response;
    }
}