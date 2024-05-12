import { Dob } from "./dob.interface";
import { ID } from "./id.interface";
import { Location } from "./location.interface";
import { Login } from "./login.interface";
import { Name } from "./name.interface";
import { Picture } from "./picture.interface";

export interface Result {
  gender:     string;
  name:       Name;
  location:   Location;
  email:      string;
  login:      Login;
  dob:        Dob;
  registered: Dob;
  phone:      string;
  cell:       string;
  id:         ID;
  picture:    Picture;
  nat:        string;
}
