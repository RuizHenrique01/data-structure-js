import { ValuePair } from "../models/value-pair-model";
import { defaultToString } from "../utils/defaultToString";

export default class Dictionary{
    constructor(toStrFn = defaultToString){
        this.toStrFn = toStrFn;
        this.table = {};
    }

    hasKey(key){
        return this.table[this.toStrFn(key)] != null;
    }

    set(key, value){
        if(key != null && value != null){
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }
        return false;
    }

    remove(key){
        if(this.hasKey(key)){
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    get(key){
        const valuePair = this.table[this.toStrFn(key)];
        return valuePair == null ? undefined : valuePair.value;
    }

    keyValues(){
        return Object.values(this.table);
    }

    keyValuesLegacy(){
        const valuesPair = [];
        for(const k in this.table){
            if(this.hasKey(k)){
                valuesPair.push(this.table[k]);
            }
        }
        return valuesPair;
    }

    keys(){
        return this.keyValues().map(valuePair => valuePair.key);
    }

    values(){
        return this.keyValues().map(valuePair => valuePair.value);
    }

    forEach(callbakFn){
        const valuesPairs = this.keyValues();
        for(let i = 0; i < valuesPairs.length; i++){
            const result = callbakFn(valuesPairs[i].key, valuesPairs[i].value);
            if(result === false){
                break;
            }
        }
    }

    size(){
        return Object.keys(this.table).length;
    }

    isEmpty(){
        return this.size() === 0;
    }

    clear(){
        this.table = {};
    }

    toString(){
        if(this.isEmpty()){
            return '';
        }
        const valuesPairs = this.keyValues();
        let objString = `${valuesPairs[0].toString()}`;
        for(let i = 1; i < valuesPairs.length; i++){
            objString = `${objString},${valuesPairs[i].toString()}`;
        }
        return objString;
    }
}