import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  employees: Employee;

  constructor(
    private employeeService: EmployeeService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(manggagawa => {
      // trap if the url segment does not have anything redirect the page 
      if (!manggagawa.has('employeeId')) {
        this.router.navigate(['/home']);
        return ;
      }

      // get the id 
      const employeeId = manggagawa.get('employeeId');

      // get the employee info 
      this.employees = this.employeeService.getEmployeeById(employeeId);
    });    
  }

}
