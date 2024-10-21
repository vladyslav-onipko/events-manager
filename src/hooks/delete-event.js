import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteEvent } from '../lib/http';

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();

  const mutationData = useMutation({
    mutationFn: deleteEvent,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return mutationData;
};
