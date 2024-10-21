import { useMutation, useQueryClient } from '@tanstack/react-query';

import { editEvent } from '../lib/http';

export const useEditEvent = () => {
  const queryClient = useQueryClient();

  const mutationData = useMutation({
    mutationFn: editEvent,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['events'] });
    },
  });

  return mutationData;
};
