import { actions } from '../constants';


let nextUnusedId = 5;
export const addService = (service) => {
  const { startDay, startTime, endDay, endTime } = service;

  return {
    type: actions.ADD_SERVICE,
    service: {
      id: nextUnusedId++,
      startDay,
      startTime,
      endDay,
      endTime,
    },
  };
};

export const deleteService = id => ({
  type: actions.DELETE_SERVICE,
  id,
});
