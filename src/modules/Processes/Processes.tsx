import { FC, useEffect, useState } from 'react'
import './Processes.scss'
import { useAppDispatch } from '../../feature/hooks'
import { getProcess } from '../../feature/slices/processes/processSlice'
import Box from '@mui/material/Box'
import SearchBar from '../../components/processes/SearchBar'
import ProcessList from '../../components/processes/ProcessList'
import { ModelType } from '../../config/modelType'
import Modals from '../../components/modals/Modals'

interface ProcessesProps {}

const Processes: FC<ProcessesProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProcess())
  }, [])

  return (
    <div>
      <Modals modelType={ModelType.process} />
      <Box sx={{ display: 'flex', gap: 5 }}>
        <SearchBar onSearch={(value) => console.log(value)} />
        <ProcessList />
      </Box>
    </div>
  )
}

export default Processes
