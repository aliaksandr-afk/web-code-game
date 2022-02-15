import { renderEntireThree } from "../render";

let state = {
    courseData: {
        courses: [
            {id: 1, name: "JS", pages: 12},
            {id: 2, name: "HTML", pages: 10},
            {id: 3, name: "CSS", pages: 5}
          ],
        
          courseContent: [
            {id: 1, name: "JS", content: "Квест JavaScript усвоит даже тот, кто никогда не программировал. Вы узнаете, что такое классы, объекты, методы, переменные, типы данных, массивы, условные операторы и циклы. Глянете одним глазком на коллекции и ООП, а также начнете работать в среде Visual Studio Code, которой пользуются программисты во всем мире!",
            page: 1},
            {id: 2, name: "HTML", content: "HTML", page: 1},
            {id: 3, name: "CSS", content: "CSS", page: 1}
        ]
    },
    users: [
        {name: "Aleks", lastName: "Novik", level: "4", coins: "10"},
        {name: "Nikolay", lastName: "Dranik", level: "1", coins: "2"},
        {name: "Stas", lastName: "Koval", level: "6", coins: "14"}
      ],    
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    name: postMessage,
    pages: 0
  };

  state.courseData.courses.push(newPost);
  renderEntireThree();
};

export default state;