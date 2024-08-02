import cardbg from '@/public/cardbg.jpg';
import { IStory } from "@/src/entities/Story";

export const story: IStory = {
   id: "1233423",
   name: "Mystery of the Ancient Temple",
   description: "You embarked on an expedition to explore a mysterious ancient temple filled with secrets and dangers.",
   img: cardbg,
   scenes: [
      {
         _id: "1",
         title: "Temple Entrance",
         description: "You stand before the majestic entrance of the ancient temple. The stone doors are covered in moss and look very heavy.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Try to open the doors",
               nextSceneId: "2",
            },
            {
               _id: '2',
               title: "Look around",
               nextSceneId: "3",
            },
         ],
      },
      {
         _id: "2",
         title: "Dark Corridor",
         description: "The doors creak open, revealing a dark corridor leading into the depths of the temple.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Enter the corridor",
               nextSceneId: "4",
            },
            {
               _id: '2',
               title: "Return outside",
               nextSceneId: "1",
            },
         ],
      },
      {
         _id: "3",
         title: "Survey the Surroundings",
         description: "You survey the surroundings of the temple. On the ground, you find an old map pointing to a hidden entrance.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Search for the hidden entrance",
               nextSceneId: "5",
            },
            {
               _id: '2',
               title: "Return to the main entrance",
               nextSceneId: "1",
            },
         ],
      },
      {
         _id: "4",
         title: "Mystery Room",
         description: "You enter a room illuminated by torches. In the center, there is a pedestal with an ancient relic.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Examine the relic",
               nextSceneId: "6",
            },
            {
               _id: '2',
               title: "Look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         _id: "5",
         title: "Hidden Entrance",
         description: "You find a hidden entrance behind thick bushes. The passage leads deeper into the temple.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Enter the hidden passage",
               nextSceneId: "4",
            },
            {
               _id: '2',
               title: "Return to the main entrance",
               nextSceneId: "1",
            },
         ],
      },
      {
         _id: "6",
         title: "Ancient Relic",
         description: "You approach the relic and notice an inscription in an unknown language. It seems to be a key to further progress.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Try to translate the inscription",
               nextSceneId: "8",
            },
            {
               _id: '2',
               title: "Leave the relic and look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         _id: "7",
         title: "Unexpected Guest",
         description: "Suddenly, you hear a rustle. An old man with a long beard and a mysterious gaze emerges from the shadows.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               _id: '2',
               title: "Try to hide",
               nextSceneId: "10",
            },
         ],
      },
      {
         _id: "8",
         title: "Translating the Inscription",
         description: "You manage to partially translate the inscription. It reads: 'He who finds the key will unlock the gates of eternity.'",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Search for the key",
               nextSceneId: "11",
            },
            {
               _id: '2',
               title: "Leave the relic and look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         _id: "9",
         title: "Mysterious Old Man",
         description: "The old man tells you that he has been guarding the temple for many years and knows all its secrets.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Ask for his help",
               nextSceneId: "12",
            },
            {
               _id: '2',
               title: "Continue exploring on your own",
               nextSceneId: "4",
            },
         ],
      },
      {
         _id: "10",
         title: "Stealthy Escape",
         description: "You try to hide, but the old man is too fast and blocks your way.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               _id: '2',
               title: "Try to hide again",
               nextSceneId: "13",
            },
         ],
      },
      {
         _id: "11",
         title: "Searching for the Key",
         description: "You start searching for the key, following the clues from the inscription.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Continue searching",
               nextSceneId: "14",
            },
            {
               _id: '2',
               title: "Return to the relic",
               nextSceneId: "6",
            },
         ],
      },
      {
         _id: "12",
         title: "Old Man's Help",
         description: "The old man agrees to help you and leads you to a hidden door in the temple.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Follow the old man",
               nextSceneId: "15",
            },
            {
               _id: '2',
               title: "Refuse and explore on your own",
               nextSceneId: "4",
            },
         ],
      },
      {
         _id: "13",
         title: "Failed Escape",
         description: "You try to hide again, but the old man is too fast. He stops you and demands an explanation.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               _id: '2',
               title: "Try to hide once more",
               nextSceneId: "10",
            },
         ],
      },
      {
         _id: "14",
         title: "Key Found",
         description: "You find the key hidden in a wall niche. Now you need to find where it fits.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Search for the lock",
               nextSceneId: "16",
            },
            {
               _id: '2',
               title: "Return to the relic",
               nextSceneId: "6",
            },
         ],
      },
      {
         _id: "15",
         title: "Hidden Door",
         description: "The old man leads you to a hidden door. It is locked, but the old man has a key.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Open the door",
               nextSceneId: "17",
            },
            {
               _id: '2',
               title: "Ask the old man about the door",
               nextSceneId: "18",
            },
         ],
      },
      {
         _id: "16",
         title: "Fitting Lock",
         description: "You find a lock that fits the key. The lock opens, and the door slowly begins to open.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Enter the open door",
               nextSceneId: "18",
            },
         ],
      },
      {
         _id: "17",
         title: "Open Door",
         description: "The old man opens the hidden door, revealing a new path inside the temple.",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Follow the path",
               nextSceneId: "18",
            },
         ],
      },
      {
         _id: "18",
         title: "The end of demo",
         description: "",
         img: cardbg,
         answers: [
            {
               _id: '1',
               title: "Go ahead, click on it!",
               nextSceneId: "19",
            },
         ],
      },
   ]
}
