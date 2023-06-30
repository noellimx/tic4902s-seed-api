import hi from "./some/some";

import http from "http";
console.log("hi");
hi();

const options: http.RequestOptions = {
  hostname: "localhost",
  port: 8080,
  path: "/api/food",
  method: "POST",

  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJSUzI1NiIsImp3ayI6eyJrdHkiOiJSU0EiLCJlIjoiQVFBQiIsIm4iOiIxQVVBV09vTElUcWxiZWRVa3ZTV0w1N3FqdlV5VWNVakludnU3elFGdFJoNzZGOVBjRmxGcVhaRUJYQUNBYmJLOTR5LU5zdW5sckllX2t4YmdLNEI2NzcxMUJoVU9udG5HQjJjSmxueVdzb3RrSnRHQzBlZXhRQWxhVGdZUDJEckJIYTRJSF9BT1BwNjV5di02MlYybHJnX01wOXh1eXdBcm15M3ZmM3RVOXB2VHR2R3plUnQ0Y01XTnJaanFUanhVV3oyVHNySjFDajFjRUtRS2xqY0ltM0wtUEFuenlGdS1zdTFzSUxLM181cmk1OERZMmE2b1dlejdfaXE5azVEQjBMR0JpMUMzcmVheVd2b0pDQ2hOaGlqQThkWE5HMk5oNnJ0bjhTeE03OHUxeWJsQ2ZDY1hvblJJY1RESnloUTl5aGFaN2FnOVNVX0RfMEc1b2dWU21vOE82ZURWYVZHQjNNbW5nbmdCZ3JQYzAwQzIyU2dqaGZBcTlBR1prdXFyb1A5TmlpVEFxY2RZM243azV4UklNXzJpcW9Dei15QjRmWFRUeVBWR1BKUlpEWWhzSVN0WmJfaHdWdHVybTNhVWctbnFvU0FpaTd3V0tQS05hMlJTWHVxalRjQmN5VGZRaW9Ec1BmT2JkNHdnc1Ffdnp0Q2VEVVdKWjM1bHUwaWlNUjZwbDhlYXZlVVhUV3Y5MmlIdmdJeTJlWC1pQUhGSmJuc1A3Y2dJbVB2S0N1YVJlTmRxR1c5WkI2SkRxOEVXUmg5S3R3YVlkdGYxNVJoY3EyZnRJekp6QnlHV3Z2SkFoODNWZF9IMnQ4VGlfU2JTcElmeGNEekFpbWZBNmlNWUl4ZGhPLTFia0hoNEt5SnRaV1cxNWRrMElYS3hRSGdxNmhGcUdVWndLRSJ9fQ.eyJST0xFIjoiUk9MRV9VU0VSIiwic3ViIjoiYWxleG9vaSIsInVuaXF1ZV9pZCI6IjUwNjBkZjgzLTY3YTUtNDcxNy04MTVjLTNkOTE1NmExNjczZCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCIsImV4cCI6MTY4MDMzNDI0MCwiZW1haWwiOiJhbGV4b29pQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiYWxleG9vaSJ9.YfvDQy4eoNLcbA6ZgOloqGLLTowMZ9BB_RcwZMTY5QzxIWCfU9j33YRzu3bNA3OzYKWaMTTjoOty8kJLOggy6PkPBW-pX2zrKLM1qJKnLHIV-fQya53uqrr7RqqoU9R_QHEwtXF9s_mTdRfy9g3js_Ps11d8Ji1_WQwQM0WRRTS5GE8h7a3g7yjpScAxce04u2y6R_kNE1fxHeel2awjPrUQsOW8IzKmIGMQ0172hzRYQrmklHoPvnwXVpnK-Kdh1IpO-2TzFNGDwEvxSQSF8yCdgUTuhZA-0Rm4WCQN3iR335_Zrk-YlQvObjNwN58tugpTNClA85Wq2y2xreJvWbQ9ftdv1lEYLXEWFy-grrcQq4sVMnFkA7gt5dXKEm2hvHe0mvOnmoUYyoWlcsj-tkR8VQ5t0of8e5CYjArHocBZ4LPghaNpy3UMdIXGI2W-XzO2UpRgZOGl3dZu0mno21vZQNxa2VQiDVRmLil7GvwcxdmLVpvEd5xEvKCGNjLACrr_6dEAluBSf7JLcF9u3UEWBnCXouRDuLNob18cyRupCE0upbi8wHk4FCjN9-UWN1wOKpjgW_nP5yJxbmmhBt_lnmzcPr_UvV7YtWPgRT5vjhmVX7JrFLajpDi2QWGCXvOH-1h45VZ3mcNlVgm6YXfhge3depig5eYfwNBJDfw",
  },
};

