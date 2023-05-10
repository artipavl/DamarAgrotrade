import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, QueryButton, QueryInput } from './queryForm.style';

import { ReactComponent as Loupe } from '../../img/loupe.svg';

type QueryFormProps = {};

const QueryForm: FC<QueryFormProps> = props => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        navigate(`/?q=${q}`);
      }}
    >
      <QueryInput
        type="text"
        value={q}
        placeholder="Пошук"
        onChange={e => setQ(e.target.value)}
      />
      <QueryButton to={`/?q=${q}`} type="submit">
        <Loupe />
      </QueryButton>
    </Form>
  );
};

export default QueryForm;
