import React from 'react'
import { runnerModule } from '../module/runner'

import { FaGithub, FaPlay } from 'react-icons/fa'

export default function Header() {
  const { runCode } = runnerModule.useActions()
  return (
    <div>
      <div className="flex h-15 justify-between items-center px-5">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/InfiniteXyy/playcode"
            target="_blank"
            className="leading-none"
          >
            <FaGithub className="h-[20px] w-[20px] text-dark-700" />
          </a>
          <h1 className="font-medium">PlayCode</h1>
        </div>

        <button className="focus:outline-transparent">
          <FaPlay onClick={runCode} className="text-green-500" />
        </button>
      </div>
    </div>
  )
}
