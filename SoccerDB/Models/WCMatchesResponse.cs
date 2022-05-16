using Newtonsoft.Json;
using System.Collections.Generic;

namespace SoccerDB.Models
{
    public class WCMatchesResponse
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("rounds")]
       public ICollection<Round> Rounds { get; set; }

        public string ErrorMessage { get; set; }
    }
}
