import React, { FC, useEffect, useState } from 'react'
import './Form.scss'
import { useAppDispatch, useAppSelector } from '../../feature/hooks'
import Box from '@mui/material/Box'
import { getFormFetch } from '../../feature/slices/form/formSlice'
import { ModelType } from '../../config/modelType'
import Modals from '../../components/modals/Modals'
import SearchInput from '../../components/search/SearchInput'
import ListModels from '../../components/list_models/ListModels'

interface FormesProps {}

const Form: FC<FormesProps> = () => {
  const dispatch = useAppDispatch()
  const { isLoading, forms } = useAppSelector((state) => state.form)

  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  useEffect(() => {
    //dispatch(getFormes())
    dispatch(getFormFetch({ searchText }))
  }, [searchText])
  return (
    <div>
      <Modals modelType={ModelType.form} />
      <Box sx={{ display: 'flex', gap: 5, alignItems: 'flex-start' }}>
        <SearchInput handleSearchText={handleSearchText} />
        <ListModels
          isLoading={isLoading}
          items={forms}
          modelType={ModelType.form}
        />
      </Box>
    </div>
  )
}

export default Form
