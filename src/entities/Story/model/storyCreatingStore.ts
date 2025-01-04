import { makeAutoObservable, toJS } from "mobx";
import { SceneNodeData, SceneNode, Scene } from '../../Scene';
import { IAnswerEdge } from '../../Answer';

class StoryCreationStore {
   scenes: Scene[] = []
   nodes: SceneNode[] = []
   edges: IAnswerEdge[] = []
   isValid = false

   constructor() {
      makeAutoObservable(this)
   }

   saveNodes = (nodes: SceneNode[]): void => {
      this.nodes = nodes
      console.log(toJS(nodes))
   }

   saveEdges = (edges: IAnswerEdge[]): void => {
      this.edges = edges
   }

   saveOneNode = (id: string, data: SceneNodeData) => {
      const scene = this.nodes.find(scene => scene.id === id)
      if (!scene) {
         throw new Error("Scene not found") // if the scene exists in field, it must exist in node array as well
      }
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