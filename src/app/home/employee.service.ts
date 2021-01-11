import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: '1',
      name: 'Joel John Centeno', 
      job: 'Mobile Developer', 
      imageUrl: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.0-9/71023978_108263437237847_4613780012552683520_o.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_eui2=AeGU6zfn-1YXjWkVnMulHScSMofWKSQr5k8yh9YpJCvmT-17fTMqbXa1EZ-wBYv5MBjJBCTBrGQu-ZK360RelbJ-&_nc_ohc=ai0u93w2faIAX9aqo9L&_nc_ht=scontent.fmnl25-1.fna&oh=7be75c8aec890dd5a7e9a57954a7f2b4&oe=60212292'
    },
    {
      id: '2',
      name: 'Jhay Ramirez', 
      job: 'Mobile Developer', 
      imageUrl: 'https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.0-9/43657164_2265421660148718_3513039375589965824_o.jpg?_nc_cat=106&ccb=2&_nc_sid=174925&_nc_eui2=AeEpq_u6uzGMEQyeo8mOhWaPO27tsWUddt87bu2xZR123_GZn0dxOENseVnBQ6VVO2Q46hSIBJXiIp-mL18dfOQM&_nc_ohc=mAmI0F8TxB4AX9j1_X0&_nc_ht=scontent.fmnl25-2.fna&oh=44549a762a6f44affe79eb69d9c023f8&oe=60200EC0'
    },
    {
      id: '3',
      name: 'Joshua Corpuz', 
      job: 'Mobile Developer', 
      imageUrl: 'https://scontent.fmnl25-1.fna.fbcdn.net/v/t1.0-9/13697249_543010942573806_8520142654422328054_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeE0KWO7-HgMQ65ZnmpWXDO1OJqI6dVqYEI4mojp1WpgQitqAqnIWCamIhregZAdqVOCL7pqvEVv_pb6OJkNcGok&_nc_ohc=vVLvA_Yf-20AX_VQ984&_nc_ht=scontent.fmnl25-1.fna&oh=5801798c19ea60d1b9d4f9b0e247440a&oe=601FDDB4'
    }
  ];

  constructor() { }

  public getAllEmployees(){
    return [...this.employees];
  }

  public getEmployeeById(employeeId: string){
    return {
      ...this.employees.find(manggagawa => {
      return manggagawa.id === employeeId;
    })
  }
  }

  public deleteUser(employeeId: string){
    this.employees = this.employees.filter(manggagawa => {
      return manggagawa.id !== employeeId;
    });
  }

}
