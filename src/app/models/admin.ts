// src/app/models/admin.model.ts
export class Admin {
    adminId: number;
    userName: string;
    password: string;
    email: string;
  
    constructor(adminId: number, userName: string, password: string, email: string) {
      this.adminId = adminId;
      this.userName = userName;
      this.password = password;
      this.email = email;
    }
  }
  