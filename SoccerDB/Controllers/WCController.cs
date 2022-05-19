using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SoccerDB.Models;
using SoccerDB.Services.Interfaces;
using System.Threading.Tasks;

namespace SoccerDB.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WCController : ControllerBase
    {
        private readonly IWCService wcService;

        public WCController(IWCService wcService)
        {
            this.wcService = wcService;
        }

        [HttpGet]
        [Route("{tournamentYear}/matchday/{matchDay}")]
        public async Task<IActionResult> GetWC2014MatchDay([FromRoute] string tournamentYear, string matchDay)
        {
            WCMatchDayDTO response = await this.wcService.GetMatchDay(tournamentYear, matchDay);

            if (response.Matches != null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("{tournamentYear}/matches")]
        public async Task<IActionResult> GetWC2014Matches([FromRoute] string tournamentYear)
        {
            WCMatchesDTO response = await this.wcService.GetMatches(tournamentYear);

            if (response.MatchDays != null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }
    }
}
