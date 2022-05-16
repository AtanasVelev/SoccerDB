using Newtonsoft.Json;

namespace SoccerDB.Models
{
    public class Stadium
    {
        [JsonProperty("name")]
        public string Name { get; set; }
    }
}
