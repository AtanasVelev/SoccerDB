using System.Threading.Tasks;

namespace SoccerDB.Client
{
    public interface IWCHttpClient
    {
        Task<string> Get(string tournamentYear);
    }
}
