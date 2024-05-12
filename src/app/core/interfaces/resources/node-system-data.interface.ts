export interface FileSystemNodeData {
  data: FileSystemNodesData;
  children?: FileSystemNodeData[];
}

interface FileSystemNodesData {
  name: string;
  size: string;
  type: string;
}
