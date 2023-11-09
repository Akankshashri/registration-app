import { Component ,OnInit} from '@angular/core';

import {FormGroup,FormControl,Validators,FormArray ,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  userDetailsForm:any;

  displayedColumns:string[] =  ['UserName', 'Email','Address','actions'];
  userArray =  [
    {position: 1, UserName: 'atuny0',Email : "atuny0@sohu.com",Address: "1745 T Street Southeast",},
    {position: 2, UserName: 'atuny1',Email : "atuny1@sohu.com" ,Address: "1746 T Street Southeast"},
    {position: 3, UserName: 'atuny2',Email : "atuny2@sohu.com" ,Address: "1747 T Street Southeast"},
    {position: 4, UserName: 'atuny3',Email : "atuny3@sohu.com" ,Address: "1748 T Street Southeast" },
    {position: 5, UserName: 'atuny4',Email : "atuny4@sohu.com" ,Address: "1749 T Street Southeast"},
    
  ];
  ngOnInit(){
    this.userDetailsForm = this.fb.group({

          'username':[null,[Validators.required]],
          'email':[null,[Validators.required]],
      'Address':this.fb.array([this.buildAddress()])
    });
  }
  buildAddress(): FormGroup {
    return this.fb.group({
      city: '',
      State: '',
      postalCode: '',
           
    });
}
  get f() {
    return this.userDetailsForm.controls;
  }
  get fa() {
    return (this.userDetailsForm.controls?.Address as FormArray)?.controls;
  }

  deleteRow(row : any){
    this.userArray = this.userArray.filter(user => user.position !== row.position)    
  }
 onSubmit() {
    let newuser = {position: this.userArray.length +1, 
      UserName: this.userDetailsForm.value.username,
      Email : this.userDetailsForm.value.email,
      Address: this.getAddress(this.userDetailsForm.value.Address) 
    
    }
    this.userArray.push(newuser)
    
  }
  onTabChanged(event: any) 
  {
    
   if(event.index === 0){
    this.userArray = [...this.userArray]
   }
  }
  getAddress(addresArray : any){
    addresArray = addresArray.map((add: { city: any; State: any; postalCode:any}) => `city :${add.city} ,State: ${add.State}',
    postalCode: ${add.postalCode}`)
    return `${addresArray.join(', ')}`
  }
  AddAddress(){
    this.userDetailsForm.controls.Address.push(this.buildAddress());
  }
  DeleteAddress(){
    if(this.userDetailsForm.controls.Address.length > 1){
      this.userDetailsForm.controls.Address.removeAt(this.userDetailsForm.controls.Address.length -1);
    }
   
  }

}
