import React from 'react';
import Header from './Header';
import Card from './TournamentCard';
import {
  WC_2014_TXT,
  WC_2018_TXT,
  WC_2022_TXT,
  WC_2014_IMG_URL,
  WC_2018_IMG_URL,
  WC_2022_IMG_URL,
  WC_2014_DESCRIPTION,
  WC_2018_DESCRIPTION,
  WC_2022_DESCRIPTION,
  HEADER_LOGO_URL,
} from '../common/constants';

export default function Home() {
  return (
    <div>
      <Header logoURL={HEADER_LOGO_URL} />
      <div style={{ display: '-webkit-inline-box' }}>
        <div style={{ padding: '2vw' }}>
          <Card
            cardHeading={WC_2014_TXT}
            cardImageUrl={WC_2014_IMG_URL}
            cardDescription={WC_2014_DESCRIPTION}
            tournamentYear={'2014'}
            tournamentName={WC_2014_TXT}
          />
        </div>
        <div style={{ padding: '2vw' }}>
          <Card
            cardHeading={WC_2018_TXT}
            cardImageUrl={WC_2018_IMG_URL}
            cardDescription={WC_2018_DESCRIPTION}
            tournamentYear={'2018'}
            tournamentName={WC_2018_TXT}
          />
        </div>
        <div style={{ padding: '2vw' }}>
          <Card
            cardHeading={WC_2022_TXT}
            cardImageUrl={WC_2022_IMG_URL}
            cardDescription={WC_2022_DESCRIPTION}
            tournamentYear={'2022'}
            tournamentName={WC_2022_TXT}
            isDisabled={true}
          ></Card>
        </div>
      </div>
    </div>
  );
}
