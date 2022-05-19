using SoccerDB.Models;
using SoccerDB.Client;
using SoccerDB.Repositories.Interfaces;
using System.Threading.Tasks;

namespace SoccerDB.Repositories
{
    public class WCRepository : IWCRepository
    {
        private readonly IWCHttpClient _wcHttpClient;

        public WCRepository(IWCHttpClient wcHttpClient)
        {
            this._wcHttpClient = wcHttpClient;
        }
        public async Task<WCMatchesResponse> Get(string wcTournamentYear)
        {
            WCMatchesResponse response = await _wcHttpClient.Get(wcTournamentYear);

            return response;
        }
    }
}
