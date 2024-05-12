import { Coordinates } from "./coordinates.interface";
import { Street } from "./street.interface";
import { Timezone } from "./time-zone.interface";

export interface Location {
  street:      Street;
  city:        string;
  state:       string;
  country:     string;
  postcode:    number;
  coordinates: Coordinates;
  timezone:    Timezone;
}
