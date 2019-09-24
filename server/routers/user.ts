import * as Router from 'koa-router';
import * as testCtrl from '../controllers/test';
const router: Router = new Router();

router.prefix('/api/test');

router.get('/', testCtrl.getName);

router.get('/getData', testCtrl.getData);

router.post('/createTest', testCtrl.createTest);

module.exports = router.routes();





