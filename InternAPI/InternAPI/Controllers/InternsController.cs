using InternAPI.Models;
using InternAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternsController : ControllerBase
    {
        IInternCollectionService _internCollectionService;

        public InternsController(IInternCollectionService internCollectionService)
        {
            _internCollectionService = internCollectionService ?? throw new ArgumentNullException(nameof(internCollectionService));
        }

        /// <summary>
        /// Get intern by id
        /// </summary>
        /// <returns>intern</returns>
        /// 
        [HttpGet("{id}")]
        public async Task<IActionResult> GetInternByIdAsync(Guid id)
        {
            var intern = await _internCollectionService.GetAsync(id);

            if (intern == null)
                return NotFound("Intern not found");
            return Ok(intern);
        }
        /// <summary>
        /// Get all interns
        /// </summary>
        /// <returns>list of interns</returns>

        [HttpGet]
        public async Task<IActionResult> GetInternsAsync()
        {
            return Ok(await _internCollectionService.GetAllAsync());
        }

        /// <summary>
        /// Create new intern
        /// </summary>
        /// <param name="intern">(Intern) intern</param>
        /// <returns>updated list of interns</returns>
        [HttpPost]
        public async Task<IActionResult> CreateInternAsync([FromBody] Intern intern)
        {
            if (intern == null)
                return BadRequest("Intern is null!");
            await _internCollectionService.CreateAsync(intern);
            return Ok();
        }

        /// <summary>
        /// Update one intern
        /// </summary>
        /// <param name = "id" > (Guid)id of the intern</param>
        /// <param name = "intern" > (Intern)updated intern</param>

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateInternAsync(Guid id, [FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("Intern is null!");
            }

            if (await _internCollectionService.UpdateAsync(id, intern) == true)
                return Ok();

            return NotFound("Intern not found!");

        }
        /// <summary>
        /// Delete one intern
        /// </summary>
        /// <param name="id">(Guid) id of the intern</param>
        /// <returns>Ok if the id is valid, otherwise NotFound </returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternAsync(Guid id)
        {

            if (await _internCollectionService.DeleteAsync(id) == false)
                return NotFound("Intern not found!");
            else
                return Ok();
        }


    }
}
