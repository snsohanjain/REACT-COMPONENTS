import apiClient from "./api-client";
import create from "./http-service";


export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number;
    website: string;
}
class UserService{

    getAllUsers(){
        const controller = new AbortController();
        return apiClient.get<User[]>("/users", { 
            signal: controller.signal,
        })

    }
}

export default create('/users');