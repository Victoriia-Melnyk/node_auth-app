import 'dotenv/config';

import { User } from './src/models/User.js';
import { Token } from './src/models/Token.js';
import { client } from './src/utils/db.js';

client.sync({ force: true });
