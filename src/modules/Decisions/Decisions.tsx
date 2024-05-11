import React, { FC, useEffect, useState } from 'react'
import './Decisions.scss'
import { useAppDispatch } from '../../feature/hooks'
import { getDecisionFetch } from '../../feature/slices/decisions/decisionTableSlice'
import { formatDate } from '../../config/utils/formatDate'
import { Button } from '@mui/material'
import DecisionSearchBar from '../../components/decision_model/decisionSearchbar'
import DecisionTableList from '../../components/decision_model/DecisionTableList'
import DecisionServiceList from '../../components/decision_model/DecisionSerciceList'
import NewDecisionModal from '../../components/decision_model/NewDecisionModal'
import ImportDecisionModal from '../../components/decision_model/ImportDecisionModal'

interface DecisionesProps {}

const Decisions: FC<DecisionesProps> = () => {
  const dispatch = useAppDispatch()

  const [openNewDecision, setOpenNewDecision] = useState(false)
  const [importDecision, setOpenImportDecision] = useState(false)

  useEffect(() => {
    //dispatch(getDecisiones())
    console.log('tests')
    dispatch(getDecisionFetch())
  }, [])
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Decision Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained" onClick={() => setOpenNewDecision(true)}>
            Create Decision Table
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenImportDecision(true)}
          >
            Import Decision Table
          </Button>
        </div>
      </div>
      <div className="flex gap-10">
        <DecisionSearchBar
          handleSearch={(value: string) => console.log(value)}
          arr={[]}
        />
        <DecisionTableList />
        <DecisionServiceList />
      </div>

      {openNewDecision && (
        <NewDecisionModal
          open={openNewDecision}
          handleClose={() => setOpenNewDecision(false)}
        />
      )}
      {importDecision && (
        <ImportDecisionModal
          open={importDecision}
          handleClose={() => setOpenImportDecision(false)}
        />
      )}
    </div>
  )
}

export default Decisions
