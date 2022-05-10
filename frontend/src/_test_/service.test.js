/*import { addItem } from "../services/LocaleStorage";*/
/*import {getItem} from "../services/LocaleStorage";*/
/*import {getItem} from '../services/LocaleStorage';*/
import {somme} from '../services/LocaleStorage';


describe('to store something in localeStorage', ()=>{
    test('should store someting in local storage' , ()=>{
        expect(somme(2).toBe(4))
    });
});