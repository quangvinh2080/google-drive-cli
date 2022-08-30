import { emptyTrash } from './helper';

after('Tear down worksheets', async () => {
  await emptyTrash();
});

