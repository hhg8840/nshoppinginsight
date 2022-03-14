import React from 'react';
import {
  categoryList,
  END_DATE_TXT,
  INPUT_KEYWORD_PLACEHOLDER,
  SELECT_FORM_PLACEHOLDER,
  START_DATE_TXT,
  timeUnitList,
} from 'lib/constants';
import SingleDatePicker from 'components/forms/SingleDatePicker';
import SelectForm from 'components/forms/SelectForm';
import TextInput from 'components/forms/TextInput';
import RadioButton from 'components/forms/RadioButton';
import styled from 'styled-components/macro';

interface RequiredFieldsProps {
  params: RequiredParams;
  handler: InsightParamsHandler;
  children?: React.ReactNode;
}

export default function RequiredFields({
  params,
  handler,
  children,
}: RequiredFieldsProps): JSX.Element {
  const limitDate = '2017-08-01';

  return (
    <StyledFieldWrapper>
      <SingleDatePicker
        value={params.startDate}
        endDate={params.endDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="startDate"
        placeholder={START_DATE_TXT}
      />
      <SingleDatePicker
        value={params.endDate}
        startDate={params.startDate}
        callback={handler}
        limitDate={limitDate}
        paramKey="endDate"
        placeholder={END_DATE_TXT}
      />
      <SelectForm
        value={params.category}
        options={categoryList}
        callback={handler}
        paramKey="category"
        placeholder={SELECT_FORM_PLACEHOLDER}
      />
      <TextInput
        value={params.keyword}
        callback={handler}
        paramKey="keyword"
        placeholder={INPUT_KEYWORD_PLACEHOLDER}
      />
      <RadioButton
        value={params.timeUnit}
        options={timeUnitList}
        callback={handler}
        paramKey="timeUnit"
      />
      {children}
    </StyledFieldWrapper>
  );
}

export const StyledFieldWrapper = styled.div`
  min-width: 960px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;
