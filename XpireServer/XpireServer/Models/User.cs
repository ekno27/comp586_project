using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace XpireServer.Models
{
    public class User
    {
        public long Id { get; set; }
        public string FirstName { get; set; }

        public string Email { get; set; }

        public virtual ICollection<GroceryItem> GroceryItems { get; set; }

    }
}
