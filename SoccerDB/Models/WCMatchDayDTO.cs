using System.Collections.Generic;

namespace SoccerDB.Models
{
    public class WCMatchDayDTO
    {
        public ICollection<Match> Matches { get; set; }

        public string ErrorMessage { get; set; }
    }
}
