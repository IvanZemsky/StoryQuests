import { makeAutoObservable } from "mobx";
import { STORY_FIRST_SCENE } from "./constants";

class StoryStore{
   currentSceneId: string | null
   selectedSceneId: string | null

   constructor() {
      this.currentSceneId = STORY_FIRST_SCENE
      this.selectedSceneId = null
      makeAutoObservable(this);
   }

   reset = () => {
      this.currentSceneId = STORY_FIRST_SCENE
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