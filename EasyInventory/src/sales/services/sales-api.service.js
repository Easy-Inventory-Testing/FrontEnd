import http from "@/shared/services/http-common";
export class SalesApiService{
    create(data){
        return http.post('/list-sales',data);
    }
    getSalesById(id){
        return http.get(`/list-sales/${id}`);
    }

}