import { ILangage } from '../../types/LangageInterface'
import en from './en.json'
import sv from './sv.json'

interface ILangObj {
    en: ILangage,
    sv: ILangage
}

const langObj:ILangObj = {
    en,
    sv
}


export default langObj