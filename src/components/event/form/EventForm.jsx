import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Form from '../../ui/form/Form';
import Input from '../../ui/form/Input';
import TextArea from '../../ui/form/Textarea';
import Select from '../../ui/form/Select';
import Button from '../../ui/base/Button';
import ErrorBlock from '../../ui/base/ErrorBlock';

import { EVENT_CATEGORYES } from '../../../utils/constants';
import { EVENT_STATUSES } from '../../../utils/constants';
import { eventSchema } from '../../../schemas/event';
import { useCreateEvent } from '../../../hooks/create-event';
import { useEditEvent } from '../../../hooks/edit-event';

const EventForm = ({ onCancel, event }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: event?.name || '',
      description: event?.description || '',
      category: event?.category || '',
      status: event?.status || '',
      date: event?.date || '',
    },
    resolver: zodResolver(eventSchema),
  });

  const {
    mutate: createEvent,
    isPending: createIsPendind,
    isError: createIsError,
    error: createError,
  } = useCreateEvent();

  const { mutate: editEvent, isPending: editIsPendind, isError: editIsError, error: editError } = useEditEvent();

  const isEditing = !!event;

  const handleFormSubmit = (eventData) => {
    if (isEditing) {
      editEvent(
        { eventData, eventId: event.id },
        {
          onSuccess() {
            reset();
            onCancel();
          },
        }
      );
    } else {
      createEvent(eventData, {
        onSuccess() {
          reset();
          onCancel();
        },
      });
    }
  };

  return (
    <>
      {!editIsPendind && editIsError && <ErrorBlock message={editError.message} />}
      {!createIsPendind && createIsError && <ErrorBlock message={createError.message} />}
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        actions={
          <>
            <Button modifier="is-secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button disabled={!isDirty || createIsPendind || editIsPendind} type="submit">
              {createIsPendind || editIsPendind ? 'Submiting...' : 'Submit'}
            </Button>
          </>
        }
      >
        <Input
          label="Name"
          type="text"
          id="name"
          placeholder="enter event name"
          register={register}
          errors={errors}
          required
        />
        <TextArea
          label="Description"
          id="description"
          placeholder="enter event descripton"
          register={register}
          errors={errors}
          required
        />
        <Select
          label="Category"
          id="category"
          placeholder="select category"
          register={register}
          errors={errors}
          required
        >
          {EVENT_CATEGORYES.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Select>
        <Select label="Status" id="status" placeholder="select status" register={register} errors={errors} required>
          {EVENT_STATUSES.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </Select>
        <Input label="Date" type="date" id="date" register={register} errors={errors} required />
      </Form>
    </>
  );
};

export default EventForm;
