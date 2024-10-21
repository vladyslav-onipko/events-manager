import axios from 'axios';

import { DEFAULT_ERROR_MESSAGE } from '../utils/constants';

export const createEvent = async (event) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/events.json`;

  try {
    const response = await axios.post(url, event);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || DEFAULT_ERROR_MESSAGE);
    }

    if (e.request) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  }
};

export const getEvents = async () => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/events.json`;

  try {
    const response = await axios.get(url);
    const events = [];

    for (const event in response.data) {
      events.push({ ...response.data[event], id: event });
    }
    return events.reverse();
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || DEFAULT_ERROR_MESSAGE);
    }

    if (e.request) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  }
};

export const editEvent = async ({ eventData, eventId }) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}.json`;

  try {
    const response = await axios.put(url, eventData);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || DEFAULT_ERROR_MESSAGE);
    }

    if (e.request) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  }
};

export const deleteEvent = async ({ eventId }) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/events/${eventId}.json`;

  try {
    const response = await axios.delete(url);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error(e.response.data.message || DEFAULT_ERROR_MESSAGE);
    }

    if (e.request) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
  }
};
