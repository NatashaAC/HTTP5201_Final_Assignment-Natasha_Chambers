import '../style.scss';

import { createTitles } from './page_titles.js';
import json from '../data.json';

const qaPage = document.getElementById('qaPage');

createTitles(qaPage, json.qaPage.title);