import { makeAutoObservable, toJS } from "mobx";
import { ISceneNodeData, ISceneNode, IScene } from '@/src/entities/Scene';
import { IAnswerEdge } from '@/src/entities/Answer';

class StoryCreationStore {
   scenes: IScene[] = []

   nodes: ISceneNode[] = []
   edges: IAnswerEdge[] = []

   isValid = false

   constructor() {
      makeAutoObservable(this)
   }

   saveNodes = (nodes: ISceneNode[]): void => {
      this.nodes = nodes
      console.log(toJS(nodes))
   }

   saveEdges = (edges: IAnswerEdge[]): void => {
      this.edges = edges
   }

   saveOneNode = (id: string, data: ISceneNodeData) => {
      const scene = this.nodes.find(scene => scene.id === id)! // если сцена имеется в поле - имеется и в сторе
      scene.data = data
   }

   validate = () => {
      const isNodesValid = this.nodes.reduce((bool, { data }) => {
         return bool && !!data.title && !!data.img
      }, true)

      const isEdgesValid = this.edges.reduce((bool, { data }) => {
         return bool && !!data.text
      }, true)

      this.isValid = isNodesValid && isEdgesValid
      console.log(isNodesValid && isEdgesValid)
   }

   createScenes = (): void => {
      this.scenes = this.nodes.map(node => ({
         id: node.id,
         title: node.data.title,
         description: node.data.description,
         img: node.data.img,
         type: node.data.type,
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
   }
}

export const storyCreationStore = new StoryCreationStore()