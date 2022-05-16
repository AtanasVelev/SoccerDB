using Newtonsoft.Json;

namespace SoccerDB.Models
{
    public class Goal
    {
        [JsonProperty("name")]
        public string PlayerName { get; set; }

        [JsonProperty("minute")]
        public int Minute { get; set; }
    }
}
