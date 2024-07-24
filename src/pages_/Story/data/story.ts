export const story = {
   id: '1233423',
   name: 'Very interesting story',
   description: 'Once upon a time i have written a very long and interesting descripion',
   scenes: [ // информация в узле
      {
         title: 'Just title',
         description: 'May be empty - more detailed information about a scene',
         img: '',
         answers: [ // информация в ребре
            {
               title: 'Answer 1',
               nextScene: 'id of scene' // вычислим по id узла
            }
         ]
      }
   ]
}