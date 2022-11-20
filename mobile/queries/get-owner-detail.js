const getOwnerDetail = () => {
  return {
    data: {
      id: 1,
      firstName: "Paul",
      lastName: "McCartney",
      isFavorited: true,
      avatar_img_src: "https://images.genius.com/281bdac3a6cfe46b63a5118468e4a806.1000x1000x1.jpg",
      cats: [
        {
          id: 1,
          name: "Snowball",
          age: "4 years 0 month",
        },
        {
          id: 2,
          name: "Blacky",
          age: "2 years 3 months",
        },
      ],
    },
  };
};

export default getOwnerDetail;
