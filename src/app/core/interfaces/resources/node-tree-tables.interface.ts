export interface NodeTreeTables{
  key       : string;
  data      : TreeTableData;
  children ?: NodeTreeTables[];
}

interface TreeTableData{
  name: string;
  size: string;
  type: string;
}
