using Newtonsoft.Json;

namespace SoccerDB.Models
{
    public class Team
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
