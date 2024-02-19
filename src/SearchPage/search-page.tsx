import React, { ChangeEvent, ChangeEventHandler, useState } from 'react';
import Table from './table/table';
import { SupplementInfoService } from '../services/supplement-info-service';
import toast from 'react-hot-toast';
import errors from '../assets/json/error-messages.json';
import { SupplementType } from '../common/types';

const SearchPage: React.FC = () => {
  const [supplements, setSupplements] = useState([]);
  const [selectedSupplementType, setSelectedSupplementType] = useState<SupplementType | ''>('');
  const [isSearchDisabled, setIsSearchDisabled] = useState(true); // State to manage search button disabled state

  const handleSearch: React.MouseEventHandler<HTMLButtonElement> | undefined = () => {
    if (selectedSupplementType !== '') {
      SupplementInfoService?.postSupplementInfo(selectedSupplementType)
      .then(
        (res:any) => {
        const supplements: any = res.data;
        setSupplements(supplements);
      })
      .catch((error:any) => {
        toast.error(errors?.toasts?.somethingWentWrong, {
          duration: 4000,
          position: 'top-center',
          id: 'table-error-toast'
        })
      });
    }
  }

  const handleSupplementTypeChange: ChangeEventHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setIsSearchDisabled(event?.target?.value === '');
    const selectedType = event?.target?.value as SupplementType || '';
    setSelectedSupplementType(selectedType);
  };

  return (
    <div className='SearchPage'>
      <div className="filters">
        {/* Supplement Type Filter */}
        <select name="supplementType" id="supplementType" value={selectedSupplementType} onChange={handleSupplementTypeChange}>
          <option value="">Select Supplement Type</option>
          {Object.values(SupplementType).map((type: string) => (
            <option key={type} value={type}>{type}</option>
          ))}
          {/* Add more options as needed */}
        </select>
        {/* Add more filters here */}
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>

      {supplements.length > 0 && <Table supplements={supplements}/>}
    </div>
  );
};

export default SearchPage;