using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using XpireServer.Models;

namespace XpireServer.Data
{
    public class XpireServerContext : DbContext
    {
        public XpireServerContext (DbContextOptions<XpireServerContext> options)
            : base(options)
        {
        }

        public DbSet<XpireServer.Models.GroceryItem> GroceryItem { get; set; }
        public DbSet<XpireServer.Models.User> User { get; set; }
        public DbSet<XpireServer.Models.GroceryOption> GroceryOption { get; set; }

    }
}
