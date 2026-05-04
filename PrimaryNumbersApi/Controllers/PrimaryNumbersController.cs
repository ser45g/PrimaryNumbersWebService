using Microsoft.AspNetCore.Mvc;
using PrimaryNumbersAPI.Responses;
using System.Numerics;
using PrimaryNumbersGenerators;
using System.ComponentModel.DataAnnotations;

namespace PrimaryNumbersAPI.Controllers
{
    [ApiController]
    [Route("/api/primary-numbers")]
    public class PrimaryNumbersController : Controller
    {
        [HttpGet]
        public IActionResult Index([FromQuery][Required] BigInteger start,[FromQuery] [Required] BigInteger end)
        {
            if (start < 2 || end < 2) {
                return Problem();
            }
            IEnumerable<BigInteger> numbers = new List<BigInteger>();
            IBigIntegerSqrtFinder bigIntegerSqrtFinder=new SteinerSqrtBigIntegerFinder();
            OptimizedSieveOfEratosthenesPrimaryNumbersRangeFinder finder = new(bigIntegerSqrtFinder);

            numbers= finder.GetPrimaryNumbersInRange(start, end);

            var response = new GetPrimaryNumbersResponse(numbers, numbers.Count(),start,end);
            return Ok(response);
        }
    }
}
