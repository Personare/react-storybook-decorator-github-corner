# react-storybook-decorator-github-corner

> Storybook decorator to render the Github Corner. 

<p align="center">
  <img width="100%" src="./screenshot.png?raw=true" alt="Screenshot" />
</p>

## Installation 

```bash
npm install @personare/react-storybook-decorator-github-corner --save-dev
```

## Using globally mode

Inside `.storybook/config.js`

```js
import { configure, addDecorator } from '@kadira/storybook';
import GithubCorner from '@personare/react-storybook-decorator-github-corner';

addDecorator(GithubCorner);

function loadStories() {
  require('../src/Button.story');
}

configure(loadStories, module);
```

*Note: The link of repository is based on pages that are hosted on Github Pages (***.github.io)*
