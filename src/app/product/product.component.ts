import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { MessageService } from "primeng/api";
import { PrimeNGConfig } from "primeng/api";
import { CartProduct } from '../products';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [MessageService]
})
export class ProductComponent{
  @Input() producto!: Product;

  compartir() {
    window.alert('The product has been shared!');
  }

  onNotify(){
    window.alert('seras notificado cuando el producto este en venta')
  }

  display: boolean = false;
	showDialog() {
    console.log ("desplegado");
        this.display = true;
      }

    productos = this.cartService.getItems();

  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig

      ) { }

      ngOnInit() {
        this.primengConfig.ripple = true;
      }
    

      addToCart(product: Product){ //Añade el producto actual al carrito
        this.messageService.add({
        severity:"success",
        detail:"Se ha agregado al carrito"  });
    
        let producto = this.productos.find((p) => p.id === product.id);
        
        if (!producto) {
          console.log("Agregando producto " + JSON.stringify(product));
          let p = {
            id: product.id,
            name: product.name,
            description: product.description,
            stock:product.stock,
            images:product.images,
            price: product.price,
            quantity:1      };
          this.cartService.addToCart(p);
        }else{
          let total=producto.quantity++;
          let index=this.productos.findIndex((p)=>p.id==product.id);
          this.productos[index]=producto;
        }
    //No se encontro el producto
      }
    
}

  

