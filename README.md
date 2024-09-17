# Ember transitionTo/param default bug

This app is for reproducing a bug where the router service's `transitionTo` function needlessly calls the route model hook.
When a query parameter has a default value set in the controller and is also set to `refreshModel: true` in the route,
while the parameter is set to the default value, transitions to the route where ANY parameter changes will trigger the model refresh.
It is expected that the model hook would only trigger for parameters that have `refreshModel: true` set in the route and are updated.

For this app example, I set the query parameter `nonFoodRelatedParam`'s default value to `null` in the controller and `refreshModel: true` in the route.
Clicking on any of the food buttons in the app will transition to the foods route with an updated `food` query paramater.
If you open your web console in the app you can see that the model hook triggers despite the fact that `nonFoodRelatedParam` was not updated.
To make things even weirder, the needless hook trigger only happens every other transition.

I want to make clear that this issue does not happen when the problematic parameter is not set to the default value.
If you click the "Set to non-default" button in the app, you can see that clicking the food buttons lo longer reproduces the issue.
I also want to make clear that this issue is reproducable with ANY default value, not just `null`.

## Repro Steps
1. npm ci
2. ember s
3. go to http://localhost:4200/foods
