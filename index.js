import React from 'react';
import GithubCorner from 'react-github-corner';

export default (storyFn) => {
    const location = window.location;
    const hostname = location.hostname.split('.')[0];

    let githubRepository = '/';

    if (hostname.indexOf('github.io') > -1) {
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
