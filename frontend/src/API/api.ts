import axios from 'axios';
import type { AxiosResponse } from 'axios';

const postUrl = "http://localhost:5000/api/post"; // Ganti dengan URL backend Anda
const userUrl = "http://localhost:5000/api/user"; // Ganti dengan URL backend Anda

export interface Post {
  title: string;
  content: string;
  author: string;
}

// api.ts

export interface User {
  username: string;
  password: string;
  email?: string; // Jika email opsional
  token?: string; // Token adalah opsional dan akan diatur oleh server
}



export default class API {
  // to get all the posts from the server
  static async getAllPost(): Promise<Post[]> {
    const res: AxiosResponse<Post[]> = await axios.get(postUrl);
    return res.data;
  }

  // to get a single post by id
  static async getPostById(id: string): Promise<Post> {
    const res: AxiosResponse<Post> = await axios.get(`${postUrl}/${id}`);
    return res.data;
  }

  // to insert a post into the database
  static async addPost(post: Post): Promise<Post> {
    const res: AxiosResponse<Post> = await axios.post(postUrl, post);
    return res.data;
  }

  // to update a post in the database
  static async updatePost(id: string, post: Post): Promise<Post> {
    const res: AxiosResponse<Post> = await axios.patch(`${postUrl}/${id}`, post);
    return res.data;
  }

  // to delete a post from the server
  static async deletePost(id: string): Promise<void> {
    const res: AxiosResponse<void> = await axios.delete(`${postUrl}/${id}`);
    return res.data;
  }

  // to register a new user
  static async registerUser(user: User): Promise<User> {
    const res: AxiosResponse<User> = await axios.post(`${userUrl}/register`, user);
    return res.data;
  }

  // to login a user
  static async loginUser(user: User): Promise<User> {
    const res: AxiosResponse<User> = await axios.post(`${userUrl}/login`, user);
    return res.data;
  }
}
