import { Injectable } from '@angular/core';
import { fileSystemNodeData, nodeLazyData, nodeResource, nodeTreeData } from '../../../assets/resources/node-resources';
import { Observable, of } from 'rxjs';
import { NodeResource } from '../interfaces/resources/node-resource.interface';
import { NodeTreeTables } from '../interfaces/resources/node-tree-tables.interface';
import { NodeLazyData } from '../interfaces/resources/node-lazy-data.interface';
import { FileSystemNodeData } from '../interfaces/resources/node-system-data.interface';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  getTreeNodesData(): Promise<NodeResource[]>{
    return Promise.resolve(nodeResource)
  }

  getTreeTableNodesData(): Promise<NodeTreeTables[]>{
    return Promise.resolve(nodeTreeData)
  }

  getFiles(): Promise<NodeTreeTables[]>{
    return Promise.resolve(nodeTreeData)
  }

  getlazyFiles(): Promise<NodeLazyData[]>{
    return Promise.resolve(nodeLazyData)
  }

  getFileSystem(): Promise<FileSystemNodeData[]>{
    return Promise.resolve(fileSystemNodeData)
  }
}
