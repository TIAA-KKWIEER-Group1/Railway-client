import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { updateTrainData } from '../../services/train.services';

function UpdateTrainPage() {
  const [trainId, setTrainId] = useState('');
  const [stationName, setStationName] = useState('');
  const [updatedArrivalDate, setUpdatedArrivalDate] = useState('');
  const [updatedArrivalTime, setUpdatedArrivalTime] = useState('');

  const handleUpdate = async () => {
    try {
      await updateTrainData({
        trainId,
        stationName,
        updatedArrivalDate,
        updatedArrivalTime,
      });
      toast.success('Train Time Updated');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div style={{ marginTop: '4rem' }}>
      <h2>Update Train</h2>

      <input
        type="text"
        value={trainId}
        onChange={(e) => setTrainId(e.target.value)}
        placeholder="PRN Number"
      />
      <input
        type="text"
        value={stationName}
        onChange={(e) => setStationName(e.target.value)}
        placeholder="Station Name"
      />

      <input
        type="text"
        value={updatedArrivalDate}
        onChange={(e) => setUpdatedArrivalDate(e.target.value)}
        placeholder="Updated Arrival Date"
      />

      <input
        type="text"
        value={updatedArrivalTime}
        onChange={(e) => setUpdatedArrivalTime(e.target.value)}
        placeholder="Updated Arrival Time"
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateTrainPage;
