import React from 'react';

import styles from './timeInterval.sass';

export default class TimeInterval extends React.Component {
    render() {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.58174 0.166504H9.59135C14.8885 0.166504 19.1827 4.4198 19.1827 9.6665C19.1827 14.9132 14.8885 19.1665 9.59135 19.1665C4.2942 19.1665 0 14.9132 0 9.6665C0 6.93429 0.951332 4.63134 2.81423 2.89955L4.31848 4.28369C2.84526 5.65322 2.01923 7.50938 2.01923 9.6665C2.01923 13.8086 5.40939 17.1665 9.59135 17.1665C13.7733 17.1665 17.1635 13.8086 17.1635 9.6665C17.1635 5.86343 14.3056 2.72148 10.601 2.23259V4.74545H8.58174V0.166504Z" fill="black"/>
                <path d="M10.4702 10.6665L3.02881 4.1665" stroke="black" stroke-width="1.5"/>
            </svg>

        );
    }
}
