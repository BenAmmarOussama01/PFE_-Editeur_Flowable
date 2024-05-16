import { FC, useEffect, useState } from 'react'
import './Processes.scss'
import { useAppDispatch, useAppSelector } from '../../feature/hooks'
import { getProcess } from '../../feature/slices/processes/processSlice'
import Box from '@mui/material/Box'
import { ModelType } from '../../config/modelType'
import Modals from '../../components/modals/Modals'
import ListModels from '../../components/list_models/ListModels'
import SearchInput from '../../components/search/SearchInput'

const Processes = () => {
  const dispatch = useAppDispatch()
  const { isLoading, processes } = useAppSelector((state) => state.process)

  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    dispatch(getProcess({ searchText }))
  }, [searchText])

  return (
    <div>
      <Modals modelType={ModelType.process} />
      <Box sx={{ display: 'flex', gap: 5 }}>
        <SearchInput handleSearchText={handleSearchText} />
        <ListModels isLoading={isLoading} items={processes} />
      </Box>
    </div>
  )
}

export default Processes
