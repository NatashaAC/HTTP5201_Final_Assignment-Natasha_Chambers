import '../style.scss';

import { createTitles } from './page_titles.js';
import json from '../data.json';

const badEx = document.getElementById('badExPage');

createTitles(badEx, json.badExPage.title);