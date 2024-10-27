import fetch from 'isomorphic-unfetch';

type Config = {
    apiKey: string;
    baseUrl? : string;
}

export abstract class Base {
    private apikey: string;
    private baseUrl: string;
    constructor(config: Config){
        this.apikey = config.apiKey;
        this.baseUrl = config.baseUrl || "https://jsonplaceholder.typicode.com"; 
    }
	protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T>{      //T could be post users is generic which could be post user collections we have.
        const url = `${this.baseUrl}${endpoint}`;
        const headers ={
            "Content-Type": "appliation/json",
            "api-key": this.apikey
        }
        const config = {
            ...options,
            headers
        }
        console.log("url :", url);
        console.log("config :", config);
        return fetch(url,config).then(response =>{
            console.log("Response : ", response);
            if(response.ok){
                // console.log(response.json());
                return response.json();
            }
            else{
                throw new Error(response.statusText);
            }
            
        })
    }                                                       
    
}