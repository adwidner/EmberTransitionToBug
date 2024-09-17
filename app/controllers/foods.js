import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FoodsController extends Controller {
  @service router;

  queryParams = ['food', 'nonFoodRelatedParam'];

  nonFoodRelatedParam = null;

  @action
  onFoodClick(food) {
    this.router.transitionTo({ queryParams: { food } });
  }

  @action
  setNonFoodRelatedParam(value) {
    this.router.transitionTo({ queryParams: { nonFoodRelatedParam: value } });
  }
}
