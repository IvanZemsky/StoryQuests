import { makeAutoObservable } from "mobx";

class StoryStore{
   currentSceneId: string | null
   selectedSceneId: string | null

   constructor() {
      this.currentSceneId = '1'
      this.selectedSceneId = null
      makeAutoObservable(this);
   }

   setScene = () => {
      if (this.selectedSceneId) {
         this.currentSceneId = this.selectedSceneId;
      }
   }

   setNextSceneId = (id: string) => {
      this.selectedSceneId = id;
   }
}

export const storyStore = new StoryStore();