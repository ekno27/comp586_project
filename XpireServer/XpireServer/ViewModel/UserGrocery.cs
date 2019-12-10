using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XpireServer.ViewModel
{
    public class UserGrocery
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string GroceryItem { get; set; }
        public int ShelfLife { get; set; }
        public System.DateTime ExpirationDate { get; set; }

    }
}
