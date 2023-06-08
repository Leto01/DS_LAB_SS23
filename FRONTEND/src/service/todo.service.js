import { getApiService } from "./api.service";

const service = getApiService('/task');

export const todoService = {
    createTask(data){
        return service.post('', data);
    },
    getAll(){
        return service.get();
    },
    getTask(id){
        return service.get(`/${id}`);
    },
    updateTask(id, data){
        return service.patch(`/${id}`, data);
    },
    deleteTask(id){
        return service.delete(`/${id}`);
    }
}