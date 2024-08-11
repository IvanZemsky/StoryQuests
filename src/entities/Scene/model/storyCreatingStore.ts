import { makeAutoObservable, toJS } from "mobx";
import { Edge, Node } from "@xyflow/react";
import { ISceneNodeData, ISceneNode } from '@/src/entities/Scene';

class StoryCreationStore {
   story: {scenes: any[]} = {scenes: []}
   nodes: ISceneNode[] = []
   edges: Edge[] = []

   constructor() {
      makeAutoObservable(this)
   }

   saveNodes = (nodes: ISceneNode[]): void => {
      this.nodes = nodes
      console.log(toJS(this.nodes))
   }

   saveEdges = (edges: Edge[]): void => {
      this.edges = edges
      console.log(toJS(this.edges))
   }

   saveOneNode = (id: string, data: ISceneNodeData) => {
      const scene = this.nodes.find(scene => scene.id === id)!
      scene.data = data
   }

   createScenes = (): void => {
      this.story.scenes = this.nodes.map(node => ({
         name: node.data.title,
         answers: [],
      }))
      console.log(toJS(this.story))
   }
}

export const storyCreationStore = new StoryCreationStore()