using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SoccerDB.Models
{
    public class Match
    {
        [JsonProperty("num")]
        public int Number { get; set; }

        [JsonProperty("date")]
        public DateTime Date { get; set; }

        [JsonProperty("team1")]
        public Team Team1 { get; set; }

        [JsonProperty("team2")]
        public Team Team2 { get; set; }

        [JsonProperty("score1")]
        public int Score1 { get; set; }

        [JsonProperty("score2")]
        public int Score2 { get; set; }

        [JsonProperty("goals1")]
        public ICollection<Goal> Goals1 { get; set; }


        [JsonProperty("goals2")]
        public ICollection<Goal> Goals2 { get; set; }

        [JsonProperty("group")]
        public string Group { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("stadium")]
        public Stadium Stadium { get; set; }
    }
}
