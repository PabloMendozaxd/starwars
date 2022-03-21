export async function getPeople(params) {
    try {
        const response=await fetch('http://swapi.dev/api/people/');
        if (!response.ok) {
            throw new NetworkError;
        }
        const data=response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

class NetworkError extends Error{
    constructor(){
        super("Network Error");
    }
}