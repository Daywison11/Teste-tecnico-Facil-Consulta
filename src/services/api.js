import { http } from "./config";

export default {
    
    estado:() => {
        return http.get('estados')
    },
    cidade:(id) => {
        return http.get(`cidades?estadoId=${id}`)
    },
    profissionais:() => {
        return http.get(`profissionais`)
    },
    especialidades:() => {
        return http.get(`especialidades`)
    },
    
}