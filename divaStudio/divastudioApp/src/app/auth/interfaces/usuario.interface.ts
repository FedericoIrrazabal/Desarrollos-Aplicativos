export interface Usuario {
    name:     string;
    email:    string;
    password: string;
    admin:    boolean;
    avatar?:   string;
    city?:     string;
    zipcode?:  string;
    id?:       string;
}



export interface UsuarioDTO {
    name:     string;
    email:    string;
    password?: string;
    admin:    boolean;
    avatar?:   string;
    city?:     string;
    zipcode?:  string;
    id?:       string;
}