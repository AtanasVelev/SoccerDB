using System.Threading.Tasks;

namespace SoccerDB.Repositories.Interfaces
{
    public interface IWCRepository
    {
        Task<string> Get(string wcTournamentYear);
    }
}
