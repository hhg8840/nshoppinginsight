import React, { useState } from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { FlexCenterRow } from '../styles/commonStyles';
import TextInput from './TextInput';
import SelectForm from './SelectForm';
import { ageList, categoryList, genderList } from '../constants';
import SingleDatePicker from './SingleDatePicker';
import GroupCheckbox from './GroupCheckbox';

export default function FormOptions(): JSX.Element {
  const [params, setParams] = useState<RequestParams>({
    startDate: moment().subtract(7, 'days').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
    timeUnit: 'date',
    category: '50000008',
    keyword: '',
  });

  const valueHandler: HandlerCallback = (key, value) => {
    setParams(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <StyledWrapper>
      <SingleDatePicker
        initialValue={params.startDate}
        endDate={params.endDate}
        callback={valueHandler}
        type={params.timeUnit}
        paramKey="startDate"
      />
      <SingleDatePicker
        initialValue={params.endDate}
        startDate={params.startDate}
        callback={valueHandler}
        type={params.timeUnit}
        paramKey="endDate"
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={valueHandler}
        paramKey="category"
      />
      <TextInput
        value={params.keyword}
        callback={valueHandler}
        paramKey="keyword"
      />
      <GroupCheckbox
        options={ageList}
        callback={valueHandler}
        paramKey="ages"
      />
      <GroupCheckbox
        options={genderList}
        callback={valueHandler}
        paramKey="gender"
      />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
  ${FlexCenterRow};
  gap: 1rem;
`;
