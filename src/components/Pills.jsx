import React from 'react'

function Pills({
    title,
    onClick,
    pillStyle
}) {
  return (
    <button className={`border border-border px-4 py-2 rounded-4xl font-semibold text-sm  ${pillStyle}`}>
        {title}
    </button>
  )
}

export default Pills