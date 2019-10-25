import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { format, parseISO } from 'date-fns';

import pt from 'date-fns/locale/pt';

import { IoIosAddCircleOutline } from 'react-icons/io';
import { MdChevronRight } from 'react-icons/md';
import { Container, MeetupCard, NewButton } from './styles';

import { getMeetupsRequest } from '~/store/modules/managing/actions';

import history from '~/services/history';

export default function Dashboard() {
  const meetups = useSelector(state => state.managing.meetups);
  const dispatch = useDispatch();

  const dateFormatted = useMemo(() =>
    meetups.map(meetup =>
      format(parseISO(meetup.date), "dd 'de ' MMMM', às 'HH'h'", {
        locale: pt,
      })
    )
  );

  useEffect(() => {
    dispatch(getMeetupsRequest());
  }, [dispatch]);

  return (
    <Container>
      <header>
        <strong>Meus Meetups</strong>
        <NewButton type="button" onClick={() => history.push('/meetups/new')}>
          <IoIosAddCircleOutline size={20} color="#fff" />
          Novo Meetup
        </NewButton>
      </header>
      {meetups.map((meetup, index) => (
        <Link to={`/meetups/details/${meetup.id}`}>
          <ul>
            <MeetupCard key={meetup.id}>
              <div>
                <strong>{meetup.title}</strong>
                <div>
                  <span>{dateFormatted[index]}</span>
                  <MdChevronRight size={24} color="#fff" />
                </div>
              </div>
            </MeetupCard>
          </ul>
        </Link>
      ))}
    </Container>
  );
}
