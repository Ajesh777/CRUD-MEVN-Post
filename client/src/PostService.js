// 57: Import axios for API JWT fetch
import axios from 'axios';

// 58: Set URL to Server
const url = '/api/posts/';

// 59: Create PostService Class
class PostService {

    // Create/Add/post Posts
    /// 60: Create Route to Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }


    // Read/Get Posts
    // 61: Create Route to Get 
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                resolve(
                    res.data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        });
    }


    // Update/put Posts
    // 62: Create Route to Update

    static updatePosts(id, text) {
        return axios.put(`${url}${id}`, {
            text
        });
    }


    // Delete Posts
    // 63: Create Route to Delete
    static deletePosts(id) {
        return axios.delete(`${url}${id}`);
    }

}

// 64: export PostService
export default PostService;

// 65: OVER - Now Go to CrSteps