import { FC, useEffect } from 'react'
import './CaseModels.scss'
import { useAppDispatch } from '../../feature/hooks'
import CaseList from '../../components/caseModels/case_list/CaseList'
import { getCase } from '../../feature/cases/caseSlice'
import { Button } from '@mui/material'

interface CaseModelsProps {}

const CaseModels: FC<CaseModelsProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCase())
  }, [])
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Process Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained">Create Process</Button>
          <Button variant="contained">Import Process</Button>
        </div>
      </div>
      <div className="flex gap-10">
        <CaseList />
      </div>
    </div>
  )
}

export default CaseModels
