using Newtonsoft.Json;
using SoccerDB.Models;
using SoccerDB.Repositories.Interfaces;
using SoccerDB.Services.Interfaces;
using System;
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
            string response = await this._wcRepository.Get(wcTournamentYear);
            WCMatchesResponse matchesResponse = JsonConvert.DeserializeObject<WCMatchesResponse>(response);

            return ConvertMatchDays(matchesResponse, matchDay);
        }

        public async Task<WCMatchesDTO> GetMatches(string wcTournamentYear)
        {
            try
            {
                string response = await this._wcRepository.Get(wcTournamentYear);
                WCMatchesResponse matchesResponse = JsonConvert.DeserializeObject<WCMatchesResponse>(response);
                return ConvertMatches(matchesResponse);
            }
            catch (Exception ex)
            {
                WCMatchesDTO matchesDTO = new();
                matchesDTO.ErrorMessage = ex.Message;
                return matchesDTO;
            }
        }

        private static WCMatchesDTO ConvertMatches(WCMatchesResponse data)
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

        private static WCMatchDayDTO ConvertMatchDays(WCMatchesResponse data, string matchDay)
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
