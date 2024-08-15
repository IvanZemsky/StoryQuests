import { IStory } from "@/src/entities/Story";

export const story: IStory = {
   id: "1233423",
   name: "Mystery of the Ancient Temple",
   description: "You embarked on an expedition to explore a mysterious ancient temple filled with secrets and dangers.",
   img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   scenes: [
      {
         id: "scene_1",
         title: "Temple Entrance",
         description: "You stand before the majestic entrance of the ancient temple. The stone doors are covered in moss and look very heavy.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Try to open the doors",
               nextSceneId: "2",
            },
            {
               id: '2',
               text: "Look around",
               nextSceneId: "3",
            },
         ],
      },
      {
         id: "2",
         title: "Dark Corridor",
         description: "The doors creak open, revealing a dark corridor leading into the depths of the temple.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Enter the corridor",
               nextSceneId: "4",
            },
            {
               id: '2',
               text: "Return outside",
               nextSceneId: "1",
            },
         ],
      },
      {
         id: "3",
         title: "Survey the Surroundings",
         description: "You survey the surroundings of the temple. On the ground, you find an old map pointing to a hidden entrance.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Search for the hidden entrance",
               nextSceneId: "5",
            },
            {
               id: '2',
               text: "Return to the main entrance",
               nextSceneId: "1",
            },
         ],
      },
      {
         id: "4",
         title: "Mystery Room",
         description: "You enter a room illuminated by torches. In the center, there is a pedestal with an ancient relic.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Examine the relic",
               nextSceneId: "6",
            },
            {
               id: '2',
               text: "Look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         id: "5",
         title: "Hidden Entrance",
         description: "You find a hidden entrance behind thick bushes. The passage leads deeper into the temple.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Enter the hidden passage",
               nextSceneId: "4",
            },
            {
               id: '2',
               text: "Return to the main entrance",
               nextSceneId: "1",
            },
         ],
      },
      {
         id: "6",
         title: "Ancient Relic",
         description: "You approach the relic and notice an inscription in an unknown language. It seems to be a key to further progress.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Try to translate the inscription",
               nextSceneId: "8",
            },
            {
               id: '2',
               text: "Leave the relic and look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         id: "7",
         title: "Unexpected Guest",
         description: "Suddenly, you hear a rustle. An old man with a long beard and a mysterious gaze emerges from the shadows.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               id: '2',
               text: "Try to hide",
               nextSceneId: "10",
            },
         ],
      },
      {
         id: "8",
         title: "Translating the Inscription",
         description: "You manage to partially translate the inscription. It reads: 'He who finds the key will unlock the gates of eternity.'",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Search for the key",
               nextSceneId: "11",
            },
            {
               id: '2',
               text: "Leave the relic and look around",
               nextSceneId: "7",
            },
         ],
      },
      {
         id: "9",
         title: "Mysterious Old Man",
         description: "The old man tells you that he has been guarding the temple for many years and knows all its secrets.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Ask for his help",
               nextSceneId: "12",
            },
            {
               id: '2',
               text: "Continue exploring on your own",
               nextSceneId: "4",
            },
         ],
      },
      {
         id: "10",
         title: "Stealthy Escape",
         description: "You try to hide, but the old man is too fast and blocks your way.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               id: '2',
               text: "Try to hide again",
               nextSceneId: "13",
            },
         ],
      },
      {
         id: "11",
         title: "Searching for the Key",
         description: "You start searching for the key, following the clues from the inscription.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Continue searching",
               nextSceneId: "14",
            },
            {
               id: '2',
               text: "Return to the relic",
               nextSceneId: "6",
            },
         ],
      },
      {
         id: "12",
         title: "Old Man's Help",
         description: "The old man agrees to help you and leads you to a hidden door in the temple.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Follow the old man",
               nextSceneId: "15",
            },
            {
               id: '2',
               text: "Refuse and explore on your own",
               nextSceneId: "4",
            },
         ],
      },
      {
         id: "13",
         title: "Failed Escape",
         description: "You try to hide again, but the old man is too fast. He stops you and demands an explanation.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Talk to the old man",
               nextSceneId: "9",
            },
            {
               id: '2',
               text: "Try to hide once more",
               nextSceneId: "10",
            },
         ],
      },
      {
         id: "14",
         title: "Key Found",
         description: "You find the key hidden in a wall niche. Now you need to find where it fits.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Search for the lock",
               nextSceneId: "16",
            },
            {
               id: '2',
               text: "Return to the relic",
               nextSceneId: "6",
            },
         ],
      },
      {
         id: "15",
         title: "Hidden Door",
         description: "The old man leads you to a hidden door. It is locked, but the old man has a key.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Open the door",
               nextSceneId: "17",
            },
            {
               id: '2',
               text: "Ask the old man about the door",
               nextSceneId: "18",
            },
         ],
      },
      {
         id: "16",
         title: "Fitting Lock",
         description: "You find a lock that fits the key. The lock opens, and the door slowly begins to open.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Enter the open door",
               nextSceneId: "18",
            },
         ],
      },
      {
         id: "17",
         title: "Open Door",
         description: "The old man opens the hidden door, revealing a new path inside the temple.",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Follow the path",
               nextSceneId: "18",
            },
         ],
      },
      {
         id: "18",
         title: "The end of demo",
         description: "",
         img: "https://images.unsplash.com/photo-1723474549831-0d70d6c5f2b5?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
         answers: [
            {
               id: '1',
               text: "Go ahead, click on it!",
               nextSceneId: "19",
            },
         ],
      },
   ]
}
