using SoccerDB.Models;
using System.Threading.Tasks;

namespace SoccerDB.Client
{
    public interface IWCHttpClient
    {
        Task<WCMatchesResponse> Get(string tournamentYear);
    }
}
