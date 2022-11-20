const getOwnerList = ({ sortBy, pageParam }) => {
  console.log(pageParam, sortBy);

  if (sortBy === "CATS_COUNT" || pageParam === 2) {
    return {
      data: [
        {
          id: 1,
          firstName: "John",
          lastName: "Lennon",
          isFavorited: true,
        },
      ],
    };
  }

  return {
    data: [
      {
        id: 1,
        firstName: "John",
        lastName: "Lennon",
        isFavorited: true,
      },
      {
        id: 2,
        firstName: "John S",
        lastName: "Lennon",
        isFavorited: false,
      },
      {
        id: 3,
        firstName: "John V",
        lastName: "Lennon",
        isFavorited: true,
      },
      {
        id: 4,
        firstName: "John A",
        lastName: "Lennon",
        isFavorited: false,
      },
      {
        id: 5,
        firstName: "John B",
        lastName: "Lennon",
        isFavorited: false,
      },
      {
        id: 6,
        firstName: "John C",
        lastName: "Lennon",
        isFavorited: true,
      },
      {
        id: 7,
        firstName: "John",
        lastName: "Lennon",
        isFavorited: true,
      },
      {
        id: 8,
        firstName: "John S",
        lastName: "Lennon",
        isFavorited: false,
      },
      {
        id: 9,
        firstName: "John V",
        lastName: "Lennon",
        isFavorited: true,
      },
      // {
      //   id: 44,
      //   firstName: "John A",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 52,
      //   firstName: "John B",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 623,
      //   firstName: "John C",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 341,
      //   firstName: "John",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 23,
      //   firstName: "John S",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 333,
      //   firstName: "John V",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 43,
      //   firstName: "John A",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 254,
      //   firstName: "John B",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 62,
      //   firstName: "John C",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 113,
      //   firstName: "John",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 234,
      //   firstName: "John S",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 337,
      //   firstName: "John V",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
      // {
      //   id: 434,
      //   firstName: "John A",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 534,
      //   firstName: "John B",
      //   lastName: "Lennon",
      //   isFavorited: false,
      // },
      // {
      //   id: 66,
      //   firstName: "John C",
      //   lastName: "Lennon",
      //   isFavorited: true,
      // },
    ],
    nextPage: 2,
    prevPage: -1,
  };
};

export default getOwnerList;
