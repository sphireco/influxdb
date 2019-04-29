// Libraries
import React, {FunctionComponent, useMemo} from 'react'
import {Config, fluxToTable} from '@influxdata/vis'

// Types
import {RemoteDataState, XYView} from 'src/types'

interface Props {
  files: string[]
  loading: RemoteDataState
  viewProperties: XYView
  children: (config: Config) => JSX.Element
}

const XYTransform: FunctionComponent<Props> = ({
  files,
  config,
  viewProperties,
  children,
}) => {
  const result = useMemo(() => fluxToTable(files.join('\n\n')))

  const config: Config = useMemo(() => ({}), [])

  return children(config)
}

export default XYTransform
