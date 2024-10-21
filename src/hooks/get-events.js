import { useQuery } from '@tanstack/react-query';

import { getEvents } from '../lib/http';

export const useGetEvents = () => {
  const queryData = useQuery({ queryKey: ['events'], queryFn: getEvents });

  return queryData;
};
