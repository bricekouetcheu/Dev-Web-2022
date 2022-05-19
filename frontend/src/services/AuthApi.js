/*import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getItem, addItem, removeItem } from './LocaleStorage';

const API_URL = 'http://localhost:5000/api/users/login';
const API_URL_COMMENTS= 'http://localhost:5000/api/books/single/115cdc/comments';

export function hasAuthenticated() {
        const token = localStorage.getItem('SessionToken');
        const result = token ? tokenIsValid(token) : false;
    
        if ( false  === result  ) {
            removeItem('SessionToken');
        }
        console.log(result);
        return result;
    }
    
    export async  function signIn(param1 , param2) {
        const response = await axios
                    .post(API_URL,
                            {
                                    email: param1,
                                    password: param2
                            });
            if (response.data.token) {
                   localStorage.setItem("SessionToken", JSON.stringify(response.data.token));
                    console.log(response.data.token);
                    return true;
            }
                    
    }
    
    
    export function logout() {
        localStorage.removeItem('SessionToken');
    }
    
    function tokenIsValid(token) {
        const {expiresIn} = jwtDecode(token);
    
        if (expiresIn * 1000 > new Date().getTime()) {
            console.log('token is valid');
            return true;
            
        }
    
        return false;
    }
    
// fonction qui recupere tous les commentaires
    export function getComment(param1){
         return axios.get('http://localhost:5000/api/books/'+param1+'/115cdc/comments')
        .then(data1 => {
                const resultat  = data1.data;
                console.log(resultat);
                return resultat
        })
    }

//service qui envoie un commentaire
    export function SendComment(param1 , param2 , id){
       return axios.post('http://localhost:5000/api/books/single/'+id+'/comment',
                {
                        description: param1,
                        authors: param2
                });

    }*/