

  // Списки с данными
  // тут фотки
  const Images=[
    { image: require("./img/Image1.png") },
    { image: require("./img/Image2.jpg") },
    { image: require("./img/Image3.jpg") },
    { image: require("./img/date1.jpg") },
    { image: require("./img/date2.jpg") },
    { image: require("./img/date3.jpg") },
  ];
  // Тут данные  для Swiper лучшие за месяц
 export  const 
 materials = [
    {
      image:Images[0].image,
      press:('CardList'),
    },
    {
      image:Images[1].image,
      press:('CardList'),
    },
    {
      image:Images[2].image,
      press:('CardList'),
    },
  ]

const SvidanieMapState ={
    svidanies: [
      {
        image:Images[3].image,
      },
      {
        image:Images[4].image,
      },
      {
        image:Images[5].image,
      },
    ]
  }