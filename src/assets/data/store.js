import { reactive } from "vue"; 
export const store = reactive({
    image_path: "/src/assets/img/",
    posts: [
        {
            title: "Food Corner: Top Japanese Restaurants for Sushi",
            image: "single-post-img3-1200x790.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "Roundup: My New Favourite Recipes for Healthy Living",
            image: "fi-roundup-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "Why These Toasts with Tea are New Favourite",
            image: "fi-toasts-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "Meal Prep: Korean Bibimbap with Kimchi",
            image: "fi-korean-food-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "Exploring Street Food in Bangkok",
            image: "fi-street-food-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "Organic Choices for Healthier Living",
            image: "fi-organic-breakfast-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
        {
            title: "5 Waterside Restaurants in Istanbul for Special Events",
            image: "fi-water-side-rest-400x263.jpg",
            creator: "by Admin",
            date: "March 25th, 2019",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi."
        },
    ],
    navbar: [
        {
            name: "Home",
            path: "#"
        },
        {
            name: "Recipes",
            path: "#"
        },
        {
            name: "Places",
            path: "#"
        },
        {
            name: "Blog",
            path: "#"
        },
        {
            name: "About",
            path: "#"
        },
        {
            name: "Contact",
            path: "#"
        },
    ],
    apps: [
      {
        socials: "facebook"
      }, 
      {
        socials: "instagram"
      }, 
      {
        socials: "twitter"
      }, 
      {
        socials: "youtube"
      },
      {
        socials: "pinterest"
      },  
    ],
    recipes: [
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "Yogurt-Nan-600x395.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "Mixed-fruits-200x132.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "r-rachel-park-366508-unsplash-min-200x132.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "r-michelle-tsang-500721-unsplash-min-200x132.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "quick-summer-drink-460x295.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "perfect-cosmopolitan-460x295.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "fi2x-6-460x295.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
        {
            title:"Lunch Favourite with Salad, Naan and Beans",
            second_title: "Bakery, Featured, Healthy, Latest Recipes, Staff Picks",
            image: "r-brooke-lark-96398-unsplash-min-460x295.jpg",
            article: "Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.",
        },
    ]
})