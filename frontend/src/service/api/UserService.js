import axios from "axios";
var url = "http://localhost:8000/";
class userService {
  static async signupUser(routeName, Body) {
    const result = await axios.post(url + routeName, Body);
    if (result) {
      return result.data;
    }
    return undefined;
  }
  static async loginUser(routeName, Body) {
    const result = await axios.post(url + routeName, Body);
    if (result) {
      return result.data;
    }
    return undefined;
  }
}
export default userService;
