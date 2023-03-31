import { Component, OnInit } from '@angular/core';
import { ProductdelService } from "src/app/productdel.service"
import { DatabaseService } from "src/app/database.service";
import { Product } from "src/app/products";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "app-product-admin",
  templateUrl: "./product-admin.component.html",
  styleUrls: ["./product-admin.component.css"],
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  providers: [],
})
export class ProductAdminComponent {
  
  products: Product [] = [];

  status: string = "";

  constructor(private database: DatabaseService,
              private productdelService: ProductdelService,
              private confirmationService: ConfirmationService,
              private formBuilder: FormBuilder,
              private router: Router) {

      
    
    this.database.getItems().subscribe(res => {
      console.log(res);
      this.products = res;
    });

  


  }

  

  //Metodo Delete

deleteProduct(id: number): void {
  if (confirm('¿Estás seguro de eliminar este producto?')){
    this.productdelService.deleteProduct(id).subscribe(()=>{
  })
 }
 location.reload();
}
  
  /*delete(id: string) {
        this.database.deleteProduct(id).subscribe({
          next: (data) => {
            this.status = "Delete successful";
            this.router.navigate(["/"]);
          },
          error: (error) => {
            console.error("There was an error!", error);
          },
        });
  }

  /*Agregado de producto*/
  addProductForm = this.formBuilder.group({
    id: '',
    name: "",
    description: "",
    price: 0,
    images: [""]
  });


  onSubmit(): void {
    let p =  {
      id: Number(this.addProductForm.value.id),
      name: this.addProductForm.value.name,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      images: this.addProductForm.value.images
    };




    this.database.addProduct(p).subscribe({
 
      next: (data) => {
        this.status = "Add successful";
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });    
    console.warn('Your order has been submitted', this.addProductForm.value);
    this.addProductForm.reset();
    location.reload();
  }

  display:boolean=false;
showDialog(){
  this.display=true;
}

}

