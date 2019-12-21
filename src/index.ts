import { IMiddlewareEvent } from 'mobx-state-tree'

const isBrowser = () => !(typeof window === 'undefined')

export default function actionTiming(
  call: IMiddlewareEvent,
  next: (actionCall: IMiddlewareEvent, callback?: (value: any) => any) => void,
  abort: (value: any) => void,
) {
  if (!isBrowser()) return next(call)
  performance.mark(`${call.name}_start`)
  performance.mark(`${call.name}_end`)
  performance.measure(
    `\uD83D\uDD25 ${call.name}`,
    `${call.name}_start`,
    `${call.name}_end`,
  )
  next(call)
}
