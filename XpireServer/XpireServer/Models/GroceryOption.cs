using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XpireServer.Models
{
    public class GroceryOption
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int ShelfLife { get; set; }
    }
}
