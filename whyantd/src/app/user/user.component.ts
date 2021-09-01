import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor() { }

  input_data = {
    user_name: "",
    age: "",
    sex: "男",
    hobby: [
      { label: '吃饭', value: '吃饭', checked: true },
      { label: '睡觉', value: '睡觉', checked: false },
      { label: '看帅哥', value: '看帅哥', checked: false }
    ],
    level: "VIP1",
    birthday: new Date(),
  }
  ngOnInit(): void {
  }
  doSubmit() {
    console.log(this.input_data);
    //获取时间戳
    let d = new Date(this.input_data.birthday);
    console.log(d.getTime());
  }
}
