using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XpireServer.Data;
using XpireServer.Models;

namespace XpireServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryOptionsController : ControllerBase
    {
        private readonly XpireServerContext _context;

        public GroceryOptionsController(XpireServerContext context)
        {
            _context = context;
        }

        // GET: api/GroceryOptions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroceryOption>>> GetGroceryOption()
        {
            return await _context.GroceryOption.ToListAsync();
        }

        // GET: api/GroceryOptions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GroceryOption>> GetGroceryOption(long id)
        {
            var groceryOption = await _context.GroceryOption.FindAsync(id);

            if (groceryOption == null)
            {
                return NotFound();
            }

            return groceryOption;
        }

        // PUT: api/GroceryOptions/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGroceryOption(long id, GroceryOption groceryOption)
        {
            if (id != groceryOption.Id)
            {
                return BadRequest();
            }

            _context.Entry(groceryOption).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GroceryOptionExists(id))
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

        // POST: api/GroceryOptions
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<GroceryOption>> PostGroceryOption(GroceryOption groceryOption)
        {
            _context.GroceryOption.Add(groceryOption);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGroceryOption", new { id = groceryOption.Id }, groceryOption);
        }

        // DELETE: api/GroceryOptions/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GroceryOption>> DeleteGroceryOption(long id)
        {
            var groceryOption = await _context.GroceryOption.FindAsync(id);
            if (groceryOption == null)
            {
                return NotFound();
            }

            _context.GroceryOption.Remove(groceryOption);
            await _context.SaveChangesAsync();

            return groceryOption;
        }

        private bool GroceryOptionExists(long id)
        {
            return _context.GroceryOption.Any(e => e.Id == id);
        }
    }
}
