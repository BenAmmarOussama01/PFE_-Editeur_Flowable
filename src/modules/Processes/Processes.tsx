import { FC, useEffect, useState } from 'react'
import './Processes.scss'
import { useAppDispatch } from '../../feature/hooks'
import { getProcess } from '../../feature/processes/processSlice'
import { Button } from '@mui/material'
import SearchBar from '../../components/processes/SearchBar'
import ProcessList from '../../components/processes/ProcessList'
import ImportProcessModal from '../../components/processes/ImportProcessModal'
import NewProcessModal from '../../components/processes/NewProcessModal'

interface ProcessesProps {}

const Processes: FC<ProcessesProps> = () => {
  const dispatch = useAppDispatch()

  const [openModal, setOpenModal] = useState(0)

  useEffect(() => {
    dispatch(getProcess())
  }, [])

  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Process Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained" onClick={() => setOpenModal(1)}>
            Create Process
          </Button>
          <Button variant="contained" onClick={() => setOpenModal(2)}>
            Import Process
          </Button>
        </div>
      </div>
      <div className="flex gap-10 ">
        <SearchBar onSearch={(value) => console.log(value)} />
        <ProcessList />
      </div>

      <NewProcessModal
        open={openModal === 1}
        handleClose={() => setOpenModal(0)}
        modelType={0}
      />

      <ImportProcessModal
        open={openModal === 2}
        handleClose={() => setOpenModal(0)}
      />
    </div>
  )
}

export default Processes
