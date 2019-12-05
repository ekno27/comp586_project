using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace XpireServer.Models
{
    public class GroceryItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public int ShelfLife { get; set; }

        [DataType(DataType.Date)]
        public DateTime ExpirationDate { get; set; }

        public int UserId { get; set; }

    }
}
