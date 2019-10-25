import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import * as Yup from 'yup';

import { MdDone } from 'react-icons/md';

import { parseISO } from 'date-fns';

import Banner from '~/components/Banner';
import DatePicker from '~/components/DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/managing/actions';

import { Container, SaveButton } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('É obrigatório preencher o título'),
  description: Yup.string()
    .max(255, 'Máximo de 255 caracteres')
    .required('É obrigatório preencher a descrição'),
  date: Yup.date().required('É obrigatório informar a data'),
  location: Yup.string()
    .max(255, 'Maxímo de 255 caracteres')
    .required('É obrigatório preencher a localização'),
  file_id: Yup.number(),
});

export default function Edit({ match }) {
  const dispatch = useDispatch();
  const { id } = match.params;

  const meetup = useSelector(state => {
    const meet = state.managing.meetups.filter(m => m.id === Number(id));

    if (meet.lenght <= 0) return {};

    return {
      ...meet[0],
      date: parseISO(meet[0].date),
    };
  });

  function handleSubmit(data) {
    dispatch(
      meetup.id
        ? updateMeetupRequest({ data, id: meetup.id })
        : createMeetupRequest(data)
    );
  }

  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <Banner name="file_id" />
        <Input name="title" placeholder="Nome do Meetup" />
        <Input
          name="description"
          type="text"
          placeholder="Descrição completa"
        />
        <Input
          name="location"
          type="text"
          placeholder="Localização do Meetup"
        />
        <DatePicker name="date" />
        <div>
          <SaveButton type="submit">
            <MdDone size={20} color="#fff" />
            <text>Salvar Meetup</text>
          </SaveButton>
        </div>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
