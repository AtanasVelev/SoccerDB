using Newtonsoft.Json;
using SoccerDB.Models;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace SoccerDB.Client
{
    public class WCHttpClient : IWCHttpClient
    {
        private readonly HttpClient _httpClient;
        public WCHttpClient(HttpClient httpClient)
        {
            httpClient.BaseAddress = new Uri("https://raw.githubusercontent.com/openfootball/worldcup.json/master/");
            _httpClient = httpClient;
        }
        public async Task<WCMatchesResponse> Get(string tournamentYear)
        {
            string queryString = $"{tournamentYear}/worldcup.json";

            WCMatchesResponse matchesResponse = null;

            try
            {
                string response = await _httpClient.GetStringAsync(queryString);

                matchesResponse = JsonConvert.DeserializeObject<WCMatchesResponse>(response);

                return matchesResponse;
            }
            catch (Exception ex)
            {
                matchesResponse.ErrorMessage = ex.Message;

                return matchesResponse;
            }
        }
    }
}
