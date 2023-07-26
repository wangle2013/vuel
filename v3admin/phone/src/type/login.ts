// interface loginFormInt {
//   username: string
//   password: string
//   }
// export class loginData{
//   ruleForm:loginFormInt={
//     username:"",
//     password:""
//   }
// }
interface loginFormInt {
  username: string
  password: string
  }
export class loginData implements loginFormInt{
    username=""
    password=""
  
}