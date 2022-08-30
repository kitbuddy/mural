export class UserDetails {
  userId: string;
  password: string;

  printDetails(): void {
    console.log('user id: ' + this.userId + 'password: ' + this.password);
  }
}
