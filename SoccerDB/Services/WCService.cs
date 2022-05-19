using SoccerDB.Models;
using SoccerDB.Repositories.Interfaces;
using SoccerDB.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SoccerDB.Services
{
    public class WCService : IWCService
    {
        private readonly IWCRepository _wcRepository;

        public WCService(IWCRepository wcRepository)
        {
            this._wcRepository = wcRepository;
        }
        public async Task<WCMatchDayDTO> GetMatchDay(string wcTournamentYear, string matchDay)
        {
            WCMatchesResponse data = await this._wcRepository.Get(wcTournamentYear);

            return ConvertMatchDays(data, matchDay);
        }

        public async Task<WCMatchesDTO> GetMatches(string wcTournamentYear)
        {
            WCMatchesResponse data = await this._wcRepository.Get(wcTournamentYear);
            return ConvertMatches(data);
        }

        private WCMatchesDTO ConvertMatches(WCMatchesResponse data)
        {
            WCMatchesDTO matches = new WCMatchesDTO();

            if (data.Name != null && data.Rounds != null && data.ErrorMessage == null)
            {
                matches.MatchDays = data.Rounds.Select(x => x.Name).ToList();
                return matches;
            }
            else
            {
                matches.ErrorMessage = data.ErrorMessage;
                return matches;
            }
        }

        private WCMatchDayDTO ConvertMatchDays(WCMatchesResponse data, string matchDay)
        {
            WCMatchDayDTO matches = new WCMatchDayDTO();

            if (data.Name != null && data.Rounds != null && data.ErrorMessage == null)
            {
                matches.Matches = data.Rounds
                    .Where(rounds => rounds.Name == matchDay)
                    .Select(rounds => rounds.Matches).FirstOrDefault();

                return matches;
            }
            else
            {
                matches.ErrorMessage = data.ErrorMessage;
                return matches;
            }
        }
    }
}
