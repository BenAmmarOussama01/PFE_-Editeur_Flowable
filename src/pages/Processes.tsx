import { useState } from 'react'
import Button from '@mui/material/Button'
import ProcessList from '../components/processes/ProcessList'
import NewProcessModal from '../components/processes/NewProcessModal'
import ImportProcessModal from '../components/processes/ImportProcessModal'
import SearchBar from '../components/processes/SearchBar'
import fakeData from '../fakeData.json'
const Processes = () => {

  const [openNewProcess, setOpenNewProcess] = useState(false)
  const [importProcess, setOpenImportProcess] = useState(false)
  const handleOpenNewProcess = () => setOpenNewProcess(true)
  const handleCloseNewProcess = () => setOpenNewProcess(false)
  const handleOpenImportProcess = () => setOpenImportProcess(true)
  const handleCloseImportProcess = () => setOpenImportProcess(false)
  /*const handleCreateProcess = (process: Process) =>
    setArr((prev) => [process, ...prev])*/
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Process Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained" onClick={handleOpenNewProcess}>
            Create Process
          </Button>
          <Button variant="contained" onClick={handleOpenImportProcess}>
            Import Process
          </Button>
        </div>
      </div>
      <div className="flex gap-10">
        <SearchBar onSearch={(value) => console.log(value)} />
        <ProcessList arr={fakeData} />
      </div>

      {openNewProcess && (
        <NewProcessModal
          open={openNewProcess}
          handleClose={handleCloseNewProcess}
        />
      )}
      {importProcess && (
        <ImportProcessModal
          open={importProcess}
          handleClose={handleCloseImportProcess}
        />
      )}
    </div>
  )
}

export default Processes
