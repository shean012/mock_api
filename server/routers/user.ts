import * as Router from 'koa-router';
import * as testCtrl from '../controllers/test';
const router: Router = new Router();

router.prefix('/api/test');

router.get('/', testCtrl.getName);

router.get('/getData', testCtrl.getData);

router.post('/createTest', testCtrl.createTest);

router.get('/getLoaction', testCtrl.getLocation);

router.get('/getCORSlocation', testCtrl.getCORSlocation);

module.exports = router.routes();





