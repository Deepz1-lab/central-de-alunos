import {spawnSync} from 'node:child_process';
import {local,studentEmail} from './seed-auth.mjs';
const result=spawnSync(process.execPath,['node_modules/@playwright/test/cli.js','test'],{
 stdio:'inherit',env:{...process.env,CENTRAL_E2E_LIVE:'1',CENTRAL_TEST_STUDENT_EMAIL:studentEmail,
 VITE_SUPABASE_URL:local.url,VITE_SUPABASE_PUBLISHABLE_KEY:local.key}
});
process.exit(result.status??1);
