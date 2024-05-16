import { FC, useEffect } from 'react'
import { useAppDispatch } from '../../feature/hooks'
import Modals from '../../components/modals/Modals'
import { ModelType } from '../../config/modelType'
import { getAppFetch } from '../../feature/slices/app/appSlice'
import AppList from '../../components/apps/AppList'
import AppSearchBar from '../../components/apps/AppSearchbar'

interface AppesProps {}

const App: FC<AppesProps> = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAppFetch())
  }, [])
  return (
    <div>
      <Modals modelType={ModelType.app} />
      <div className="flex gap-10">
        <AppSearchBar
          handleSearch={(value: string) => console.log(value)}
          arr={[]}
        />
        <AppList />

      </div>
    </div>
  )
}

export default App