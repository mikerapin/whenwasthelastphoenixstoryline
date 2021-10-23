import './App.css';

import { Phoenix } from './PhoenixIcon';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const App = (): React.ReactElement => {
    const timeSince = dayjs().from('10/20/2021', true);
    return (
        <main>
            <h1>When Was The Last Phoenix Storyline?</h1>
            <Phoenix />
            <div id="time-ago">
                <div id="time">{timeSince} ago</div>
            </div>

            <div id="last-storyline">
                <a href="https://www.amazon.com/Phoenix-Song-Echo-1-5-ebook/dp/B099P3S4FC/">
                    The last Phoenix Storyline was in the series Phoenix Song: Echo #1 published on October 20, 2021.
                </a>
            </div>

            <div id="credits">
                Created by
                <a href="https://www.twitter.com/mikerapin" rel="noopener noreferrer" target="_blank">
                    @mikerapin
                </a>
                |
                <a href="https://thenounproject.com/term/phoenix/85574/" rel="noopener noreferrer" target="_blank">
                    phoenix
                </a>
                by Design Rails from
                <a href="https://thenounproject.com/" target="_blank" rel="noreferrer">
                    {' '}
                    rel="noreferrer" the Noun Project
                </a>
            </div>
        </main>
    );
};

export default App;
