import '../style.scss';

import { createTitles } from './page_titles.js';
import json from '../data.json';

const security = document.getElementById('securityPage');

createTitles(security, json.securityPage.title);