import http from "@/shared/services/http-common";

export class AuthServiceApi{
    signUpUser(body){
        return http.post('/users',body);
    }
    logIn(body){
        return http.get(`/users?username=${body.username}&password=${body.password}`);
    }



}