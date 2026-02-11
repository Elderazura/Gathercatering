// Full menu data from gather_menu.xlsx
// Cuisine sections renamed per brand guidelines (no geographic labels)

export interface MenuCategory {
  name: string;
  items: string[];
}

export interface MenuCuisine {
  id: string;
  title: string;
  tagline: string;
  categories: MenuCategory[];
}

export const menuData: MenuCuisine[] = [
  {
    id: "spiced",
    title: "Spiced & Aromatic",
    tagline: "Bold flavors, slow-cooked traditions",
    categories: [
      {
        name: "Appetizers",
        items: [
          "Cutlets Home Made (Veg/Chicken/Beef/Fish)",
          "Andhra Chilli Chicken",
          "Chicken Lollipop",
          "Dragon Squid",
          "Cocktail Samosa",
          "Crumbed Fish",
          "Spring Rolls (Chi/Veg)",
          "Drums of Heaven",
          "Thai Lollipop",
        ],
      },
      {
        name: "Fancy Much",
        items: [
          "Beef Tacos",
          "Jerk Tarts",
          "Kappa Meen Cutlet",
          "Butter Chicken Samosa",
          "Chicken Tikka Panini",
          "Andhra Gobi",
          "Prawns Kondattom",
          "Chilli Beef Quesadilla",
          "Spiced Prawn Hoppers",
        ],
      },
      {
        name: "Salad",
        items: [
          "Aloo Chaat",
          "Asian Chicken Salad",
          "Beetroot Salad",
          "Three Bean Salad",
          "Chole Chaat",
          "Raw Mango Salad",
          "Greek Salad",
          "Pasta Salad",
        ],
      },
      {
        name: "Carbs",
        items: [
          "Appam / Kallapam",
          "Idiappam",
          "Kerala Parotta",
          "Coin Parotta",
          "Nool Parotta",
          "Thattu Dosa",
          "Naan / Rumali Roti / Lacha Paratha",
          "Kothu Parotta",
          "Pal Kappa",
          "Kappa",
          "Ghee Rice",
          "Thalassery Biryani",
          "Kottayam Biryani",
          "Hyderabadi Biryani",
          "Veg. Pulao",
          "Peas Pulao",
          "Ellum Kappa",
          "Kashmiri Pulao",
        ],
      },
      {
        name: "Non-Veg (South)",
        items: [
          "Meen Vevichathu",
          "Fish Roast",
          "Fish Moilee",
          "Fish Pollichathu",
          "Matthi Curry",
          "Chicken Veetile Curry",
          "Chicken Kanjirapally",
          "Duck Roast",
          "Chicken Roast",
          "Chicken Stew",
          "Chicken Railway",
          "Chicken Mappas",
          "Poricha Kozhi",
          "Mutton Stew",
          "Ezhunthani Mutton",
          "Mutton Coconut Fry",
          "Mutton Roast",
          "Beef Shaapu Curry",
          "Beef Ularth",
          "Beef With Koorka",
          "Beef Roast",
        ],
      },
      {
        name: "Non-Veg (North)",
        items: [
          "King Fish Masala",
          "Murgh Patiyala",
          "Amritsari Fish",
          "Murgh Hariyali",
          "Butter Chicken",
          "Palak Chicken",
          "Mutton Rogan Josh",
          "Mutton Kadai",
          "Malai Chicken Tikka",
          "Tangdi Kabab",
          "Tandoori Prawns",
          "Tandoori Chicken",
          "Afghani Tikka",
          "Reshmi Kabab",
        ],
      },
      {
        name: "Veg",
        items: [
          "Shahi Paneer",
          "Malai Kofta",
          "Aloo Gobi",
          "Aloo Capsicum",
          "Dal Fry",
          "Dal Makhani",
          "Pudina Tikka",
          "Paneer Tikka Masala",
          "Veg Navratan Korma",
          "Mix Veg Khorma",
          "Bhendi Masala",
          "Rajma Masala",
        ],
      },
      {
        name: "Beverages",
        items: ["Fruit Punch", "Tender Coconut", "Orange Juice", "Watermelon", "Lemon Mint"],
      },
      {
        name: "Dessert",
        items: [
          "Trifle Pudding",
          "Bread Pudding",
          "Pineapple Pudding",
          "Parippu Payasam",
          "Palada Payasam",
          "Tender Coconut Pudding",
          "Caramel Custard",
          "Chocolate Mousse",
          "Ada Pradhaman",
          "Pineapple Payasam",
        ],
      },
    ],
  },
  {
    id: "arabic",
    title: "Arabic",
    tagline: "Levant meets the Gulf",
    categories: [
      {
        name: "Appetizers",
        items: [
          "Zatar & Cheese Manakish",
          "Meat Manakish",
          "Mini Shish Tawok Skewers",
          "Mini Meat Kebab Skewers",
        ],
      },
      {
        name: "Canape Bites",
        items: [
          "Hummus In Cucumber Cups",
          "Mini Shish Tawok On Manakish",
          "Falafel Pita Pockets",
          "Adana Kebab Cigars",
          "Jerk Spiced Prawn Skewers",
          "Tabouleh Stuffed Cherry Tomatoes",
          "Muhammara Pita Bites",
        ],
      },
      {
        name: "Mains",
        items: [
          "Samak Sayadiya",
          "Chicken Kubideh",
          "Arabic Mix Grill",
          "Lamb Chops",
          "Kabsa (Chicken/Lamb/Beef)",
          "Mandi (Chicken/Lamb/Beef)",
          "Maklouba (Chicken/Lamb/Beef)",
          "Beef Okra Salona",
          "Grilled Vegetables",
        ],
      },
      {
        name: "Sandwiches & Wraps",
        items: [
          "Chicken Shawarma Wrap",
          "Chicken Fajita Wrap",
          "Falafel Wrap",
          "Vegetable Fajita Wrap",
          "Mediterranean Gr. Vegetable In Panini",
          "Shish Tawok with Olives and Rocca In Panini",
        ],
      },
      {
        name: "More Canapes / Bites",
        items: ["Lebanese Chicken Shawarma", "Devilled Eggs", "Mini Pizza", "Mini Tarts (Chicken/Mushroom)"],
      },
    ],
  },
  {
    id: "continental",
    title: "Continental",
    tagline: "Classic elegance, global favorites",
    categories: [
      {
        name: "Appetizers",
        items: [
          "Cheese Balls",
          "Croquets (Cheese/Chicken/Beef/Lamb/Turkey)",
          "Arancini Balls with Marinara Sauce",
          "Mini Chicken Bruschetta",
          "Chicken Tenders with Tartar Sauce",
        ],
      },
      {
        name: "Salads",
        items: [
          "Roasted Pumpkin Salad",
          "Baby Rocca & Strawberry Salad",
          "Beetroot & Feta Salad with Orange Segments and Walnuts",
          "Waldorf Salad with Crushed Walnuts",
        ],
      },
      {
        name: "Canape Bites",
        items: [
          "Smoked Salmon Wraps with Cream Cheese & Capers",
          "Salmon Mousse / Chicken Mousse / Tuna Mousse on Toast",
          "Chicken Tikka with Mango Chutney and Mint Sprig",
          "Beef Vindaloo (or Chicken) on Mini Poppadum",
          "Chicken Mortadella & Cream Cheese with Cucumber Ribbon and Kalamata Olives",
          "Sriracha Gr. Shrimp with Salsa on Taco Cups",
          "Roast Beef Tenderloin With Mint Jus",
          "Mini Beef Steaks With Pepper Sauce",
        ],
      },
      {
        name: "Mains",
        items: [
          "Gr. Chicken With Mushroom Sauce",
          "Lemon & Herb Roast Chicken With Rosemary Jus",
          "Chicken Fricassee",
          "Chicken Stroganoff",
          "Paprika Chicken Drumsticks",
          "Prawn / Seafood Thermidor",
          "Beef Lasagna",
          "Pasta (Penne/Fusilli/Spaghetti/Farfalle/Tagliatelle) — Alfredo, Arabiata, Cheese, Pomodoro, Aglio Olio, Primavera",
          "Roast Leg of Lamb",
          "Parsley Potato",
          "Cajun Potato Wedges",
          "Mashed Potato",
          "Grilled Vegetables",
          "Herb Tossed Vegetables",
          "Parsley Butter Rice",
          "Pimento Rice",
        ],
      },
      {
        name: "Sandwiches & Wraps",
        items: [
          "Cajun Gr. Chicken with Mushroom Wraps with Cheddar Cheese",
          "Chicken / Veg Quesadilla",
          "Chicken / Veg Burrito Wraps",
          "Gr. Vegetable with Mushroom Panini",
          "Pulled Beef with Mature Cheddar Caramelized Onion Panini",
        ],
      },
    ],
  },
];
