import axios from "axios";
var url = "http://localhost:8000/";
class EmojiService {
  static async getEmoji(routeName) {
    const result = await axios.get(url + routeName);
    if (result) {
      return result;
    }
    return false;
  }
  static async FilterEmoji(routeName, body) {
    const result = await axios.post(url + routeName, body);
    if (result) {
      return result;
    }
    return false;
  }
}
export default EmojiService;
