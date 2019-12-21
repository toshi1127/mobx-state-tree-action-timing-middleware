# mobx-state-tree-action-timing-middleware

mst-action-timing-middleware is middleware that displays the performance profile of mst action

![スクリーンショット 2019-12-21 22 58 56](https://user-images.githubusercontent.com/32378535/71309150-ea46ae00-2447-11ea-8208-5abedb81a1c2.png)

Created with reference to [redux-action-timing-middleware](https://github.com/MaxMEllon/redux-action-timing-middleware)



## Installing

```
$ npm i --save-dev mobx-state-tree-action-timing-middleware
# or
$ yarn add --dev mobx-state-tree-action-timing-middleware
```

## How to use

```
const Store = types.model({
  UIStore: types.optional(UIStore, {}),
})

export interface IStore extends Instance<typeof Store> {}

const createStore = (snapshot = null): IStore => {
  MobxStore = Store.create()
  if (snapshot) {
    applySnapshot(MobxStore, snapshot)
  }
  // Add actionTiming to middleware
  addMiddleware(MobxStore, actionTiming)
  return MobxStore
}

export default createStore
```