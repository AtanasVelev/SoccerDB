import React from "react";
import MatchDays from "./MatchDays";
import MatchDay from "./MatchDay";
import { useSelector } from "react-redux";
import GoBackButton from "./GoBackButton";

export default function TournamentDetails() {
  const matchDay = useSelector(state => state.matchDay);
  const tournamentYear = useSelector(state=>state.tournamentYear);
  return (
    <div style={{ width: "50%", display: "inline-block", padding: "5vw" }}>
      <GoBackButton />
      {tournamentYear && <MatchDays />}
      {matchDay !=null && <MatchDay />}
    </div>
  );
}
