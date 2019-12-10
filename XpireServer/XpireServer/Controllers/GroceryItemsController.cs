using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XpireServer.Data;
using XpireServer.Models;
using XpireServer.ViewModel;

namespace XpireServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryItemsController : ControllerBase
    {
        private readonly XpireServerContext _context;

        public GroceryItemsController(XpireServerContext context)
        {
            _context = context;
        }

        // GET: api/GroceryItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroceryItem>>> GetGroceryItem()
        {
            return await _context.GroceryItem.ToListAsync();
        }

        // GET: api/GroceryItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroceryItem>> GetGroceryItem(long id)
        {
            var groceryItem = await _context.GroceryItem.FindAsync(id);

            if (groceryItem == null)
            {
                return NotFound();
            }

            return groceryItem;
        }

        [HttpGet("User/{id}")]
        public UserGrocery[] GetGroceryItemViewModel(long id)
        {
            var groceryItems = _context.GroceryItem.Where(item => item.UserId == id).ToArray();
            var user = _context.User.Find(id);
            var list = new List<UserGrocery>();
            foreach(GroceryItem item in groceryItems)
            {
                UserGrocery response = new UserGrocery
                {
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    GroceryItem = item.Name,
                    ShelfLife = item.ShelfLife,
                    ExpirationDate = item.ExpirationDate
                };
                list.Add(response);
            }
            return list.ToArray();

        }

        // PUT: api/GroceryItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroceryItem(long id, GroceryItem groceryItem)
        {
            if (id != groceryItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(groceryItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroceryItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/GroceryItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<GroceryItem>> PostGroceryItem(GroceryItem groceryItem)
        {
            _context.GroceryItem.Add(groceryItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroceryItem", new { id = groceryItem.Id }, groceryItem);
        }

        // DELETE: api/GroceryItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GroceryItem>> DeleteGroceryItem(long id)
        {
            var groceryItem = await _context.GroceryItem.FindAsync(id);
            if (groceryItem == null)
            {
                return NotFound();
            }

            _context.GroceryItem.Remove(groceryItem);
            await _context.SaveChangesAsync();

            return groceryItem;
        }

        private bool GroceryItemExists(long id)
        {
            return _context.GroceryItem.Any(e => e.Id == id);
        }
    }
}
