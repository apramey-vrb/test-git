//classes
class car{
    constructor(name, year){
        this.name = name;
        this.year= year;
    }

    age(){
        let presentDate = new Date();
        return presentDate.getFullYear() - this.year;
    }
}

let aCar = new car('sx4', 2010);
console.log(aCar.age());

//arrays 
class array{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(){
        return this.data;
    }
    length(){
        return this.length;
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        delete this.data[this.length - 1];
        this.length--;
    }
    delete(index){
        this.shiftItems(index);
    }
    shiftItems(index){
        for(let i=index; i< this.length-1; i++){
            this.data[i] = this.data[i+1];            
        }
        delete this.data[this.length-1];
        this.length--;
    }
    insert(index, item){
        this.length++;
        for(let i=index ; i<this.length-1; i++){
            this.data[i+1] = this.data[i];
        }
        let actualIndex = index > this.length-1 ? this.length-1 : index;        
        this.data[actualIndex] = item;
    }
}

let aArray = new array();
aArray.push(1);
aArray.push(2);
aArray.push('hi');
aArray.pop();
aArray.push('hello');
aArray.delete(0);
aArray.insert(2, 'Alien')
console.log(aArray.data);