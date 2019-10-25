import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { IoMdCreate, IoMdTrash } from 'react-icons/io';
import { MdDateRange, MdLocationOn } from 'react-icons/md';

import history from '~/services/history';
import { cancelMeetupRequest } from '~/store/modules/managing/actions';

import { Container, EditButton, CancelButton, BackButton } from './styles';

export default function Details({ match }) {
  const dispatch = useDispatch();

  const meetup = useSelector(
    state =>
      state.managing.meetups.filter(m => m.id === Number(match.params.id))[0]
  );

  const dateFormatted = useMemo(
    () =>
      meetup &&
      format(parseISO(meetup.date), "dd 'de ' MMMM', às 'HH'h'", {
        locale: pt,
      }),
    [meetup]
  );

  function handleCancel() {
    dispatch(cancelMeetupRequest(meetup.id));
  }

  return (
    <Container>
      {meetup ? (
        <>
          <header>
            <strong>{meetup.title}</strong>
            <div>
              <EditButton
                primary
                onClick={() => history.push(`/meetups/edit/${meetup.id}`)}
              >
                <IoMdCreate size={20} color="#fff" />
                Editar
              </EditButton>
              <CancelButton onClick={handleCancel}>
                <IoMdTrash size={20} color="#fff" />
                Cancelar
              </CancelButton>
            </div>
          </header>
          <img src={meetup.file.url} alt="meetup.file_id" />

          <p>{meetup.description}</p>
          <aside>
            <span>
              <MdDateRange size={18} color="#D8D8D8" /> {dateFormatted}
            </span>
            <span>
              <MdLocationOn size={18} color="#D8D8D8" />
              {meetup.location}
            </span>
          </aside>
        </>
      ) : (
        <div>
          <h1>Esse Meetup não existe...</h1>
          <BackButton goBack onClick={() => history.push('/dashboard')}>
            Voltar para o dashboard
          </BackButton>
        </div>
      )}
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
