using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XpireServer.Models;

namespace XpireServer.ViewModel
{
    public class UserGrocery
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public GroceryItem[]  groceryItems {get;set;}


    }
}
