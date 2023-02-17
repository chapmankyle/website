import React from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { increment, selectCount } from "./counterSlice";

/**
 * Counter that can be incremented.
 */
export default function Counter() {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()

  return (
    <button className="bg-slate-800" onClick={() => dispatch(increment())}>
      Count: {count}
    </button>
  )
}
