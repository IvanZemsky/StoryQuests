import { makeAutoObservable, toJS } from "mobx";
import { ISceneNodeData, ISceneNode } from '@/src/entities/Scene';
import { IStory } from "./types";
import { IAnswerEdge } from '@/src/entities/Answer';

class StoryCreationStore {
   story: IStory = {
      id: "",
      name: "",
      description: "",
      img: "string",
      scenes: []
   }

   nodes: ISceneNode[] = []
   edges: IAnswerEdge[] = []

   constructor() {
      makeAutoObservable(this)
   }

   saveNodes = (nodes: ISceneNode[]): void => {
      this.nodes = nodes
      console.log(toJS(this.nodes))
   }

   saveEdges = (edges: IAnswerEdge[]): void => {
      this.edges = edges
      console.log(toJS(this.edges))
   }

   saveOneNode = (id: string, data: ISceneNodeData) => {
      const scene = this.nodes.find(scene => scene.id === id)!
      scene.data = data
   }

   createScenes = (): void => {
      this.story.scenes = this.nodes.map(node => ({
         id: node.id,
         title: node.data.title,
         description: node.data.description,
         img: node.data.img,
         answers: this.edges.map(edge => {
            if (edge.source === node.id) {
               return ({
                  id: edge.id,
                  text: edge.data.text,
                  nextSceneId: edge.target,
               })
            }
         }).filter((answer) => !!answer),
      }))
      console.log(toJS(this.story))
   }
}

export const storyCreationStore = new StoryCreationStore()