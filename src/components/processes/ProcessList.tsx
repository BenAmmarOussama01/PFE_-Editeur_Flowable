
import ProcessItem from './process_item/ProcessItem';
import { arrayOfXmlProcess } from '../../fakeXml';
import { useAppSelector } from '../../feature/hooks';
import Loader from '../loader/Loader';

const ProcessList = () => {

  const isLoading = useAppSelector((state) => state.process.isLoading)
  const processes = useAppSelector((state) => state.process.items);

  // Step 2: Show loader when data is being loaded
  return isLoading ? (
    <Loader />
  ) : (
    <div>
      {processes.length > 0 && (
        <p>There are {processes.length} process models</p>
      )}
      <div className="grid grid-cols-4 gap-4 mr-4">
        {processes.map((item, index) => (
          <ProcessItem {...item} key={index} xml={arrayOfXmlProcess[index]} /> // Ensure key is not overwritten // Add key prop for each ProcessItem
        ))}
      </div>
    </div>
  );}

export default ProcessList;