import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  employees: Employee[];

  constructor(
    private employeeService: EmployeeService,
    public alertController: AlertController,
    public router: Router,
  ) {}
  
  ionViewWillEnter(){
    this.employees = this.employeeService.getAllEmployees();
  }

  async deletePromt(employeeId: string){
    const alert = await this.alertController.create({
      header: 'Delete User',
      mode: 'ios',
      message: 'Are you sure you wont able to revert this!',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive', 
          handler: () => {
            this.employeeService.deleteUser(employeeId);

            //refresh the list 
            this.employees = this.employeeService.getAllEmployees();
            console.log('hello world');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
        },
      ]
    });

    await alert.present();
  }
  
}
