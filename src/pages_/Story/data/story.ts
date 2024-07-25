export const story = {
   id: "1233423",
   name: "Very interesting story",
   description: "Once upon a time i have written a very long and interesting descripion",
   scenes: [
      // информация в узле
      {
         _id: "1",
         title: "Just title 1",
         description: "May be empty - more detailed information about a scene",
         img: "",
         answers: [
            // информация в ребре
            {
               title: "Answer 1",
               nextScene: "2", // вычислим по id узла
            },
         ],
      },
      {
         _id: "2",
         title: "Just title 2",
         description: "May be empty - more detailed information about a scene",
         img: "",
         answers: [
            // информация в ребре
            {
               title: "Answer 1",
               nextScene: "3", // вычислим по id узла
            },
            {
               title: "Answer 2",
               nextScene: "4", // вычислим по id узла
            },
         ],
      },
      {
         _id: "3",
         title: "Just title 3",
         description: "May be empty - more detailed information about a scene",
         img: "",
         answers: [
            // информация в ребре
            {
               title: "Answer 1",
               nextScene: "id of scene", // вычислим по id узла
            },
         ],
      },
      {
         _id: "4",
         title: "Just title 4",
         description: "May be empty - more detailed information about a scene",
         img: "",
         answers: [
            // информация в ребре
            {
               title: "Answer 1",
               nextScene: "id of scene", // вычислим по id узла
            },
         ],
      },
   ],
}
