using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using XpireServer.Data;

namespace XpireServer.Models
{
    public class GroceryItemSeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new XpireServerContext(
                serviceProvider.GetRequiredService<DbContextOptions<XpireServerContext>>()))
            {
                if (context.GroceryItem.Any())
                {
                    return;
                }
                context.GroceryItem.AddRange(
                    new GroceryItem
                    {
                        Name = "eggs",
                        ShelfLife = 6,
                        ExpirationDate = DateTime.Parse("2020-2-12"),
                        UserId = 1
                    },
                    new GroceryItem
                    {
                        Name = "milk",
                        ShelfLife = 12,
                        ExpirationDate = DateTime.Parse("2020-2-12"),
                        UserId = 1
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
