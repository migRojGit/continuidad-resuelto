export interface NodeResource
{
  key       : string;
  label     : string;
  data      : string;
  icon      : string;
  children ?: NodeResource[];
}
