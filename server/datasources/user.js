const { RESTDataSource } = require("apollo-datasource-rest");
class UserDataAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://bootcamp4-mock-services.herokuapp.com/";
  }
  async getUser(id) {
    console.log("fetching user ",id)
    const data = await this.get(`users/${id}`);
    return data;
  }
  async postUser(user) {
    console.log("saving new user", user);
    return this.post(`users`, user);
  }
  async deleteUser(id) {
    console.log("deleting user id: ", id);
    this.delete(`users/${id}`);
    return `user ${id} successfully deleted`;
  }
  async updateUser(user) {
    console.log("updating user ", user);
    return this.put(`users/${user.id}`, user);
  }
}
module.exports = UserDataAPI;