const sendRequest = (_postData: Object) => {
  const postData = JSON.stringify(_postData);
  const _options = {
    ...options,
    headers: { ...options.headers, "Content-Length": postData.length },
  };
  const req = http.request(_options, (res) => {
    console.log("statusCode:", res.statusCode);

    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (e) => {
    console.error(e);
    throw new Error(postData);
  });
  req.write(postData);
  req.end();
};
const delay = () => new Promise((res) => setTimeout(res, 500));

const shuffle = (_array: any[]) => {
  const array = [..._array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

const arrayOfRandomSize = (_array: any[]) => {
  const l = Math.floor(_array.length * Math.random());
  return _array.slice(0, l + 1);
};

const foodnames = [
  "Hainanese Chicken Rice",
  "Laksa",
  "Char Kway Teow",
  "Chili Crab",
  "Bak Kut Teh",
  "Roti Prata",
  "Nasi Lemak",
  "Satay",
  "Hokkien Mee",
  "Fish Head Curry",
  "Rojak",
  "Popiah",
  "Mee Goreng",
  "Kaya Toast",
  "Oyster Omelette",
  "Biryani",
  "Murtabak",
  "Mee Siam",
  "Curry Puff",
  "Carrot Cake",
  "Ice Kachang",
  "Tau Huay",
  "Prawn Noodle Soup",
  "Fried Hokkien Prawn Noodles",
  "Bak Chor Mee",
  "Cereal Prawn",
  "BBQ Stingray",
  "Sambal Kangkong",
  "Fried Rice",
  "Soto Ayam",
  "Lontong",
  "Mee Rebus",
  "Kueh Pie Tee",
  "Lor Mee",
  "Roast Meat",
  "Mee Pok",
  "Fish Otah",
  "Beef Rendang",
  "Ayam Penyet",
  "Roti John",
  "Claypot Rice",
  "Ban Mian",
  "Crab Bee Hoon Soup",
  "Nasi Padang",
  "Bak Kwa",
  "Chwee Kueh",
  "Bubur Cha Cha",
  "Chee Cheong Fun",
  "Soya Sauce Chicken",
  "Fried Carrot Cake",
  "Chicken Satay",
  "Pork Satay",
  "Beef Satay",
  "Grilled Stingray",
  "Curry Chicken",
  "Curry Fish Head",
  "Curry Vegetable",
  "Hokkien Char Mee",
  "Fried Prawn Noodle",
  "Kway Chap",
  "Bak Kut Teh Soup",
  "Fried Noodle",
  "Fried Rice Cake",
  "Beef Noodle Soup",
  "Duck Noodle Soup",
  "Wanton Noodle Soup",
  "Yong Tau Foo",
  "Fried Tofu",
  "Pork Belly",
  "Braised Duck",
  "Fried Eggplant",
  "Fried Rice Vermicelli",
  "Fried Bee Hoon",
  "Fried Kway Teow",
  "Prawn Mee Goreng",
  "Kueh Lapis",
  "Kueh Dadar",
  "Kueh Salat",
  "Nonya Bak Chang",
  "Hakka Yong Tau Foo",
  "Bakwan Kepiting",
  "Sambal Udang",
  "Fish Soup",
  "Economy Rice",
  "Braised Pork Belly",
  "Prawn Paste Chicken",
  "Crispy Fried Chicken",
  "Hokkien Ngoh Hiang",
  "Fried Oyster Omelette",
  "Mee Tai Mak",
  "Fish Ball Noodles",
  "Crispy Pork Belly",
  "Fried Wanton",
  "Fried Spring Roll",
  "Pork Porridge",
  "Chicken Porridge",
  "Fish Porridge",
  "Mixed Vegetable Rice",
  "Chicken Rice Noodle Soup",
  "Prawn Noodle Dry",
  "Prawn Noodle Soup",
  "Yam Cake",
  "Radish",
];

const group_enums = ["PROTEIN", "VEGETABLES", "FRUIT", "GRAINS", "DAIRY"];

const getRandomGroups = () => arrayOfRandomSize(shuffle(group_enums));

const getRandomServing = (): number => Math.floor(Math.random() * 500);

const nutrition = {
  protein: {
    unit_name: "grams",
    value: 10.0,
  },
  carbohydrates: {
    unit_name: "grams",
    value: 10.0,
  },
  fat: {
    unit_name: "grams",
    value: 10.0,
  },
  sugar: {
    unit_name: "grams",
    value: 10.0,
  },
  fiber: {
    unit_name: "grams",
    value: 10.0,
  },
  sodium: {
    unit_name: "mg",
    value: 44.0,
  },
  calcium: {
    unit_name: "grams",
    value: 10.0,
  },
  iron: {
    unit_name: "grams",
    value: 10.0,
  },
  cholesterol: {
    unit_name: "grams",
    value: 10.0,
  },
  potassium: {
    unit_name: "grams",
    value: 10.0,
  },
  vitamin_a: {
    unit_name: "grams",
    value: 10.0,
  },
  vitamin_c: {
    unit_name: "grams",
    value: 10.0,
  },
};

const nutritionKeys = Object.keys(nutrition);

const getRandomNutrition = () => {
  const shuffleKeys = shuffle(nutritionKeys);
  const keys = arrayOfRandomSize(shuffleKeys);

  const nutritions = keys.reduce((all, k) => {
    return {
      ...all,
      [k]: {
        value: Math.floor(Math.random() * 50),
        unit_name: "grams",
      },
    };
  }, {});

  return nutritions;
};
const main = async () => {
  for (const foodname of foodnames) {
    const data = {
      food_name: foodname,
      food_group: getRandomGroups(),
      serving: getRandomServing(),
      nutrition: getRandomNutrition(),
      calories: Math.floor(Math.random() * 300),
    };
    sendRequest(data);
    await delay();
  }
};

main();
