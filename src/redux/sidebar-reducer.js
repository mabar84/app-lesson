let initialState={
  friendsData: [
    {
      id: 1,
      name: "Петя",
      src: "https://avatarko.ru/img/kartinka/8/kot_prikol_gitara_7515.jpg",
    },
    {
      id: 2,
      name: "Федя",
      src: "https://avatarko.ru/img/kartinka/3/kot_muzhchina_prikol_2433.jpg",
    },
    {
      id: 3,
      name: "Коля",
      src: "https://avatarko.ru/img/kartinka/18/film_uzhasy_shlyapa_ulybka_17247.jpg",
    },
    {
      id: 4,
      name: "Сидор",
      src: "https://avatarko.ru/img/kartinka/8/film_prikol_gnom_7810.jpg",
    },
    {
      id: 5,
      name: "Прохор",
      src: "https://avatarko.ru/img/kartinka/23/prikol_cosplay_morskaya_svinka_22453.jpg",
    },
  ],
}

const sidebarReducer = (state=initialState, action) => {
  return state;
};

export default sidebarReducer;
