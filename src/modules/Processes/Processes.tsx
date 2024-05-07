import { FC, useEffect, useState } from 'react'
import './Processes.scss'
import { useAppDispatch } from '../../feature/hooks'
import { getProcess } from '../../feature/processes/processSlice'
import { Button } from '@mui/material'
import SearchBar from '../../components/processes/SearchBar'
import ProcessList from '../../components/processes/ProcessList'
import NewProcessModal from '../../components/processes/NewProcessModal'
import ImportProcessModal from '../../components/processes/ImportProcessModal'
import NewModal from '../../components/modals/NewModal'

interface ProcessesProps {}

const Processes: FC<ProcessesProps> = () => {
  const dispatch = useAppDispatch()

  const [openNewProcess, setOpenNewProcess] = useState(false)
  const [importProcess, setOpenImportProcess] = useState(false)

  useEffect(() => {
    //dispatch(getProcesses())
    dispatch(getProcess())
  }, [])
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Process Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained" onClick={() => setOpenNewProcess(true)}>
            Create Process
          </Button>
          <Button
            variant="contained"
            onClick={() => setOpenImportProcess(true)}
          >
            Import Process
          </Button>
        </div>
      </div>
      <div className="flex gap-10 ">
        <SearchBar onSearch={(value) => console.log(value)} />
        <ProcessList />
      </div>

      {openNewProcess && (
        <NewModal
          open={openNewProcess}
          handleClose={() => setOpenNewProcess(false)}
        />
      )}
      {importProcess && (
        <ImportProcessModal
          open={importProcess}
          handleClose={() => setOpenImportProcess(false)}
        />
      )}
    </div>
  )
}

export default Processes
