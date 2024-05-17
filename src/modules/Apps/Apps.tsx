import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../feature/hooks'
import Modals from '../../components/modals/Modals'
import { ModelType } from '../../config/modelType'
import { getAppFetch } from '../../feature/slices/app/appSlice'
import ListModels from '../../components/list_models/ListModels'
import SearchInput from '../../components/search/SearchInput'
import { Box } from '@mui/material'
import AppList from '../../components/apps/AppList'


interface AppProps {}


const Apps: FC<AppProps> = () => {
  const dispatch = useAppDispatch()

  const [searchText, setSearchText] = useState('')

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  useEffect(() => {
    //dispatch(getApps())
    dispatch(getAppFetch({searchText}))
  }, [searchText])
  return (
    <div>
      <Modals modelType={ModelType.app} />
      <Box sx={{ display: 'flex', gap: 5 ,alignItems: 'flex-start'}}>
        <SearchInput handleSearchText={handleSearchText} />
        <AppList/>
      </Box>
    </div>
  )
}


export default Apps