import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createEvent } from '../lib/http';

export const useCreateEvent = () => {
  const queryClient = useQueryClient();

  const mutationData = useMutation({
    mutationFn: createEvent,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return mutationData;
};
