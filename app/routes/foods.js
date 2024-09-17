import Route from '@ember/routing/route';

export default class FoodsRoute extends Route {
  queryParams = {
    nonFoodRelatedParam: {
      refreshModel: true,
    },
  };

  model() {
    console.log('model hooks triggered');
    return {};
  }
}
