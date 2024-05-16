import { FC, useEffect, useState } from 'react'
import './DecisionTable.scss'
import { useAppDispatch, useAppSelector } from '../../feature/hooks'
import { getDecisionFetch } from '../../feature/slices/decisions/decisionTableSlice'
import { ModelType } from '../../config/modelType'
import Modals from '../../components/modals/Modals'
import Box from '@mui/material/Box'
import SearchInput from '../../components/search/SearchInput'
import ListModels from '../../components/list_models/ListModels'

interface DecisionTableProps {}

const DecisionTable: FC<DecisionTableProps> = () => {
  const dispatch = useAppDispatch()
  const { isLoading, items } = useAppSelector((state) => state.decision)

  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    dispatch(getDecisionFetch({ searchText }))
  }, [searchText])

  return (
    <div>
      <Modals modelType={ModelType.decisionTable} />
      <Box sx={{ display: 'flex', gap: 5 }}>
        <SearchInput handleSearchText={handleSearchText} />
        <ListModels isLoading={isLoading} items={items} />
      </Box>
    </div>
  )
}

export default DecisionTable
