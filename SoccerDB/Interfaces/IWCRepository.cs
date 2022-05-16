using SoccerDB.Models;
using System.Threading.Tasks;

namespace SoccerDB.Repositories.Interfaces
{
    public interface IWCRepository
    {
        Task<WCMatchesResponse> Get(string wcTournamentYear);
    }
}
