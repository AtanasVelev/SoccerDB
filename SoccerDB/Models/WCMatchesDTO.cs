using System.Collections.Generic;

namespace SoccerDB.Models
{
    public class WCMatchesDTO
    {
        public ICollection<string> MatchDays { get; set; }
        public string ErrorMessage { get; set; }
    }
}
