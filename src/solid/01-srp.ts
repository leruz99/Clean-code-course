(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{

      
        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product:Product ){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{
        public masterEmail: string = 'luiseduardoruzmenco@gmail.com';

        sendEmail(emailList: string[], template: 'to-clients'|'to-admins' ){
            console.log('Enviando correo a los clientes', template);

        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {       

        constructor(private productService: ProductService, private mailer: Mailer){};
    
        loadProduct( id: number ) {
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['eduardo@gmail.com'], 'to-clients')
            
        }
    
        
    
    }
  

    class CartBloc{
        private itemInCart: Object[] = [];

        addToCart(prodcucId: number){
            console.log('agragando al carrito', prodcucId);
        }
    }
    

    const productService = new ProductService();
    const mailer= new  Mailer();
    


    const productBloc = new ProductBloc(productService, mailer);
    const CarBlog  = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    CarBlog.addToCart(10);








})();