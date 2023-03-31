import { Component, OnInit } from '@angular/core';
import { UserdelService } from "src/app/userdel.service"
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { ConfirmationService } from "primeng/api";
import { User } from '@auth0/auth0-angular';
import { UserdatabaseService } from 'src/app/userdatabase.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css'],
  providers: [],
})
export class UserAdminComponent {
  
  users: User [] = [];

  status: string = "";

  constructor(private database: UserdatabaseService,
              private userdelService: UserdelService,
              private confirmationService: ConfirmationService,
              private formBuilder: FormBuilder,
              private router: Router) {

      
    
    this.database.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });

  


  }

  

  //Metodo Delete

deleteUser(correo: string): void {
  if (confirm('¿Estás seguro de eliminar este usuario?')){
    this.userdelService.deleteUser(correo).subscribe(()=>{
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
  addUserForm = this.formBuilder.group({
    correo: "",
    username: "",
    password: ""
  });


  onSubmit(): void {
    let p =  {
      correo: this.addUserForm.value.correo,
      username: this.addUserForm.value.username,
      password: this.addUserForm.value.password,
    };




    this.database.addUser(p).subscribe({
 
      next: (data) => {
        this.status = "Add successful";
        this.router.navigate(["/"]);
      },
      error: (error) => {
        console.error("There was an error!", error);
      },
    });    
    console.warn('Your order has been submitted', this.addUserForm.value);
    this.addUserForm.reset();
    location.reload();
  }

  display:boolean=false;
showDialog(){
  this.display=true;
}

}