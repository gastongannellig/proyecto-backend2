export default class UserDTO {
  constructor(user) {
    this.id = user._id;
    this.firstName = user.first_name;
    this.lastName = user.last_name;
    this.email = user.email;
    this.role = user.role;
    this.cart = user.cart;
  }
}