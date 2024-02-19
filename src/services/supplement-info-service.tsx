import axios from 'axios';
import { axiosClient } from './configs/axiosConfigs';
import { SupplementType } from '../common/types';

export const SupplementInfoService = {

  postSupplementInfo(selectedSupplementType: SupplementType) {
    const supplementInfoEndpoint = process.env.REACT_APP_GET_BASIC_SUPPLEMENT_INFO || "";
    return axiosClient.post(supplementInfoEndpoint, {supplementType: selectedSupplementType} );
  }
}