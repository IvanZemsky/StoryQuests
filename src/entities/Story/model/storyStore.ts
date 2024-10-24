import { makeAutoObservable } from "mobx";

class StoryStore{
   currentSceneId: string | null
   selectedSceneId: string | null

   constructor() {
      this.currentSceneId = 'scene_1'
      this.selectedSceneId = null
      makeAutoObservable(this);
   }

   reset = () => {
      this.currentSceneId = 'scene_1'
      this.selectedSceneId = null
   }

   setScene = (): void => {
      if (this.selectedSceneId) {
         this.currentSceneId = this.selectedSceneId;
      }
   }

   setNextSceneId = (id: string): void => {
      this.selectedSceneId = id;
   }
}

export const storyStore = new StoryStore();