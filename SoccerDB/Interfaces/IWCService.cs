using SoccerDB.Models;
using System.Threading.Tasks;

namespace SoccerDB.Services.Interfaces
{
    public interface IWCService
    {
        Task<WCMatchDayDTO> GetMatchDay(string wcTournamentYear, string matchDay);
        Task<WCMatchesDTO> GetMatches(string wcTournamentYear);
    }
}
