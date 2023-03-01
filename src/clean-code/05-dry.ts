type Size  = ''|'S'|'M'|'XL';
class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}
    isProductReady(): boolean{
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`);
                break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is zero`);
                break;
                default:
                    throw Error (`${typeof this[key]} is no suported`)
            }
        }
        return true;

    }
    toString(){
        if(!this.isProductReady) return;
    }
}

(() =>{
    const bluePants = new Product('Blue large pants ' , 3 , 'M');
    console.log(bluePants.toString());

})();