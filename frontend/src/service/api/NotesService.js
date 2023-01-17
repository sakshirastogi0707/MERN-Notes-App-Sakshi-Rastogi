import axios from "axios";
var url = "http://localhost:8000/";
class NotesService {
  static async createNotes(routeName, Body) {
    const result = await axios.post(url + routeName, Body);
    if (result) {
      return result;
    }
    return undefined;
  }
  static async getAllNotes(routeName) {
    const result = await axios.get(url + routeName);
    if (result) {
      return result;
    }
    return undefined;
  }
  static async deleteNotes(routeName) {
    const result = await axios.delete(url + routeName);
    if (result) {
      return result;
    }
    return undefined;
  }
  static async updateNotes(routeName) {
    const result = await axios.patch(url + routeName);
    if (result) {
      return result.data;
    }
    return undefined;
  }
}
export default NotesService;
