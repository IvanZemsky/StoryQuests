import cardbg from '@/public/cardbg.jpg';
import { IStory } from "@/src/entities/Story";

export const story: IStory = {
   id: "1233423",
   name: "Very interesting story",
   description: "Once upon a time i have written a very long and interesting descripion",
   img: cardbg,
   scenes: [
      // информация в узле
      {
         _id: "1",
         title: "Just title 1",
         description: "May be empty - more detailed information about a scene",
         img: cardbg,
         answers: [
            // информация в ребре
            {
               _id: '1',
               title: "Answer 1",
               nextSceneId: "2", // вычислим по id узла
            },
         ],
      },
      {
         _id: "2",
         title: "Just title 2",
         description: "May be empty - more detailed information about a scene",
         img: cardbg,
         answers: [
            // информация в ребре
            {
               _id: '1',
               title: "Answer 1",
               nextSceneId: "3", // вычислим по id узла
            },
            {
               _id: '2',
               title: "Answer 2",
               nextSceneId: "4", // вычислим по id узла
            },
         ],
      },
      {
         _id: "3",
         title: "Just title 3",
         description: "May be empty - more detailed information about a scene",
         img: cardbg,
         answers: [
            // информация в ребре
            {
               _id: '1',
               title: "Answer 1",
               nextSceneId: "id of scene", // вычислим по id узла
            },
         ],
      },
      {
         _id: "4",
         title: "Just title 4",
         description: "May be empty - more detailed information about a scene",
         img: cardbg,
         answers: [
            // информация в ребре
            {
               _id: '1',
               title: "Answer 1",
               nextSceneId: "id of scene", // вычислим по id узла
            },
         ],
      },
   ],
}
