using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using XpireServer.Data;

namespace XpireServer.Models
{
    public class GroceryOptionSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new XpireServerContext(
                serviceProvider.GetRequiredService<DbContextOptions<XpireServerContext>>()))
            {
                if (context.GroceryOption.Any())
                {
                    return;
                }
                context.GroceryOption.AddRange(
                    new GroceryOption
                    {
                        Name = "soy milk",
                        ShelfLife = 7
                     },
                    new GroceryOption
                    {
                        Name = "almond milk",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "rice milk",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "coconut milk",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "hemp milk",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "parmesan cheese",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "asiago cheese",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "romano cheese",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "baby formula",
                        ShelfLife = 1
                    },
                    new GroceryOption
                    {
                        Name = "butter",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "brie cheese",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "mozzarella cheese",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "feta cheese",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "monterey jack cheese",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "muenster cheese",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "harvati cheese",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "gorgonzola cheese",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "cheddar cheese",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "egg nog",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "eggs",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "egg whites",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "egg yolks",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "ice cream",
                        ShelfLife = 30
                    },
                    new GroceryOption
                    {
                        Name = "margerine",
                        ShelfLife = 30
                    },
                    new GroceryOption
                    {
                        Name = "milk",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "sour cream",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "yogurt",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "avocado",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "apricot",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "blueberries",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "bananas",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "coconut",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "cherries",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "grapes",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "lemons",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "peaches",
                        ShelfLife = 4
                    },
                    new GroceryOption
                    {
                        Name = "oranges",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "pineapple",
                        ShelfLife = 4
                    },
                    new GroceryOption
                    {
                        Name = "olives",
                        ShelfLife = 90
                    },
                    new GroceryOption
                    {
                        Name = "tomatoes",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "bread, bakery",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "bread, packaged",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "cake",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "cereal",
                        ShelfLife = 120
                    },
                    new GroceryOption
                    {
                        Name = "cheese cake",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "cookies, bakery",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "cookies, packaged",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "pasta",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "noodles",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "white rice",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "brown rice",
                        ShelfLife = 4
                    },
                    new GroceryOption
                    {
                        Name = "wild rice",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "tortillas",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "qinuoa",
                        ShelfLife = 6
                    },
                    new GroceryOption
                    {
                        Name = "bacon",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "beef",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "lunch meat",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "gravy",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "hot dogs",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "sausage",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "chicken",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "chicken salad",
                        ShelfLife = 1
                    },
                    new GroceryOption
                    {
                        Name = "fresh fish",
                        ShelfLife = 2
                    },
                    new GroceryOption
                    {
                        Name = "smoked fish",
                        ShelfLife = 10
                    },
                    new GroceryOption
                    {
                        Name = "clams",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "oysters",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "scallops",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "shrimp",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "lobster",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "peanut butter",
                        ShelfLife = 90
                    },
                    new GroceryOption
                    {
                        Name = "pork",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "tofu",
                        ShelfLife = 3
                    },
                    new GroceryOption
                    {
                        Name = "turkey",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "asparagus",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "broccoli",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "carrots",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "cauliflower",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "celery",
                        ShelfLife = 21
                    },
                    new GroceryOption
                    {
                        Name = "corn",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "cucumbers",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "garlic",
                        ShelfLife = 90
                    },
                    new GroceryOption
                    {
                        Name = "green beans",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "kale",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "lettuce",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "mushrooms",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "onion",
                        ShelfLife = 28
                    },
                    new GroceryOption
                    {
                        Name = "peppers",
                        ShelfLife = 14
                    },
                    new GroceryOption
                    {
                        Name = "potatos",
                        ShelfLife = 90
                    },
                    new GroceryOption
                    {
                        Name = "salsa",
                        ShelfLife = 7
                    },
                    new GroceryOption
                    {
                        Name = "spinach",
                        ShelfLife = 5
                    },
                    new GroceryOption
                    {
                        Name = "hummus",
                        ShelfLife = 4
                    },
                    new GroceryOption
                    {
                        Name = "Mayonaise",
                        ShelfLife = 30
                    },
                    new GroceryOption
                    {
                        Name = "Salad Dressing",
                        ShelfLife = 30
                    },
                    new GroceryOption
                    {
                        Name = "Wasabi",
                        ShelfLife = 180
                    }

                );
                context.SaveChanges();
            }
        }
    }
}
