import React, { FC, useEffect, useState } from 'react'
import './Form.scss'
import { useAppDispatch } from '../../feature/hooks'

import { Button } from '@mui/material'
import FormSearchBar from '../../components/forms_model/FormSearchBar'
import NewModal from '../../components/modals/NewModal'
import ImportFormModal from '../../components/forms_model/ImportFormModal'
import FormList from '../../components/forms_model/FormList'
import SearchBar from '../../components/processes/SearchBar'
import { getFormFetch } from '../../feature/slices/form/formSlice'
import { ModelType } from '../../config/modelType'

interface FormesProps {}

const Form: FC<FormesProps> = () => {
  const dispatch = useAppDispatch()

  const [openNewForm, setOpenNewForm] = useState(false)
  const [importForm, setOpenImportForm] = useState(false)

  useEffect(() => {
    //dispatch(getFormes())
    console.log('tests')
    dispatch(getFormFetch())
  }, [])
  return (
    <div>
      <div className="flex justify-between items-center p-5 bg-slate-100 border-b border-slate-400">
        <p className="text-2xl">Business Form Models</p>
        <div className="flex gap-2 h-10">
          <Button variant="contained" onClick={() => setOpenNewForm(true)}>
            Create Form Table
          </Button>
          <Button variant="contained" onClick={() => setOpenImportForm(true)}>
            Import Form Table
          </Button>
        </div>
      </div>
      <div className="flex gap-10">
        <SearchBar onSearch={(value) => console.log(value)} />
        <FormList />
      </div>

      {openNewForm && (
        <NewModal
          open={openNewForm}
          handleClose={() => setOpenNewForm(false)}
          modelType={ModelType.form}
        />
      )}
      {importForm && (
        <ImportFormModal
          open={importForm}
          handleClose={() => setOpenImportForm(false)}
        />
      )}
    </div>
  )
}

export default Form
