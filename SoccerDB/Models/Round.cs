using Newtonsoft.Json;
using System.Collections.Generic;

namespace SoccerDB.Models
{
    public class Round
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("matches")]
        public ICollection<Match> Matches { get; set; }
    }
}
