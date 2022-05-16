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
        [Route("2014/matchday/{matchDay}")]
        public async Task<IActionResult> GetWC2014MatchDay([FromRoute] string matchDay)
        {
            WCMatchDayDTO response = await this.wcService.GetMatchDay("2014",matchDay);

            if (response.Matches !=null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }

        [HttpGet]
        [AllowAnonymous]
        [Route("2014/matches")]
        public async Task<IActionResult> GetWC2014Matches()
        {
            WCMatchesDTO response = await this.wcService.GetMatches("2014");

            if (response.MatchDays != null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }

        [HttpGet]
        [Route("2018/matchday/{matchDay}")]
        public async Task<IActionResult> GetWC2018MatchDay([FromRoute] string matchDay)
        {
            WCMatchDayDTO response = await this.wcService.GetMatchDay("2018", matchDay);

            if (response.Matches != null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }

        [HttpGet]
        [Route("2018/matches")]
        public async Task<IActionResult> GetWC2018Matches()
        {
            WCMatchesDTO response = await this.wcService.GetMatches("2018");

            if (response.MatchDays != null && string.IsNullOrEmpty(response.ErrorMessage))
            {
                return this.Ok(response);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, response.ErrorMessage);
        }
    }
}
