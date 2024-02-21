import ProcessItem from './ProcessItem'

const arr = [
  {
    id: 1,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 2,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 3,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 4,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
  {
    id: 5,
    name: 'DIGITAL_ONBOARDING',
    user: 'admin',
    edited: 'Yesterday at 4:52 PM',
  },
]
const ProcessList = () => {
  return (
    <div>
      {arr.length > 0 && <p>There are {arr.length} process models</p>}
      <div className="grid grid-cols-4 gap-4">
        {arr.map((item) => (
          <ProcessItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ProcessList
