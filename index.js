import React from 'react';
import GithubCorner from 'react-github-corner';

export default (storyFn) => {
    const location = window.parent.location;
    const hostname = location.hostname;

    let githubRepository = '/';

    if (hostname.indexOf('github.io') > -1) {
        const user = hostname.split('.')[0];
        const repository = location.pathname.replace('/iframe.html', '');
        githubRepository = `https://github.com/${user}${repository}`;
    }

    return (
        <div>
            {storyFn()}
            <base target="_parent" />
            <GithubCorner href={githubRepository} />
        </div>
    );
};
