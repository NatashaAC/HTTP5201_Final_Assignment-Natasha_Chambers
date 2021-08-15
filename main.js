import './style.scss';

import { createTitles } from './modules/page_titles.js';
import json from './data.json';

const app = document.getElementById('app');

createTitles(app, json.home.title);