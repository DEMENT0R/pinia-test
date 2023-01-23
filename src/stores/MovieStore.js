import { defineStore } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: "Spider-Man",
        overview:
          "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
        poster_path: "https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png",
        release_date: "2002-05-01",
        isWatched: true,
      },
      {
        id: 2,
        original_title: "The Batman",
        overview:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        poster_path: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Batman_Infobox.jpg/220px-Batman_Infobox.jpg",
        release_date: "2022-03-01",
        isWatched: false,
      },
    ],
    activeTab: 1,
  }),
});
