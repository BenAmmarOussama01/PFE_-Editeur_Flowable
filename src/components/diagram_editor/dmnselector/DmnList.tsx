import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import DmnItem from './DmnItem'

import { getDecisionFetch } from '../../../feature/slices/decisions/decisionTableSlice'

import { useAppDispatch, useAppSelector } from '../../../feature/hooks'

const items = [
  {
    id: '85f08590-1dea-11ef-945a-3003c8e3499e',
    name: 'f1',
    key: 'f1',
    description: 'azeazeaze',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1718397543493,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
  {
    id: 'f4b8eda8-2a8d-11ef-aff8-3003c8e3499e',
    name: 'f3',
    key: 'f3',
    description: 'dqsdqs',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1718397509058,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
  {
    id: '75e891cd-2046-11ef-81a9-3003c8e3499e',
    name: 'f2',
    key: 'f2',
    description: 'dqsdqs',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1717267259113,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
  {
    id: '75e891cd-2046-11ef-81a9-3003c8e3499e',
    name: 'f2',
    key: 'f2',
    description: 'dqsdqs',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1717267259113,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
  {
    id: '75e891cd-2046-11ef-81a9-3003c8e3499e',
    name: 'f2',
    key: 'f2',
    description: 'dqsdqs',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1717267259113,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
  {
    id: '75e891cd-2046-11ef-81a9-3003c8e3499e',
    name: 'f2',
    key: 'f2',
    description: 'dqsdqs',
    createdBy: 'admin',
    lastUpdatedBy: 'admin',
    lastUpdated: 1717267259113,
    latestVersion: true,
    version: 1,
    comment: null,
    modelType: 2,
    tenantId: '',
  },
]

const DmnList = ({
  setSelectedDmn,
  handleClose,
}: {
  setSelectedDmn: (value: string) => void
  handleClose: () => void
}) => {
  const dispatch = useAppDispatch()
  const { items } = useAppSelector((state) => state.decision)

  useEffect(() => {
    dispatch(getDecisionFetch({ searchText: '' }))
  }, [])
  return (
    <Grid container spacing={2} sx={{ mb: 13, mx: 'auto' }}>
      {items &&
        items.map((item, index) => (
          <Grid item key={item.key}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                  zIndex: 1,
                },
              }}
            >
              <DmnItem
                {...item}
                keyy={item.key}
                setSelectedDmn={setSelectedDmn}
                handleClose={handleClose}
              />
            </Box>
          </Grid>
        ))}
    </Grid>
  )
}

export default DmnList
