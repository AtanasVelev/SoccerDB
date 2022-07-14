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
        public async Task<string> Get(string tournamentYear)
        {
            string queryString = $"{tournamentYear}/worldcup.json";

            try
            {
                string response = await _httpClient.GetStringAsync(queryString);

                return response;
            }
            catch (Exception ex)
            {
                //matchesResponse.ErrorMessage = ex.Message;

                return ex.Message;
            }
        }
    }
}
